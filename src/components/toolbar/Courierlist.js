import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faShuttleVan,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @see https://fontawesome.com/icons?d=gallery
 * font-awesome icon gallery
 */
class Courierlist extends Component {
  constructor(props) {
    super(props);
  };
  render() { 
    return ( 
      <div className="row courierlist">
        <div className="col-md-3">
          Car
        </div>
        <div className="col-md-5">
          <span className="courierlist-fullname">Full Name</span>
          <div>
            <FontAwesomeIcon icon={ faStar } color="rgb(242, 176, 53)"/>
            <FontAwesomeIcon icon={ faStar } color="rgb(242, 176, 53)"/>
            <FontAwesomeIcon icon={ faStar } color="rgb(242, 176, 53)" />
            <FontAwesomeIcon icon={ faStar } color="rgb(242, 176, 53)" />
            <FontAwesomeIcon icon={ faStarHalfAlt } color="rgb(242, 176, 53)"/>
          </div>
        </div>
        <div className="col-md-2">
          <div className="courierlist-icon">
            <FontAwesomeIcon icon={ faShuttleVan } color="rgb(60, 90, 153)" size="2x" />
          </div>
        </div>
        <div className="col-md-1">
          <div className="courierlist-select">
            <FontAwesomeIcon icon={ faCheckCircle } color="rgb(107, 194, 89)" />
          </div>
        </div>
      </div>
     );
  }
}
 
export default Courierlist;