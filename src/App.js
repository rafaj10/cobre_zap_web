import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthenticatedRoute from './Core/routes';

import LoginPage from './Pages/Login/Login';
import HomePage from './Pages/Home/Home';
import Playground from "./Pages/Playground/Playground";
import ContactsPage from "./Pages/Contacts";
import GroupsPage from "./Pages/Groups";

import store from './Core/redux.store';

const loading = () => <div className="loading-ui">Carregando</div>

function App() {

  const authenticatedContent = () => {
    return (
      <>
        <Route path='/home' component={HomePage} />
        <Route path='/contatos' component={ContactsPage} />
        <Route path='/grupos' component={GroupsPage} />
        {process.env.REACT_APP_ISDEV && (<Route path='/play' component={Playground} />)}
      </>
    )
  };

  return (
    <>
    <Provider store={store}>
      <Suspense fallback={loading()}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <AuthenticatedRoute
              path="/"
              caseAuth={authenticatedContent()}
              caseUnauth={<Redirect to={'/'} />}
            />
            <Redirect from='*' to='/error' />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Provider>
    </>
  );
}


export default App;