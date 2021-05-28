// create elements by id
var firstNameId = "first_name";
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = "last_name";
var lastNameEl = document.getElementById(lastNameId);
var addressId = "address";
var addressEl = document.getElementById(addressId);
var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = "avatar_wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);
//change elements
firstNameEl.value = "Matvey";
lastNameEl.className = "last_name_input default_input error_input";
lastNameEl.title = "Wrong last name";
avatarEl.src = "img/4.jpg";
avatarEl.title = "I am avatar";
citiesEl.value = "Minsk";
hobbiesEl.value = "Toys, bathing, cars";
avatarWrapperEl.innerHTML = "<ul id=\"list\"><li>1</li><li>2</li><li>3</li></ul>";
//create new elements for change existing inner HTML
var listId = "list";
var listEl = document.getElementById(listId);

alert(listEl.innerHTML);