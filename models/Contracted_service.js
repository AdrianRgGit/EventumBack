"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Contracted_service extends Model {
        static associate(models) {
            Contracted_service.belongsTo(models.Service_company, {
                foreignKey: "service_company_id",
                as: "service_company",
            });
        }
    }

    Contracted_service.init(
        {
            service_id: DataTypes.INTEGER,
            event_id: DataTypes.INTEGER,
            cost: DataTypes.DECIMAL,
            paid: DataTypes.DECIMAL,
            service_company_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Contracted_service",
        }
    );

    return Contracted_service;
};
