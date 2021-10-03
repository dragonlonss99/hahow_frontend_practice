import styled from 'styled-components'

export const List = styled.div`
    margin: 0 auto;
    display: flex;
    border: black 5px solid;
    padding: 5px;
    max-width: 56rem;
    box-sizing: border-box;
    justify-content: space-between;
`

export const Card = styled.div<{selected: boolean}>`
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

export const Bar = styled.div`
    display: flex;
    font-size: 1.2rem;
    margin: 2rem 0;
    justify-content: space-between;
    width: 18rem;

    span{
        width: 3rem;
    }
    .btn-container{
        display: flex;
        justify-content: space-between;
        width: 10rem;
        button{
            width: 2rem;
            height: 2rem;
        }
    }
`

export const Profile = styled.div`
    margin: 0 auto;
    max-width: 56rem;
    margin-top: 20px;
    border: black 5px solid;
    padding: 5px 3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .left-container{
        font-size: 1.5rem;
        width: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-bottom: 2rem;
        button{
            width: 10rem;
            height: 3rem;
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    }
`