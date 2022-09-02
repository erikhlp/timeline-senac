import moment from 'moment';
import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota'
import './estilo.css';

export class ListaDeNotas extends Component {
	dataAtualFormatada(date) {
		new Intl.DateTimeFormat('pt-BR').format(date)
	}

	render() {
		return(
			<ul className="lista-notas">
				{this.props.notas.map((nota, index) => {
					if (!nota.data) {
						return;
					}
					return(
						<li className="lista-notas_item" key={index}>
							<CardNota titulo={nota.titulo} texto={nota.texto} data={moment(nota.data).format('L')}></CardNota>
						</li>
					)
				})}
			</ul>
		);
	}
}

export default ListaDeNotas;