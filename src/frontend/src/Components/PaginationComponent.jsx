import React from 'react';
import Pagination from "react-js-pagination";

export class PaginationComponent extends React.Component {

    render() {
        return (
            <div>
                <Pagination
                    hideNavigation
                    hideFirstLastPages
                    activePage={this.props.activePage}
                    itemsCountPerPage={this.props.itemsCountPerPage}
                    totalItemsCount={this.props.totalItemsCount}
                    itemClass='page-item'
                    linkClass='btn btn-light'
                    onChange={this.props.handlePageChange}/>
            </div>
        )
    }


}