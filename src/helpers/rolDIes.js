const rol = (numOfDies, faces) => {
  let result = 0;

  numOfDies.forEach(() => {
    result += Math.floor(Math.random() * faces) + 1;
  });

  return result;
};
