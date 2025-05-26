document.getElementById("button1").addEventListener("click", function () {
  let h1 = document.getElementById("Para");
  h1.textContent = "Hello i am para";
  console.log(h1.textContent);
  // h1.innerText="Hi Bro!"
});

var i = 0;
document.getElementById("Butt").addEventListener("click", function () {
  let l1 = document.getElementById("list").firstElementChild;
  //   l1.style.backgroundColor = "green";
  //   l1.style.color = "white";


  if (i < 1) {
    let newitem = document.createElement("li");
    newitem.textContent = "boooooo";
    document.getElementById("list").appendChild(newitem);
    document.getElementById("list").firstElementChild.remove()
    i++;
  }

  if (l1.classList.contains("highlight")) {
    l1.classList.remove("highlight");
    l1.classList.add("removehighlight");
    this.innerText = "Add Highlight";
  } else {
    l1.classList.remove("removehighlight");
    l1.classList.add("highlight");
    this.innerText = "Remove Highlight";
  }
});

