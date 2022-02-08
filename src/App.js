import './App.css';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import ArticleDetails from './pages/Admin/ArticleDetails/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
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
import AuthProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Navigate } from 'react-router';
import Box from '@mui/material/Box';
import bgFaq from './assets/images/bg_faq.png';
import bgContrib from './assets/images/BG_CONTRIB.png';
import bgDetails from './assets/images/BG_DETAILS.png';
import articles from './assets/images/Articles.png';
import KursivHalfbett from './assets/fonts_b25/kursiv/GaramondKursivHalbfett.ttf';
import Container from '@mui/material/Container';
import bgHome from './assets/images/BG_HOME.png';
import bgRes from './assets/images/BG_RESOURCES.png'

const kursivHalfbett = {
  fontFamily: 'KursivHalfbett',
  fontStyle: 'semi-bold',
  fontDisplay: 'swap',
  fontWeight: '600',
  src: `
    local('KursivHalfbett'),
    local('KursivHalfbett-SemiBold'),
    url(${KursivHalfbett}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};


let theme = createTheme({
  palette: {
    primary: {
      main: '#121212'
    },
    secondary: blue,
    text: {
      primary: '#382E0B',
      // secondary: '#F8F5E2',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'KursivHalfbett', 'Roboto'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [kursivHalfbett],
      },
    }
  },
  h1: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
  h2: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
  h3: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
  h4: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
  h5: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
  h6: {
    fontFamily: '"KursivHalfbett", Open Sans',
  },
})

theme = responsiveFontSizes(theme);

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

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={
              <Box
                sx={{
                  backgroundImage: `url(${bgHome})`,
                  backgroundPosition: '40% 50%',
                  backgroundColor: '#F8F5E2'
                }}
              >
                <HeaderClient value={value} setValue={setValue} />
              </Box>
            }>
            </Route>
            <Route exact path="/resources" element={
              <Box
                sx={{
                  backgroundImage: `url(${bgRes})`,
                  backgroundPosition: '40% 50%',
                  backgroundColor: '#F8F5E2'
                }}
              >
                <HeaderClient value={value} setValue={setValue} />
              </Box>
            }>
            </Route>
            <Route path="/faq" element={
              <Box
                sx={{
                  backgroundImage: `url(${bgFaq})`,
                  backgroundPosition: '70% 50%',
                }}
              >
                <HeaderClient value={value} setValue={setValue} />
              </Box>
            }>
            </Route>
            <Route path="/contribute" element={
              <Box
                sx={{
                  backgroundImage: `url(${bgContrib})`,
                  backgroundPosition: '37% 40%',
                }}
              >
                <HeaderClient value={value} setValue={setValue} />
              </Box>
            }>
            </Route>
            <Route exact path="/resources/articles/:id" element={
              <Box
                sx={{
                  backgroundImage: `url(${bgDetails})`,
                  backgroundPosition: '60% 30%',
                  overflow: 'hidden'
                }}
              >
                <HeaderClient value={value} setValue={setValue} />
              </Box>
            }>
            </Route>
            <Route exact path="/admin" element={
              <PrivateRoute>
                <HomeAdmin
                  ubahArticle={ubahArticle}
                  handleDeleteRoot={handleDelete}
                  allLoading={allLoading}
                  editVariables={editVariables}
                  articleList={articleList}
                  categoryList={categoryList}
                  authorList={authorList}
                />
              </PrivateRoute>
            }>
            </Route>
            <Route path="/admin/articles/:id" element={
              <PrivateRoute>
                <ArticleDetails
                  ubahArticle={ubahArticle}
                  articleList={articleList}
                  categoryList={categoryList}
                  authorList={authorList}
                />
              </PrivateRoute>}>
            </Route>
            <Route path="/admin/add-article" element={
              <PrivateRoute>
                <ArticleDetails
                  ubahArticle={ubahArticle}
                  articleList={articleList}
                  categoryList={categoryList}
                  authorList={authorList}
                  addAnArticle={addAnArticle}
                />
              </PrivateRoute>}>
            </Route>
            <Route path="/admin/login" element={
              <LoginPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
