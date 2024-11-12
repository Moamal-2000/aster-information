export function changeArrToPairs(data) {
  const result = [];

  for (let i = 0; i < data.length; i += 2) {
    const nestedArr = [data[i], data[i + 1] || {}];
    result.push(nestedArr);
  }

  return result;
}