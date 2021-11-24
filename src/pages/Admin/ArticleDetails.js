import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
// import GET_ARTICLE_BY_ID from "../../gqlQueries";
import { useHistory, useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";

const Articlecontent = () => {
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
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [contentError, setContentError] = useState(false)

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

  useEffect(async () => {
    await setArticle(data?.before25_articles_by_pk)
    // setTitle(article?.title)
  }, [data])

  useEffect(() => {
    setTitle(article?.title)
    setContent(article?.content)
  }, [article])

  if (loading) return 'Loading...'
  if (!article) return 'No Data'

  return (
    <Container className="article-content">
      {/* <HeaderAdmin /> */}
      {/* <h2>{article?.title}</h2>
      <p>Written by {article?.author?.name}</p>
      <p>{article?.content}</p> */}

      <form noValidate>
        <TextField
          // sx={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Article Title"
          variant="outlined"
          color="secondary"
          fullWidth
          value={title}
          required
          error={titleError}
        />
        <TextField
          // sx={classes.field}
          onChange={(e) => setContent(e.target.value)}
          label="Content"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={30}
          required
          value={content}
          error={contentError}
        />
      </form>
    </Container>
  );
}

export default Articlecontent;