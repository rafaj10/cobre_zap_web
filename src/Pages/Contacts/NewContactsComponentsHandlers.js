import React, { useEffect, useState } from 'react';
import {
  actionCreateContact,
  actionDeleteContact
} from "./contacts.providers";
import ClassicModal from "../../Components/ClassicModal";
import ClassicConfirmationModal from "../../Components/ClassicConfirmationModal";
import FormComponent from "./FormComponent";
import { toast } from 'react-toastify';

function NewContactsComponentsHandlers(props) {

  const [newContactLoading, setNewContactLoading] = useState(false);
  const [formValidation, setFormValidation] = useState({
    isCorrect: true,
    isLoading: true,
    errorMessage: ''
  });
  const [confirmRegister, setRegisterConfirmation] = useState({
    name: '',
    phone: '',
    fields: [],
    groups: []
  });
  const [formConfirmed, setFormConfirmed] = useState(false);

  const handleRegisterChange = input => event => {
    setRegisterConfirmation({ ...confirmRegister, [input]: event.target.value });
  };

  const toggleModal = () => {
    props.setModalOpen(!props.modalOpen);
  }

  const toggleConfirmationModal = () => {
    props.setModalConfirmationOpen(!props.modalConfirmationOpen);
  }

  const submitDeleteModal = () => {
    props.setScreenLoading(true);
    actionDeleteContact({ contacts: [props.groupIdToDelete] }, (sucess) => {
      setNewContactLoading(false);
      if(!sucess) {
        toast.info("Oops tente novamente");
        props.setScreenLoading(false);
        return;
      }
      toggleConfirmationModal();
      props.loadList();
    })
  }

  const submitFormModal = () => {
    setNewContactLoading(true);
    if (
      confirmRegister.name === ""
    ) {
      setFormValidation({
        isCorrect: false,
        errorMessage: 'Atenção voce precisa preencher o campo nome'
      });
      setNewContactLoading(false);
      return;
    }
    actionCreateContact(confirmRegister, (sucess) => {
      setNewContactLoading(false);
      if(!sucess){
        toast.info("Oops tente novamente");
      } else {
        toggleModal();
        props.loadList();
      }
    })
  }

  return (
    <>

      <ClassicModal
        isOpen={props.modalOpen}
        title={"Cadastro de contato"}
        subTitle={"Aqui você pode cadastrar contatos e atrelar grupos a eles"}
        renderContent={
          <FormComponent
            confirmRegister={confirmRegister}
            handleRegisterChange={handleRegisterChange}
            formConfirmed={formConfirmed}
            formValidation={formValidation}
          />}
        onClose={() => toggleModal()}
        onConfirm={() => { submitFormModal() }}
        isModalLoading={newContactLoading}
      />

      <ClassicConfirmationModal
        isOpen={props.modalConfirmationOpen}
        title={"Voce tem certeza?"}
        subTitle={"Atencao voce deseja mesmo excluir este contato, uma vez confirmado nao será possivel desfazer esta acao"}
        onClose={() => toggleConfirmationModal()}
        onConfirm={() => { submitDeleteModal() }}
      />

    </>
  );
}

export default NewContactsComponentsHandlers;