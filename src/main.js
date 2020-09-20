var extension = browser.management.getAll();
var result = extension.then((data) => print(data))

function print(e) {
  console.log(e)
  var list = '<ul>'
  for(let i=0; i<e.length; i++)
  {
    if(e[i].enabled) {
      list += "<li>" + e[i].name + "</li>";
    }
  }
  list += '</ul>'
  document.getElementById("extensions-list").innerHTML = list
}