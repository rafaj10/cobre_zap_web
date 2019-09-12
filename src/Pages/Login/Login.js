import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionLogin } from "./login.providers";

function Login(props) {

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    user: '',
    password: '',
    loading:false
  });

  const handleFormInputChange = input => event => {
    setForm({ ...form, [input]: event.target.value });
  };

  const doLogin = () => {
    setForm({ ...form, loading:true });
    dispatch(
      actionLogin(form.user, form.password, (sucess) => {
        setForm({ ...form, loading:false });
        if (sucess) {
          props.history.push(`/home`);
        } else {
          alert('Por favor confira seu email e senha e tente novamente');
        }
      })
    );
  };

  return (
    <div className="login-bg blank-page blank-page">
      <div className="row">
        <div className="col s12">
          <div className="container"><div id="login-page" className="row">
            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12">
                    <h5 className="ml-4">Faça seu login:</h5>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="material-icons prefix pt-2">person_outline</i>
                    <input id="username" type="text" onChange={handleFormInputChange('user')} value={form.user}/>
                      <label htmlFor="username" className="center-align">Username</label>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="material-icons prefix pt-2">lock_outline</i>
                    <input id="password" type="password" onChange={handleFormInputChange('password')} value={form.password}/>
                      <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    {form.loading ? (
                      <div className="progress">
                        <div className="indeterminate"></div>
                      </div>
                    ) : (
                      <a onClick={() => doLogin()} href="/#" className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">{form.loading ? "... aguarde" : "Login"}</a>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 m6 l6">
                    <p className="margin medium-small"><a href="user-register.html">Registrar-se Agora!</a></p>
                  </div>
                  <div className="input-field col s6 m6 l6">
                    <p className="margin right-align medium-small"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;