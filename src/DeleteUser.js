import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import * as queries from "./queries"


  export const DELETE_USER_MUTATION = gql`
  mutation MyMutation($contact_id: Int!) {
    __typename
    delete_contact(where: {contact_id: {_eq: $contact_id}}) {
      returning {
        contact_id
      }
    }
  }
`

class DeleteUser extends Component {

    render() {
      return (
        <Fragment>
          <Mutation
            mutation={DELETE_USER_MUTATION}
            variables={{contact_id: this.props.contactId}}
            refetchQueries={
                [
                {
                    query: queries.CONTACT_QUERY
                }
                ]
            }
          >
                {DELETE_USER_MUTATION => <button onClick={DELETE_USER_MUTATION}>Delete</button>}
          </Mutation>
        </Fragment>
      )
    }
  }
  
  export default DeleteUser