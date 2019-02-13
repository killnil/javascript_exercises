// ```# Equality check
// x = 10
// if x == "10"
//   puts "equal"
// else
//   puts "not equal"
// end```

// var x = 10;

// if (x === "10") {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// ```# Falsey values
// x = 3
// if nil
//   x = x + 1
// end

// if false
//   x = x + 1
// end

// if 0
//   x = x + 1
// end

// if !!""
//   x = x + 1
// end

// p x # 5
// ```

// var x = 3;

// if (null) {
//   x = x + 1;
// }

// if (false) {
//   x = x + 1;
// }

// if (0) {
//   x = x + 1;
// }

// if (!!"") {
//   x = x + 1
// }

// console.log(x);

// ```# Functions
// def print_lyrics
//   puts "Now this is a story all about how"
//   puts "My life got flipped turned upside down"
//   puts "And I'd like to take a minute, just sit right there"
//   puts "I'll tell you how I became the prince of a town called Bel-Air"
// end

// print_lyrics```

// function printLyrics() {
//   console.log("Now this is a story all about how");
//   console.log("My life got flipped turned upside down");
//   console.log("And I'd like to take a minute, just sit right there");
//   console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();

// ```# Scope
// x = 100

// def add_one(num)
//   x = 1
//   return num + x
// end

// puts x           #=> 100
// puts add_one(5)  #=> 6
// puts x           #=> 100
// ```

// var x;

// function addOne(num) {
//   x = 1;
//   return num + x;
// }

// console.log(x);           
// console.log(addOne(5));  
// console.log(x);           

// ```# JavaScript objects vs. Ruby classes
// class Boat
//   attr_reader :name, :color
//   attr_writer :color

//   def initialize(name, color, price)
//     @name = name
//     @color = color
//     @price = price
//   end

//   def color=(new_color)
//     @color = new_color
//   end
// end

// boat = Boat.new("S. S. Minnow", "white", 20000 )
// p boat
// p boat.name
// boat.color = "red"
// p boat.color```



// function hungry() {
//   console.log("yes");
// }


// var hungry = function() {
//   console.log("yes");
// };











var boat = {
            name: "S.S. Minnow",
            color: "White",
            price: 20000,
            horn: function() {
                console.log("Honk!!!!");
              }
            };

// console.log(boat);
// console.log(boat.name);
// boat.color = "red";
// console.log(boat.color);
console.log(boat.horn);





















