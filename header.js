var headerReq = new XMLHttpRequest();
headerReq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
		var header = document.getElementById('header')
    header.innerHTML = headerReq.responseText
    var hc = header.children
    for (let i = 0; i < hc.length; i++) {
			hc[i].addEventListener('click', () => {
	      location.href = hc[i].getAttribute('data-href')
	    })
    }
  }
};
headerReq.open("GET", "/header.html", true);
headerReq.send();
