export default function (longString: string, numberOfChars: number) {
  if(longString.length <= numberOfChars) return longString;

  let shortString = "";
  for(let index = 0; index < numberOfChars; index++) {
    shortString += longString[index]
  }

  return shortString += "...";
}