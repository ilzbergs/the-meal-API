import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Post from "../components/Interfaces/Interfaces";

interface PostArray {
    categories: Post[];
}

const HomePage: React.FC = () => {
    const [postData, setPostData] = useState<PostArray | null>(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setPostData(data))
    }, [])

    return (
        <ContentContainer>
            {postData ? (
                postData.categories.map((post) => {
                    return (
                        <Card key={post.idCategory} data={post} />
                    )
                })
            ) : (<div>loading ...</div>)}
        </ContentContainer>

    )
}

export default HomePage