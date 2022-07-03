/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function populateProjectDisplay(projectName, todos){
    const display = document.querySelector('.display')
    display.textContent = ''
    document.querySelector('.project-name').textContent = projectName

    todos.forEach((todo, index) => {
        const card = createCard(todo)
        card.querySelector('.remove').setAttribute('data-project', projectName)
        card.querySelector('.remove').setAttribute('data-index', index)
        card.querySelector('.edit').setAttribute('data-project', projectName)
        card.querySelector('.edit').setAttribute('data-index', index)
        display.appendChild(card)
    })

    const newtodoBtn = document.createElement('button')
    newtodoBtn.classList.add('new-todo')
    newtodoBtn.setAttribute('data-project', projectName)
    newtodoBtn.textContent = "Add new Todo"
    newtodoBtn.addEventListener('click', openTodoForm)
    addListener('.edit', openEditForm)
    display.appendChild(newtodoBtn)
}

function populateTimedDisplay(projectList, interval){
    const display = document.querySelector('.display')
    display.textContent = ''
    document.querySelector('.project-name').textContent = interval

    for(const projectName in projectList){
        const todos = projectList[projectName]
        todos.forEach((todo, index) => {
            if(todo === '') return
            const card = createCard(todo)
            card.querySelector('.remove').setAttribute('data-project', projectName)
            card.querySelector('.remove').setAttribute('data-index', index)
            card.querySelector('.edit').setAttribute('data-project', projectName)
            card.querySelector('.edit').setAttribute('data-index', index)
            display.appendChild(card)
        })
    }
    addListener('.edit', openEditForm)
}

function createCard(todo){
    const cardTemp = document.querySelector('.card-template').content.cloneNode(true)
    const card = cardTemp.querySelector('.card')
    card.querySelector('.title').textContent = todo.title
    card.querySelector('.date').textContent = todo.dueDate
    card.querySelector('.priority').textContent = todo.priority
    return card
}

function populateSidebar(projects){
    const projectsDisplay = document.querySelector('.projects')
    projectsDisplay.textContent = ''

    projects.forEach(project => {
        if(project === 'inbox') return
        const tab = document.createElement('div')
        tab.classList.add('project-tab')
        tab.setAttribute('data-project', project)
        const projectName = document.createElement('p')
        projectName.textContent = project
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "X"
        deleteBtn.setAttribute('data-project', project)
        deleteBtn.classList.add('delete-project')
        tab.appendChild(projectName)
        tab.appendChild(deleteBtn)
        projectsDisplay.appendChild(tab)
    })
}

function addListener(selector, callback){
    const elements = document.querySelectorAll(selector)
    elements.forEach(element => {
        element.addEventListener('click', callback)
    })
}

addListener('.new-project', openProjectForm)

function openProjectForm(){
    document.querySelector('.n-project').classList.remove('hidden')
}

function openTodoForm(e){
    const form = document.querySelector('.todo-form')
    const projectName = e.target.getAttribute('data-project')
    form.querySelector('.todo-form-title').textContent = projectName
    document.querySelector('.n-todo').classList.remove('hidden')
}

function openEditForm(e){
    const form = document.querySelector('.edit-todo-form')
    form.querySelector('#index').value = e.target.getAttribute('data-index')
    form.querySelector('#project').value = e.target.getAttribute('data-project')
    document.querySelector('.e-todo').classList.remove('hidden')
}

document.querySelectorAll('.cancel').forEach(button => {
    button.addEventListener('click', (e)=> {
      hideAllForms()
    })
})

function hideAllForms(){
    document.querySelectorAll('.form-wrapper').forEach(wrapper => {
        wrapper.classList.add('hidden')
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    populateProjectDisplay,
    populateSidebar,
    addListener,
    populateTimedDisplay,
    hideAllForms
});

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");



const inbox = document.querySelector('.inbox')
const today = document.querySelector('.today')
const week = document.querySelector('.week')

today.addEventListener('click', ()=>{
    const todayProjects = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDailyProjects()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(todayProjects, 'Daily Projects')
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
})

week.addEventListener('click', ()=>{
    const weekProjects = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeeklyProjects()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(weekProjects, 'Weekly Projects')
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
})

inbox.addEventListener('click', displayInbox)

function displayInbox(){
    const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos('inbox')
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay('inbox', todos)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
}

function handleProjectDelete(e){
    const project = e.target.getAttribute('data-project')
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(project)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateSidebar(Object.keys(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()))
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.delete-project', handleProjectDelete)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.project-tab', showProjectTodos)
    const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos('inbox')
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay('inbox', todos)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
}

function handleNewProject(e){
    e.preventDefault()
    const projectName = document.querySelector('#project-name').value
    if(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].verifyProjectName(projectName)){
        alert('Projects Name cannot be the Same!')
        return
    }
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(projectName)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateSidebar(Object.keys(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()))
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.delete-project', handleProjectDelete)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.project-tab', showProjectTodos)
    e.target.reset()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].hideAllForms()
}

function showProjectTodos(e){
    const projectName = e.target.getAttribute('data-project')
    const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos(projectName)
    if(!todos) return
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay(projectName, todos)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
}

function handleNewTodo(e){
    e.preventDefault()
    const form = e.target
    const projectName = form.querySelector('.todo-form-title').textContent
    const title = form.querySelector('#title').value
    const date = form.querySelector('#date').value
    const priority = form.querySelector('#priority').value
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodoToProject(projectName, title, 'lol', date, priority)
    const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos(projectName)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay(projectName, todos)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
    e.target.reset()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].hideAllForms()
}

function handleTodoDelete(e){
    const projectName = e.target.getAttribute('data-project')
    const todoIndex = e.target.getAttribute('data-index')
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodoFromProject(projectName, todoIndex)
    const displayProject = document.querySelector('.project-name').textContent
    if(displayProject === 'Daily Projects'){
        const projectList = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDailyProjects()
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(projectList, 'Daily Projects')
    } else if(displayProject === 'Weekly Projects'){
        const projectList = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeeklyProjects()
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(projectList, 'Weekly Projects')
    } else{
        const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos(projectName)
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay(projectName, todos)
    } 
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
}

function handleEditTodo(e){
    e.preventDefault()
    const dueDate = e.target.querySelector('#date').value
    const priority = e.target.querySelector('#priority').value
    const projectName = e.target.querySelector('#project').value
    const index = e.target.querySelector('#index').value
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(projectName, index, dueDate, priority)
    const displayProject = document.querySelector('.project-name').textContent
    if(displayProject === 'Daily Projects'){
        const projectList = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDailyProjects()
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(projectList, 'Daily Projects')
    } else if(displayProject === 'Weekly Projects'){
        const projectList = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getWeeklyProjects()
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateTimedDisplay(projectList, 'Weekly Projects')
    } else{
        const todos = _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTodos(projectName)
        _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateProjectDisplay(projectName, todos)
    } 
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.remove', handleTodoDelete)
    e.target.reset()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].hideAllForms()
}

document.querySelector('.project-form').addEventListener('submit', handleNewProject)
document.querySelector('.todo-form').addEventListener('submit', handleNewTodo)
document.querySelector('.edit-todo-form').addEventListener('submit', handleEditTodo)

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    displayInbox()
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].populateSidebar(Object.keys(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()))
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.delete-project', handleProjectDelete)
    _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].addListener('.project-tab', showProjectTodos)
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





const projects = initializeProjects()

function initializeProjects(){
    const savedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getStorage)()
    return savedProjects ? savedProjects : {inbox: []}
}

function createProject(name){
    projects[name] = []

    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projects)
}

function deleteProject(projectName){
    delete projects[projectName]

    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projects)
}

function addTodoToProject(projectName, title, description, dueDate, priority){
    const todo = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority)
    projects[projectName].push(todo)

    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projects)
}

function removeTodoFromProject(projectName, todoIndex){
    projects[projectName].splice(todoIndex, 1)

    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projects)
}

function getProjectTodos(projectName){
    return projects[projectName]
}

function getProjects(){
    return projects
}

function updateTodo(projectName, index, newDate, newPriority){
    const todo = projects[projectName][index]
    todo.dueDate = newDate
    todo.priority = newPriority

    ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(projects)
}

function getDailyProjects(){
    const clonedObj = Object.assign({}, projects)
    for( const project in clonedObj){
        const filtered = clonedObj[project].map(todo => {
            const date = new Date(todo.dueDate)
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) return todo
            else return ''
        })
        clonedObj[project] = filtered
    }
    return clonedObj
}

function getWeeklyProjects(){
    const clonedObj = Object.assign({}, projects)
    for( const project in clonedObj){
        const filtered = clonedObj[project].map(todo => {
            const date = new Date(todo.dueDate)
            if((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date)) return todo
            else return ''
        })
        clonedObj[project] = filtered
    }
    return clonedObj
}

function verifyProjectName(projectName){
    const defaults = ['Daily', 'Daily Projects', 'This Week', 'Weekly Projects', 'inbox']
    const customProjects = Object.keys(projects)
    const existingProjects = defaults.concat(customProjects)
    return existingProjects.includes(projectName)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    createProject,
    deleteProject,
    addTodoToProject,
    removeTodoFromProject,
    getProjects,
    getProjectTodos, 
    updateTodo,
    getDailyProjects,
    getWeeklyProjects,
    verifyProjectName
});

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
function updateStorage(projects){
    const projectString = JSON.stringify(projects)
    localStorage.setItem('project', projectString)
}

function getStorage(){
    const projects = localStorage.getItem('project')
    if(!projects) return null
    else return JSON.parse(projects)
}

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewTodo)
/* harmony export */ });
function createNewTodo(title, description, dueDate, priority){
  
    return {title, description, dueDate, priority}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/events.js");


(0,_events_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtBQUNqQjs7QUFFQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjs7QUFFQSxJQUFJLDJEQUFhO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSwyREFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMkRBQWE7QUFDakI7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBTztBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9EQUFVO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pHTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQSxZQUFZO0FBQ1o7Ozs7OztVQ0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLHNEQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3REaXNwbGF5KHByb2plY3ROYW1lLCB0b2Rvcyl7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5JylcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVxuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQodG9kbylcbiAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlJykuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlJykuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmVkaXQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROYW1lKVxuICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jykuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3dG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbmV3dG9kb0J0bi5jbGFzc0xpc3QuYWRkKCduZXctdG9kbycpXG4gICAgbmV3dG9kb0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROYW1lKVxuICAgIG5ld3RvZG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgVG9kb1wiXG4gICAgbmV3dG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ub2RvRm9ybSlcbiAgICBhZGRMaXN0ZW5lcignLmVkaXQnLCBvcGVuRWRpdEZvcm0pXG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChuZXd0b2RvQnRuKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRpbWVkRGlzcGxheShwcm9qZWN0TGlzdCwgaW50ZXJ2YWwpe1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50ID0gaW50ZXJ2YWxcblxuICAgIGZvcihjb25zdCBwcm9qZWN0TmFtZSBpbiBwcm9qZWN0TGlzdCl7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdExpc3RbcHJvamVjdE5hbWVdXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZih0b2RvID09PSAnJykgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZCh0b2RvKVxuICAgICAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlJykuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnJlbW92ZScpLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jykuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFkZExpc3RlbmVyKCcuZWRpdCcsIG9wZW5FZGl0Rm9ybSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZCh0b2RvKXtcbiAgICBjb25zdCBjYXJkVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRlbXBsYXRlJykuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjb25zdCBjYXJkID0gY2FyZFRlbXAucXVlcnlTZWxlY3RvcignLmNhcmQnKVxuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlXG4gICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHlcbiAgICByZXR1cm4gY2FyZFxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVNpZGViYXIocHJvamVjdHMpe1xuICAgIGNvbnN0IHByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgcHJvamVjdHNEaXNwbGF5LnRleHRDb250ZW50ID0gJydcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QgPT09ICdpbmJveCcpIHJldHVyblxuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKVxuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0KVxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJYXCJcbiAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdClcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0JylcbiAgICAgICAgdGFiLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuICAgICAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFiKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKHNlbGVjdG9yLCBjYWxsYmFjayl7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjaylcbiAgICB9KVxufVxuXG5hZGRMaXN0ZW5lcignLm5ldy1wcm9qZWN0Jywgb3BlblByb2plY3RGb3JtKVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubi1wcm9qZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn1cblxuZnVuY3Rpb24gb3BlblRvZG9Gb3JtKGUpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm4tdG9kbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0Rm9ybShlKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJylcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpLnZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JylcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmUtdG9kbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW5jZWwnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgaGlkZUFsbEZvcm1zKClcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gaGlkZUFsbEZvcm1zKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0td3JhcHBlcicpLmZvckVhY2god3JhcHBlciA9PiB7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcG9wdWxhdGVQcm9qZWN0RGlzcGxheSxcbiAgICBwb3B1bGF0ZVNpZGViYXIsXG4gICAgYWRkTGlzdGVuZXIsXG4gICAgcG9wdWxhdGVUaW1lZERpc3BsYXksXG4gICAgaGlkZUFsbEZvcm1zXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9VSS5qc1wiXG5cbmNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94JylcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5JylcbmNvbnN0IHdlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpXG5cbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjb25zdCB0b2RheVByb2plY3RzID0gUHJvamVjdC5nZXREYWlseVByb2plY3RzKClcbiAgICBWaWV3LnBvcHVsYXRlVGltZWREaXNwbGF5KHRvZGF5UHJvamVjdHMsICdEYWlseSBQcm9qZWN0cycpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59KVxuXG53ZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjb25zdCB3ZWVrUHJvamVjdHMgPSBQcm9qZWN0LmdldFdlZWtseVByb2plY3RzKClcbiAgICBWaWV3LnBvcHVsYXRlVGltZWREaXNwbGF5KHdlZWtQcm9qZWN0cywgJ1dlZWtseSBQcm9qZWN0cycpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59KVxuXG5pbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbmJveClcblxuZnVuY3Rpb24gZGlzcGxheUluYm94KCl7XG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2RvcygnaW5ib3gnKVxuICAgIFZpZXcucG9wdWxhdGVQcm9qZWN0RGlzcGxheSgnaW5ib3gnLCB0b2RvcylcbiAgICBWaWV3LmFkZExpc3RlbmVyKCcucmVtb3ZlJywgaGFuZGxlVG9kb0RlbGV0ZSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdERlbGV0ZShlKXtcbiAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgIFByb2plY3QuZGVsZXRlUHJvamVjdChwcm9qZWN0KVxuICAgIFZpZXcucG9wdWxhdGVTaWRlYmFyKE9iamVjdC5rZXlzKFByb2plY3QuZ2V0UHJvamVjdHMoKSkpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLmRlbGV0ZS1wcm9qZWN0JywgaGFuZGxlUHJvamVjdERlbGV0ZSlcbiAgICBWaWV3LmFkZExpc3RlbmVyKCcucHJvamVjdC10YWInLCBzaG93UHJvamVjdFRvZG9zKVxuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdC5nZXRQcm9qZWN0VG9kb3MoJ2luYm94JylcbiAgICBWaWV3LnBvcHVsYXRlUHJvamVjdERpc3BsYXkoJ2luYm94JywgdG9kb3MpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3QoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWVcbiAgICBpZihQcm9qZWN0LnZlcmlmeVByb2plY3ROYW1lKHByb2plY3ROYW1lKSl7XG4gICAgICAgIGFsZXJ0KCdQcm9qZWN0cyBOYW1lIGNhbm5vdCBiZSB0aGUgU2FtZSEnKVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgUHJvamVjdC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIFZpZXcucG9wdWxhdGVTaWRlYmFyKE9iamVjdC5rZXlzKFByb2plY3QuZ2V0UHJvamVjdHMoKSkpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLmRlbGV0ZS1wcm9qZWN0JywgaGFuZGxlUHJvamVjdERlbGV0ZSlcbiAgICBWaWV3LmFkZExpc3RlbmVyKCcucHJvamVjdC10YWInLCBzaG93UHJvamVjdFRvZG9zKVxuICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgICBWaWV3LmhpZGVBbGxGb3JtcygpXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0VG9kb3MoZSl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICBpZighdG9kb3MpIHJldHVyblxuICAgIFZpZXcucG9wdWxhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TmFtZSwgdG9kb3MpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1RvZG8oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWVcbiAgICBQcm9qZWN0LmFkZFRvZG9Ub1Byb2plY3QocHJvamVjdE5hbWUsIHRpdGxlLCAnbG9sJywgZGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICBWaWV3LnBvcHVsYXRlUHJvamVjdERpc3BsYXkocHJvamVjdE5hbWUsIHRvZG9zKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxuICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgICBWaWV3LmhpZGVBbGxGb3JtcygpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvZG9EZWxldGUoZSl7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JylcbiAgICBQcm9qZWN0LnJlbW92ZVRvZG9Gcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb0luZGV4KVxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50XG4gICAgaWYoZGlzcGxheVByb2plY3QgPT09ICdEYWlseSBQcm9qZWN0cycpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3QuZ2V0RGFpbHlQcm9qZWN0cygpXG4gICAgICAgIFZpZXcucG9wdWxhdGVUaW1lZERpc3BsYXkocHJvamVjdExpc3QsICdEYWlseSBQcm9qZWN0cycpXG4gICAgfSBlbHNlIGlmKGRpc3BsYXlQcm9qZWN0ID09PSAnV2Vla2x5IFByb2plY3RzJyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gUHJvamVjdC5nZXRXZWVrbHlQcm9qZWN0cygpXG4gICAgICAgIFZpZXcucG9wdWxhdGVUaW1lZERpc3BsYXkocHJvamVjdExpc3QsICdXZWVrbHkgUHJvamVjdHMnKVxuICAgIH0gZWxzZXtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICAgICAgVmlldy5wb3B1bGF0ZVByb2plY3REaXNwbGF5KHByb2plY3ROYW1lLCB0b2RvcylcbiAgICB9IFxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0VG9kbyhlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBkdWVEYXRlID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWVcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWVcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleCcpLnZhbHVlXG4gICAgUHJvamVjdC51cGRhdGVUb2RvKHByb2plY3ROYW1lLCBpbmRleCwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgZGlzcGxheVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnRcbiAgICBpZihkaXNwbGF5UHJvamVjdCA9PT0gJ0RhaWx5IFByb2plY3RzJyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gUHJvamVjdC5nZXREYWlseVByb2plY3RzKClcbiAgICAgICAgVmlldy5wb3B1bGF0ZVRpbWVkRGlzcGxheShwcm9qZWN0TGlzdCwgJ0RhaWx5IFByb2plY3RzJylcbiAgICB9IGVsc2UgaWYoZGlzcGxheVByb2plY3QgPT09ICdXZWVrbHkgUHJvamVjdHMnKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBQcm9qZWN0LmdldFdlZWtseVByb2plY3RzKClcbiAgICAgICAgVmlldy5wb3B1bGF0ZVRpbWVkRGlzcGxheShwcm9qZWN0TGlzdCwgJ1dlZWtseSBQcm9qZWN0cycpXG4gICAgfSBlbHNle1xuICAgICAgICBjb25zdCB0b2RvcyA9IFByb2plY3QuZ2V0UHJvamVjdFRvZG9zKHByb2plY3ROYW1lKVxuICAgICAgICBWaWV3LnBvcHVsYXRlUHJvamVjdERpc3BsYXkocHJvamVjdE5hbWUsIHRvZG9zKVxuICAgIH0gXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG4gICAgZS50YXJnZXQucmVzZXQoKVxuICAgIFZpZXcuaGlkZUFsbEZvcm1zKClcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZU5ld1Byb2plY3QpXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlTmV3VG9kbylcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUVkaXRUb2RvKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIGRpc3BsYXlJbmJveCgpXG4gICAgVmlldy5wb3B1bGF0ZVNpZGViYXIoT2JqZWN0LmtleXMoUHJvamVjdC5nZXRQcm9qZWN0cygpKSlcbiAgICBWaWV3LmFkZExpc3RlbmVyKCcuZGVsZXRlLXByb2plY3QnLCBoYW5kbGVQcm9qZWN0RGVsZXRlKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5wcm9qZWN0LXRhYicsIHNob3dQcm9qZWN0VG9kb3MpXG59XG4iLCJpbXBvcnQge2lzVG9kYXksIGlzVGhpc1dlZWt9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kb3MuanNcIlxuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSwgZ2V0U3RvcmFnZX0gZnJvbSAnLi9zdG9yYWdlLmpzJ1xuXG5cbmNvbnN0IHByb2plY3RzID0gaW5pdGlhbGl6ZVByb2plY3RzKClcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3RzKCl7XG4gICAgY29uc3Qgc2F2ZWRQcm9qZWN0cyA9IGdldFN0b3JhZ2UoKVxuICAgIHJldHVybiBzYXZlZFByb2plY3RzID8gc2F2ZWRQcm9qZWN0cyA6IHtpbmJveDogW119XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgcHJvamVjdHNbbmFtZV0gPSBbXVxuXG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0cylcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgZGVsZXRlIHByb2plY3RzW3Byb2plY3ROYW1lXVxuXG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0cylcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvUHJvamVjdChwcm9qZWN0TmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgICBwcm9qZWN0c1twcm9qZWN0TmFtZV0ucHVzaCh0b2RvKVxuXG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0cylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvSW5kZXgpe1xuICAgIHByb2plY3RzW3Byb2plY3ROYW1lXS5zcGxpY2UodG9kb0luZGV4LCAxKVxuXG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0cylcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFRvZG9zKHByb2plY3ROYW1lKXtcbiAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdE5hbWVdXG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCl7XG4gICAgcmV0dXJuIHByb2plY3RzXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRvZG8ocHJvamVjdE5hbWUsIGluZGV4LCBuZXdEYXRlLCBuZXdQcmlvcml0eSl7XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3RzW3Byb2plY3ROYW1lXVtpbmRleF1cbiAgICB0b2RvLmR1ZURhdGUgPSBuZXdEYXRlXG4gICAgdG9kby5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XG5cbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZXREYWlseVByb2plY3RzKCl7XG4gICAgY29uc3QgY2xvbmVkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvamVjdHMpXG4gICAgZm9yKCBjb25zdCBwcm9qZWN0IGluIGNsb25lZE9iail7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gY2xvbmVkT2JqW3Byb2plY3RdLm1hcCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpXG4gICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSByZXR1cm4gdG9kb1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gJydcbiAgICAgICAgfSlcbiAgICAgICAgY2xvbmVkT2JqW3Byb2plY3RdID0gZmlsdGVyZWRcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lZE9ialxufVxuXG5mdW5jdGlvbiBnZXRXZWVrbHlQcm9qZWN0cygpe1xuICAgIGNvbnN0IGNsb25lZE9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHByb2plY3RzKVxuICAgIGZvciggY29uc3QgcHJvamVjdCBpbiBjbG9uZWRPYmope1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGNsb25lZE9ialtwcm9qZWN0XS5tYXAodG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKVxuICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhkYXRlKSkgcmV0dXJuIHRvZG9cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICcnXG4gICAgICAgIH0pXG4gICAgICAgIGNsb25lZE9ialtwcm9qZWN0XSA9IGZpbHRlcmVkXG4gICAgfVxuICAgIHJldHVybiBjbG9uZWRPYmpcbn1cblxuZnVuY3Rpb24gdmVyaWZ5UHJvamVjdE5hbWUocHJvamVjdE5hbWUpe1xuICAgIGNvbnN0IGRlZmF1bHRzID0gWydEYWlseScsICdEYWlseSBQcm9qZWN0cycsICdUaGlzIFdlZWsnLCAnV2Vla2x5IFByb2plY3RzJywgJ2luYm94J11cbiAgICBjb25zdCBjdXN0b21Qcm9qZWN0cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKVxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBkZWZhdWx0cy5jb25jYXQoY3VzdG9tUHJvamVjdHMpXG4gICAgcmV0dXJuIGV4aXN0aW5nUHJvamVjdHMuaW5jbHVkZXMocHJvamVjdE5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgYWRkVG9kb1RvUHJvamVjdCxcbiAgICByZW1vdmVUb2RvRnJvbVByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgZ2V0UHJvamVjdFRvZG9zLCBcbiAgICB1cGRhdGVUb2RvLFxuICAgIGdldERhaWx5UHJvamVjdHMsXG4gICAgZ2V0V2Vla2x5UHJvamVjdHMsXG4gICAgdmVyaWZ5UHJvamVjdE5hbWVcbn0iLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShwcm9qZWN0cyl7XG4gICAgY29uc3QgcHJvamVjdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgcHJvamVjdFN0cmluZylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoKXtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JylcbiAgICBpZighcHJvamVjdHMpIHJldHVybiBudWxsXG4gICAgZWxzZSByZXR1cm4gSlNPTi5wYXJzZShwcm9qZWN0cylcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgT25QYWdlTG9hZCBmcm9tICcuL2V2ZW50cy5qcydcblxuT25QYWdlTG9hZCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9