const dbConfig = require("../config/db.config.js");

const DBTYPE = dbConfig.DBTYPE
const tedious = require('tedious')
var sequelize;

const Sequelize = require("sequelize");


switch (DBTYPE){
  case 'mysql':
    sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });

    break;

  case 'oracle':
    sequelize = new Sequelize( {
      username: dbConfig.USER,
      password: dbConfig.PASSWORD,
      dialect: dbConfig.dialect,
      dialectOptions: {connectString: `${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.SID}`},// oracle
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });

    break;

  case 'mssql':
    sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      dialectOptions: {
        instanceName: 'SQLExpress',
      },
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });

    break;

  case 'postgresql':
    sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });

    break;

}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.attach = require("./attach.model.js")(sequelize, Sequelize);
db.conceptitem = require("./conceptitem.model.js")(sequelize, Sequelize);
db.obsitem = require("./obsitem.model.js")(sequelize, Sequelize);
db.obsitemdata = require("./obsitemdata.model.js")(sequelize, Sequelize);
db.conceptlovdata = require("./conceptlovdata.model.js")(sequelize, Sequelize);
db.datatype = require("./datatype.model.js")(sequelize, Sequelize);
db.picture = require("./picture.model.js")(sequelize, Sequelize);
db.itemlogic = require("./itemlogic.model.js")(sequelize, Sequelize);
db.patientconceptvalue = require("./patientconceptvalue.model.js")(sequelize, Sequelize);
db.phrasemst = require("./phrasemst.model.js")(sequelize, Sequelize);
db.phrasedtl = require("./phrasedtl.model.js")(sequelize, Sequelize);
db.forder = require("./forder.model.js")(sequelize, Sequelize);
db.sheetdef = require("./sheet.def.model.js")(sequelize, Sequelize);
db.transmst = require("./transmst.model.js")(sequelize, Sequelize);
db.transdtl = require("./transdtl.model.js")(sequelize, Sequelize);
db.transtime = require("./transtime.model.js")(sequelize, Sequelize);
db.visualdev = require("./visualdev.model.js")(sequelize, Sequelize);
db.visualdevmodeldata = require("./visualdevmodeldata.model.js")(sequelize, Sequelize);
db.objectapi = require("./objectapi.model.js")(sequelize, Sequelize);

module.exports = db;
