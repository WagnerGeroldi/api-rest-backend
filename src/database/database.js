const mongoose = require("mongoose"); //lib para se conectar ao mongoDB
require("dotenv").config()


function connect() {

    mongoose.connect(
        `mongodb+srv://${process.env.USER}:V7TqvsrK71sBiQqP@${process.env.BD}.buttxve.mongodb.net/?retryWrites=true&w=majority`
      );
      
      const db = mongoose.connection;
      
      db.once("open", () => {
        console.log("Conectado ao banco de dados MONGODB");
      });
      
      db.on("error", console.error.bind("Erro de conexão"));
}

module.exports = {
  connect
}