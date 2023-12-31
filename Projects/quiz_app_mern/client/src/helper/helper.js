export function attemps_Number(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
}
export function flagResult(totalPoints, earnPoints, result) {
  return (totalPoints * 50) / 100 < earnPoints;
}
