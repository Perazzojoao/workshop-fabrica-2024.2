'use client'

import Pessoa from '@/components/pessoa'
import Modal from '../modal'
import { useState } from 'react'

export interface Contato {
	id: number
	nome: string
	telefone: string
}

const Contatos = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [busca, setBusca] = useState('')
	const [lista, setLista] = useState([] as Contato[])
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-3/4 sm:w-1/2 bg-zinc-100 rounded-lg p-4 my-6 shadow-xl'>
				<div className='bg-blue-700 w-full px-6 py-3 rounded-md flex justify-center items-center mt-1'>
					<h1 className='font-bold text-lg text-white'>Lista de Contatos</h1>
				</div>
				<div className='flex justify-between py-4 gap-4'>
					<input
						type='text'
						placeholder='Buscar por nome'
						className='bg-zinc-200 w-3/4 rounded-md px-4 py-2'
						onChange={evento => setBusca(evento.target.value)}
					/>
					<button
						className='font-semibold text-lg text-white bg-blue-700 hover:bg-blue-600 transition-all rounded-md px-4 py-2'
						onClick={() => setIsOpen(!isOpen)}
					>
						Adicionar
					</button>
				</div>
				<div className='py-4'>
					{lista
						.filter(contato => {
							const nome = contato.nome.toLowerCase()
							return nome.includes(busca.toLowerCase())
						})
						.map(contato => (
							<Pessoa nome={contato.nome} telefone={contato.telefone} key={contato.id} />
						))}
				</div>
			</div>
			{isOpen && <Modal setLista={setLista} setIsOpen={setIsOpen} />}
		</div>
	)
}

export default Contatos
