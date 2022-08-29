/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes } DataTypes
 */
module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define(
    'Surgerie',
    {
      surgeryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    { tableName: 'Surgeries', underscored: true, timestamps: false }
  );
  
  return Surgerie;
};
