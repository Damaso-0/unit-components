import Image from 'next/image'
import '@/styles/globals.css'
import './styles.css'

interface ICard {
  title?: string
  description?: string
  image?: string
  // ...other props
}

/** Card component to be used by passing simple string parameters */
const Card = ({ title, description, image }: ICard): JSX.Element | null => {
  if (!title && !description && !image) return null

  return (
    <div className="unit_card_wrapper">
      {image && (
        <Image
          src={image}
          width={200}
          height={200}
          alt={`${title} image`}
          className="unit_card_image"
        />
      )}

      {(title || description) && (
        <div className="unit_card_content">
          {title && <h2 className="unit_card_title">{title}</h2>}
          {description && (
            <p className="unit_card_description">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Card
