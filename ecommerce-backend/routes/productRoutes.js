const express = require("express");

const{createProduct, getProducts} = require("../controller/productController");
const router = express.Router();

router.post("/create",createProduct);
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;
