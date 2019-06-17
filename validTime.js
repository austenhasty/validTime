function validTime(time) {

  let realTime = time.split(':')
  let hours = parseInt(realTime[0])
  let minutes = parseInt(realTime[1])

  if (hours < 24 && minutes <= 59) {
    return "true"
  } else {
    return "false"
  }
}
