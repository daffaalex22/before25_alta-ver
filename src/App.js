import './App.css';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import ArticleDetails from './pages/Admin/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
import { blue } from '@mui/material/colors';
import LoadingPage from './components/LoadingPage/LoadingPage';
import LoadingSkeleton from './components/LoadingSkeleton/LoadingSkeleton';
import Resources from './pages/Client/Resources/Resources';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: blue
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

  const ADD_ARTICLE = gql`mutation addArticle($author_id: Int!, $category_id: Int!, $content: String!, $description: String!, $title: String!) {
    insert_before25_articles_one(object: {author_id: $author_id, category_id: $category_id, content: $content, description: $description, title: $title}) {
      id
      author_id
      category_id
      content
      description
      title
    }
  }`

  const DELETE_ARTICLE_BY_ID = gql`mutation deleteArticleById($id: Int!) {
    delete_before25_articles_by_pk(id: $id) {
      title
      id
      description
      content
      category_id
      author_id
      category {
        name
      }
      author {
        name
      }
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
  ] = useMutation(EDIT_ARTICLE, { refetchQueries: [GET_ALL_ARTICLES] });

  const [
    addArticle, {
      data: addData,
      loading: addLoading,
      error: addError
    }
  ] = useMutation(ADD_ARTICLE, { refetchQueries: [GET_ALL_ARTICLES] });

  const [
    deleteArticleById, {
      data: deleteData,
      loading: deleteLoading,
      error: deleteError
    }
  ] = useMutation(DELETE_ARTICLE_BY_ID, { refetchQueries: [GET_ALL_ARTICLES] });

  const [articleList, setArticleList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [authorList, setAuthorList] = useState([])

  // const [isEditing, setIsEditing] = useState(false);
  // const [editID, setEditID] = useState(0);

  const ubahArticle = variableEdit => {
    editArticle({ variables: variableEdit });
    // setIsEditing(false)
    // setEditID(0)
    console.log('article Edited')
  };

  const addAnArticle = newArticle => {
    addArticle({ variables: newArticle })
  }

  // const handleEdit = (id) => {
  //   setIsEditing(true);
  //   setEditID(id);
  // }

  const handleDelete = (deleteId) => {
    deleteArticleById({ variables: { id: deleteId } })
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

  if (authorLoading) return <LoadingPage />
  if (authorError) return <div>{`${authorError.message}`}</div>

  if (categoryLoading) return <LoadingPage />
  if (categoryError) return <div>{`${categoryError.message}`}</div>

  // if (allLoading) return <LoadingPage/>
  if (allError) return <div>{`${allError.message}`}</div>

  if (editLoading) return <LoadingPage />
  if (editError) return <div>{`${editError.message}`}</div>

  if (addLoading) return <LoadingPage />
  if (addError) return <div>{`${addError.message}`}</div>

  if (deleteLoading) return <LoadingPage />
  if (deleteError) return <div>{`${deleteError.message}`}</div>

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
              <Resources />
            }></Route>
            <Route path="/admin" element={
              <HomeAdmin
                ubahArticle={ubahArticle}
                handleDeleteRoot={handleDelete}
                allLoading={allLoading}
                editVariables={editVariables}
                articleList={articleList}
                categoryList={categoryList}
                authorList={authorList}
              />}></Route>
            <Route path="/admin/articles/:id" element={
              <ArticleDetails
                ubahArticle={ubahArticle}
                articleList={articleList}
                categoryList={categoryList}
                authorList={authorList}
              />}></Route>
            <Route path="/admin/add-article" element={
              <ArticleDetails
                ubahArticle={ubahArticle}
                articleList={articleList}
                categoryList={categoryList}
                authorList={authorList}
                addAnArticle={addAnArticle}
              />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
