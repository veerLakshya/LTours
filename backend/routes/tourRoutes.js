const express = require('express');
const tourController = require('./../controllers/tourController');

const app = express();

// TOUR ROUTES
const router = express.Router();

// middlewares for specific parameters - only runs on all routes with idparameter
router.param('id', tourController.checkID);

app.use('/api/v1/tours', router);

router
  .route('/')
  .get(tourController.getALLTours)
  //chaining an extra middleware to a specific operation
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
