/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    { tableName: 'Plans', underscored: true, timestamps: false }
  );

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, {
      foreignKey: 'plan_id',
      as: 'patients',
    });
  };

  return Plan;
};
