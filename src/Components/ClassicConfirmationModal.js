import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const $ = window.$;

ClassicConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}

function ClassicConfirmationModal(props) {

  useEffect(() => {
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          console.log(modal, trigger);
        },
        complete: () => { } // Callback for Modal close
      }
    );
  }, []);


  useEffect(() => {
    props.isOpen ? $('#modal2').modal('open') : $('#modal2').modal('close');
  }, [props.isOpen]);

  return (
    <div id="modal2" className="modal modal-fixed-footer-confirmation">
      <div className="modal-content">
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
      </div>
        <div className="modal-footer">
          <button className="red btn btn-reset" type="reset" onClick={() => {
            props.onClose && props.onClose();
          }}>
            <i className="material-icons left">clear</i>Cancelar
          </button>
          <button style={{ marginLeft: '10px', marginRight: '10px' }} className="btn green waves-effect waves-light right" onClick={() => {
            props.onConfirm && props.onConfirm();
          }}>Confirmar
            <i className="material-icons right">send</i>
          </button>
        </div>
    </div>
  );
}

export default ClassicConfirmationModal;
