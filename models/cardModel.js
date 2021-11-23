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

        const jsonString = JSON.stringify(data)
        fs.writeFile('./database.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
}

module.exports = cardModel;