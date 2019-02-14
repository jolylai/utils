# baseMatches

> [getMatchData](/lodash/getMatchData.md);[baseIsMatch](/lodash/baseIsMatch.md)

```js
function baseMatches(source) {
  const matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return object => object === source || baseIsMatch(object, source, matchData);
}
```
