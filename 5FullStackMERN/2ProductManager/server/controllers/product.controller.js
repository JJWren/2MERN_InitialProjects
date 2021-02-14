const {Product} = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Welcome to Product Manager"
    });
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newProduct => response.json({product: newProduct}))
        .catch(err => response.json({message: "Something went wrong", error:err}));
}

module.exports.allProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json({products: allProducts}))
        .catch(err => response.json({message: "Something went wrong", error:err}));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(allProducts => response.json({products: allProducts}))
        .catch(err => response.json({message: "Something went wrong", error:err}));
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json({products: updatedProduct}))
        .catch(err => response.json({message: "Something went wrong", error:err}));
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json({message: "Something went wrong", error:err}))
}
