const { getAllProducts, getProduct,
        addProduct, updateProduct,
        deleteProduct } = require('../model/product.model');

exports.getProducts = getAllProducts;
exports.getProduct = getProduct;
exports.addProduct = addProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
