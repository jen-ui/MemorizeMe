function generateRandomIndex(sessionLength:number, numOfCards:number) {

  const numbers = Array.from({ length: sessionLength<numOfCards?sessionLength:numOfCards }, (_, index) => index); // Create an array [0, 1, 2, ..., 9]
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get a random index
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements at index i and j
  }
  return numbers; // Return the shuffled array
}

export default generateRandomIndex
