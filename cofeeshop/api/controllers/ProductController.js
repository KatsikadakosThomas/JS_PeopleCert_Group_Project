/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { manageCategories } = require("./PageController");

module.exports = {
  
    create: async function(req, res) {

        const productName = req.body.Add_name;
        const price = req.body.Add_price;
        const image = req.body.Add_image;
        const desc = req.body.Add_description;
        const category = req.body.Add_category;
        const categoryId = await Categories.findOne({
            Name: category
        })
        await Coffees.create({
            name: productName,
            price: price,
            image: image,
            description: desc,
            categoryID: categoryId.id,
        })

        //put a success message in session
        req.session.success = `Coffee ${productName} successfully added.`

        res.redirect('/products/manage');
        
    },

    delete: async function(req, res) {
        let productId = req.body.product.id;
        await Cofees.destroy({id:productId})
        //put a success message in session
        req.session.success = 'Coffee successfully deleted.'
        res.redirect('/products');
    }

};

