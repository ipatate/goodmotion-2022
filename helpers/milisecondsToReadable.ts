/**
 * transform miliseconds to readable time object
 * @param millis - miliseconds
 * @returns object with minutes and seconds
 */
const millisecondsToReadable = (millis: number) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return {
    minutes: String(minutes),
    seconds: String(seconds.padStart(2, '0')),
  }
}

export default millisecondsToReadable
