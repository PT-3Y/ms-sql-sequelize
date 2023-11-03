module.exports = {
  DBTYPE:"oracle",                    //oracle|| mysql || mssql || postgresql
  HOST: 'localhost',
  USER: "SYSTEM",                    //root(default) for mysql|| SYSTEM(default) for oracle || sa for mssql
  PASSWORD: "your password",  // oracle_password!!Q11 for oracle || root for mssql ||
  DB: "your db name",                    //mysqlDB, oracleDB, postgresDB, mssqlDB1
  PORT:1521,                         //do not need for mysqlDB|| 1521 for oracle|| do not need or may need for mssql
  SID:'orcl',                        
  dialect: "oracle",                //oracle, mysql, postgresql, mssql
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



