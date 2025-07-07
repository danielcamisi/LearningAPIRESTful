const express = require("express");
const serv = require("./models/serv");
require("./db");
const app = express();
const PORT = 3000;

//Middleware - fala para o express que estamos trabalhando com o JSON
app.use(express.json());
// Array

let tarefas = [];
let idAtual = 1;

app.get("/", (req, res) => {
  res.status(200).send("Bem-vindo à API!");
});

app.post("/tarefas", async (req, res) => {
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: "preenchda a descrição" });
  }
  try {
    const newOf = new serv({ descricao });
    await newOf.save();
    res.status(201).json(newOf);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir a tarefa" });
  }
});

app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ofs = await serv.findByIdAndDelete(id);
    if (!ofs) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao remover tarefa" });
  }
});

app.get("/tarefas", async (req, res) => {
  try {
    const ofs  = await serv.find();
 
    res.status(219).json(ofs);
  } catch (error){
    res.status(500).json("Error");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
