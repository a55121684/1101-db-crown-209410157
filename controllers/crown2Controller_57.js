const serviceCrown2Controller_57 = require("../services/serviceCrown2Controller_57");

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_57.getCategories();
    console.log(JSON.stringify(results));
    res.render("crown2_57", {
      data: results,
      title: "crown2_57",
      name: "游志信",
      id: 209410157,
    });
  } catch (e) {
    console.log(e);
  }
};
