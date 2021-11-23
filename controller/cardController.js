const { cardModel } = require("../models/cardModel");

let cardController = {
    create: async (req, res) => {
        let name = req.body.name;
        let me = req.body.me;
        let github = req.body.github;
        let twitter = req.body.twitter;
        let books = req.body.books;

        await cardModel.addOne(name, me, github, twitter, books);
      }

}

module.exports = cardController;