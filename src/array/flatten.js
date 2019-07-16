const flatten = array => {
  return array.reduce((result, item) => result.concat(item), []);
};

export default flatten;
