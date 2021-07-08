import React from 'react'

function Header() {
  let color = ''

  // var currDate = new Date(2021, 7, 5, 11)
  var currDate = new Date()
  currDate = currDate.getHours()
  var greeting = ''
  if (currDate > 1 && currDate <= 11) {
    color = "Red"
    greeting = 'Morning'
  } else if (currDate >= 12 && currDate <= 16) {
    color = "Orange"
    greeting = 'Afternoon'
  } else if (currDate >= 17 && currDate <= 20) {
    color = "Aqua"
    greeting = 'Evening'
  } else {
    color = "Black"
    greeting = 'Night'
  }
  return (
    <>
      <h1>Hello World, Good <span style={{color}}> {greeting} </span></h1>
    </>
  )
}

export default Header;