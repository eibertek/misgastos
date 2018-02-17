import { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import RegistriesList from "../registries/components/registriesList.jsx";
import './styles.scss';
import RegistriesComponent from "../registries/components/registries.jsx";

const getAccount = (item) => {
  const accounts = ['123456', '321456', '15642', '000000'];
  const random = () => accounts[Math.floor(Math.random()*accounts.length)];
  if(item >= 0 ) return account[item];
  return random();
}

const getName = (item) => {
  const accounts = ['VISA', 'CTA CTE', 'GASTOS VARIOS', 'PAGOS', 'INGRESO'];
  const random = () => accounts[Math.floor(Math.random()*accounts.length)];
  if(item >= 0 ) return account[item];
  return random();
}

const mockRegistry = ({ date, account, name, debit, credit, dolar }) => {
  return {
    id: (Math.random()*1000).toString(),
    date,
    account,
    name,
    debit,
    credit,
    dolar,
  }
}

const mockRegistries = (ammount) => {
  let results = [];
  for(let i=0; i < ammount; i++) {
    results.push(mockRegistry({
      date: moment().format('DD/MM/YYYY'),
      account: getAccount(),
      name: getName(),
      debit: 10.34,
      credit: 0.00,
      dolar: 20.36,
    }));
  }
  return results;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registries:  mockRegistries(3)
    }
  }

  render() {
    return <div>
      <h1>Dashboard de finanzas</h1>
      <div className="RegistriesList">
        <RegistriesList isTable={true} rows={this.state.registries}/>
      </div>
      <div>Agregar Registro:
      <RegistriesComponent canModify={true}/>
      </div>
    </div>
  }
}

export default Dashboard;