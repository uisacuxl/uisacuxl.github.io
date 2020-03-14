var loaded=true
{
  let req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('header').innerHTML = req.responseText
      loaded = !loaded
      if(loaded)
        onLoad()
    }
  }
  req.open("GET", "/header.html", true)
  req.send()
}
{
  let req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('footer').innerHTML = req.responseText
      loaded = !loaded
      if(loaded)
        onLoad()
    }
  }
  req.open("GET", "/footer.html", true)
  req.send()
}
function onLoad() {
  // make everything with 'link' as class a link
  var lc=document.getElementsByClassName('link')
  for (var i = 0; i < lc.length; i++) {
    let lu = lc[i].getAttribute('data-href')
    lc[i].addEventListener('click', () => {
      location.href = lu
    })
  }
}
