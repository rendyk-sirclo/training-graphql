import { gql } from "@apollo/client";

export const getCategories = gql`
  query getCategories {
    categories(filters: {}) {
      items {
        id
        name
        image
      }
    }
  }
`;

export const getCategoryById = gql`
  query getCategoryById($categoryId: Int) {
    category(id: $categoryId) {
      name
      products {
        items {
          id
          sku
          name
          image {
            url
          }
        }
      }
    }
  }
`;
