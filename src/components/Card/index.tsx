import { useState } from 'react'
import './card.scss'

type typeProps = {
  company: string
  position?: string
  time: string
  description: string
  img?: string
}

const Index = ({ company, position, time, description, img }: typeProps) => {
  const [text, setText] = useState(false)

  return (
    <div
      className='card-content'
      onMouseEnter={() => setText(true)}
      onMouseLeave={() => setText(false)}
    >
      {text ? (
        <p className='description'>{description}</p>
      ) : (
        <>
          {img ? <img src={img} /> : <h6>{company}</h6>}
          <div className='card-info'>
            <p>{position}</p>
            <p>{time}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Index
