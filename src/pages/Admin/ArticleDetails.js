import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
// import GET_ARTICLE_BY_ID from "../../gqlQueries";
import { useHistory, useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const classes = {
  field: {
    marginTop: 5,
    marginBottom: 5,
    display: 'block',
    color: "primary"
  }
}

const ArticleDetails = ({ articleList, categoryList, authorList, handleEdit, ubahArticle, editID, isEditing }) => {
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

  const categoryOptions = categoryList?.map((category) => {
    const categoryOption = category.name
    return categoryOption
  })
  const authorOptions = authorList?.map((author) => {
    const authorOption = author.name
    return authorOption
  })

  const [article, setArticle] = useState({})
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('James Clear')
  const [category, setCategory] = useState('General')
  const [inputAuthor, setInputAuthor] = useState('James Clear')
  const [inputCategory, setInputCategory] = useState('General')
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    handleEdit(id)
  }, [])

  const [variables, setVariables] = useState({
    variables: {
      "id": id
    }
  }
  )

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_ARTICLE_BY_ID, variables);

  useEffect(() => {
    setArticle(data?.before25_articles_by_pk)
  }, [data])

  useEffect(() => {
    if (article && article.author && article.category) {
      setTitle(article?.title)
      setContent(article?.content)
      setAuthor(article?.author?.name)
      setCategory(article?.category?.name)
      setInputAuthor(article?.author?.name)
      setInputCategory(article?.category?.name)
    }
  }, [article])

  if (loading) return 'Loading...'
  if (!article) return 'No Data'

  return (
    <>
      <HeaderAdmin />
      <Container className="article-content" sx={{ marginTop: 10 }}>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            sx={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Article Title"
            variant="outlined"
            color="primary"
            fullWidth
            value={title}
            required
            error={titleError}
          />
          <TextField
            sx={classes.field}
            onChange={(e) => setContent(e.target.value)}
            label="Content"
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={15}
            required
            value={content}
            error={contentError}
          />
          <Autocomplete
            value={author}
            onChange={(event, value) => setAuthor(value)}
            onInputChange={(event, value) => setInputAuthor(value)}
            inputValue={inputAuthor}
            value={author}
            sx={classes.field}
            disablePortal
            id="combo-box-demo"
            options={authorOptions}
            required
            renderInput={(params) => <TextField {...params} label="Author" />}
          />
          <Autocomplete
            onChange={(event, value) => setCategory(value)}
            onInputChange={(event, value) => setInputCategory(value)}
            inputValue={inputCategory}
            value={category}
            sx={classes.field}
            disablePortal
            id="combo-box-demo"
            options={categoryOptions}
            required
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <Button
            sx={{ marginBottom: 10 }}
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default ArticleDetails;