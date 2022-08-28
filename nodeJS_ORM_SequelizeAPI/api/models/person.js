/* eslint-disable max-lines-per-function */
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    'Person',
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      tableName: 'People',
      paranoid: true,
      defaultScope: {
        where: { active: true },
      },
      scopes: {
        all: { where: {} },
      },
    },
  );

  Person.associate = (models) => {
    Person.hasMany(models.Class, {
      foreignKey: 'teacher_id',
    });

    Person.hasMany(models.Enrollment, {
      foreignKey: 'student_id',
    });
  };

  return Person;
};
