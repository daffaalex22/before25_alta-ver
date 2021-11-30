import { useQuery, useMutation, gql } from "@apollo/client";

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

export { ADD_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE_BY_ID }