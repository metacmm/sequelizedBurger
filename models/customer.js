module.exports = function(sequelize, DataTypes){
    var Customer = sequelize.define("Customer", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        served:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Customer.associate = function(models){
        Customer.belongsTo(models.Burger, {
            foreignKey:{
                allowNull: true
            }
        });
    };

    return Customer;
}