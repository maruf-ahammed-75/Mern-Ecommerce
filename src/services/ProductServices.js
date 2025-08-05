const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel');

const ProductModel = require('../models/ProductModel');
const ProduceDetailsModel = require('../models/ProductDetailsModel');
const ProductReviewModel = require('../models/ProductReviewModel');
const { ProductDetails } = require('../controllers/ProductController');


const BrandListService = async () => {
}

const CategoryListService = async () => {
}
const SliderListService = async () => {
}
const ProductListByCategoryService = async (req, res) => {

}
const ProductListBySimilarService = async (req, res) => {
}
const ProductListByKeywordService = async (req, res) => {
}
const ProductListByRemarkService = async (req, res) => {
}
const ProductDetailsService = async (req, res) => {
}
const ProductReviewListService = async (req, res) => {
}
model.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ProductListByCategoryService,
    ProductListBySimilarService,
    ProductListByKeywordService,
    ProductListByRemarkService,
    ProductDetailsService,
    ProductReviewListService
};