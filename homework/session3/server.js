const express = require("express");
const Joi = require("joi");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const mangas = [];

app.get("/api/manga", (req, res) => {
  return res.status(200).json(mangas);
});

app.post("/api/manga", (req, res) => {
  const { error } = validateManga(req.body);
  if (error) return res.status(400).send(error.details);

  if (mangas.filter((manga) => manga.name == req.body.name).length > 0)
    return res.status(400).send("Manga with the same name already exists");

  const manga =
    mangas.length == 0
      ? {
          id: 0,
          name: req.body.name,
        }
      : {
          id: mangas[mangas.length - 1].id + 1,
          name: req.body.name,
        };
  mangas.push(manga);
  return res.status(200).json(mangas);
});

app.put("/api/manga/:manga_id", (req, res) => {
  const { error } = validateManga(req.body);
  if (error) return res.status(400).send(error.details);

  const updateIndex = mangas
    .map((manga) => manga.id.toString())
    .indexOf(req.params.manga_id);
  if (updateIndex === -1) return res.status(404).send("Manga not found");
  try {
    mangas[updateIndex].name = req.body.name;
    return res.status(200).json(mangas);
  } catch (e) {
    return res.status(500).send("Server error");
  }
});

app.delete("/api/manga/:manga_id", (req, res) => {
  const deleteIndex = mangas
    .map((manga) => manga.id.toString())
    .indexOf(req.params.manga_id);
  if (deleteIndex === -1) return res.status(404).send("Manga not found");
  try {
    mangas.splice(deleteIndex, 1);
    return res.status(200).json(mangas);
  } catch (e) {
    return res.status(500).send("Server error");
  }
});

function validateManga(manga) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(manga);
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
