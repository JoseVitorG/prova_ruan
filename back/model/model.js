import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING, allowNull: false
    },
    descri: {
        type: DataTypes.STRING, allowNull: false
    },
    cargo: {
        type: DataTypes.STRING, allowNull: false
    },
    cidade: {
        type: DataTypes.STRING, allowNull: false
    },
    salario: {
        type: DataTypes.REAL
    },
},
    {
        freezeTableName: true,
        tableName: "Vagas"
    })

export default Vaga