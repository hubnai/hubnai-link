'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import Image from 'next/image'

import company from '@/app/assets/havan.png'
import logo from '@/app/assets/hubnai-logo.png'
import { BadgeInfo } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Home() {
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		address_name: '',
		address: '',
		phone: '',
		email: '',
		paymentMethod: ''
	})

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('Payment data submitted:', formData)
	}

	return (
		<div className="flex flex-col items-center justify-start min-h-screen bg-blue-100 dark:bg-zinc-800">
			<Card className="w-full max-w-md">
				<CardHeader className="w-full">
					<div className="flex items-center justify-between">
						<Image
							alt="company"
							className="object-cover"
							src={company.src}
							width={80}
							height={40}
						/>
						<div className="text-center">
							<h1 className="text-xs">Checkout da loja XPTO</h1>
							<h1 className="text-[10px] text-zinc-500">
								Solução da Hubnai.com
							</h1>
						</div>
						<Button className="bg-blue-400 text-[10px] hover:bg-blue-500">
							Pagar com 1 clique
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-3">
						<div className="flex justify-between items-center">
							<div className="-mt-4">
								<Label htmlFor="price" className="text-zinc-400 text-xs">
									Valor a pagar
								</Label>
								<input
									contentEditable
									placeholder="Digite o valor a pagar"
									className="text-sm block text-cyan-500 font-semibold"
								/>
							</div>
							<div>
								<Label htmlFor="method" className="text-zinc-400 text-xs">
									Método de Pagamento
								</Label>
								<Select
									onValueChange={value =>
										setFormData(prev => ({ ...prev, paymentMethod: value }))
									}
								>
									<SelectTrigger className="-mt-3 border-none p-0 text-xs">
										<SelectValue placeholder="Cartão de Crédito" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="credit-card">
											Cartão de Crédito
										</SelectItem>
										<SelectItem value="pix">PIX</SelectItem>
										<SelectItem value="boleto">Débito</SelectItem>
										<SelectItem value="crypto">Crypto</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="border-t border-b py-2">
							<h1 className="text-center text-sm text-zinc-400 font-semibold">
								Dados cadastrais (1/2)
							</h1>
						</div>
						<h1 className="text-right text-xs text-zinc-400 font-normal">
							* Campo obrigatório
						</h1>

						<div className="flex items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Dados do pagante
							</h1>
						</div>
						<div className="flex items-center w-full gap-4 justify-between">
							<Input
								id="name"
								className="w-2/3 text-xs rounded-none"
								placeholder="Nome *"
								name="name"
							/>
							<Input
								id="surname"
								placeholder="Sobrenome *"
								className="text-xs rounded-none"
								name="surname"
							/>
						</div>
						<div className="flex gap-4 justify-between items-center">
							<Select
								onValueChange={value =>
									setFormData(prev => ({ ...prev, paymentMethod: value }))
								}
							>
								<SelectTrigger className=" w-1/3 rounded-none text-xs">
									<SelectValue placeholder="BR +55" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="credit-card">BR</SelectItem>
									<SelectItem value="pix">EUA</SelectItem>
									<SelectItem value="boleto">IRL</SelectItem>
								</SelectContent>
							</Select>
							<Input
								id="phone"
								placeholder="(00) 00000-0000 *"
								className="text-xs rounded-none"
								name="surname"
							/>
						</div>
						<h1 className="text-left text-[10px] text-zinc-400 font-normal">
							Este telefone porderá receber a confirmação de pagamento.
						</h1>

						<Input
							id="email"
							placeholder="Endereço de e-mail *"
							className="text-xs w-full rounded-none"
							name="surname"
						/>
						<h1 className="text-left text-[10px] text-zinc-400 font-normal">
							Este e-mail será usado para enviar a confirmação de pagamento.
						</h1>
						<div className="flex pt-3 items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Endereço do pagante
							</h1>
						</div>
						<Input
							id="address_name"
							placeholder="Título para esse endereço (Ex: Casa)"
							className="text-xs w-full rounded-none"
							name="address_name"
						/>
						<h1 className="text-left text-[10px] text-zinc-400 font-normal">
							Obrigatórios por questão de segurança dos bancos e operadoras de
							cartão
						</h1>
						<div className="flex  items-center gap-2">
							<Input
								id="zip_code"
								placeholder="CEP *"
								className="text-xs w-[100px] rounded-none"
								name="zip_code"
								value={formData.address_name}
								onChange={() => {}}
							/>
							<Input
								id="address"
								placeholder="Endereço *"
								className="text-xs rounded-none"
								name="address"
								value={formData.address}
								onChange={() => {}}
							/>
						</div>
						<div className="flex  items-center gap-2">
							<Select
								onValueChange={value =>
									setFormData(prev => ({ ...prev, paymentMethod: value }))
								}
							>
								<SelectTrigger className="  rounded-none text-xs">
									<SelectValue placeholder="Cidade *" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="credit-card">
										Balneário Camboriú
									</SelectItem>
									<SelectItem value="pix">São Paulo</SelectItem>
									<SelectItem value="boleto">No nada</SelectItem>
								</SelectContent>
							</Select>
							<Select
								onValueChange={value =>
									setFormData(prev => ({ ...prev, paymentMethod: value }))
								}
							>
								<SelectTrigger className="  rounded-none text-xs">
									<SelectValue placeholder="Estado *" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="credit-card">Santa Catarina</SelectItem>
									<SelectItem value="pix">São Paulo</SelectItem>
									<SelectItem value="boleto">Acre</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Select
							onValueChange={value =>
								setFormData(prev => ({ ...prev, paymentMethod: value }))
							}
						>
							<SelectTrigger className="  rounded-none text-xs">
								<SelectValue placeholder="País *" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="credit-card">Brasil</SelectItem>
								<SelectItem value="pix">Estados Unidos</SelectItem>
								<SelectItem value="boleto">Itália</SelectItem>
							</SelectContent>
						</Select>
						<div className="flex justify-end pt-5">
							<Button className="bg-blue-400 w-[80px] h-9 text-xs hover:bg-blue-500">
								Salvar
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
			<p className="text-[9px] mt-2 text-zinc-500">
				Faça como a gente, receba seus pagamentos utilizando a Hubnai.com
			</p>
			<Image
				alt="company"
				className="object-cover"
				src={logo.src}
				width={70}
				height={40}
			/>
		</div>
	)
}
