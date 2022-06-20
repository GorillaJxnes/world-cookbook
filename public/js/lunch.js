const { Model } = require("sequelize/types");

Recipe.findAll({
    where: {
        meal: lunch
    }
})
