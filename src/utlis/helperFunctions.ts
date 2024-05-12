/**
 * Generates a random number between 0 and 999
 * 
 * @returns {number}
 */
export function randomNumber() {
  return Math.floor(Math.random()*1000)  
}

/**
 * Checks if all values in an object are truthy
 * 
 * @param {object} obj The object in which to check for all values as truthy 
 * @returns {boolean}
 */
export function allValuesTruthy(obj: object) {
  return Object.values(obj).every(Boolean)
}
 
/**
 * Checks if the arg passed is an empty object or empty string
 * 
 * @param {object | string} objectOrString The object or string to check if empty 
 * @returns {boolean | string}
 */
export function isEmptyObjectOrString(objectOrString: object | string) {
  return typeof objectOrString === "string" ? objectOrString === "" : typeof objectOrString === "object" ? Object.keys(objectOrString).length === 0 : "Please provide an string or object"
}
