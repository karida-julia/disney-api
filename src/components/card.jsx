import s from './card.module.css'

export const Card = ({image, name, films}) => {
    return(

        <div className={s.cardBackground}> 

           <img className={s.cardImg} src={image} alt={name}/>
            <h2 className={s.cardname} >{name}</h2>
            <p className={s.cardfilms}>{films}</p>

        </div> 
    )
}