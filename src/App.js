import { useEffect, useState } from 'react';
import './App.css';
import CarsApp from './components/CarsApp/CarsApp';
import Layout from './components/Layout/Layout';
import { Practice } from './components/Practice/Practice';


function App() {
  const [activePage, setActivePage] = useState('MemoNPure');
  const [content, setContent] = useState(<CarsApp/>)

  const handleChangeActivePage = (newActivePage) => {
    console.log('changing page...')
    setActivePage(newActivePage);
  };

  useEffect(() => {
    switch(activePage) {
      case 'MemoNPure':
        console.log('M')
        setContent(<CarsApp />)
        break;
      case 'Practice':
        console.log('P')
        setContent(<Practice />)
        break;
      default:
        break;
    }
  }, [activePage])

  return (
    <div className="App">
      <Layout handleChangeActivePage={handleChangeActivePage}>
        {content}
      </Layout>
    </div>
  );
}

export default App;