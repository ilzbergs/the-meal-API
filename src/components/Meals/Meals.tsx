import { Link } from "react-router-dom";
import styled from "styled-components";
import Post from "../Interfaces/Interfaces";

const StyledCard = styled(Link)`
position: relative;
text-align: center;
cursor: pointer;
:hover{
    transform: scale(1.05);
}
`
const Image = styled.img`
 width: 250px;
 height: 250px;
 position: relative;
 opacity: 0.5;
 padding: 10px;
`
const MealName = styled.div`
width: 90%;
position: absolute;
 top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
font-weight: 600;
color: black;
word-wrap: break-word;
z-index: 99;
`
const Meals: React.FC<{ data:Post }> = ({ data }) => {
    const { idMeal, strMeal, strMealThumb} = data;
    return (
        <StyledCard onClick={(): void => { }} to={`/meal/${idMeal}`}>
            <MealName>{strMeal}</MealName>
            <Image src={strMealThumb} alt="" />
        </StyledCard>  
    )
}

export default Meals
