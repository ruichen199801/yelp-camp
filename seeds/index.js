const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      // YOUR USER ID
      author: '60426b92d3a9bf7bc1cbd09f',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ]
      },
      images: [
        {
          url: 'https://res.cloudinary.com/ruichencloud/image/upload/v1615167794/YelpCamp/Mojave_Night_jufj5v.jpg',
          filename: 'YelpCamp/Mojave_Night_jufj5v'
        },
        {
          url: 'https://res.cloudinary.com/ruichencloud/image/upload/v1615167789/YelpCamp/Mojave_Day_dzi8c9.jpg',
          filename: 'YelpCamp/Mojave_Day_dzi8c9'
        }
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est distinctio reiciendis aut, nulla labore expedita consectetur, odio totam deleniti at voluptas debitis perspiciatis officiis dolor quasi perferendis itaque voluptatem.',
      price
    });
    await camp.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
});



