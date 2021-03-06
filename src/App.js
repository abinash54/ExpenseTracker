import './App.css';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddNewTransactionForm from './components/AddNewTransactionForm';

function App() {
  return (
  <div>
    <Header/>
    <div className='container'>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddNewTransactionForm />
    </div>
  </div>  
  );
}

export default App;
