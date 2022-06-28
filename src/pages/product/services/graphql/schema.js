import { gql } from "@apollo/client";

export const getProductBySku = gql`
  query getProductBySku($productSku: String) {
    products(filter: { sku: { eq: $productSku } }) {
      items {
        id
        name
        image {
          url
        }
        description {
          html
        }
        price_range {
          maximum_price {
            regular_price {
              currency
              value
            }
          }
        }
      }
    }
  }
`;
