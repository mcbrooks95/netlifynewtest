import React from 'react';
import { gql } from 'apollo-boost';
import { Query, Mutation } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

const GET_TEST_DATA = gql`
query GetTestTable {
  test_table {
    test_column
    test_column_2
  }
}
`
const INSERT_TEST_DATA =  gql`
mutation InsertTestTable {
  __typename
  insert_test_table(objects: {test_column: "vvvcx555555cvv", test_column_2: 533}) {
    returning {
      test_column
      test_column_2
    }
  }
}`


class App extends React.Component {

  
  render() {
    return (


            <Query query={GET_TEST_DATA}>
              {({ loading, error, data }) => {
                
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error :(</div>;
                  
                  console.log(`about to print data first time = ` + data)
                  let getData = data
                return (
                  
                  <Mutation mutation={INSERT_TEST_DATA}
                  refetchQueries={
                    [{ query: GET_TEST_DATA }]
                  }
                  >
                  
                  {(INSERT_TEST_DATA, { loading, error, data }) => {
                    console.log(`about to print getData = ` + getData)
                    return(
                                    <div className="App">
                                      <header className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <p>
                                          Edivvvvt <code>src/App.js</code> and save to reload.
                                        </p>
                                          {getData.test_table.map(element => {
                                            console.log(`element is ` + element)
                                            console.log(element)
                                            console.log(element.test_column)
                                            // <p>as44df</p>;
                                            // return (<p>asdf</p>)
                                            return (<p>{element.test_column} {element.test_column_2}</p>)
                                            })}
                                          
                                        <a
                                          className="App-link"
                                          href="https://reactjs.org"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          Learn React
                                        </a>

                                        <a
                                            onClick={() => {
                                              INSERT_TEST_DATA()
                                            }
                                            }
                                        >
                                          Mutation call
                                        </a>
                                      </header>
                                    </div>
                    )
                  }}
                  </Mutation>
                );
              }}
            </Query>
    )
  }
// }
}

export default App;
