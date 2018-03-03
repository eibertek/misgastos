import moment from 'moment';
import uuidv4 from 'uuid/v4';

const getAccount = (item) => {
  const accounts = ['123456', '321456', '15642', '000000',
    parseInt(Math.random()*10000).toString(),
    parseInt(Math.random()*10000).toString(),
    parseInt(Math.random()*10000).toString()];
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

const getEntity = (item) => {
  const accounts = ['BANCO GALICIA', 'EDESUR', 'FIBERTEL', 'CASA', 'AGUAS'];
  const random = () => accounts[Math.floor(Math.random()*accounts.length)];
  if(item >= 0 ) return account[item];
  return random();
}

const getDescription = (item) => {
  const accounts = ['Tarjetas', 'Gastos Varios', 'Otros', 'Ingresos', 'Detalles'];
  const random = () => accounts[Math.floor(Math.random()*accounts.length)];
  if(item >= 0 ) return account[item];
  return random();
}

const mockRegistry = ({ date, account, name, debit, credit, dolar }) => {
  return {
    id: uuidv4(),
    date,
    account,
    name,
    debit,
    credit,
    dolar,
  };
}

const mockAccount = ({ name, entity, description, balance }) => {
  return {
    id: uuidv4(),
    name,
    entity,
    description,
    balance,
  };
}

export const mockRegistries = (ammount, dolar) => {
  const results = [];
  for(let i=0; i < ammount; i++) {
    const registry = mockRegistry({
      date: moment().format('DD/MM/YYYY'),
      account: getAccount(),
      name: getName(),
      debit: parseFloat(Math.random()*100).toFixed(2),
      credit: 0.00,
      dolar: parseFloat(dolar, 2),
    });
    results.push(registry);
  }
  return results;
}

export const mockAccounts = (ammount) => {
  let results = [];
  for(let i=0; i < ammount; i++) {
    results.push(mockAccount({
      name: getAccount(),
      entity: getEntity(),
      description: getDescription(),
      balance: parseFloat(Math.random()*100).toFixed(2),
      currency: '',
    }));
  }
  return results;
}
