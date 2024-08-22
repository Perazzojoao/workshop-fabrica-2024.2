const Modal = () => {
	return (
		<div className='text-black flex justify-center px-6 py-3 bg-zinc-100 shadow-xl rounded-lg absolute top-56'>
			<form className='flex flex-col w-full gap-4'>
				<h2 className='font-bold text-xl'>Adicionar Contato</h2>
				<input className='px-4 py-2 text-lg' type='text' placeholder='Nome' />
				<input className='px-4 py-2 text-lg' type='text' placeholder='Telefone' />
				<button className='bg-blue-700 hover:bg-blue-600 transition-all rounded-md py-2 text-white font-semibold text-lg'>
					Salvar
				</button>
			</form>
		</div>
	)
}

export default Modal
