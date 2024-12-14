/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let asteroidYears = data.asteroids.map(m => m.discoveryYear)
  let commonYear = asteroidYears.sort((a,b) => asteroidYears.filter(m => m === a).length - asteroidYears.filter(m => m === b).length).pop();
  return commonYear
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
