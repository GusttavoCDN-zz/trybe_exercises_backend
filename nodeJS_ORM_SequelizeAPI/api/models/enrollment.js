'use strict';
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    status: DataTypes.STRING,
  });

  Enrollment.associate = function (models) {
    Enrollment.belongsTo(models.Person, { foreignKey: 'student_id' });
    Enrollment.belongsTo(models.Class, { foreignKey: 'class_id' });
  };

  return Enrollment;
};
