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
    "name": "Rutgers University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Stanford University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Rowan University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "William Paterson University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Cornell University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Lehigh University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Harvard University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Yale University",
    "picture": "http://placehold.it/32x32"
  },
  {
    "name": "Boston University",
    "picture": "http://placehold.it/32x32"
  }
],
  student: [
  {
    "name": "Rebecca Lyons",
    "email": "rebeccalyons@plexia.com",
    "campusId" : 1
  },
  {
    "name": "Ward David",
    "email": "warddavid@plexia.com",
    "campusId" : 2
  },
  {
    "name": "Cheryl Cochran",
    "email": "cherylcochran@plexia.com",
    "campusId" : 3
  },
  {
    "name": "Marion Tran",
    "email": "mariontran@plexia.com",
    "campusId" : 1
  },
  {
    "name": "Mia Lane",
    "email": "mialane@plexia.com",
    "campusId" : 2
  },
  {
    "name": "Garrison Lowery",
    "email": "garrisonlowery@plexia.com",
    "campusId" : 3
  },
  {
    "name": "Lucy Burgess",
    "email": "lucyburgess@plexia.com",
    "campusId" : 4
  },
  {
    "name": "Eddie Hernandez",
    "email": "eddiehernandez@plexia.com",
    "campusId" : 5
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
