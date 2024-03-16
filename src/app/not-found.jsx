import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>NOT FOUND</h2>
        <p>page you look is not exists</p>
        <Link href={'/'}>Return Home</Link>
    </div>
  )
}

export default NotFound