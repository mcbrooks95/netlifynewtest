import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import AllUsers from "./AllUsers"
import * as queries from "./queries"

const INSERT_CONTACT_MUTATION = gql`
  mutation InsertMutation($contact_email: String!, $contact_password: String!) {
    insert_contact(objects: {contact_email: $contact_email, contact_password: $contact_password}) {
      returning {
        contact_id
      }
    }
  }
`
class Login extends Component {
  state = {
    contact_email: '',
    contact_password: '',
  }

  render() {
    const { contact_email, contact_password } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            value={contact_email}
            onChange={e => this.setState({ contact_email: e.target.value })}
            type="text"
          />
          <input
            value={contact_password}
            onChange={e => this.setState({ contact_password: e.target.value })}
            type="text"
          />
          <AllUsers
              users={this.props.users}
           />
        </div>
        <Mutation
          mutation={INSERT_CONTACT_MUTATION}
          variables={{ contact_email, contact_password }}
          refetchQueries={
            [
              {
                query: queries.CONTACT_QUERY
              }
            ]
          }
        >
          {INSERT_CONTACT_MUTATION => <button onClick={INSERT_CONTACT_MUTATION}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default Login