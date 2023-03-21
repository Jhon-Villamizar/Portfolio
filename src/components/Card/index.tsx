import './card.scss'

type typeProps = {
  company: string
  position?: string
  time: string
  img?: string
}

const Index = ({ company, position, time, img }: typeProps) => {
  return (
    <div className='card-content'>
      {img ? <img src={img} /> : <h6>{company}</h6>}
      <div className='card-info'>
        <p>{position}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Index
