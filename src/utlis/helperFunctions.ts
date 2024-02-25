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
 * @returns 
 */
export function allValuesTruthy(obj: any) {
  return Object.values(obj).every(Boolean)
}
