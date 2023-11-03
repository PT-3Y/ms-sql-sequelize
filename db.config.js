module.exports = {
  DBTYPE:"mssql",                   
  HOST: 'localhost',
  USER: "sa",                    
  PASSWORD: "your password", 
  DB: "your db name",
  SID:'mssql',
  dialect: "mssql",        
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



