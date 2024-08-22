import { Dispatch, SetStateAction } from "react"
import { Contato } from "../listaTelefonica"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContatoFormSchemaType, ContatoFormSchema } from "./zodFormSchema"

interface ModalProps {
	setLista: Dispatch<SetStateAction<Contato[]>>
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ setLista, setIsOpen }: ModalProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContatoFormSchemaType>({
		resolver: zodResolver(ContatoFormSchema),
	})

	// function salvarContato(evento: FormEvent<HTMLFormElement>) {
	// 	evento.preventDefault()

	// 	const formData = new FormData(evento.currentTarget)
	// 	const nome = formData.get('nome') as string
	// 	const telefone = formData.get('telefone') as string

	// 	setLista(lista => [...lista, {id: lista.length + 1, nome, telefone}])

	// 	setIsOpen(false)
	// }

	function salvarContato(data: ContatoFormSchemaType) {
		setLista(lista => [...lista, { id: lista.length + 1, ...data }])

		setIsOpen(false)
	}

	return (
		<div className='text-black flex justify-center px-6 py-3 bg-zinc-100 shadow-xl rounded-lg absolute top-56'>
			<form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(salvarContato)}>
				<h2 className='font-bold text-xl'>Adicionar Contato</h2>

				<input {...register('nome')} className='px-4 py-2 text-lg' type='text' name="nome" placeholder='Nome' />
				{errors.nome && <span className='text-red-500 text-sm'>{errors.nome.message}</span>}

				<input {...register('telefone')} className='px-4 py-2 text-lg' type='text' name="telefone" placeholder='Telefone' />
				{errors.telefone && <span className='text-red-500 text-sm'>{errors.telefone.message}</span>}
				
				<button type="submit" className='bg-blue-700 hover:bg-blue-600 transition-all rounded-md py-2 text-white font-semibold text-lg'>
					Salvar
				</button>
			</form>
		</div>
	)
}

export default Modal

