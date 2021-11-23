const fs = require("fs");
let cardModel = {

    addOne: async (name, me, github, twitter, books) => {
    
        const data = {
          name,
          me,
          github,
          twitter,
          books
        }

        fs.writeFile("./database.json", JSON.stringify(data), err => {
            if (err) console.log("Error writing file:", err);
          });
    }
}

module.exports = cardModel;