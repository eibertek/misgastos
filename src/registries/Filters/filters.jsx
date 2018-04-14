import { Component, Fragment } from 'react';
import styles from './styles.scss';

export default () => {
  return <Fragment>
      <div className="filterBox">
        <div className="filter">FILTROS: </div>
        <div className="filter">
          <select><option>Cuentas</option></select></div>
        <div className="filter">
          <select><option>Monedas</option></select></div>
        <div className="filter">
          <input placeholder="Fecha Desde"/>
        </div>  
        <div className="filter">
          <input placeholder="Fecha Hasta"/> 
        </div>
        <div className="filter">
          <input placeholder="Buscar por nombre"/> </div>
      </div>        
      <button>Filtrar</button>
      <div className="clearfix"></div>      
  </Fragment>;
}