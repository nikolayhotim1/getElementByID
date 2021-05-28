// create elements by id
let firstNameId = "first_name";
let firstNameEl = document.getElementById(firstNameId);
let lastNameId = "last_name";
let lastNameEl = document.getElementById(lastNameId);
let addressId = "address";
let addressEl = document.getElementById(addressId);
let citiesId = "cities";
let citiesEl = document.getElementById(citiesId);
let hobbiesId = "hobbies";
let hobbiesEl = document.getElementById(hobbiesId);
let avatarWrapperId = "avatar_wrapper";
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = document.getElementById(avatarId);

function consoleLogValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
    console.log(citiesEl.value);
    console.log(hobbiesEl.value);
    console.log(avatarWrapperEl.innerHTML);
}

//change elements
firstNameEl.value = "Matvey";

consoleLogValue();

lastNameEl.className = "last_name_input default_input error_input";

consoleLogValue();

lastNameEl.title = "Wrong last name";

consoleLogValue();

avatarEl.src = "img/4.jpg";

consoleLogValue();

avatarEl.title = "I am avatar";

consoleLogValue();

citiesEl.value = "Minsk";

consoleLogValue();

hobbiesEl.value = "Toys, bathing, cars";

consoleLogValue();

avatarWrapperEl.innerHTML = "<ul id=\"list\"><li>1</li><li>2</li><li>3</li></ul>";

consoleLogValue();

//create new elements for change existing inner HTML
let listId = "list";
let listEl = document.getElementById(listId);

consoleLogValue();

console.log(listEl.innerHTML);