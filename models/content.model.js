const fs = require("fs");
const contents = require("../storage/content.json");

const findContent = (name, userId) => {
  const content = contents.find(
    (content) => content.name === name && content.userId === userId
  );
  return content;
};

module.exports = { findContent };
