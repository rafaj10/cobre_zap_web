import React from 'react';

function FormComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" id="fn"/>
          <label htmlFor="fn">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" id="fn"/>
          <label htmlFor="fn">Sobre</label>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;