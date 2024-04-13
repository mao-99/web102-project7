import style from './card.module.css'
import { Link } from 'react-router-dom'
export default function Card({ color, name, speed, id }){

    return (
        <> 
            <div className="card">
                <Link to={`/details/${id}`}>
                        <img src={`/${color}Crewmate.jpg`} alt="a crewmate" className={style.cardImage}/>
                        <h2>{name}</h2>
                        <h3>Color: {color}</h3>
                        <h3>Speed: {speed}</h3>
                </Link>
                <Link to={`/edit/${id}`}><button>Edit Crewmate</button></Link>
            </div>
        </>
    )
}