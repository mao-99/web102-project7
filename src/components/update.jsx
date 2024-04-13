import { useEffect, useState } from "react"
import styles from './create.module.css';
import { supabase } from "../App";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UpdateCrewmate({}){
    const [formData, setFormData] = useState({name: '', color: '', speed: ''});
    let params = useParams();
    let id = params.id;
    useEffect(() => {
        console.log(id);
        const getCrewmate = async () => {
            const {data, error} = await supabase.from("Crewmates").select().eq("id", id).single();
            if (error){
                console.error('error: ', error);
                return;
            }
            console.log(data);
            const crewmate = data;
            setFormData({name: crewmate.name, speed: crewmate.speed, color: crewmate.color});
        }
        getCrewmate();
    }, [])
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleUpdate = async () => {
        console.log(formData);
        let name = formData.name, speed = parseInt(formData.speed), color = formData.color;
        const {data, error} = await supabase.from('Crewmates').update({name, speed, color}).eq("id", id);
        if (error){
            console.error('error: ', error)
            return
        }
        setFormData({ name: '', speed: 0, color: 'null' });
        console.log("Updated successfully")
    }
    const handleDelete = async () => {
        console.log(formData);
        const {data, error} = await supabase.from('Crewmates').delete().eq("id", id);
        if (error){
            console.error('error: ', error)
            return
        }
        setFormData({ name: '', speed: 0, color: 'null' });
        console.log('Deleted successfully')
    }

    return (
        <>
            <div className={styles.formDiv}>
                <h3>Edit Crewmate</h3>
                <div className={styles.inputGroup}>
                    <p className={styles.caption}><em>Note: The range for the speed is -32,767 to 32,767</em></p>
                </div>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name: </label><br />
                        <input className="form-control-lg" type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Type a name..."/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="speed">Speed: </label><br />
                        <input className="form-control-lg" type="number" name="speed" id="speed" value={formData.speed} onChange={handleChange}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="color">Color: </label><br />
                        <select name="color" id="color" value={formData.color} onChange={handleChange}>
                            <option value="null">Select a color</option>
                            <option value="red">Red</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                            <option value="white">White</option>
                            <option value="purple">Purple</option>
                            <option value="blank">Blank</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <Link to="/gallery"><button className={styles.submit} onClick={handleUpdate}>Update Crewmate</button></Link>
                        <Link to="/gallery"><button className={styles.submit} onClick={handleDelete}>Delete Crewmate</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}