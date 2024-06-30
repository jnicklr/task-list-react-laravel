import React from 'react'

function Button({text, action}) {
  return (
    <form onSubmit={action}>
        <button type='submit' className='btn'>{text}</button>
    </form>
  )
}

export default Button