import React from 'react'

function AnimalItem({ animal }) {
  return (
    <li key={animal}>
                {animal}
                {animal === "Dog" && "★"}
                </li>
                )
}

export default AnimalItem
