import React, { Component,
  } from 'react'
import { Query } from 'react-apollo'
import Login from "./Login"
import * as queries from "./queries"



class LoginParent extends Component {

  render() {
    return (
      <Query query={queries.CONTACT_QUERY}   
      fetchPolicy={"cache-and-network"}
       >
        {({ loading, error, data}) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const Users = data.contact_aggregate.nodes

          return (
            <Login
              users={Users}
            />
          )
        }}
      </Query>
    )
  }
}

export default LoginParent