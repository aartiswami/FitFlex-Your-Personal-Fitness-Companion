import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaRegDotCircle } from "react-icons/fa";
import '../styles/Exercise.css'

const Exercise = () => {

  const {id} = useParams();

  const [exercise, setExercise] = useState();

  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(()=>{
      if (id){
          fetchData(id)
      }
  },[])

  const fetchData = async (id) => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          'X-RapidAPI-Key': 'ae40549393msh0c35372c617b281p103ddcjsn0f4a9ee43ff0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

      try {
          const response = await axios.request(options);
          console.log(response.data);
          setExercise(response.data);

          fetchRelatedVideos(response.data.name)
      } catch (error) {
          console.error(error);
      }

  }

  const fetchRelatedVideos = async (name)=>{
    console.log(name)
    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: `${name}`,
        hl: 'en',
        upload_date: 't',
        duration: 'l',
        type: 'v',
        sort: 'r'
      },
      headers: {
        'X-RapidAPI-Key': 'ae40549393msh0c35372c617b281p103ddcjsn0f4a9ee43ff0',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.contents);
      setRelatedVideos(response.data.contents);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='exercise-page' >

      {exercise && (
          <div className="exercise-container">

            <div className="exercise-image">
              
                <img src={exercise.gifUrl} alt="exercise img" />

            </div>

            <div className="exercise-data">
                <h3>{exercise.name}</h3>
                <span>
                  <b>Target:</b>
                  <p>{exercise.target}</p>
                </span>
                <span>
                  <b>Equipment:</b>
                  <p>{exercise.equipment}</p>
                </span>
                <span>
                  <b>Secondary Muscles:</b>
                  <ul>
                    {exercise.secondaryMuscles.map((muscle, index) => (
                      <li key={index}>{muscle}</li>
                    ))}
                  </ul>
                </span>
                <div className="exercise-instructions">
                    <h3>Instructions</h3>
                    {exercise.instructions.map((instruction, index) => (
                      <ul>
                        <li key={index} >{instruction}</li>
                      </ul>
                    ))}
                </div>
            </div>

           
          </div>
      )}


      <div className="related-videos-container">
        <h3>Related Videos on Youtube</h3>
        {relatedVideos && relatedVideos.length > 0 && (
          
          <div className="related-videos">
            {relatedVideos.map((video, index) => { return index < 15 && (
              <div className="related-video" key={index} onClick={()=> window.open(`https://www.youtube.com/watch?v=${video.video.videoId}`, "_blank")} >
               <img src={video.video.thumbnails[0].url} alt="" />
               <h4>{video.video.title.slice(0,40)}...</h4>
               <span>
                <p>{video.video.channelName}</p>
                <p>{video.video.viewCountText}</p>
               </span>
              </div>
            )})}
          </div>
        )}
      </div>

    </div>
  )
}

export default Exercise