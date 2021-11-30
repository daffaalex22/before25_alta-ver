import { useQuery, useMutation, gql } from "@apollo/client";

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

const GET_ARTICLE_BY_ID = gql`query GetArticleById($id: Int!) {
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

export { GET_ALL_ARTICLES, GET_ALL_AUTHORS, GET_ALL_CATEGORIES, GET_ARTICLE_BY_ID }