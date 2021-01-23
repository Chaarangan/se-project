const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelizer");

const law = sequelize.define(
  "laws",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);


//law.sync({ force: true }); // DANGEROUS!!! must remove at production
module.exports = law;
