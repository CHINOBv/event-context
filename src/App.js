import React from 'react';
import Header from './components/Header.jsx';
import CategoriasProvider from './context/CategoriasContext.jsx';
import Form from './components/Form.jsx'

function App() {
  return (
    <CategoriasProvider>
		<Header/>
		<div className="uk-container">
			<Form/>
		</div>
    </CategoriasProvider>
  );
}

export default App;
