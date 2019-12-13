import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
border: 1px solid red;
width: 350px;
margin: 15px:
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