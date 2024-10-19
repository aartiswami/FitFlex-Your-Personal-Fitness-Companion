import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Categories.css'

const EquipmentCategory = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [exercises, setExercises] = useState([])

    useEffect(()=>{
        if (id){
            fetchData(id)
        }
    },[window.location.href])

    const fetchData = async (id) => {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${id}`,
            params: {limit: '50'},
            headers: {
              'X-RapidAPI-Key': 'ae40549393msh0c35372c617b281p103ddcjsn0f4a9ee43ff0',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setExercises(response.data);
        } catch (error) {
            console.error(error);
        }

    }

  return (
    <div className='category-exercises-page' >
        <h1>category: <span>{id}</span></h1>

        {exercises && exercises.length > 0 ?
        
            <div className="exercises">
                {exercises.map((exercise, index) => {
                    return (
                        <div className="exercise" key={index} onClick={()=> navigate(`/exercise/${exercise.id}`)} >
                            <img src={exercise.gifUrl} alt={exercise.name} />
                            <h3>{exercise.name}</h3>
                            <ul>
                                <li>{exercise.target}</li>
                                {exercise.secondaryMuscles.map((muscle, index) => {
                                    return index < 2 && (
                                        <li key={muscle} >{muscle}</li>
                                    )
                                })}
                                
                            </ul>
                        </div>
                    )})
                }
                
            </div>
        :""}
    </div>
  )
}

export default EquipmentCategory