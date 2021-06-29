const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
  });
  // be sure to include its associated Products
});

/*router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne()
  .then(dbCategoryData)
  // be sure to include its associated Products
});*/

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    res.status(400).json(err);
    });
});

/*router.put('/:id', (req, res) => {
  // update a category by its `id` value
});*/

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with that id!'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
  res.status(500).json(err);
 });
});

module.exports = router;