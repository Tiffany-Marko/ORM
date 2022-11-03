const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  const category = await Category.findAll()
  res.json(category)
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id)
  res.json(category)
});

router.post('/', async(req, res) => {
  // create a new category
  const newCategory = await Category.create (req.body)
  res.json (newCategory)
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const newCategory = await Category.update (req.body,{
    where: {
      id: req.params.id
    }
  })
  res.json (newCategory)
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const newCategory = await Category.destroy( {
    where: {
      id: req.params.id
    }
  })
  res.json (newCategory)
});

module.exports = router;
