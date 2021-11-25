// import GET_ALL_ARTICLES from "../../../gqlQueries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import ArticleList from "../../../components/ArticleList";
import HeaderAdmin from "../../../components/HeaderAdmin/HeaderAdmin";
import { gql } from "@apollo/client"



const HomeAdmin = ({ articleList, categoryList, authorList, editVariables, allLoading, handleEdit, ubahArticle }) => {
    return (
        <div className="home-admin">
            <HeaderAdmin />
            <ArticleList
                handleEdit={handleEdit}
                ubahArticle={ubahArticle}
                articleList={articleList}
                authorList={authorList}
                categoryList={categoryList}
                editVariables={editVariables}
                loadings={allLoading}
            />
        </div >
    );
}

export default HomeAdmin;