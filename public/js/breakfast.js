const { Model } = require("sequelize/types");

Model.findAll({
    where: {
        meal: breakfast
    }
})

