module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 100
            }
        },
    });

    Burger.associate = function(modles){
        Burger.hasMany(modles.Customer);
    }

    return Burger;
};
