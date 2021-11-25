import './App.css';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import ArticleDetails from './pages/Admin/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: purple
  }
})

function App() {
  const GET_ALL_ARTICLES = gql`query GetArticles($title: String_comparison_exp!, $catName: String_comparison_exp!, $authorName: String_comparison_exp!) {
    before25_articles(where: {title: $title, category: {name: $catName}, author: {name: $authorName}}) {
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

  const GET_ALL_AUTHORS = gql`query getAllAuthors {
    before25_author {
      id
      name
      nickname
      email
      created_at
      updated_at
    }
  }`

  const GET_ALL_CATEGORIES = gql`query getAllCategories {
    before25_category {
      id
      name
      created_at
      updated_at
    }
  }`

  const EDIT_ARTICLE = gql`mutation MyMutation($author_id: Int!, $category_id: Int!, $content: String!, $description: String!, $title: String!, $_eq: Int!) {
    update_before25_articles(where: {id: {_eq: $_eq}}, _set: {author_id: $author_id, category_id: $category_id, content: $content, description: $description, title: $title}) {
      affected_rows
    }
  }`

  const [variables, setVariables] = useState({
    variables: {
      "title": {
        "_iregex": ""
      },
      "catName": {},
      "authorName": {}
    }
  }
  );

  const editVariables = (title, author, category) => {
    setVariables({
      variables: {
        "title": {
          "_iregex": title
        },
        "catName": {
          "_iregex": category
        },
        "authorName": {
          "_iregex": author
        }
      }
    })
  }

  const {
    loading: categoryLoading,
    error: categoryError,
    data: categoryData,
    refetch: refetchCategory
  } = useQuery(GET_ALL_CATEGORIES);

  const {
    loading: authorLoading,
    error: authorError,
    data: authorData,
    refetch: refetchAuthor
  } = useQuery(GET_ALL_AUTHORS);

  const {
    loading: allLoading,
    error: allError,
    data: allData,
    refetch: refetchAll
  } = useQuery(GET_ALL_ARTICLES, variables);

  const [
    editArticle, {
      data: editData,
      loading: editLoading,
      error: editError
    }
  ] = useMutation(EDIT_ARTICLE);

  const [articleList, setArticleList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [authorList, setAuthorList] = useState([])

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(0);

  const ubahArticle = variableEdit => {
    editArticle({ variables: variableEdit });
    setIsEditing(false)
    setEditID(0)
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditID(id);
  }

  useEffect(() => {
    if (allData) {
      setArticleList(allData?.before25_articles);
    }
    if (categoryData) {
      setCategoryList(categoryData?.before25_category);
    }
    if (authorData) {
      setAuthorList(authorData?.before25_author);
    }
  }, [allData, categoryData, authorData])

  if (authorLoading) return 'Loading...'
  if (authorError) return <div>{`${authorError.message}`}</div>

  if (categoryLoading) return 'Loading...'
  if (categoryError) return <div>{`${categoryError.message}`}</div>

  // if (allLoading) return 'Loading...'
  if (allError) return <div>{`${allError.message}`}</div>

  if (editLoading) return 'Loading...'
  if (editError) return <div>{`${editError.message}`}</div>

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
              <HomeAdmin
                handleEdit={handleEdit}
                ubahArticle={ubahArticle}
                allLoading={allLoading}
                editVariables={editVariables}
                articleList={articleList}
                categoryList={categoryList}
                authorList={authorList}
              />}></Route>
            <Route path="/articles/:id" element={
              <ArticleDetails
                editID={editID}
                isEditing={isEditing}
                handleEdit={handleEdit}
                ubahArticle={ubahArticle}
                articleList={articleList}
                categoryList={categoryList}
                authorList={authorList}
              />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
