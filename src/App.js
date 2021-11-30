import './App.css';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import ArticleDetails from './pages/Admin/ArticleDetails/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material'
import { blue } from '@mui/material/colors';
import LoadingPage from './components/LoadingPage/LoadingPage';
import LoadingSkeleton from './components/LoadingSkeleton/LoadingSkeleton';
import Resources from './pages/Client/Resources/Resources';
import HeaderClient from './pages/Client/HeaderClient/HeaderClient';
import ArticleDetailsClient from './pages/Client/ArticleDetailsClient/ArticleDetailsClient';
import Footer from './components/Footer/Footer';
import { GET_ALL_ARTICLES, GET_ALL_AUTHORS, GET_ALL_CATEGORIES } from './gql/queries'
import { ADD_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE_BY_ID } from './gql/mutations'
import LoginPage from './pages/Admin/LoginPage/LoginPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: blue
  }
})

function App() {


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

  const [value, setValue] = useState(0);


  const ubahArticle = variableEdit => {
    editArticle({ variables: variableEdit });
    console.log('article Edited')
  };

  const addAnArticle = newArticle => {
    addArticle({ variables: newArticle })
  }

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
            <Route path="/home" element={
              <>
                <HeaderClient value={value} setValue={setValue} />
                <Footer />
              </>
            }>
            </Route>
            <Route exact path="/resources" element={
              <>
                <HeaderClient value={value} setValue={setValue} />
                <Footer />
              </>
            }>
            </Route>
            <Route path="/faq" element={
              <>
                <HeaderClient value={value} setValue={setValue} />
                <Footer />
              </>
            }>
            </Route>
            <Route path="/contribute" element={
              <>
                <HeaderClient value={value} setValue={setValue} />
                <Footer />
              </>
            }>
            </Route>
            <Route exact path="/resources/articles/:id" element={
              <>
                <HeaderClient value={value} setValue={setValue} />
                <Footer />
              </>
            }>
            </Route>
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
            <Route path="/admin/login" element={
              <LoginPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
