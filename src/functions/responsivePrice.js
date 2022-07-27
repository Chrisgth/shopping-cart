export const responsivePrice = (item, multiplier) => {
  const onlyNumbers = item.price.replace(/\D/g, '');
  let totalPrice = onlyNumbers * multiplier;
  const commaAddition = (number) => {
    let splitString = number.toString().split('');
    let currentIndex = splitString.length - 3;
    let initLength = splitString.length;
    for (let i = 0; i < Math.floor(initLength / 3); i++) {
      if (currentIndex === 0) {
        return splitString.join('');
      }
      splitString.splice(currentIndex, 0, ',');
      currentIndex = currentIndex - 3;
    }
    return splitString.join('');
  };
  return commaAddition(totalPrice);
};
