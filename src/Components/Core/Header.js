import React from 'react';
import { retriveUserName, dologout } from '../../Core/currentUser';

function Header(props) {

  const logout = () => {
    dologout();
    props.history.push("/");
  }

  return (
    <header className="page-topbar" id="header">
      <div className="navbar navbar-fixed">
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
              <input className="header-search-input z-depth-2" type="text" name="Search" placeholder={`Olá ${retriveUserName()}`}/>
            </div>
            <ul className="navbar-list right">
              <li className="hide-on-large-only"><a className="waves-effect waves-block waves-light search-button" href="/#"><i className="material-icons">search</i></a></li>
              <li><a className="waves-effect waves-block waves-light notification-button" data-target="notifications-dropdown" href="/#"><i className="material-icons">notifications_none<small className="notification-badge">1</small></i></a></li>
              <li><a className="waves-effect waves-block waves-light profile-button" data-target="profile-dropdown" href="/#"><span className="avatar-status avatar-online"><img src="../../../app-assets/images/avatar/avatar-7.png" alt="avatar"/><i></i></span></a></li>
            </ul>
            <ul className="dropdown-content" id="notifications-dropdown">
              <li>
                <h6>NOTIFICATIONS<span className="new badge">10</span></h6>
              </li>
              <li className="divider"></li>
              <li><a className="grey-text text-darken-2" href="/#"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> Bem vindo ao sistema</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
              </li>
            </ul>
            <ul className="dropdown-content" id="profile-dropdown">
              <li><a className="grey-text text-darken-1" href="/#"><i className="material-icons" href="/#">person_outline</i> Perfil</a></li>
              <li><a className="grey-text text-darken-1" href="/#"><i className="material-icons" href="/#">help_foutline</i> Ajuda</a></li>
              <li className="divider"></li>
              <li><a className="grey-text text-darken-1" onClick={() => logout()} href="/#"><i className="material-icons">keyboard_tab</i> Sair</a></li>
            </ul>
          </div>
          <nav className="display-none search-sm">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input className="search-box-sm" type="search" required=""/>
                  <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
  );
}

export default Header;