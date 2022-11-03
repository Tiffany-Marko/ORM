const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tag = await Tag.findAll({
    include:[
      {
        model: Product
      },
    ]
  })
  res.json(tag)
});

router.get('/:id', async(req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  const tag = await Tag.findByPk(req.params.id,{
    include:[
      {
        model: Product
      },
    ]
  })
  res.json(tag)
});

router.post('/', async(req, res) => {
  // create a new category
  const newTag = await Tag.create (req.body)
  res.json (newTag)
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const newTag = await Tag.update (req.body,{
    where: {
      id: req.params.id
    }
  })
  res.json (newTag)
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  const newTag = await Tag.destroy( {
    where: {
      id: req.params.id
    }
  })
  res.json (newTag)
});

module.exports = router;
