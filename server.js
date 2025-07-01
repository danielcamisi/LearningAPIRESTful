const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

// Array

let tarefas = [];
let idAtual = 1;

app.get("/", (requisisao, resposta) => {
  resposta.status(200).send("Bem-vindo à API!");
});

app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ erro: " campo titulo, não preenchido " });
  }
  const novaTarefa = { id: idAtual++, titulo };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.put("/tarefas" , (req,res) =>{
    const {atitulo} = {titulo};

})

app.get("/tarefas", (req,res) => {
    res.status(200).json(tarefas)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
