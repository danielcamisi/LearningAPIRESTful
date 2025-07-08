const express = require("express");
const serv = require("./models/serv");
const ofRoutes = require("./routes/servRoutes");
const app = express();
const PORT = 3000;
const cors = require("cors");
require("./config/db");



//Middleware - fala para o express que estamos trabalhando com o JSON
app.use(express.json());
app.use(cors());
app.use("/tarefas", ofRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo a API!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// app.delete("/tarefas/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const ofs = await serv.findByIdAndDelete(id);
//     if (!ofs) {
//       return res.status(404).json({ erro: "Tarefa não encontrada" });
//     }
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ erro: "Erro ao remover tarefa" });
//   }
// });

//     res.status(219).json(ofs);
//   } catch (error) {
//     res.status(500).json("Error");
//   }
// });
