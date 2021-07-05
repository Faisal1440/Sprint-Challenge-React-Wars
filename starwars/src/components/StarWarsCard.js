import React from 'react'
import Styled from 'styled-components'


const Card = Styled.div`
border: 1px solid red;
width: 30%;
margin-right: 30px;
background: lightblue;

`


function StarWarsCard(props) {

    return (

        <Card>
            <h1>{props.person.name}</h1>
            <p>Birthday- {props.person.birth_year}</p>
        </Card>

    )

}


export default StarWarsCard;