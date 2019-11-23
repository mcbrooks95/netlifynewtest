import React, { Component, Fragment } from 'react'
// import Link from './Link'
// import { Query } from 'react-apollo'
import gql from 'graphql-tag'
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
           <div> {user.contact_email } + {` `} + {user.contact_name} </div>
          )
        }
      </div>
      </Fragment>
    )
  }

  // render() {
  //   return (
  //     <Query query={CONTACT_QUERY}   
  //     fetchPolicy={"cache-and-network"}
  //      >
  //       {({ loading, error, data}) => {
  //         if (loading) return <div>Fetching</div>
  //         if (error) return <div>Error</div>

  //         const Users = data.contact_aggregate.nodes

  //         return (
  //           <Fragment>
  //             <div>Querying worked!</div>
  //           <div>
  //             {Users.map(user =>
  //                <div> {user.contact_email } + {` `} + {user.contact_name} </div>
  //               )
  //             }
  //           </div>
  //           </Fragment>
  //         )
  //       }}
  //     </Query>
  //   )
  // }
}

export default AllUsers