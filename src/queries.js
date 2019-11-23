
import gql from 'graphql-tag'

export const CONTACT_QUERY = gql`
query ContactQuery {
  __typename
  contact_aggregate(order_by: {contact_id: asc}) {
    nodes {
      contact_email
      contact_first_name
      contact_id
      contact_last_name
      contact_password
    }
  }
}
`