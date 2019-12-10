import React from 'react';
import PropTypes from 'prop-types';
const $ = window.$;

MoreDetailsButtton.propTypes = {
  optionsList: PropTypes.array.isRequired,
}

function MoreDetailsButtton(props) {

  const fireCallback = (item) => {
    if($('.tooltipped').tooltip()) $('.tooltipped').tooltip('close');
    item.optionCallback();
  }

  return (
    <div
      style={{ bottom: '50px', right: '19px' }}
      className="fixed-action-btn direction-top">
      <a className="btn-floating btn-large green gradient-shadow">
        <i className="material-icons">keyboard_capslock</i>
      </a>
      <ul>
        {props.optionsList.map((item, index) => {
          return (
            <li key={index + "optionsComponent"}>
              <a
                a href="# "
                className="btn tooltipped btn-floating blue"
                data-position={item.optionPosition}
                data-tooltip={item.optionText}
                onClick={() => fireCallback(item)}
                style={{ opacity: 0, transform: 'scale(0.4), translateY(40), translateX(0px)' }}>
                <i className="material-icons">{item.optionIcon}</i>
              </a>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default MoreDetailsButtton;
