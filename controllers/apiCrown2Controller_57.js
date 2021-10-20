const serviceCrown2Controller_57 = require("../services/serviceCrown2Controller_57");

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_57.getCategories();
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};
