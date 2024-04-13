import { useEffect, useState } from "react";
import { supabase } from "../App";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import style from "./details.module.css";

export default function Details(){
    const [crewmate, setCrewmate] = useState({name: '', color: '', speed: ''});
    let params = useParams();
    let id = params.id;
    useEffect(() => {
        const getCrewmate = async () => {
            const {data, error} = await supabase.from("Crewmates").select().eq("id", id).single();
            if (error){
                console.error("Error: ", error);
                return;
            }
            console.log(data);
            setCrewmate({name: data.name, speed: data.speed, color: data.color});
        }
        getCrewmate();
    }, [])
    return (
        <>
            <div className={style.detailsCard}>
                <div className={style.cardDiv}>
                    <h1 className={style.crewmateDetail}>Name: {crewmate.name}</h1>
                    <h3 className={style.crewmateDetail}>Stats: </h3>
                    <h4 className={style.crewmateDetail}>Color: {crewmate.color}</h4>
                    <h4 className={style.crewmateDetail}>Speed: {crewmate.speed}</h4>
                    <Link to={`/edit/${id}`} className={style.crewmateDetail}><button>Edit Crewmate</button></Link>
                </div>
            </div>
        </>
    )
}