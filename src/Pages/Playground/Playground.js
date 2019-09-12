import React, { useState } from 'react';
import Menu from '../../Components/Core/Menu';
import Header from '../../Components/Core/Header';
import ContentHeader from '../../Components/Core/ContentHeader';
import PlusButtton from "../../Components/PlusButton";
import ClassicModal from "../../Components/ClassicModal";
import FormComponent from "./FormComponent";

function Playground(props) {

  const [modalOpen, setModalOpen] = useState(false);

  const plus = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
    <Header history={props.history} />
    <Menu history={props.history} selected="" />

    {/*O componente ClassicModal encapsula a casca de um modal usando para abrir e fechar o boolean isOpen, titulo, subtitulo e deve-se passar*/}
    {/*um componente para dentro do renderContent onde você deverá tratar qualquer conteudo de sua necessidade*/}
    {/*onClose é chamado quando o usuario aperta o btn cancelar, e este retorna um callBack, idealmente você deve dar um toggle no seu boolean isOpen*/}
    {/*e por fim o onConfirm que retorna um callback quando o usuario aperta o btn confirmar, você deve tratar igualmente o fechamento do modal e tratar sua condiçoes em caso de confimaçao*/}
    <ClassicModal
      isOpen={modalOpen}
      title={"Cadastro de funcionarios"}
      subTitle={"Aqui voce pode cadastrar funcionarios com diferentes funcoes e permissoes"}
      renderContent={<FormComponent/>}
      onClose={() => toggleModal()}
      onConfirm={() => {toggleModal(); alert('Confirmou Uhu!');}}
    />

    <div id="main">
      <div className="row">
        <ContentHeader title="Bem vindo ao sistema" breadcrumbs={[{pageName:'Playground', pageRoute:'/home'}, {pageName:'Quer jogar um jogo?', pageRoute:null}]}/>
        <div className="col s12">
          <div className="container">
            <div className="section">
              <div className="card">
                <div className="card-content">
                  <p className="caption mb-0">
                    Hora de brincar...
                  </p>
                </div>
              </div>
            </div>

            {/*Para utilizar o Plus você apenas precisa de um callback quando ele aperta o botão *plusCallback*/}
            <PlusButtton plusCallback={plus} />
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Playground;