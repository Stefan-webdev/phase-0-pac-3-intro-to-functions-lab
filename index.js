function shout(string) {
    return string.toUpperCase()

}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    const uppercasedString = string.toUpperCase()
    console.log(uppercasedString);
    return uppercasedString
}

function logWhisper(string) {
    const lowercasedStringie = string.toLowerCase()
    console.log(lowercasedStringie)
    return lowercasedStringie
}

function sayHiToHeadphonedRoommate(string) {
    if (string ===  string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
            return "YES INDEED!"
        } else if (string === "Let's have dinner together!") {
                return "I would love to!";
            }
        }
    
        console.log(sayHiToHeadphonedRoommate("hello"));
        console.log(sayHiToHeadphonedRoommate("HELLO"));
        console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
