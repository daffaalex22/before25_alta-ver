import GET_ALL_ARTICLES from "../../../gqlQueries";
import useFetch from "../../../useFetch";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import ArticleList from "../../../components/ArticleList";
import HeaderAdmin from "../../../components/HeaderAdmin/HeaderAdmin";
import { gql } from "@apollo/client"

const HomeAdmin = () => {
    const GET_ALL_ARTICLES = gql`query GetArticles($title: String_comparison_exp!) {
    before25_articles(where: {title: $title}) {
      id
      title
      updated_at
      description
      created_at
      category {
        name
      }
      author {
        name
      }
      content
    }
  }`

    const [variables, setVariables] = useState({
        variables: {
            "title": {
                "_iregex": ""
            }
        }
    }
    );

    const {
        loading: allLoading,
        error: allError,
        data: allData,
        refetch: refetchAll
    } = useQuery(GET_ALL_ARTICLES, variables);



    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        if (allData) {
            setArticleList(allData.before25_articles);
        }
    }, [allData?.before25_articles])

    if (allLoading) return 'Loading...'
    if (allError) return 'Error'

    return (
        <div className="home-admin">
            <HeaderAdmin />
            <ArticleList articleList={allData?.before25_articles} />
        </div >
    );
}

export default HomeAdmin;