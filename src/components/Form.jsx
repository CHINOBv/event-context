import React from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext.jsx'

export class Form extends React.Component {

	state = {
		nombre: '',
		categoria: ''
	}
	render() {
		return (
			<form>
				<fieldset className="uk-fieldset uk-margin "uk-margin="true">
					<legend className="uk-legend uk-text-center">Busca tu evento por nombre o categoria</legend>
				</fieldset>
				<div className="uk-column1-3@m uk-margin" uk-margin="true">
					<input 
						type="text"
						name="nombre"
						className="uk-input"
						placeholder="Nombre de vento o Ciudad"
					/>
				</div>
				<div className="uk-margin" uk-margin="true">
					<select 
						name="categoria"
						className="uk-select"
					>
						<CategoriasConsumer>
							{(value) => {
							//console.log(value)	
								return(
									value.categorias.map( categoria => (
										<option 
											key={categoria.id} 
											value={categoria.id}
											data-uk-form-select
										>{categoria.name_localized}</option>
									))
						       	);
							}}
						</CategoriasConsumer>
					</select>
				</div>
				<div>
					<input type="submit" className="uk-button uk-button-danger" value="Buscar Evento"/>
				</div>
			</form>
		)
	}
}

export default Form