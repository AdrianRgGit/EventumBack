"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EventUser extends Model {
        static associate(models) {
            EventUser.hasOne(models.Feedback, {
                foreignKey: "eventUserId",
                as: "feedback",
            });
        }
    }

    EventUser.init(
        {
            event_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            arriveTime: DataTypes.DATE,
            feedback_id: DataTypes.INTEGER,
            leaveTime: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "EventUser",
            tableName: "eventusers",
        }
    );

    return EventUser;
};
