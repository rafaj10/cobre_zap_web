import React from 'react';
import Menu from '../../Components/Core/Menu';
import Header from '../../Components/Core/Header';
import ContentHeader from '../../Components/Core/ContentHeader';

function Home(props) {

  return (
    <>
      <Header history={props.history} />
      <Menu history={props.history} selected="home" />
      <div id="main">
        <div className="row">
          <ContentHeader title="Bem vindo ao sistema" breadcrumbs={[{pageName:'Home', pageRoute:'/home'}, {pageName:'Bem Vindo', pageRoute:null}]}/>
          <div className="col s12">
            <div className="container">
              <div className="section">
                <div className="card">
                  <div className="card-content">
                    <p className="caption mb-0">
                      Bem vindo ao dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;