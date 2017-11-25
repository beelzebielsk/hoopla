module.exports = (sequelize, DataTypes) => {
    var categorizedAs = sequelize.define(
        'categorizedAs', {}, {timestamps: false});
    return categorizedAs;
};
