let arr = [1, 3, 29, 9, 22, 3, 4, 11, 3, 4, 2, 3, 29, 4,3222, 3];

console.log([...new Set(arr)].sort((a, b) => {
    return b - a;
})[1]);
  