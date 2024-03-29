import path from 'path';
import url from 'url';
import Sequelize from 'sequelize';
import fs from 'fs-extra';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, '..', 'config', 'config.json');
const env = process.env.NODE_ENV || 'development';
const config = fs.readJSONSync(configPath)[env];

const basename = path.basename(__filename);

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    import(url.pathToFileURL(path.join(__dirname, file))).then(module => {
      const model = module.default(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
