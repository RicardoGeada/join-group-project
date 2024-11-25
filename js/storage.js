/**
 * The URL for remote storage.
 * @type {string}
 */
// const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';
const STORAGE_URL =
  "https://join-backend-ed977-default-rtdb.europe-west1.firebasedatabase.app/";

/**
 *indicating the data has been loaded.
 * @type {boolean}
 */
let isLoaded = false;

/**
 * storing contact data.
 * @type {Array}
 */
let contacts = [];

/**
 * storing user data.
 * @type {Array}
 */
let users = [];

/**
 * storing current user data
 * @type {JSON}
 */
let currentUser = {};

/**
 * guest user data
 * @type {JSON}
 */
let guestUser = {
  id: -2,
  name: "Guest User",
  initials: "GU",
  email: "",
  password: "",
  phone: "",
  "badge-color": 1,
  contacts: [],
};

/**
 * storing sorted contact data.
 * @type {Array}
 */
let sortedContacts = [];

/**
 * ID of the last contact.
 * @type {number}
 */
let lastContactId = 0;

/**
 * storing task data
 * @type {Array}
 */
let tasks = [];

let loggedInUserID = +localStorage.getItem("loggedInUserID");
let loggedInUser = localStorage.getItem("loggedInUser");

/**
 * Sets an item in remote storage.
 * @param {string}
 * @param {any}
 */
async function setItem(key, value) {
  const url = `${STORAGE_URL}/${key}.json`;
  const payload = value;
  if (loggedInUserID == -2) {
    msgBox();
    return [{ status: "error", message: "Not in Guest-Login.git" }];
  } else {
    return fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
}

/**
 * Save task data to storage
 */
async function saveTasksToStorage() {
  await setItem("tasks", JSON.stringify(tasks));
}

/**
 * Gets an item from remote storage.
 * @param {string}
 * @returns {Promise}
 */
async function getItem(key) {
  const url = `${STORAGE_URL}/${key}.json`;
  return fetch(url).then((res) => {
    return res.json();
  });
}

/**
 * Loads user and contact data from storage.
 * @returns {void}
 */
async function userAndContacts() {
  loadContactsFromStorage();
  loadUsersFromStorage();
  loadCurrentUserFromStorage();
  loadLastContactId();
  isLoaded = true;
}

/**
 * Loads current user from storage or sets it to a guest user
 */
async function loadCurrentUserFromStorage() {
  let currentUserID = localStorage.getItem("loggedInUserID");
  if (currentUserID >= 0) {
    currentUser = users.find((user) => user["id"] == currentUserID);
  } else if (currentUserID == -2) {
    currentUser = guestUser;
  }
}

/**
 * Loads user data from storage.
 */
async function loadUsersFromStorage() {
  users = await loadFromStorage("users", users);
}

/**
 * Loads contact data from storage.
 */
async function loadContactsFromStorage() {
  contacts = await loadFromStorage("contacts", contacts);
}

/**
 * Loads task data from storage.
 */
async function loadTasksFromStorage() {
  tasks = await loadFromStorage("tasks", tasks);
}

/**
 * Loads data from storage.
 * @param {string}
 * @param {any}
 * @returns {Promise}
 */
async function loadFromStorage(key = "contacts", defaultList = []) {
  let tempData;
  tempData = await loadData(key, defaultList);
  return tempData;
}

/**
 * Sorts the array of contacts.
 * @param {Array}
 * @returns {Array}
 */
function sortMyList(myArray) {
  if (contacts.length > 1) {
    return sortContacts([...myArray]);
  } else {
    return [...myArray];
  }
}

/**
 * sort contacts alphabetically & puts current user at the first position
 * @param {Array} arr - contacts array
 */
function sortContactsUserFirst(arr) {
  sortedContacts = [...arr];
  sortedContacts.sort((c1, c2) =>
    c1.initials < c2.initials ? -1 : c1.initials > c2.initials ? 1 : 0
  );
  // place user at the first position
  if (currentUser["id"] >= 0) {
    const currentUserIndex = sortedContacts.findIndex(
      (contact) => contact["userid"] == currentUser["id"]
    );
    const currentUserContactInfo = JSON.parse(
      JSON.stringify(sortedContacts[currentUserIndex])
    );
    sortedContacts.splice(currentUserIndex, 1);
    sortedContacts.unshift(currentUserContactInfo);
  }
}

/**
 * Loads the ID of the last contact from storage.
 * @returns {void}
 */
async function loadLastContactId() {
  let tempData;
  tempData = await loadData("lastContactId", 0);
  lastContactId = +JSON.parse(tempData);
}

/**
 * Loads data from storage.
 * @param {string}
 * @param {any}
 * @returns {Promise}
 */
async function loadData(key, defaultValue) {
  let loadedData = await getItem(key);
  if (loadedData == null) {
    await saveData(key, defaultValue);
    return defaultValue;
  } else {
    return JSON.parse(loadedData);
  }
}

/**
 * Saves data to storage.
 * @param {string}
 * @param {any}
 * @returns {Promise}
 */
async function saveData(key, value) {
  let saveData = await setItem(key, JSON.stringify(value));
  if (saveData.status != "error") {
    return true;
  } else {
    return false;
  }
}

// Initialize user and contact
userAndContacts();
