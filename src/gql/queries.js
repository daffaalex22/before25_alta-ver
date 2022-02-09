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

const GET_VIDEOS_BY_EVENT_ID = gql`query MyQuery($_eq: Int!) {
  before25_videos(where: {event_id: {_eq: $_eq}}) {
    id
    title
    ytId
    event_id
    date
  }
}`

const GET_VIDEO_BY_ID = gql`query MyQuery($id: Int!) {
  before25_videos_by_pk(id: $id) {
    date
    event_id
    id
    title
    ytId
  }
}`

const GET_EVENT_BY_ID = gql`query MyQuery($id: Int!) {
  before25_events_by_pk(id: $id) {
    date
    description
    id
    subtitle
    title
    videos {
      ytId
      title
      id
      event_id
      date
    }
  }
}`

const GET_ALL_EVENTS = gql`query MyQuery {
  before25_events {
    date
    description
    id
    subtitle
    title
    videos {
      date
      event_id
      id
      title
      ytId
    }
  }
}`

export {
  GET_ALL_ARTICLES,
  GET_ALL_AUTHORS,
  GET_ALL_CATEGORIES,
  GET_ARTICLE_BY_ID,
  GET_VIDEOS_BY_EVENT_ID,
  GET_VIDEO_BY_ID,
  GET_EVENT_BY_ID,
  GET_ALL_EVENTS
}