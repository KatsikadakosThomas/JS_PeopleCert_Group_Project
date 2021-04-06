/**
 * PageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  showShopPage: async function (req, res) {
    const categories = await Categories.find();
    const products = await Coffees.find();
    const users = await User.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/demo/shop", {
      categories: categories,
      products: products,
      users: users,
      status: "notEmpty",
      message: message,
      layout: "layouts/new-layout",
    });
  },
  contactUs: async function (req,res){
    return res.view("pages/demo/contact-us",{
      layout: "layouts/new-layout",
    })
  },
  home: async function (req,res){
    return res.view("pages/demo/homepage",{
      layout: "layouts/new-layout",
    })
  },
  manageProducts: async function (req, res) {
    const categories = await Categories.find();
    const products = await Coffees.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_products", {
      categories: categories,
      products: products,
      status: "notEmpty",
      message: message,
    });
  },
  manageCategories: async function (req, res) {
    const categories = await Categories.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_categories", {
      categories: categories,
      status: "notEmpty",
      message: message,
    });
  },
  manageUsers: async function (req, res) {
    const users = await User.find();
    const message = req.session.success;
    req.session.success = [];
    return res.view("pages/admin/manage_users", {
      users: users,
      status: "notEmpty",
      message: message,
    });
  },
  index: async function (req, res) {
    const message = req.session.success;
    req.session.success = [];

    //get all products
    let products = await Coffees.find();
    let categories = await Categories.find();

    if (message != undefined && message.length != 0) {
      return res.view("pages/admin/index", {
        status: "notEmpty",
        message: message,
        products: products,
        categories: categories,
      });
    }

    return res.view("pages/admin/index", {
      status: "empty",
      products: products,
      categories: categories,
    });
  },

  showCartPage: function (req, res) {
    let cart = req.session.cart;

    if (cart != undefined) {
      items = cart.items;
    } else {
      items = 0;
    }

    return res.view("pages/demo/cart",{
      layout: "layouts/new-layout",
    },
    { items: items });
  },
};
