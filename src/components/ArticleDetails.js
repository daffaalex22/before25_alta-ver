import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
// import GET_ARTICLE_BY_ID from "../../gqlQueries";
import { useHistory, useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const ArticleDetails = () => {
    const GET_ARTICLE_BY_ID = gql`query GetArticleById($id: Int! = 3) {
  before25_articles_by_pk(id: $id) {
    author {
      name
    }
    category {
      name
    }
    content
    created_at
    description
    id
    title
    updated_at
  }
}`

    const [article, setArticle] = useState({})


    const { id } = useParams();
    const [variables, setVariables] = useState({
        variables: {
            "id": id
        }
    }
    )

    const {
        loading,
        error,
        data,
        refetch
    } = useQuery(GET_ARTICLE_BY_ID, variables);



    console.log("masuk details:", article)
    useEffect(() => {
        setArticle(data?.before25_articles_by_pk)
    }, [data])

    if (loading) return 'Loading...'
    if (!article) return 'No Data'
    return (
        <div className="article-details">
            <HeaderAdmin />
            <h2>{article?.title}</h2>
            <p>Written by {article?.author?.name}</p>
            <p>{article?.content}</p>
        </div>
    );
}

export default ArticleDetails;