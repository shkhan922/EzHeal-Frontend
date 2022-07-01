import React from 'react'
import Link from 'next/link'

const Hero = (props) => {
  return (
    <>
        <div className={`page-title-area ${props.bg}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{props.title}</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li>{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero