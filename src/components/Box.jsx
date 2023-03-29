import React from 'react'

const Box = ({title,value}) => {
  return (
    <div>
        <div className="box">
                    <p>{title}</p>
                    <h2>{value}</h2>
        </div>
    </div>
  )
}

export default Box