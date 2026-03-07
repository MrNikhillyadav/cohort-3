// Create & Basic CRUD
const userScores = new Map();

userScores.set('alice', 95);      // Add/update
userScores.set('bob', 87);
userScores.set('charlie', 92);

console.log(userScores.get('alice'));  // 95
console.log(userScores.has('bob'));    // true
console.log(userScores.size);          // 3

userScores.delete('charlie');          // Remove
console.log(userScores.size);          // 2
