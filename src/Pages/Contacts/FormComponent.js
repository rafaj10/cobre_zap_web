import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  actionGetGroupsList,
} from "./contacts.providers";

FormComponent.propTypes = {
  formValidation: PropTypes.any.isRequired,
  confirmRegister: PropTypes.object,
  handleRegisterChange: PropTypes.func
}

function FormComponent(props) {

  const { groupsList } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    loadGroups();
  }, [dispatch]);

  const loadGroups = () => {
    dispatch(
      actionGetGroupsList(() => {
        //setScreenLoading(false);
      }))
  }

  const generateGroups = item => {
    return (
      <div class="icon-preview col s6 m3" style={{ display:'flex'}}><i class="material-icons dp48">check_box_outline_blank</i><span>{item.name}</span></div>
    );
  };

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
        <div className="input-field col s12">
          <input
            type="text"
            id={props.confirmRegister.phone}
            value={props.confirmRegister.phone}
            onChange={props.handleRegisterChange('phone')}
          />
          <label htmlFor="fn">Telefone</label>
        </div>
        <div className="input-field col s12">
          <label htmlFor="fn">Grupos</label><br/><br/>
          <div  style={{ display:'flex', flexAlign:'flex-start'}}>
            {groupsList.map(item => generateGroups(item))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default FormComponent;
