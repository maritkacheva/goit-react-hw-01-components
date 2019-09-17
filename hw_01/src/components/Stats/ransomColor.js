const getRandomColor = () => {
  const color = `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;

  return color;
};

export default getRandomColor;
