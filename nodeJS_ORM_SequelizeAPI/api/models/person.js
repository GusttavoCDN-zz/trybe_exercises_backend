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
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 20],
            msg: 'Please enter a name with a min of 3 charecters and max of 20 characters',
          },
        },
      },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email is invalid',
          },
        },
      },
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
    }
  );

  Person.associate = (models) => {
    Person.hasMany(models.Class, {
      foreignKey: 'teacher_id',
    });

    Person.hasMany(models.Enrollment, {
      foreignKey: 'student_id',
      scope: { status: 'confirmado' },
      as: 'enrollments',
    });
  };

  return Person;
};
