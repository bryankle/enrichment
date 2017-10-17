// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var {
  db,
  Student,
  Campus
} = require('./database/models/index');

var data = {
  campus: [
  {
    "name": "DANCITY",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "TURNLING",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "EARTHMARK",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "ROUGHIES",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "EXOSPACE",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "GENEKOM",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "ZIALACTIC",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "DAIDO",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "PLEXIA",
    "picture": "http://placehold.it/32x32"
  }
],
  student: [
  {
    "name": "Rebecca Lyons",
    "email": "rebeccalyons@plexia.com"
  },
  {
    "name": "Ward David",
    "email": "warddavid@plexia.com"
  },
  {
    "name": "Cheryl Cochran",
    "email": "cherylcochran@plexia.com"
  },
  {
    "name": "Marion Tran",
    "email": "mariontran@plexia.com"
  },
  {
    "name": "Mia Lane",
    "email": "mialane@plexia.com"
  },
  {
    "name": "Garrison Lowery",
    "email": "garrisonlowery@plexia.com"
  },
  {
    "name": "Lucy Burgess",
    "email": "lucyburgess@plexia.com"
  },
  {
    "name": "Eddie Hernandez",
    "email": "eddiehernandez@plexia.com"
  }
]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});
