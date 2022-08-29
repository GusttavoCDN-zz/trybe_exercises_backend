/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define(
    'Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
    },
    { tableName: 'Patients', underscored: true, timestamps: false }
  );

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  };

  return Patient;
};
