const Products = require('../models/product');

const getListProducts = async (req, res) => {
    const filter = {}
    try {
        const products = await Products.find(filter);
        res.status(200).json({ message: "Product list fetched successfull", data: products });
    } catch (error) {
        res.status(401).json({ message: "failed to fetch products", errors: error });
    }
} // end of list of products 

const createProduct = async (req, res) => {
    const { name, price, image } = req.body;
    const data = new Products({ name: name, price: price, image: image });
    try {
        await data.save()
        res.status(200).json({ "message": "Product has been created" });
    } catch (error) {
        res.status(201).json(error);
    }
}
const updateProduct = async (req, res) => {
    const { _id, name, price, image } = req.body;
    const productExist = await Products.findOne({ _id: _id });
    if (!productExist) {
        res.status(403).json({ message: "Product not found" })
    } else {
        try {
            const data = { name: name, price: price, image: image }
            await Products.updateOne(data).where({ _id: _id });
            res.status(200).json({ "message": "Product has been created" });
        } catch (error) {
            res.status(201).json({ message: "Something went wrong", error: error });
        }
    }
}
const deleteProduct = async (req, res, next) => {
    const { _id } = req.body
    try {
        await Products.deleteOne({ _id: _id });
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(401).json({ message: "User deleted failed", error: error })

    }
}

module.exports = {
    getListProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}