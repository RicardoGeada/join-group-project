/**
 * Constant storing the storage token for remote storage.
 * @type {string}
 */
const STORAGE_TOKEN = '6E3ZJQ08T28HLNYDZ6RRN8U79V2FL0N375M0W6KJ';

/**
 * The URL for remote storage.
 * @type {string}
 */
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

/**
 *indicating the data has been loaded.
 * @type {boolean}
 */
let isLoaded = false;

/**
 * Sets an item in remote storage.
 * @param {string} 
 * @param {any} 
 */
async function setItem(key, value) {
  const payload = { key, value, token: STORAGE_TOKEN };
  if (loggedInUserID == -2) {
    msgBox();
    return [{'status': 'error', 'message': 'Not in Guest-Login.git'}];
  } else {
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
      .then(res => res.json());
  }
}

/**
 * Gets an item from remote storage.
 * @param {string} 
 * @returns {Promise} 
 */
async function getItem(key) {
  const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      if (res && res.data) {
        return res.data.value;
      }
      return null; 
    });
}

/**
 * storing contact data.
 * @type {Array}
 */
let contactList = [];

/**
 * storing user data.
 * @type {Array}
 */
let userList = [];

/**
 * storing sorted contact data.
 * @type {Array}
 */
let sortedContactList = [];

/**
 * ID of the last contact.
 * @type {number}
 */
let lastContactId = 0;

/**
 * Loads user and contact data from storage.
 * @returns {void}
 */
async function userAndContacts() {
  contactList = await loadFromStorage('contacts', contactList);
  userList = await loadFromStorage('users', userList);
  isLoaded = true;
}

/**
 * Loads data from storage.
 * @param {string} 
 * @param {any} 
 * @returns {Promise}
 */
async function loadFromStorage(key = 'contacts', defaultList = []) {
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
  if (contactList.length > 1) {
    return sortContacts([...myArray]);
  } else {
    return [...myArray];
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
  if (saveData.status == "success") {
    return true;
  } else {
    return false;
  }
}

// Initialize user and contact
userAndContacts();