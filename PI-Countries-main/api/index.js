//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country, Actividades } = require('./src/db.js');
const axios = require('axios')
const {Op} = require ('Sequelize');

const getData = async()=>{
    return await axios.get('https://restcountries.com/v3/all')
}

server.get('/',async (req,res)=>{
  res.send('hola')
})

server.get('/countries',async (req,res)=>{
  var project;
  if(!req.query.name){
    project = await Country.findAll({include:[Actividades]});
  }else{
    project = await Country.findAll({
      where: {
        nombre: {
          [Op.like]:`%${req.query.name}%`
        }
      },
      include:[Actividades]
    });
  }
  res.send(project)
})

server.get('/countries/:id',async (req,res)=>{
  const {id} = req.params
  const project = await Country.findOne({
    where:{
      uid:id
    },
      include:[Actividades]
  });
  res.send(project)
})

server.post('/activity',async (req,res)=>{
  var {nombre,dificultad,duracion,temporada,paises} = req.body
  for (key in paises) {
    var paisCreate = await Actividades.create({
        nombre,
        dificultad,
        duracion,
        temporada,
      })
    paisCreate.addCountry(paises[key])
  }
  res.send('se creo la actividad')
})


// Syncing all the models at once.
conn.sync({ force: false }).then( () => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  })
}).then(async ()=>{
  var result = await getData()
  var {data} = result
  data.forEach( function(element, index) {
    Country.create({
      uid:element.cca3,
      nombre:element.name.common?.toLowerCase(),
      img_bandera:element.flags[1],
      continente:element.region?.toLowerCase(),
      capital:element.capital ? element.capital[0].toLowerCase() : '',
      subregion:element.subregion?.toLowerCase(),
      area:element.area,
    })
  });
})
