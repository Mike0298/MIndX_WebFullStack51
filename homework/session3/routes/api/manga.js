const express = require("express");
const router = express.Router();

const { validateManga } = require("../../utils/validation");
const mangas = require("../../models/Manga");

router.get("/", (req, res) => {
  return res.status(200).json(mangas);
});

router.post("/", (req, res) => {
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

router.put("/:manga_id", (req, res) => {
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

router.delete("/:manga_id", (req, res) => {
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

module.exports = router;
