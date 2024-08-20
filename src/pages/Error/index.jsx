import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>
            oppsss, Something is wrong
            <pre>
                <Link to={"/"}>Go to home page</Link>
            </pre>
        </h1>
    </div>
  )
}

export default Error