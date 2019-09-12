import React from 'react';
import PropTypes from 'prop-types';

PlusButtton.propTypes = {
  plusCallback: PropTypes.func.isRequired
}

function PlusButtton(props) {
  return (
    <div style={{ bottom: '50px', right: '19px' }} className="fixed-action-btn direction-top"><p className="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow" onClick={() => props.plusCallback()}><i className="material-icons">add</i></p>
    </div>
  );
}

export default PlusButtton;