module.exports = function(sequelize, DataType){
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len:[1, 100]
            }
        }
    });

    Customer.associate = function(models){
        Customer.hasMany(models.Burger)
    };

    return Customer;
}