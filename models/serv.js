const mongoose = require("mongoose");

const servSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  nome: { type: String, required: true },
});

module.exports = mongoose.model("serv", servSchema);
