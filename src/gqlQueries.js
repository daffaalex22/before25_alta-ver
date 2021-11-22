// import { gql } from "@apollo/client";

// const GET_ALL_ARTICLES = gql`query GetArticles($title: String_comparison_exp!) {
//     before25_articles(where: {title: $title}) {
//       id
//       title
//       updated_at
//       description
//       created_at
//       category {
//         name
//       }
//       author {
//         name
//       }
//       content
//     }
//   }`

// const GET_ARTICLE_BY_ID = gql`query GetArticleById($id: Int! = 1) {
//   before25_articles_by_pk(id: $id) {
//     author {
//       name
//     }
//     category {
//       name
//     }
//     content
//     created_at
//     description
//     id
//     title
//     updated_at
//   }
// }`

// export default { GET_ALL_ARTICLES, /*GET_ARTICLE_BY_ID*/ };