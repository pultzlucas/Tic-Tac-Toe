/**
 * @author Lucas Lopes pultz
 *  
 * Function Library to increase your WorkFlow :)
 */

//PROTOTYPE FUNCTIONS

Number.prototype.isInteger = function () {
    return parseInt(this) === parseFloat(this)
}

Number.prototype.isPrime = function () {
    if (this === 0) return false

    for (let divisor = 2; divisor < this; divisor++) {
        if ((this / divisor).isInteger()) return false
    }

    return true
}

String.prototype.toNumber = function () {
    const stringIsEmpty = this === ''
    return isNaN(Number(this)) || stringIsEmpty ? this : Number(this)
}

String.prototype.clear = function (funcs = { spaces: true, acents: true, specialCaracters: true, lowerCase: true }) {
    const { spaces, acents, specialCaracters, lowerCase } = funcs
    const remove_spaces = string => string.replace(/ /g, '').trim()
    const remove_acents = string => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const remove_special_caracters = string => string.replace(/\W+/g, '')
    const transformInLowerCase = string => string.toLowerCase()
    const clean_string_funcs = (string, funcs) => funcs.reduce((acc, func) => func(acc), string)

    let funcsToExecute = []

    if (spaces) funcsToExecute.push(remove_spaces)
    if (acents) funcsToExecute.push(remove_acents)
    if (specialCaracters) funcsToExecute.push(remove_special_caracters)
    if (lowerCase) funcsToExecute.push(transformInLowerCase)

    return clean_string_funcs(this, funcsToExecute)
}

Array.prototype.removeElement = function (element) {
    const elementIndex = this.indexOf(element)
    this.splice(elementIndex, 1)
}

Array.prototype.repet = function (elem) {
    return this.reduce((acc, e) => e === elem ? acc + 1 : acc, 0)
}

Element.prototype.addClass = function (classValue) {
    this.classList.add(classValue)
}

Element.prototype.removeClass = function (classValue) {
    this.classList.remove(classValue)
}

Element.prototype.isOpen = function () {
    return !this.classList.contains('hidden')
}

Element.prototype.show = function () {
    this.classList.remove('show')
    this.classList.remove('hidden')
    this.classList.add('show')
}

Element.prototype.hide = function () {
    this.classList.remove('hidden')
    this.classList.remove('show')
    this.classList.add('hidden')
}

Element.prototype.disable = function () {
    this.setAttribute('disabled', 'disabled')
}

Element.prototype.stylesheet = function (styles) {
    const stylesArray = Object.entries(styles)
    stylesArray.forEach(([prop, value]) => this.style[prop] = value)
}

Storage.prototype.getAll = function () {
    return newArray(this.length).map((_, i) => JSON.parse(this[this.key(i)]))
}

HTMLDataListElement.prototype.addOption = function (itemName, content) {
    createElement('option', { value: itemName }, this).textContent = content
}

//SINGLE FUNCTIONS
function createElement(element_name, attributes, who_append) {
    const element = document.createElement(element_name)
    const attributesArray = Object.entries(attributes)

    if (attributes)
        attributesArray.forEach(([key, value]) => element.setAttribute(key, value))

    if (who_append) who_append.appendChild(element)

    return element
}

function randomNumber(maxLength = 1, minLength = 0) {
    return Math.floor(Math.random() * maxLength + minLength)
}

function forEachStorageKey(callback) {
    for (let item = 0; item < localStorage.length; item++) {
        callback(localStorage.key(item))
    }
}

function findStorageKey(callback) {
    for (let index = 0; index < localStorage.length; index++) {
        let item = localStorage.key(index)
        callback(item)
        if (callback(item)) return item
    }
}

function lowerLetters() {
    let array_lower = []
    for (let letter = 97; letter < 123; letter++)
        array_lower.push(String.fromCharCode(letter))

    return array_lower
}

function upperLetters() {
    let array_upper = []
    for (let letter = 65; letter < 91; letter++)
        array_upper.push(String.fromCharCode(letter))

    return array_upper
}

function maxNumberOf(array) {
    return array.reduce((maxLength, length) => length > maxLength ? length : maxLength, 0)
}

function minNumberOf(array) {
    return array.reduce((minLength, length) =>
        length < minLength ? length : minLength, this.maxNumberOf(array))
}


function newArray(length, fill) {
    return new Array(length).fill(fill)
}

function addEventToElements(elemArray, eventType, callback) {
    Array.from(elemArray).forEach(elem => elem.addEventListener(eventType, callback))
}

function removeEventFromElements(elemArray, eventType, callback) {
    Array.from(elemArray).forEach(elem => elem.removeEventListener(eventType, callback))
}



