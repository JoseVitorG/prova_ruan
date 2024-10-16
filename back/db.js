import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://jos_:SD0hU_VRhmGiBPFht3n0Nw@plain-beetle-2463.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


export default sequelize