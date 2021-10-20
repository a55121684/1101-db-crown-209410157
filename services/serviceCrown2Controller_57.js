const Category_57 = require("../models/Category_57");


exports.getCategories = async (req, res) => {
  try {
    return await Category_57.fetchAll();
  } catch (err) {
    console.log(err);
  }
};
