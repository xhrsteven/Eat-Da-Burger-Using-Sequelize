module.exports = function(sequelize, DataType){
    var Burger = sequelize.define("Burger", {
        burger_name : {
            type: DataType.STRING,
            allowNUll: false,
            validate: {
                len:[1,100]
            }
        },

        devoured: {
            type: DataType.BOOLEAN,
            allowNUll: false,
            defaultValue: false
        },
    });

    Burger.associate = function(models){
        Burger.belongsTo(models.Customer,{
            foerignKey: {
                allowNUll: true
            }
        })
    };
    return Burger;
}