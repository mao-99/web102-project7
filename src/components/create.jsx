import { useState } from "react"
import styles from './create.module.css';
import { supabase } from "../App";

export default function CreateCrewmate(){
    const [formData, setFormData] = useState({ name: '', speed: 0, color: 'null' })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let name = formData.name, speed = parseInt(formData.speed), color = formData.color;
        const {data, error} = await supabase.from('Crewmates').insert([{name, speed, color }])
        if (error){
            console.error('error: ', error)
            return
        }
        setFormData({ name: '', speed: 0, color: 'null' });
    }

    return (
        <>
            <div className={styles.formDiv}>
                <form onSubmit={handleSubmit} className={styles.form}>
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
                        <input type="submit" value="Create Crewmate" className={styles.submit} />
                    </div>
                </form>
            </div>
        </>
    )
}