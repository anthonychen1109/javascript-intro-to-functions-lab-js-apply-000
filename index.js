function shout(string) {
  return string.toUpperCase()
}

const whisper = string => {
  return string.toLowerCase()
}

const logShout = string => {
  console.log(string.toUpperCase())
}

const logWhisper = string => {
  console.log(string.toLowerCase())
}

const sayHiToGrandma = string => {
  if(string.toLowerCase()) {
    return "I can't hear you!"
  } 
}

const sayHiToGrandma = string => {
  if (string.toUpperCase()) {
    return "YES INDEED!"
  }
}
 
 
const sayHiToGrandma = string => {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
