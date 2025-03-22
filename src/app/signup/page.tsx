'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

import company from '@/app/assets/havan.png'
import logo from '@/app/assets/hubnai-logo.png'

import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { BadgeInfo } from 'lucide-react'

export default function Home() {
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		console.log('Payment data submitted:')
	}

	return (
		<div className="flex flex-col items-center justify-start min-h-screen bg-blue-100 dark:bg-zinc-800">
			<Card className="w-full max-w-md">
				<CardHeader>
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
						<div className="border-t py-2">
							<h1 className="text-center mb-4 text-sm text-zinc-400 font-semibold">
								Dados cadastrais
							</h1>
						</div>
						<div className="flex items-end gap-4">
							<div>
								<Input
									id="phone"
									placeholder="Nome"
									className="text-xs placeholder:text-zinc-400 w-full rounded-none"
									name="surname"
								/>
							</div>
							<Input
								id="phone"
								placeholder="Sobrenome"
								className="text-xs w-2/3 placeholder:text-zinc-400 rounded-none"
								name="surname"
							/>
						</div>
						<div className="flex items-center gap-4">
							<Select>
								<SelectTrigger className="  w-1/3 rounded-none text-xs">
									<SelectValue placeholder="+55" defaultValue={'55'} />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="credit-card">
										Balneário Camboriú
									</SelectItem>
									<SelectItem value="pix">São Paulo</SelectItem>
									<SelectItem value="boleto">No nada</SelectItem>
								</SelectContent>
							</Select>
							<Input
								id="phone"
								placeholder="(00) 00000-0000"
								className="text-xs w-2/3 placeholder:text-zinc-400 rounded-none"
								name="phone"
							/>
						</div>
						<h1 className="text-left text-[10px] text-zinc-400 font-normal">
							Este telefone porderá receber a confirmação de pagamento.
						</h1>

						<div className="flex gap-2">
							<Input
								id="email"
								placeholder="Endereço de e-mail *"
								className="text-xs w-full placeholder:text-zinc-400 rounded-none"
								name="surname"
							/>
						</div>
						<h1 className="text-left text-[10px] text-zinc-400 font-normal">
							Este e-mail porderá receber a confirmação de pagamento.
						</h1>
						<Input
							id="email"
							placeholder="Data de nascimento"
							className="text-xs w-2/3 placeholder:text-zinc-400 rounded-none"
							name="surname"
						/>
						<Input
							id="email"
							type="password"
							placeholder="Senha do sistema Hubnai"
							className="text-xs w-3/4 mb-2 placeholder:text-zinc-400 rounded-none"
							name="surname"
						/>
						<Input
							id="email"
							type="password"
							placeholder="Confirmação da senha"
							className="text-xs w-3/4 placeholder:text-zinc-400 rounded-none"
							name="surname"
						/>
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
							/>
							<Input
								id="address"
								placeholder="Endereço *"
								className="text-xs rounded-none"
								name="address"
							/>
						</div>
						<div className="flex  items-center gap-2">
							<Select>
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
							<Select>
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
						<Select>
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
							<Button className="bg-blue-400 w-full h-9 text-sm hover:bg-blue-500">
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
