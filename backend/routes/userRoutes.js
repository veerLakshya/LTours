const express = require('express');
const userController = require('./../controllers/userController');

const app = express();

// USER ROUTES
const router = express.Router();
app.use('/api/v1/users', router);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
