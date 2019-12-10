import React from 'react';
import PropTypes from 'prop-types';

FormComponent.propTypes = {
  formValidation: PropTypes.any.isRequired,
  confirmRegister: PropTypes.object,
  handleRegisterChange: PropTypes.func
}

function FormComponent(props) {

  return (
    <div>
      {!props.formValidation.isCorrect && (
        <div className="row">
          <div className="card-alert card red lighten-5">
            <div className="card-content red-text">
              <p>{props.formValidation.errorMessage}</p>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            id={props.confirmRegister.name}
            value={props.confirmRegister.name}
            onChange={props.handleRegisterChange('name')}
          />
          <label htmlFor="fn">Nome</label>
        </div>
      </div>
    </div>

  );
}

export default FormComponent;
