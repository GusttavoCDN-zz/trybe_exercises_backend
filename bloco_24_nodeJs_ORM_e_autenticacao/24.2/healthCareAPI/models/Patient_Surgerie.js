/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const PatientAndSurgery = sequelize.define(
    'PatientAndSurgery',
    {},
    { tableName: 'Patient_surgeries', underscored: true, timestamps: false }
  );

  PatientAndSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgerie, {
      through: PatientAndSurgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      as: 'surgeries',
    });

    models.Surgerie.belongsToMany(models.Patient, {
      through: PatientAndSurgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      as: 'patient',
    });
  };

  return PatientAndSurgery;
};
