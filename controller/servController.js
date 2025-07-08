const serv = require("../models/serv")


exports.create = async (req, res) => {
  const { descricao } = req.body;
  const { nome } = req.body;
  if (!descricao || !nome) {
    return res.status(400).json({ erro: "preenchda todos os campos" });
  }
  try {
    const newOf = new serv({ descricao, nome });

    await newOf.save();
    res.status(201).json(newOf);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir a tarefa" });
  }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { descricao, nome } = req.body;
  
    if (!descricao || !nome) {
      return res.status(400).json({ erro: "Preencha o campo descrição ou nome  " });
    }
    try {
      const of = await serv.findByIdAndUpdate(
        id,
        { descricao, nome },
        { new: true }
      );
      if (!of) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }
      res.json(of);
    } catch (error) {
      res.status(500).json("Error");
    }
  };