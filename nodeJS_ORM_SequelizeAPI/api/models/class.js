'use strict';
'use strict';
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */

module.exports = async (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    start_date: DataTypes.DATEONLY,
  });

  Class.associate = function (models) {
    Class.hasMany(models.Enrollment, {
      foreignKey: 'class_id',
    });
    Class.belongsTo(models.Person);
    Class.belongsTo(models.Level);
  };

  return Class;
};
