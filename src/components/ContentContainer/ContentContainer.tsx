import styled from "styled-components"


const Container = styled.div`
   width: 100%;
    max-width: 64rem;
    margin: 6rem auto;
 display: flex;
  flex-wrap: wrap;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
`

const ContentContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>
}

export default ContentContainer