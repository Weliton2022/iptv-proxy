import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/proxy", async (req, res) => {
  const { url } = req.query;

  if (!url) return res.send("URL obrigatória");

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.set("Content-Type", "application/vnd.apple.mpegurl");
    res.send(data);

  } catch {
    res.send("Erro ao carregar");
  }
});

app.listen(3000, () => console.log("Servidor rodando"));
