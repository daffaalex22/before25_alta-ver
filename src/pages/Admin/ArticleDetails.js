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
import { useNavigate } from "react-router";

const classes = {
  field: {
    marginTop: 5,
    marginBottom: 5,
    display: 'block',
    color: "primary"
  }
}

const ArticleDetails = ({ articleList, categoryList, authorList, handleEdit, ubahArticle, editID, isEditing, addAnArticle }) => {
  const GET_ARTICLE_BY_ID = gql`query GetArticleById($id: Int! = 3) {
    before25_articles_by_pk(id: $id) {
      author {
        name
        id
      }
      category {
        name
        id
      }
      content
      created_at
      description
      id
      title
      updated_at
    }
  }`

  const navigate = useNavigate()

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
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('James Clear')
  const [category, setCategory] = useState('General')
  const [inputAuthor, setInputAuthor] = useState('James Clear')
  const [inputCategory, setInputCategory] = useState('General')
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)
  const [descrptionError, setDescriptionError] = useState(false)

  const { id } = useParams();
  const idNumber = Number(id)
  useEffect(() => {
    if (typeof (idNumber) === "number" && isEditing) {
      handleEdit(idNumber)
    }
  }, [])

  const [variables, setVariables] = useState({
    variables: {
      "id": idNumber
    }
  }
  )

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(GET_ARTICLE_BY_ID, variables);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !inputAuthor || !inputCategory || !category || !author) {
      console.log("Required Field Cannot be Empty")
    } else if (isEditing && editID) {
      // console.log('Editing an Article')
      const editedCategory = categoryList.find(item => item.name === category)
      const editedAuthor = authorList.find(item => item.name === author)
      const variableEdit = {
        _eq: editID,
        author_id: editedAuthor.id,
        category_id: editedCategory.id,
        title: title,
        description: description,
        content: content,
      }
      ubahArticle(variableEdit)
      setTitle('')
      setContent('')
      setAuthor('James Clear')
      setInputAuthor('James Clear')
      setCategory('General')
      setInputCategory('General')
      navigate('/')
    } else {
      // console.log("createArticle")
      const addedCategory = categoryList.find(item => item.name === category)
      const addedAuthor = authorList.find(item => item.name === author)
      const variableAdd = {
        author_id: addedAuthor.id,
        category_id: addedCategory.id,
        title: title,
        description: description,
        content: content,
      }
      addAnArticle(variableAdd)
      setTitle('')
      setContent('')
      setAuthor('James Clear')
      setInputAuthor('James Clear')
      setCategory('General')
      setInputCategory('General')
      navigate('/')
    }
  }

  useEffect(() => {
    setArticle(data?.before25_articles_by_pk)
  }, [data])

  useEffect(() => {
    if (article && article.author && article.category) {
      setTitle(article?.title)
      setDescription(article?.description)
      setContent(article?.content)
      setAuthor(article?.author?.name)
      setCategory(article?.category?.name)
      setInputAuthor(article?.author?.name)
      setInputCategory(article?.category?.name)
    }
  }, [article])

  if (loading) return 'Loading...'
  if (!article && isEditing) return 'No Data'

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
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="outlined"
            color="primary"
            fullWidth
            value={description}
            error={descrptionError}
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