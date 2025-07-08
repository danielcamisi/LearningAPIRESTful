const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();
//require - nativo JS

//Credenciais do DB
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//sempre que irêmos esperar uma informação do server.
async function main() {
  //Async - requisição asincrona - Uma informação é enviada e após a solicitação, esperaremos uma resposta
  await mongoose.connect(
    //Await - Enquanto não houver resposta ele aguarda.
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.uehse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  // Sempre ao usar o ASYNC - O ERRO DEVE SER TRATADO!!!!!!!

  console.log("Conectou o banco de dados!");

}

main().catch((err)=> console.log(err));

module.exports = main;