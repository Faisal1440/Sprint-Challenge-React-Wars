import React, { useState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard.js'
import Styled from 'styled-components'
import axios from 'axios';


const Test = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center: 
align-items: center;
width: 100%;
margin: 0 auto;
`

function StarWarsMain01() {

    const [starwarsUser, setStarwarsUser] = useState ([]) 

     useEffect(() =>{

        axios
            .get ("https://swapi.co/api/people")

            .then (response => {
                console.log(response);
                setStarwarsUser(response.data.results)
            })

            .catch(error => {
                console.log (error)
                console.log('Sorry, The Force is Weak Within You', error)
            })

     },[])  



     return (
        <Test>
        
            {starwarsUser.map (( person ) => {
                console.log(person);
                return(

                    <StarWarsCard person = {person}
                    
                    />
                );

            })}
        </Test>
     )

        }



export default StarWarsMain01;