import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import DeleteUser from './DeleteUser'
import ReactPaginate from 'react-paginate';
import './index.css';

class AllUsers extends Component {
  state = {
    currentUsers: this.props.users,
    currentPage: 1
  }

  handlePageClick = pageNumber => {
    console.log(`about to print pageNumber`)
    console.log(pageNumber.selected)
    // let selected = data.selected;
    // let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ currentPage: pageNumber.selected })
    this.setState({ currentUsers: pageNumber.selected })
  };

  render() {
    return (
      <Fragment>
        <div>Querying worked!</div>
      <div>

      <div className="commentBox">
        {/* <CommentList data={this.state.data} /> */}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(pageNumber) => { this.handlePageClick(pageNumber) }}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>

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