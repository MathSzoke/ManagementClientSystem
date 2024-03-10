'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      ID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coordinateX: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      coordinateY: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Clients', // Nome da tabela no banco de dados
      timestamps: false, // Se a tabela deve ter campos de timestamp (created_at, updated_at)
    }
  );
  return Client;
};