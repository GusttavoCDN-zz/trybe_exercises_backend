/* eslint-disable camelcase */
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    start_date: DataTypes.DATEONLY,
  });

  Class.associate = (models) => {
    Class.hasMany(models.Enrollment, {
      foreignKey: 'class_id',
    });
    Class.belongsTo(models.Person, { foreignKey: 'teacher_id' });
    Class.belongsTo(models.Level, { foreignKey: 'level_id' });
  };

  return Class;
};
