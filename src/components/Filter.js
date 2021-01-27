import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
              <div className="filter-result" >{ this.props.count} {" "}Products</div>
              <div className="filter-sort">Order{" "} 
              <select value={this.props.sort} onChange={this.props.sortProducts}>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                </select>
                </div>
              <div className="filter-size">Filter{" "} 
              <select value={this.props.sort} onChange={this.props.filterProducts}>
                  <option value="">All</option>
                  <option value="XXL">XXL</option>
                  <option value="XL">XL</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                  </select>
                  </div>
            </div>
        )
    }
}
