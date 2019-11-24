import React, { Component, Fragment } from 'react'
// import Link from './Link'
// import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import DeleteUser from './DeleteUser'
// import { LINKS_PER_PAGE } from '../constants'


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

class AllUsers extends Component {
  render() {
    return (
      <Fragment>
        <div>Querying worked!</div>
      <div>
        {this.props.users.map(user =>
           <React.Fragment>
              <div> {user.contact_email + ` ` + user.contact_first_name + ` ` + user.contact_last_name} </div>
              <DeleteUser
              contactId={user.contact_id} />
           </React.Fragment>
          )
        }
      </div>
      </Fragment>
    )
  }
}

export default AllUsers