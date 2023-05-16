const calculateSum = (arr, field) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][field]) {
      sum += arr[i][field];
    }
  }

  return sum;
};

export default calculateSum;
