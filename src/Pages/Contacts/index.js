import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionGetList,
} from "./contacts.providers";
import Menu from '../../Components/Core/Menu';
import Header from '../../Components/Core/Header';
import ContentHeader from '../../Components/Core/ContentHeader';
import TbodySkeleton from '../../Components/TbodySkeleton';
import MoreDetailsButton from "../../Components/MoreDetailsButton";
import moment from 'moment';
import { toast } from 'react-toastify';
import NewContactsComponentsHandlers from "./NewContactsComponentsHandlers";

function Contacts(props) {

  const [screenLoading, setScreenLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  const [groupIdToDelete, setGroupIdToDelete] = useState(null);
  const { contactsList } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    loadList();
  }, [dispatch]);

  const loadList = () => {
    setScreenLoading(true);
    dispatch(
      actionGetList('',() => {
        setScreenLoading(false);
      }))
  }

  const plus = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const toggleConfirmationModal = () => {
    setModalConfirmationOpen(!modalConfirmationOpen);
  }

  const deleteContact = (contactId) => {
    toggleConfirmationModal();
    setGroupIdToDelete(contactId);
  }

  const generateRow = item => {
    return (
      <tbody key={item._id}>
      <tr key={item._id} style={{ cursor: 'pointer' }}>
        <td className="background-image-none center-align">
          <label>
            <input type="checkbox" onClick="toggle(this)" />
            <span></span>
          </label>
        </td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.fields.map((item, index) => index === 0 ? item.name : '')} {item.fields.length > 1 && '...'}</td>
        <td>{item.groups.map((item, index) => index === 0 ? item.name : '')} {item.groups.length > 1 && '...'}</td>
        <td>{moment(item.created_at).format('D/M/YY, h:mm a')}</td>
        <td>
          <a className="dropdown-trigger btn-floating mb-1 btn-flat waves-effect waves-light blue accent-2 white-text" href="#!" data-target="dropdown2">
            <i className="material-icons">more_horiz</i>
          </a>
          <a className="dropdown-trigger btn-floating mb-1 btn-flat waves-effect waves-light blue accent-2 white-text" style={{ marginLeft:'20px' }} href="#!" data-target="dropdown2" onClick={() => alert('delete')}>
            <i className="material-icons">edit</i>
          </a>
          <a className="dropdown-trigger btn-floating mb-1 btn-flat waves-effect waves-light red accent-2 white-text" style={{ marginLeft:'20px' }}  href="#!" data-target="dropdown2" onClick={() => deleteContact(item._id)}>
            <i className="material-icons">delete</i>
          </a>
        </td>
      </tr>
      </tbody>
    );
  };

  return (
    <>
    <Header history={props.history} />
    <Menu history={props.history} selected="contatos" />

    <NewContactsComponentsHandlers
      setScreenLoading={setScreenLoading}
      screenLoading={screenLoading}
      loadList={loadList}
      groupIdToDelete={groupIdToDelete}
      modalOpen={modalOpen}
      modalConfirmationOpen={modalConfirmationOpen}
      setModalOpen={setModalOpen}
      setModalConfirmationOpen={setModalConfirmationOpen}
    />

    <div id="main">
      <div className="row">
        <ContentHeader title="Bem vindo ao sistema" breadcrumbs={[{pageName:'Home', pageRoute:'/home'}, {pageName:'Contatos', pageRoute:null}]}/>
        <div className="col s12">
          <div className="container">

            <div className="section">
              <div className="card">
                <div className="card-content">
                  <div style={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <i className="material-icons mr-2 search-icon">search</i>
                    <input type="text" placeholder="Search Contact" className="app-filter" id="global_filter"/>
                    <button className="btn mb-1 waves-effect waves-light green" style={{ marginLeft:'20px' }} name="action">Buscar
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-area content-right">
              <div className="app-wrapper">
                <div id="button-trigger" className="card card card-default scrollspy border-radius-6 fixed-width">
                  <div className="card-content p-0">
                    <table id="data-table-contact" className="display" style={{ width:'100%'}}>
                      <thead>
                      <tr>
                        <th className="background-image-none center-align">
                          <label>
                            <input type="checkbox" onClick="toggle(this)" />
                            <span></span>
                          </label>
                        </th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Outros campos</th>
                        <th>Grupos</th>
                        <th>Criado em</th>
                        <th>Ações</th>
                      </tr>
                      </thead>
                      {screenLoading ? (
                        <TbodySkeleton numberCols={5} numberRows={5} />
                      ) : contactsList.map(item => generateRow(item))}
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <MoreDetailsButton optionsList={[
              {
                optionPosition: 'left',
                optionText: 'Novo Contato',
                optionIcon: "group",
                optionCallback: () => plus()
              },
              {
                optionPosition: 'left',
                optionText: 'Importar contatos',
                optionIcon: "group",
                optionCallback: () => alert('faça algo')
              }
            ]} />

          </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default Contacts;