function load(){
  var msg = window.document.getElementById("msg")
  var image = window.document.getElementById("picture")

  var date = new Date()
  var hour = date.getHours()
  var min = date.getMinutes()
  msg.innerHTML = `${hour} hours and ${min} minutes`

  
  if(hour >= 0 && hour < 12){
    image.src = 'images/morning.jpg'
    document.body.style.background = '#dcd3ce'
  }
  else if(hour >= 12 && hour < 18){
    image.src = 'images/evening.jpg'
    document.body.style.background = '#aecfef'
  }
  else{
    image.src = 'images/night.jpg'
    document.body.style.background = '#17406c'

  }
}
