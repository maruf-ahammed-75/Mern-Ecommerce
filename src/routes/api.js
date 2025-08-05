const express = require('express');
const router = express.Router();



const ProductController = require('../controllers/ProductController');





//products
router.get('/ProductBrandList', ProductController.ProductBrandList);
router.get('/ProductCategoryList', ProductController.ProductCategoryList);
router.get('/ProductSliderList', ProductController.ProductSliderList);
router.get('/ProductListByBrand/:BrandId', ProductController.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryId', ProductController.ProductListByCategory);
router.get('/ProductListBySimilar/:keyword', ProductController.ProductListBySimilar);
router.get('/ProductListByKeyword/:keyword', ProductController.ProductListByKeyword);
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark);
router.get('/ProductDetails/:ProductId', ProductController.ProductDetails);
router.get('/ProductReviewList/:ProductId', ProductController.ProductReviewList);







module.exports = router;