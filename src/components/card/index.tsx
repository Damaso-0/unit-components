import Image from 'next/image'
import '@/styles/globals.css'
import './styles.css'

interface ICard {
  title: string
  description: string
  image: string
}

const Card = ({ title, description, image }: ICard) => (
  <div className="unit_card_wrapper">
    <Image
      src={image}
      width={200}
      height={200}
      alt=""
      className="unit_card_image"
    />

    <div className="unit_card_content">
      <h2 className="unit_card_title">{title}</h2>
      <p className="unit_card_description">{description}</p>
    </div>
  </div>
)

export default Card
