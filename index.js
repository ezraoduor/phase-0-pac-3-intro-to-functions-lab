function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    console.log("Input string:", string); // Debugging input
    let lowerCaseString = string.toLowerCase();
    console.log("Lowercased string:", lowerCaseString); // Debugging output
    return lowerCaseString;
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
  }
  