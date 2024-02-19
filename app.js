// importing express module as express
const express = require("express");
const path = require("path");

// creating instance of the express module (creating an express application)
const app = express();

// MIDDLEWARE

// CONFIGURE THE VIEW ENGINE as EJS (express will render dynamic content using EJS)
// Embedded JavaScript
// EJS allows us to embed JavaScript directly within HTML templates
app.set("view engine", "ejs");
// Enable application to serve static files from the public folder when needed
app.use(express.static(path.join(__dirname, "./public")));

// setting the view engine to EJS means the application will use EJS templates
// instead of plain HTML files for rendering dynamic content

// SETTING THE ROUTES
app.get("/", (req, res) => {
  const toy = [
    {
      title: "Hornby Santa's Express Train Set",
      manufacturer: "Hornby",
      url: "http://www.amazon.co.uk/Hornby-R8221-Gauge-Track-Extension/dp/B000PVFYZ0",
    },
    {
      title:
        "Chuggington Interactive Wash and Fuel Set with Brewster Train Toy",
      manufacturer: "Chuggington",
      url: "http://www.amazon.co.uk/Learning-Curve-Diecast-Chuggington",
    },
    {
      title: "Thomas and Friends Take-n-Play Molly",
      manufacturer: "Fisher-Price",
      url: "http://www.amazon.co.uk/Thomas-Friends-Take-n-Play-Samson-Engine/dp/B00R4YIOV2",
    },
    {
      title: "Harry Potter - Diecast Hogwarts Express Train",
      manufacturer: "Corgi",
      url: "http://www.amazon.co.uk/Harry-Potter-Hogwarts-Express-Model/dp/B000V3RCM0",
    },
    {
      title: "WWF Wolf plush stuffed soft animal toy",
      manufacturer: "IBTT",
      url: "http://www.amazon.co.uk/Flopsie-13269-12-inch-Wolf/dp/B007HLJXRQ",
    },
    {
      title: "Melissa & Doug Jack Russell Terrier Plush Toy",
      manufacturer: "Melissa & Doug",
      url: "http://www.amazon.co.uk/Melissa-Doug-Chihuahua-Plush-Toy/dp/B003NSBKXM",
    },
    {
      title: "Plants vs Zombies Sprinter Zombie Plush 11 inch",
      manufacturer: "Plants vs Zombies",
      url: "http://www.amazon.co.uk/Lovely-Plush-Doll-28cm-gift/dp/B00P2AYOK0",
    },
    {
      title: "Marvel Captain America Distressed Shield Logo",
      manufacturer: "Titan Merchandise",
      url: "http://www.amazon.co.uk/Soldier-Captain-America-Marvel/dp/B00BGXIRD2",
    },
    {
      title: "Charlie Bears - Thistle",
      manufacturer: "Charlie Bears",
      url: "http://www.amazon.co.uk/Charlie-Bears-Terry/dp/B00ZIMM6T8",
    },
    {
      title: "Smasha-Ballz Mini Van Wolf Plush",
      manufacturer: "Smasha-Ballz",
      url: "http://www.amazon.co.uk/Smasha-Ballz-28136-8500-Mini-Zeebo-Plush/dp/B00A21KZB6",
    },
    {
      title: "Snoopy - Woodstock Small Soft Toy In Gift Bag",
      manufacturer: "Snoopy",
      url: "http://www.amazon.co.uk/Peanuts-60406-11-inch-Snoopy-Plush/dp/B00NO77LZI",
    },
    {
      title:
        'My Little Pony Friendship Magic Collection - Plush Doll 6 Pieces Doll Set 6.5" (Rarity, Pinkie Pie, Applejack, Fluttershy, Rainbow Dash and Twilight Sparkle)',
      manufacturer: "Aurora My Little Pony",
      url: "http://www.amazon.co.uk/Original-Beanies-Little-Pony-Rarity/dp/B00HQDDXJ4",
    },
    {
      title: "Sesame Street - Snuffleupagus 17",
      manufacturer: "Gund",
      url: "http://www.amazon.co.uk/Big-Bird-Soft-Toy-14/dp/B000BGT6CG",
    },
    {
      title: "Dempsey Designs Minicraft 18cm Guinea Pig Kit Length",
      manufacturer: "Dempsey Designs Minicraft",
      url: "http://www.amazon.co.uk/Dempsey-Designs-Factory-Minicraft-Filling/dp/B000WNZ1SQ",
    },
    {
      title: "Cuddly Soft Spinosaurus Dinosaur Soft Toy Gift 43cm",
      manufacturer: "Ravensden",
      url: "http://www.amazon.co.uk/Plush-Brontosaurus",
    },
    {
      title: "Mickey Mouse 36 x 36cm Mickey Cushion",
      manufacturer: "Mickey Mouse",
      url: "http://www.amazon.co.uk/Mickey-Mouse-14967-Minnie-Cushion/dp/B008D1CUH4",
    },
  ];

  // don't need to say views/index/ejs
  // as express app knows to automatically look inside 'views' folder for templates and
  // it already knows our template engine is EJS - hence .ejs file
  // app will render the index view

  // render the index templaye and pass in the following data
  res.render("index", { mydata: toy });
});

// SETTING THE CHANNEL THE APP WILL LISTEN TO FOR REQUESTS

app.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server is listening on //localhost:3000`);
});
