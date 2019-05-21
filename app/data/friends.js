// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [

  {
    "name": "Joey",
    "photo": "http://images4.fanpop.com/image/answers/1083000/1083358_1289612957253.39res_375_456.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Bill",
    "photo": "https://randommization.com/wp-content/uploads/2013/01/invisible-inner-illustrations_4.jpg",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  {
    "name": "Andrew",
    "photo": "https://cdn.pastemagazine.com/www/blogs/lists/2010/05/13/charlie_brown.jpg",
    "scores": [
      3,
      2,
      5,
      2,
      5,
      2,
      3,
      5,
      2,
      4
    ]
  },
  {
    "name": "John",
    "photo": "https://www.thoughtco.com/thmb/rkFZRh7wSN8BjubVvIkrdsh2tGo=/1367x875/filters:no_upscale():max_bytes(150000):strip_icc()/powerpuff_girls-56a00bc45f9b58eba4aea61d.jpg",
    "scores": [
      3,
      4,
      2,
      1,
      2,
      5,
      3,
      5,
      4,
      1
    ]
  },
  {
    "name": "Susan",
    "photo": "http://www.teapotcartoon.com/images/teapot-1.jpg",
    "scores": [
      4,
      3,
      2,
      5,
      1,
      3,
      4,
      2,
      5,
      1
    ]
  }

];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;


