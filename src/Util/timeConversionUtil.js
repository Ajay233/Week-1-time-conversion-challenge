const convertSecondsToMins = (seconds) => {
  return Math.floor(seconds / 60);
}

const convertSecondsToHours = (seconds) => {
  return Math.floor(seconds / 3600);
}

const convertSecondsToDays = (seconds) => {

  return Math.floor(seconds / 86400);
}

const stringBuilder = (days, hours, minutes, seconds) => {
  let myString = "";
  if(days > 0) { myString = myString.concat('', `${days} Days`) }
  if(hours > 0) { myString = myString.concat(' ', `${hours} Hours`) }
  if(minutes > 0) { myString = myString.concat(' ', `${minutes} Minutes`) }
  if(seconds > 0) { myString = myString.concat(' ', `${seconds} Seconds`) }
  return myString
}

export const returnConvertedString = (seconds) => {
  let remainder;

  const days = convertSecondsToDays(seconds)
  remainder = seconds % 86400

  const hours = convertSecondsToHours(remainder)
  remainder = remainder % 3600

  const minutes = convertSecondsToMins(remainder)
  remainder = remainder % 60

  // return `${days} days, ${hours} hours, ${minutes} minutes, ${remainder} seconds`
  return stringBuilder(days, hours, minutes, remainder)
}
