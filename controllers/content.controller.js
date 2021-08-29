const contentModel = require("../models/content.model");

const findContent = (req, res) => {
  const userId = req.user.id;
  const { name } = req.body;
  try {
    const image = contentModel.findContent(name, userId);
    if (!image) throw new Error("Content not found");
    res.status(200).json(image);
  } catch (error) {
    let status = 500;
    if (error.message === "Content not found") status = 400;
    res.status(status).send(error.message);
  }
};

const addContent = (req, res) => {
  const userId = req.user.id;
  const { filename: name } = req.body;
  const { filename } = req.file;
  try {
    contentModel.addContent(name, filename, userId);
    res.status(200).send("Image uploaded!");
  } catch (error) {
    let status = 500;
    if (error.message === "Content duplicated") status = 400;
    res.status(status).send(error.message);
  }
};

module.exports = { findContent, addContent };
