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

import mastercard from '@/app/assets/mastercard.png'

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
						<div className="flex justify-between items-center">
							<div className="-mt-4">
								<Label htmlFor="price" className="text-zinc-400 text-xs">
									Valor a pagar
								</Label>
								<p className="text-sm text-cyan-500 font-semibold">
									R$ 1.000.002,00
								</p>
							</div>
							<div className="opacity-60">
								<Label htmlFor="method" className="text-zinc-400 text-xs">
									Método de Pagamento
								</Label>
								<Select
									disabled
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
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="border-t border-b py-2">
							<h1 className="text-center text-sm text-zinc-400 font-semibold">
								Dados de pagamento (2/2)
							</h1>
						</div>
						<h1 className="text-right text-xs text-zinc-400 font-normal">
							* Campo obrigatório
						</h1>

						<div className="flex items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Dados do cartão
							</h1>
						</div>
						<div className="flex flex-col  items-start w-72 border p-2 justify-between">
							<h1 className="text-xs">Cartões salvos</h1>
							<div className="flex items-center gap-4 pl-1 pr-3">
								<Select
									onValueChange={value =>
										setFormData(prev => ({ ...prev, paymentMethod: value }))
									}
								>
									<SelectTrigger className=" w-44 border-none p-0 text-xs">
										<SelectValue placeholder="**** **** **** 4139" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="credit-card">
											Cartão de Crédito
										</SelectItem>
										<SelectItem value="pix">PIX</SelectItem>
										<SelectItem value="boleto">Débito</SelectItem>
									</SelectContent>
								</Select>
								<button className="text-xs text-red-600">Excluir</button>
								<Image
									alt="credit card"
									src={mastercard.src}
									className="object-contain size-9"
									width={200}
									height={50}
								/>
							</div>
						</div>
						<h1 className="text-left text-sm text-zinc-500 font-medium">
							Adicionar cartão de crédito / débito
						</h1>
						<Input
							id="phone"
							placeholder="Nome do cartão"
							className="text-xs  rounded-none"
							name="surname"
							value={formData.phone}
							onChange={() => {}}
						/>
						<div className="flex border items-center gap-4 pr-4">
							<Input
								id="phone"
								placeholder="Número do cartão"
								className="text-xs border-none rounded-none"
								name="surname"
								value={formData.phone}
								onChange={() => {}}
							/>
							<Image
								alt="credit card"
								src={mastercard.src}
								className="object-contain size-9"
								width={200}
								height={50}
							/>
						</div>
						<div className="flex gap-4 items-end">
							<div className="flex flex-col">
								<Label
									htmlFor="method"
									className="text-zinc-400 w-32 my-2 text-xs"
								>
									Data de expiração
								</Label>
								<Select
									onValueChange={value =>
										setFormData(prev => ({ ...prev, paymentMethod: value }))
									}
								>
									<SelectTrigger className=" rounded-none text-xs">
										<SelectValue placeholder="01" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="credit-card">BR</SelectItem>
										<SelectItem value="pix">EUA</SelectItem>
										<SelectItem value="boleto">IRL</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<Select
								onValueChange={value =>
									setFormData(prev => ({ ...prev, paymentMethod: value }))
								}
							>
								<SelectTrigger className=" w-1/3 rounded-none text-xs">
									<SelectValue placeholder="25" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="credit-card">BR</SelectItem>
									<SelectItem value="pix">EUA</SelectItem>
									<SelectItem value="boleto">IRL</SelectItem>
								</SelectContent>
							</Select>
							<Input
								id="phone"
								placeholder="CVV"
								className="text-xs w-1/3 border rounded-none"
								name="surname"
							/>
						</div>
						<div className="flex  items-center gap-2">
							<Input
								id="email"
								type="checkbox"
								placeholder="Endereço de e-mail *"
								className="text-xs size-4 rounded-none"
								name="surname"
							/>
							<p className="text-xs text-zinc-600">
								Lembrar desse cartão na próxima compra
							</p>
						</div>

						<div className="flex justify-end pt-5">
							<Button className="bg-blue-400 w-full h-9 text-sm hover:bg-blue-500">
								Pagar
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
