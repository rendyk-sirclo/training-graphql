import { gql } from "@apollo/client";

export const postSubscribeEmail = gql`
  mutation postSubscribeEmail($email: String) {
    subscribe(input: { email: $email }) {
      status {
        code
        message
        response
      }
    }
  }
`;
