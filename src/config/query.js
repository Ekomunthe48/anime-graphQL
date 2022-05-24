import { gql } from "@apollo/client";

export const ANIME_COLLECT_HOME = gql`
  query {
    Page(page: 1, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(season: SPRING, seasonYear: 2022) {
        id
        title {
          english
          romaji
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        episodes
        description
        genres
        averageScore
        popularity
      }
    }
  }
`;

export const GET_BYID = gql`
  query ($idAnime: Int) {
    Media(id: $idAnime) {
      id
      title {
        romaji
        english
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      episodes
      description
      genres
      popularity
      averageScore
    }
  }
`;

// Page(page: 1, perPage: 10){
//     pageInfo {
//       total
//       currentPage
//       lastPage
//       hasNextPage
//       perPage
//     }
//      media (season: SPRING, seasonYear: 2022) {
//       id
//       title {
//         romaji
//         english
//       }
//       coverImage {
//         extraLarge
//         large
//         medium
//         color
//       }
//       bannerImage
//       episodes
//       description
//       genres
//       averageScore
//     }
//   }

export const GET_FAV_ANIME = gql`
  query GetFav {
    collectionFav @client
  }
`;
