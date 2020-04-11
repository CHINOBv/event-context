import React from 'react'
import axios from 'axios';

const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

export class CategoriasProvider extends React.Component {
	token = 'RD3KFHFI35MGNBQE3HJY';

	state = {
		categorias:[]
	}
	
	componentDidMount() {
		this.getCategorias();
	}
	
	getCategorias = async() => {
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
		
		let categorias = await axios.get(url);
	//console.log(categorias.data.categories)

		this.setState({
			categorias: categorias.data.categories
		})
	}

	render() {
		return (
			<CategoriasContext.Provider
				value={{categorias: this.state.categorias}}
			>
				{this.props.children}
			</CategoriasContext.Provider>
		)
	}
}

export default CategoriasProvider