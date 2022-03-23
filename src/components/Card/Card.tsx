import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Post from '../Interfaces/Interfaces'

const StyledCard = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid black;
  padding: 3rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`
const Image = styled.img`
  max-width: 15rem;
`
const Description = styled.p`

`
const Category = styled.div`
  font-weight: 900;
`
const Wrapper = styled.div`
  margin-left: 1rem;
`

const Card: React.FC<{ data: Post }> = ({ data }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = data;
  return (
    <StyledCard onClick={(): void => { }} to={`/category/${strCategory.toLowerCase()}`}>
      <Image src={strCategoryThumb} alt={data.strCategory} />
      <Wrapper>
        <Category>{strCategory}</Category>
        <Description>{strCategoryDescription}</Description>
      </Wrapper>
    </StyledCard>
  )
}

export default Card
