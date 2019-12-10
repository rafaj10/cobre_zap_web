import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionGetList,
  actionCreateGroup,
  actionDeleteGroup
} from "./groups.providers";
import Menu from '../../Components/Core/Menu';
import Header from '../../Components/Core/Header';
import ContentHeader from '../../Components/Core/ContentHeader';
import TbodySkeleton from '../../Components/TbodySkeleton';
import ClassicModal from "../../Components/ClassicModal";
import ClassicConfirmationModal from "../../Components/ClassicConfirmationModal";
import PlusButton from "../../Components/PlusButton";
import FormComponent from "./FormComponent";
import moment from 'moment';
import { toast } from 'react-toastify';

function Groups(props) {

  const [screenLoading, setScreenLoading] = useState(true);
  const [newGroupLoading, setNewGroupLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  const [groupIdToDelete, setGroupIdToDelete] = useState(null);
  const { groupsList } = useSelector(state => state.groups);
  const [formValidation, setFormValidation] = useState({
    isCorrect: true,
    isLoading: true,
    errorMessage: ''
  });
  const [confirmRegister, setRegisterConfirmation] = useState({
    name: ''
  });
  const [formConfirmed, setFormConfirmed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    loadList();
  }, [dispatch]);

  const loadList = () => {
    setScreenLoading(true);
    dispatch(
      actionGetList(() => {
        setScreenLoading(false);
      }))
  }

  const handleRegisterChange = input => event => {
    setRegisterConfirmation({ ...confirmRegister, [input]: event.target.value });
  };

  const plus = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleConfirmationModal = () => {
    setModalConfirmationOpen(!modalConfirmationOpen);
  }

  const deleteGroup = (groupId) => {
    toggleConfirmationModal();
    setGroupIdToDelete(groupId);
  }

  const submitDeleteModal = () => {
    setScreenLoading(true);
    actionDeleteGroup(groupIdToDelete, (sucess) => {
      setNewGroupLoading(false);
      if(!sucess) {
        toast.info("Oops tente novamente");
        return;
      }
      toggleConfirmationModal();
      loadList();
    })
  }

  const submitFormModal = () => {
    setNewGroupLoading(true);
    if (
      confirmRegister.name === ""
    ) {
      setFormValidation({
        isCorrect: false,
        errorMessage: 'Atenção voce precisa preencher o campo nome'
      });
      setNewGroupLoading(false);
      return;
    }
    dispatch(
      actionCreateGroup(confirmRegister, (sucess) => {
        setNewGroupLoading(false);
        if(!sucess){
          toast.info("Oops tente novamente");
        } else {
          toggleModal();
          loadList();
        }
      })
    )
  }

  const generateRow = item => {
    return (
      <tbody key={item._id}>
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{moment(item.created_at).format('D/M/YY, h:mm a')}</td>
        <td><a className="dropdown-trigger btn-floating mb-1 btn-flat waves-effect waves-light red accent-2 white-text" href="#!" data-target="dropdown2" onClick={() => deleteGroup(item._id)}>
          <i className="material-icons">delete</i>
        </a></td>
      </tr>
      </tbody>
    );
  };

  return (
    <>
    <Header history={props.history} />
    <Menu history={props.history} selected="grupos" />

    <ClassicModal
      isOpen={modalOpen}
      title={"Cadastro de Grupos"}
      subTitle={"Aqui você pode cadastrar grupos para facilitar a organizacao dos teus contatos"}
      renderContent={
        <FormComponent
          confirmRegister={confirmRegister}
          handleRegisterChange={handleRegisterChange}
          formConfirmed={formConfirmed}
          formValidation={formValidation}
        />}
      onClose={() => toggleModal()}
      onConfirm={() => { submitFormModal() }}
      isModalLoading={newGroupLoading}
    />

    <ClassicConfirmationModal
      isOpen={modalConfirmationOpen}
      title={"Voce tem certeza?"}
      subTitle={"Atencao voce deseja mesmo excluir este grupo, uma vez confirmado nao será possivel desfazer esta acao"}
      onClose={() => toggleConfirmationModal()}
      onConfirm={() => { submitDeleteModal() }}
    />

    <div id="main">
      <div className="row">
        <ContentHeader title="Bem vindo ao sistema" breadcrumbs={[{pageName:'Home', pageRoute:'/home'}, {pageName:'Grupos', pageRoute:null}]}/>
        <div className="col s12">
          <div className="container">

            <div className="content-area content-right">
              <div className="card">
                <div className="card-content">
                  <div id="view-borderless-table">
                    <div className="row">
                      <div className="col s12">
                        <table>
                          <thead>
                          <tr>
                            <th data-field="id">Nome</th>
                            <th data-field="date">Data de criacao</th>
                            <th data-field="action">Ação</th>
                          </tr>
                          </thead>
                          {screenLoading ? <TbodySkeleton numberCols={5} numberRows={5} /> : groupsList.map(item => generateRow(item))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PlusButton plusCallback={plus}/>

          </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default Groups;