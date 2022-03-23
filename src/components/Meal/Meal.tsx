import styled from "styled-components"
import Post from "../Interfaces/Interfaces"

const StyledCard = styled.div`
position: relative;
text-align: center;
`
const Image = styled.img`
width: 45rem;
position: relative;
margin-bottom:4rem;
`
const Title = styled.div`
background-color: rgba(246, 245, 245, 0.8);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
width: 100%;
font-size: 2rem;
`
const Instructions = styled.div`
width:45rem;
text-align: left;
`
const SectionName = styled.div`
background-color: rgba(246, 245, 245, 0.8);
font-size: 1.5rem;
text-align: left;
margin: 3rem 0;
`
const Ingredient = styled.div`
width: 45rem;
word-wrap: break-word;
`

const MealInfo: React.FC<{ data: Post }> = ({ data }) => {
    const { strMeal, strMealThumb, strInstructions} = data;
    // const ingredients = Object.values(data).filter(key => key.includes('strIngredient')).map(key=>data[key]);
    return (
        <StyledCard>
            <Title>{strMeal}</Title>
            <Image src={strMealThumb} alt="" />
            <SectionName>Ingredients</SectionName>
            {/* <Ingredient>{ingredients}</Ingredient> */}
            <SectionName>Instructions</SectionName>
            <Instructions>{strInstructions}</Instructions>
        </StyledCard>
    )
}

export default MealInfo