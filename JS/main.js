/*function consoleLogFirstNameElValues() {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
}

function consoleLogLastNameElValues() {
    console.log(lastNameEl.value);
    console.log(lastNameEl.className);
}

function consoleLogAddressElValues() {
    console.log(addressEl.value);
    console.log(addressEl.className);
}

function consoleLogCitiesElValues() {
    console.log(citiesEl.value);
    console.log(citiesEl.className);
}

function consoleLogHobbiesElValues() {
    console.log(hobbiesEl.value);
    console.log(hobbiesEl.className);
}*/

function consoleLogValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

// create elements by id
let firstNameId = "first_name";
let firstNameEl = document.getElementById(firstNameId);
//function consoleLogFirstNameElValues();
consoleLogValues(firstNameEl);

let lastNameId = "last_name";
let lastNameEl = document.getElementById(lastNameId);
//function consoleLogLastNameElValues();
consoleLogValues(lastNameEl);


let addressId = "address";
let addressEl = document.getElementById(addressId);
//function consoleLogAddressElValues();
consoleLogValues(addressEl);


let citiesId = "cities";
let citiesEl = document.getElementById(citiesId);
//function consoleLogCitiesElValues();
consoleLogValues(citiesEl);

let hobbiesId = "hobbies";
let hobbiesEl = document.getElementById(hobbiesId);
//function consoleLogHobbiesElValues();
consoleLogValues(hobbiesEl);

let avatarWrapperId = "avatar_wrapper";
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);

//change elements
firstNameEl.value = "Matvey";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);
consoleLogValues(firstNameEl);

firstNameEl.className = "new_class_name";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);
consoleLogValues(firstNameEl);

lastNameEl.className = "last_name_input default_input error_input";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
consoleLogValues(lastNameEl);

lastNameEl.title = "Wrong last name";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
consoleLogValues(lastNameEl);

avatarEl.src = "img/4.jpg";

avatarEl.title = "I am avatar";

citiesEl.value = "Minsk";
consoleLogValues(citiesEl);

hobbiesEl.value = "Toys, bathing, cars";
consoleLogValues(hobbiesEl);

avatarWrapperEl.innerHTML = "<ul id=\"list\"><li>1</li><li>2</li><li>3</li></ul>";

//create new elements for change existing inner HTML
let listId = "list";
let listEl = document.getElementById(listId);

console.log(listEl.innerHTML);