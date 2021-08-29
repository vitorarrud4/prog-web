const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const contents = require("../storage/content.json");

const findContent = (name, userId) => {
  const content = contents.find(
    (content) => content.name === name && content.userId === userId
  );
  return content;
};

const addContent = (name, filename, userId) => {
  const foundContent = contents.find((content) => content.name === name);
  if (foundContent) throw new Error("Content duplicated");
  contents.push({ id: uuidv4(), name, filename, userId });
  const stringContents = JSON.stringify(contents);
  fs.writeFileSync(__dirname + "/../storage/content.json", stringContents);
};

module.exports = { findContent, addContent };
