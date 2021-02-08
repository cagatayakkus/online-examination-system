module.exports = (sequelize) => {
  sequelize.define(
    "Enrollment",
    {},
    {
      timestamps: false,
    }
  );
};
