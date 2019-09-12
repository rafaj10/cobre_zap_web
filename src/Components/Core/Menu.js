import React from 'react';

function Menu(props) {
  return (
    <>
      <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
        <div className="brand-sidebar">
          <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="# "><img src="../../../app-assets/images/logo/materialize-logo-color.png" alt="materialize logo"/><span className="logo-text hide-on-med-and-down">Cobre Zap!</span></a><a className="navbar-toggler" href="# "><i className="material-icons">radio_button_checked</i></a></h1>
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
          <li className="navigation-header"><a href="# " className="navigation-header-text">Principal </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className={props.selected === "home" ? "active" : ""} ><a href="# " onClick={() => props.history.push(`/home`)} className={props.selected === "home" ? "collapsible-body active" : "collapsible-body"}><i className="material-icons">home</i><span>Home</span></a></li>
          <li className={props.selected === "disparos" ? "active" : ""}><a href="# " onClick={() => props.history.push(`/disparos`)} className={props.selected === "agencies" ? "collapsible-body active" : "collapsible-body"}><i className="material-icons">email</i><span>Disparos</span></a></li>
        </ul>
        <div className="navigation-background"></div><a href="# " className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" data-target="slide-out"><i className="material-icons">menu</i></a>
      </aside>
    </>
  );
}

export default Menu;