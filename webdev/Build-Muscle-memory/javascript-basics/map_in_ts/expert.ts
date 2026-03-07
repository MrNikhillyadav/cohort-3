// Complete type-safe TypeScript Map example

// Type definitions (reusable)
type UserKey = string | { id: number };
type ScoreValue = number | string;
type UserScores = Map<UserKey, ScoreValue>;

// 1. Bulk initialize from typed array
const userData: [UserKey, ScoreValue][] = [
  ['alice', 95],
  ['bob', 87],
  [{ id: 1 }, 'VIP']
];
const scores: UserScores = new Map(userData);

// 2. Convert typed Object → Map (common pattern)
const obj: Record<string, number> = { alice: 95, bob: 87 };
const objMap: Map<string, number> = new Map(
  Object.entries(obj) as readonly [string, number][]
);

// 3. forEach iteration (fully typed callback)
scores.forEach((score: ScoreValue, user: UserKey) => {
  console.log(`${String(user)} → ${score}`);
});
// Output:
// alice → 95
// bob → 87
// [object Object] → VIP

// 4. for...of iteration (destructure with types)
for (let [user, score] of scores) {
  console.log(`${String(user)}: ${score}`);
}

scores.clear();
console.log(scores.size);  // 0
console.log(scores.size === 0);  // true (empty check)

console.log('objMap size:', objMap.size);  // 2 (unaffected)
