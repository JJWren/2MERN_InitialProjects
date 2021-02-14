function myCL(int) {
    console.log("My take on the hoist " + int + ":\n");
}
function makeDashes() {
    console.log("\n--------------------\n--------------------\n");
}

// --------------------
myCL(1);
var hello;
console.log(hello);
hello = "world";

makeDashes();

myCL(2);
var needle;
needle = "haystack";
function test() {
    needle = "magnet";
    console.log(needle);
}
test();

makeDashes();

myCL(3);
var brendan;
function print() {
    brendan = "only okay";
    console.log(brendan);
}
brendan = "super cool";
console.log(brendan);

makeDashes();

myCL(4);
var food;
function eat() {
    food = "half-chicken";
    console.log(food);
    food = "gone";
}
food = "chicken";
console.log(food);
eat();

makeDashes();

myCL(5);
// mean();
// mean = function () {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// };
// console.log(food);
// console.log(food);

makeDashes();

myCL(6);
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

makeDashes();

myCL(7);
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

makeDashes();

myCL(8);
function makeDojo(name, students) {
    const dojo = {}
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo
}
console.log(makeDojo("Chicagio", 65));
console.log(makeDojo("Berkeley", 0));

makeDashes();
