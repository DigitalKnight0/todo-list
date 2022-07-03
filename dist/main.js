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
    document.querySelector('.project-form').classList.remove('hidden')
}

function openTodoForm(e){
    const form = document.querySelector('.todo-form')
    const projectName = e.target.getAttribute('data-project')
    form.querySelector('.todo-form-title').textContent = projectName
    form.classList.remove('hidden')
}

function openEditForm(e){
    const form = document.querySelector('.edit-todo-form')
    form.querySelector('#index').value = e.target.getAttribute('data-index')
    form.querySelector('#project').value = e.target.getAttribute('data-project')
    form.classList.remove('hidden')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    populateProjectDisplay,
    populateSidebar,
    addListener,
    populateTimedDisplay
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
    e.target.classList.add('hidden')
}

function showProjectTodos(e){
    const projectName = e.target.textContent
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
    e.target.classList.add('hidden')
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
    e.target.classList.add('hidden')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUFhO0FBQ2pCOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQU87QUFDdEI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBVTtBQUN6QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqR087QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQyxzREFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TmFtZSwgdG9kb3Mpe1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcblxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKHRvZG8pXG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnJlbW92ZScpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpXG4gICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnJlbW92ZScpLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxuICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcbiAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhcmQpXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld3RvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld3RvZG9CdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8nKVxuICAgIG5ld3RvZG9CdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0TmFtZSlcbiAgICBuZXd0b2RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IFRvZG9cIlxuICAgIG5ld3RvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVG9kb0Zvcm0pXG4gICAgYWRkTGlzdGVuZXIoJy5lZGl0Jywgb3BlbkVkaXRGb3JtKVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobmV3dG9kb0J0bilcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUaW1lZERpc3BsYXkocHJvamVjdExpc3QsIGludGVydmFsKXtcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKVxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudCA9IGludGVydmFsXG5cbiAgICBmb3IoY29uc3QgcHJvamVjdE5hbWUgaW4gcHJvamVjdExpc3Qpe1xuICAgICAgICBjb25zdCB0b2RvcyA9IHByb2plY3RMaXN0W3Byb2plY3ROYW1lXVxuICAgICAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYodG9kbyA9PT0gJycpIHJldHVyblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQodG9kbylcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnJlbW92ZScpLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmVkaXQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3ROYW1lKVxuICAgICAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXJkKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRMaXN0ZW5lcignLmVkaXQnLCBvcGVuRWRpdEZvcm0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQodG9kbyl7XG4gICAgY29uc3QgY2FyZFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZW1wbGF0ZScpLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY29uc3QgY2FyZCA9IGNhcmRUZW1wLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJylcbiAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gdG9kby50aXRsZVxuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmRhdGUnKS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZVxuICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5XG4gICAgcmV0dXJuIGNhcmRcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTaWRlYmFyKHByb2plY3RzKXtcbiAgICBjb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgIHByb2plY3RzRGlzcGxheS50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0ID09PSAnaW5ib3gnKSByZXR1cm5cbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFiJylcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiXG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3QpXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpXG4gICAgICAgIHRhYi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgdGFiLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcbiAgICAgICAgcHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKHRhYilcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihzZWxlY3RvciwgY2FsbGJhY2spe1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spXG4gICAgfSlcbn1cblxuYWRkTGlzdGVuZXIoJy5uZXctcHJvamVjdCcsIG9wZW5Qcm9qZWN0Rm9ybSlcblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmZ1bmN0aW9uIG9wZW5Ub2RvRm9ybShlKXtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9ybScpXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtLXRpdGxlJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRGb3JtKGUpe1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKVxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI2luZGV4JykudmFsdWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKVxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwb3B1bGF0ZVByb2plY3REaXNwbGF5LFxuICAgIHBvcHVsYXRlU2lkZWJhcixcbiAgICBhZGRMaXN0ZW5lcixcbiAgICBwb3B1bGF0ZVRpbWVkRGlzcGxheVxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVUkuanNcIlxuXG5jb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpXG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpXG5jb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKVxuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY29uc3QgdG9kYXlQcm9qZWN0cyA9IFByb2plY3QuZ2V0RGFpbHlQcm9qZWN0cygpXG4gICAgVmlldy5wb3B1bGF0ZVRpbWVkRGlzcGxheSh0b2RheVByb2plY3RzLCAnRGFpbHkgUHJvamVjdHMnKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxufSlcblxud2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY29uc3Qgd2Vla1Byb2plY3RzID0gUHJvamVjdC5nZXRXZWVrbHlQcm9qZWN0cygpXG4gICAgVmlldy5wb3B1bGF0ZVRpbWVkRGlzcGxheSh3ZWVrUHJvamVjdHMsICdXZWVrbHkgUHJvamVjdHMnKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxufSlcblxuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SW5ib3gpXG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmJveCgpe1xuICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdC5nZXRQcm9qZWN0VG9kb3MoJ2luYm94JylcbiAgICBWaWV3LnBvcHVsYXRlUHJvamVjdERpc3BsYXkoJ2luYm94JywgdG9kb3MpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGUoZSl7XG4gICAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JylcbiAgICBQcm9qZWN0LmRlbGV0ZVByb2plY3QocHJvamVjdClcbiAgICBWaWV3LnBvcHVsYXRlU2lkZWJhcihPYmplY3Qua2V5cyhQcm9qZWN0LmdldFByb2plY3RzKCkpKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5kZWxldGUtcHJvamVjdCcsIGhhbmRsZVByb2plY3REZWxldGUpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnByb2plY3QtdGFiJywgc2hvd1Byb2plY3RUb2RvcylcbiAgICBjb25zdCB0b2RvcyA9IFByb2plY3QuZ2V0UHJvamVjdFRvZG9zKCdpbmJveCcpXG4gICAgVmlldy5wb3B1bGF0ZVByb2plY3REaXNwbGF5KCdpbmJveCcsIHRvZG9zKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXdQcm9qZWN0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlXG4gICAgaWYoUHJvamVjdC52ZXJpZnlQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkpe1xuICAgICAgICBhbGVydCgnUHJvamVjdHMgTmFtZSBjYW5ub3QgYmUgdGhlIFNhbWUhJylcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFByb2plY3QuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICBWaWV3LnBvcHVsYXRlU2lkZWJhcihPYmplY3Qua2V5cyhQcm9qZWN0LmdldFByb2plY3RzKCkpKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5kZWxldGUtcHJvamVjdCcsIGhhbmRsZVByb2plY3REZWxldGUpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnByb2plY3QtdGFiJywgc2hvd1Byb2plY3RUb2RvcylcbiAgICBlLnRhcmdldC5yZXNldCgpXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RUb2RvcyhlKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50XG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICBpZighdG9kb3MpIHJldHVyblxuICAgIFZpZXcucG9wdWxhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TmFtZSwgdG9kb3MpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnJlbW92ZScsIGhhbmRsZVRvZG9EZWxldGUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1RvZG8oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0tdGl0bGUnKS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZVxuICAgIGNvbnN0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWVcbiAgICBQcm9qZWN0LmFkZFRvZG9Ub1Byb2plY3QocHJvamVjdE5hbWUsIHRpdGxlLCAnbG9sJywgZGF0ZSwgcHJpb3JpdHkpXG4gICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICBWaWV3LnBvcHVsYXRlUHJvamVjdERpc3BsYXkocHJvamVjdE5hbWUsIHRvZG9zKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxuICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb2RvRGVsZXRlKGUpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKVxuICAgIGNvbnN0IHRvZG9JbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG4gICAgUHJvamVjdC5yZW1vdmVUb2RvRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRvZG9JbmRleClcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKS50ZXh0Q29udGVudFxuICAgIGlmKGRpc3BsYXlQcm9qZWN0ID09PSAnRGFpbHkgUHJvamVjdHMnKXtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBQcm9qZWN0LmdldERhaWx5UHJvamVjdHMoKVxuICAgICAgICBWaWV3LnBvcHVsYXRlVGltZWREaXNwbGF5KHByb2plY3RMaXN0LCAnRGFpbHkgUHJvamVjdHMnKVxuICAgIH0gZWxzZSBpZihkaXNwbGF5UHJvamVjdCA9PT0gJ1dlZWtseSBQcm9qZWN0cycpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3QuZ2V0V2Vla2x5UHJvamVjdHMoKVxuICAgICAgICBWaWV3LnBvcHVsYXRlVGltZWREaXNwbGF5KHByb2plY3RMaXN0LCAnV2Vla2x5IFByb2plY3RzJylcbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gUHJvamVjdC5nZXRQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpXG4gICAgICAgIFZpZXcucG9wdWxhdGVQcm9qZWN0RGlzcGxheShwcm9qZWN0TmFtZSwgdG9kb3MpXG4gICAgfSBcbiAgICBWaWV3LmFkZExpc3RlbmVyKCcucmVtb3ZlJywgaGFuZGxlVG9kb0RlbGV0ZSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdFRvZG8oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZHVlRGF0ZSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjaW5kZXgnKS52YWx1ZVxuICAgIFByb2plY3QudXBkYXRlVG9kbyhwcm9qZWN0TmFtZSwgaW5kZXgsIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50XG4gICAgaWYoZGlzcGxheVByb2plY3QgPT09ICdEYWlseSBQcm9qZWN0cycpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IFByb2plY3QuZ2V0RGFpbHlQcm9qZWN0cygpXG4gICAgICAgIFZpZXcucG9wdWxhdGVUaW1lZERpc3BsYXkocHJvamVjdExpc3QsICdEYWlseSBQcm9qZWN0cycpXG4gICAgfSBlbHNlIGlmKGRpc3BsYXlQcm9qZWN0ID09PSAnV2Vla2x5IFByb2plY3RzJyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gUHJvamVjdC5nZXRXZWVrbHlQcm9qZWN0cygpXG4gICAgICAgIFZpZXcucG9wdWxhdGVUaW1lZERpc3BsYXkocHJvamVjdExpc3QsICdXZWVrbHkgUHJvamVjdHMnKVxuICAgIH0gZWxzZXtcbiAgICAgICAgY29uc3QgdG9kb3MgPSBQcm9qZWN0LmdldFByb2plY3RUb2Rvcyhwcm9qZWN0TmFtZSlcbiAgICAgICAgVmlldy5wb3B1bGF0ZVByb2plY3REaXNwbGF5KHByb2plY3ROYW1lLCB0b2RvcylcbiAgICB9IFxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5yZW1vdmUnLCBoYW5kbGVUb2RvRGVsZXRlKVxuICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlTmV3UHJvamVjdClcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVOZXdUb2RvKVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdG9kby1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRWRpdFRvZG8pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgZGlzcGxheUluYm94KClcbiAgICBWaWV3LnBvcHVsYXRlU2lkZWJhcihPYmplY3Qua2V5cyhQcm9qZWN0LmdldFByb2plY3RzKCkpKVxuICAgIFZpZXcuYWRkTGlzdGVuZXIoJy5kZWxldGUtcHJvamVjdCcsIGhhbmRsZVByb2plY3REZWxldGUpXG4gICAgVmlldy5hZGRMaXN0ZW5lcignLnByb2plY3QtdGFiJywgc2hvd1Byb2plY3RUb2Rvcylcbn1cbiIsImltcG9ydCB7aXNUb2RheSwgaXNUaGlzV2Vla30gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2Rvcy5qc1wiXG5pbXBvcnQgeyB1cGRhdGVTdG9yYWdlLCBnZXRTdG9yYWdlfSBmcm9tICcuL3N0b3JhZ2UuanMnXG5cblxuY29uc3QgcHJvamVjdHMgPSBpbml0aWFsaXplUHJvamVjdHMoKVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdHMoKXtcbiAgICBjb25zdCBzYXZlZFByb2plY3RzID0gZ2V0U3RvcmFnZSgpXG4gICAgcmV0dXJuIHNhdmVkUHJvamVjdHMgPyBzYXZlZFByb2plY3RzIDoge2luYm94OiBbXX1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICBwcm9qZWN0c1tuYW1lXSA9IFtdXG5cbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdE5hbWVdXG5cbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICBjb25zdCB0b2RvID0gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KVxuICAgIHByb2plY3RzW3Byb2plY3ROYW1lXS5wdXNoKHRvZG8pXG5cbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRvZG9JbmRleCl7XG4gICAgcHJvamVjdHNbcHJvamVjdE5hbWVdLnNwbGljZSh0b2RvSW5kZXgsIDEpXG5cbiAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0VG9kb3MocHJvamVjdE5hbWUpe1xuICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0TmFtZV1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICByZXR1cm4gcHJvamVjdHNcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyhwcm9qZWN0TmFtZSwgaW5kZXgsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KXtcbiAgICBjb25zdCB0b2RvID0gcHJvamVjdHNbcHJvamVjdE5hbWVdW2luZGV4XVxuICAgIHRvZG8uZHVlRGF0ZSA9IG5ld0RhdGVcbiAgICB0b2RvLnByaW9yaXR5ID0gbmV3UHJpb3JpdHlcblxuICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdHMpXG59XG5cbmZ1bmN0aW9uIGdldERhaWx5UHJvamVjdHMoKXtcbiAgICBjb25zdCBjbG9uZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBwcm9qZWN0cylcbiAgICBmb3IoIGNvbnN0IHByb2plY3QgaW4gY2xvbmVkT2JqKXtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBjbG9uZWRPYmpbcHJvamVjdF0ubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSlcbiAgICAgICAgICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHJldHVybiB0b2RvXG4gICAgICAgICAgICBlbHNlIHJldHVybiAnJ1xuICAgICAgICB9KVxuICAgICAgICBjbG9uZWRPYmpbcHJvamVjdF0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgICByZXR1cm4gY2xvbmVkT2JqXG59XG5cbmZ1bmN0aW9uIGdldFdlZWtseVByb2plY3RzKCl7XG4gICAgY29uc3QgY2xvbmVkT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvamVjdHMpXG4gICAgZm9yKCBjb25zdCBwcm9qZWN0IGluIGNsb25lZE9iail7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gY2xvbmVkT2JqW3Byb2plY3RdLm1hcCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpXG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSByZXR1cm4gdG9kb1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gJydcbiAgICAgICAgfSlcbiAgICAgICAgY2xvbmVkT2JqW3Byb2plY3RdID0gZmlsdGVyZWRcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lZE9ialxufVxuXG5mdW5jdGlvbiB2ZXJpZnlQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSl7XG4gICAgY29uc3QgZGVmYXVsdHMgPSBbJ0RhaWx5JywgJ0RhaWx5IFByb2plY3RzJywgJ1RoaXMgV2VlaycsICdXZWVrbHkgUHJvamVjdHMnLCAnaW5ib3gnXVxuICAgIGNvbnN0IGN1c3RvbVByb2plY3RzID0gT2JqZWN0LmtleXMocHJvamVjdHMpXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IGRlZmF1bHRzLmNvbmNhdChjdXN0b21Qcm9qZWN0cylcbiAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0TmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhZGRUb2RvVG9Qcm9qZWN0LFxuICAgIHJlbW92ZVRvZG9Gcm9tUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRQcm9qZWN0VG9kb3MsIFxuICAgIHVwZGF0ZVRvZG8sXG4gICAgZ2V0RGFpbHlQcm9qZWN0cyxcbiAgICBnZXRXZWVrbHlQcm9qZWN0cyxcbiAgICB2ZXJpZnlQcm9qZWN0TmFtZVxufSIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKHByb2plY3RzKXtcbiAgICBjb25zdCBwcm9qZWN0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnLCBwcm9qZWN0U3RyaW5nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZSgpe1xuICAgIGNvbnN0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKVxuICAgIGlmKCFwcm9qZWN0cykgcmV0dXJuIG51bGxcbiAgICBlbHNlIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RzKVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBPblBhZ2VMb2FkIGZyb20gJy4vZXZlbnRzLmpzJ1xuXG5PblBhZ2VMb2FkKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=