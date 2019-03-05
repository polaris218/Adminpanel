import React, { Component } from 'react';
import { connect } from 'react-redux';

import Courierlist from './toolbar/Courierlist';
import Fingraph from './graph/Fingraph';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class Financial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityid: null,
      lessthan3: false,
      morethan3: false,
      morethan4: false,
      top: false,
      sender: false,
      courier: false,
      cityname: 'Select City',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {
    this.props.getCityListWatcher();
  };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value || event.target.checked,
    })
  };
  handleSubmit(event) {
    event.preventDefault();
    const {
      cityid,
      lessthan3,
      morethan3,
      morethan4,
      top,
      sender,
      courier,
    } = this.state;

  };
  render() { 
    const { city } = this.props;
    return ( 
      <div className="container">
        <div className="card">
          <div className="card-header">Courier Financial</div>
          <div className="card-body">
            <div className="row">
              <form className="col-md-3 financial-search-form" onSubmit={this.handleSubmit}>
                <div className="dropdown financial-dropdown-button">
                  <button
                    className="btn btn-deault dropdown-toggle search-button"
                    type="button"
                    id="citymenu"
                    data-toggle="dropdown"
                  >
                    {this.state.cityname}
                  </button>
                  <div className="dropdown-menu">
                    {
                      city.map((item, key) => (
                        <button
                          key={key}
                          className="dropdown-item select-country"
                          type="button"
                          onClick={() => this.setState({cityid: item._id, cityname: item.name})}
                        >
                          { item.name }
                        </button>
                      ))
                    }
                  </div>
                </div>
                <div>
                  <span className="form-subtitle">Rating</span>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="lessthan3"
                      value="option1"
                      name="lessthan3"
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" >less than 3</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="morethan3"
                      value="option2"
                      name="morethan3"
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" >more than 3</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="morethan4"
                      value="option3"
                      name="morethan4"
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" >more than 4</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="top"
                      value="option4"
                      name="top"
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" >top</label>
                  </div>
                </div>
                <div className="financial-list-type">
                  <span className="form-subtitle">Type</span>
                  <div className="form-check">
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="sender"
                        name="sender"
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">Sender</label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="courier"
                        name="courier"
                        onChange={this.handleChange}
                      />
                      <label className="form-check-label">Courier</label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary financial-form-search-button"
                >
                  Search
                </button>
              </form>
              <div className="col-md-4 financial-courier-list">
                <Courierlist />
                <Courierlist />
                <Courierlist />
                <Courierlist />
                <Courierlist />
                <Courierlist />
                <Courierlist />
              </div>
              <div className="col-md-4 financial-selected-list">
                <Courierlist />
                <Courierlist />
                <Courierlist />
              </div>
            </div>
            <hr />
            <div className="row financial-graph">
              <div className="col-md-8 offset-md-2">
                <Fingraph />
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Financial);