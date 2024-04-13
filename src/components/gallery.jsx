import { supabase } from "../App";
import { useState, useEffect } from "react";
import Card from "./card";
import style from "./gallery.module.css";
export default function Gallery() {
    const [allCrewmates, setAllCrewmates] = useState([])
    useEffect(()=>{
        const getMates = async () => {
            const {data, error} = await supabase.from("Crewmates").select();
            if (error){
                console.error("Error: ", error);
                return
            }
            //console.log(data);
            setAllCrewmates(data);
        }
        getMates();
    }, [])

    return (
        <>
            
            <div className={style.gallery}>
                <h3 className={style.header}>This is the gallery</h3>
                {allCrewmates.map((crewmate, index) =>{
                    return (
                        <div className={style.crewmateCard} key={index}>
                            <Card name={crewmate.name} speed={crewmate.speed} color={crewmate.color} id={crewmate.id} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}