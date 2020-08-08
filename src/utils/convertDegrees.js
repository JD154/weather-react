export default function convertDegrees(temp, isFahrenheit) {
  if (isFahrenheit) {
    const convertedTemp = ((temp * 1.8) + 32);
    return Math.round(convertedTemp, 10);
  }

  if (!isFahrenheit) {
    const convertedTemp = ((temp - 32) / 1.8);
    return Math.round(convertedTemp, 10);
  }

  return temp;
}
