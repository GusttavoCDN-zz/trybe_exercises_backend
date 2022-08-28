/* eslint-disable camelcase */
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    'Level',
    {
      desc_level: DataTypes.STRING,
    },
    { paranoid: true },
  );

  Level.associate = (models) => {
    Level.hasMany(models.Class, { foreignKey: 'level_id' });
  };

  return Level;
};
