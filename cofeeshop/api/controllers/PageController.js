/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addProduct: async function (req, res) {
    const categories = await Categories.find();
    return res.view("pages/admin/add_product", { categories: categories });
  },
  addCategory: async function (req, res) {
    const categories = await Categories.find();
    return res.view("pages/admin/add_category", { categories: categories });
  },
  index: async function (req, res) {
    var message = req.session.success;
    req.session.success = [];

    //get all products
    var products = await Coffees.find();

    if (message != undefined && message.length != 0) {
      return res.view("pages/admin/index", {
        status: "notEmpty",
        message: message,
        products: products,
      });
    }

    return res.view("pages/admin/index", {
      status: "empty",
      products: products,
    });
  },

  showCartPage: function (req, res) {
    var cart = req.session.cart;

    if (cart != undefined) {
      var items = cart.items;
    } else {
      var items = 0;
    }

    return res.view("pages/admin/cart", { items: items });
  },
};
