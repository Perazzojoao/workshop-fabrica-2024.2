const Pessoa = ({ nome, telefone }) => {
	return (
		<div className='mb-4 bg-zinc-300 rounded-md p-2 shadow-md shadow-zinc-400'>
			<p>
				<span className='font-bold'>Nome: </span>
				{nome}
			</p>
			<p>
				<span className='font-bold'>Telefone: </span>
				{telefone}
			</p>
		</div>
	)
}

export default Pessoa
