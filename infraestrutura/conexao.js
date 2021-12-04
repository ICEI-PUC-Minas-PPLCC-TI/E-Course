const { Client } = require('pg')

const client = new Client({
  user: 'ieigcqutmarpmu',
  host: 'ec2-67-202-36-228.compute-1.amazonaws.com',
  database: 'd4hi4rtftug645',
  password: '271da5f05a0d6e256fd7f0406f122dabeb8b7835af15949b08a5ee95af6dee3e',
  port: 5432,
})

function queryDataBase() {
  const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, 
    email varchar(50) NOT NULL,
    pet varchar(20), password varchar(20) NOT NULL,
    sexo varchar(20) NOT NULL, 
    date datetime NOT NULL, 
    PRIMARY KEY(id))`

  client.conexao.query(sql, (erro) => {
      if(erro) {
          console.log(erro)
      }
      else { 
          console.log("Tabela criada com sucesso")
      }
  })
}

client.connect(function(err) {
  if (err) throw err;
  else {
    console.log("Connected!");
    client.queryDataBase()
  }
});