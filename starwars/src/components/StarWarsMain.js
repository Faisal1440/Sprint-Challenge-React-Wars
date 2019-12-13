import React, { useState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard.js'
import styled from 'styled-components'
import axios from 'axios';


const wrapper = styled.div`
display:flex;
flex-wrap;

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

        <wrapper>
            {starwarsUser.map (( person ) => {
                console.log(person);
                return(

                    <StarWarsCard person = {person}
                    
                    />
                );

            })}
        </wrapper>
     )

        }



export default StarWarsMain01;