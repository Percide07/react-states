import { useState } from 'react';
import './Person.css'
const Person = ({fullName,bio,imgSrc,profession,shows})=> {
    const [bool,setBool] = useState(shows);
    const displayApp = () => setBool(!bool);
    if (shows == true) {
        return (
            <article className='Person'>
                <img src={imgSrc} alt="person" className='pict'/>
                <div className='fName'> {fullName} </div>
                <div className='bio'> {bio} </div>
                <div className='prof'> {profession} </div>
                <div className='text'>
                    <p>3 relations en commun</p>
                </div>
                <button className='btn' onClick={displayApp}>Show More...</button>
            </article>
        )
    }
    else{
        return (
            <article className='Person'>
                <p>Unaivailable</p>
            </article>
        )
    
    }
}
export default Person;