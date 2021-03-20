import React from 'react'

export default function Button(props) {
  function getStyle() {
    switch (props.color) {
      case 'primary':
        return { backgroundColor: 'blue' }
      case 'secondary':
        return { backgroundColor: 'red' }
      case 'third':
        return { backgroundColor: 'green' }
      default:
        break;
    }
  }
  return (
    <button style={getStyle()}>
      {props.children}
    </button>
  )
}
