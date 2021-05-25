const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { }

Order.init(
    {
        orderItems: [
            {
                _id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                price: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'product',
                        key: 'id',
                    },
                },
            },
        ],
        shippingAddress: {
            fullName: { type: DataTypes.STRING, allowNull: false },
            address: { type: DataTypes.STRING, allowNull: false },
            city: { type: DataTypes.STRING, allowNull: false },
            postalCode: { type: DataTypes.STRING, allowNull: false },
            country: { type: DataTypes.STRING, allowNull: false },
            lat: Number,
            lng: Number,
          },
          paymentMethod: { type: DataTypes.String, allowNull: false },
          paymentResult: {
            id: String,
            status: String,
            update_time: String,
            email_address: String,
          },
          itemsPrice: { type: DataTypes.Number, allowNull: false },
          shippingPrice: { type: DataTypes.Number, allowNull: false },
          taxPrice: { type: DataTypes.Number, allowNull: false },
          totalPrice: { type: DataTypes.Number, allowNull: false },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          seller: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          isPaid: { type: DataTypes.Boolean, default: false },
          paidAt: { type: DataTypes.Date },
          isDelivered: { type: DataTypes.Boolean, default: false },
          deliveredAt: { type: DataTypes.Date },
    },
    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);
module.exports = Order;