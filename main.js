"use strict"

document.forms[0].onsubmit = (ev) => {
  ev.preventDefault()
  console.log("Hello Joe Submit!")
}
