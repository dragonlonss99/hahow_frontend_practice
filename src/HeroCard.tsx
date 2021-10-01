import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


interface Props {
    name: string;
    image: string;
    id: string;
    setSelectedCard: Function;
    selected: boolean;
}
  
const HeroCard = ({ name, image, id, setSelectedCard, selected }: Props) => {
    const history = useHistory();

    const clickHeroCard = () =>{
        setSelectedCard(id)
        history.push(`/heroes/${id}`)
    }
    return (
        <Card className='hero-card' onClick={clickHeroCard} selected={selected}>
            <img src= {image}/>
            {name}
        </Card>
    )
}

const Card = styled.div<{selected: boolean}>`
    margin: 0 5px;
    text-align: center;
    border: black 3px solid;
    font-size: 1.5rem;
    border-color: ${props => (props.selected ? 'red' : 'black')};
    &:hover{
        border-color: red;
    }
    img{
        display: block;
    }
`

export default HeroCard
