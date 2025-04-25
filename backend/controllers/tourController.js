const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// Tours
exports.checkID = (req, res, next, val) => {
  if (val * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      messageL: 'Invalid id',
    });
  }
  next();
};
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      msg: 'missing name or price in body',
    });
  }
  next();
};

exports.getALLTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours: tours,
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);

  const reqId = req.params.id * 1; //convert string to int
  const tour = tours.find((el) => el.id == reqId);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  // have to use middlewares

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {}
  );

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    tour: '<Updated Tour>',
  });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
