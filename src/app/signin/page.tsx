'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

import company from '@/app/assets/havan.png'
import logo from '@/app/assets/hubnai-logo.png'

import { Eye } from 'lucide-react'
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
						<div className="border-t border-b py-2">
							<h1 className="text-center mb-12 text-sm text-zinc-400 font-semibold">
								Acesso de usuário
							</h1>
						</div>

						<Input
							id="phone"
							placeholder="Login"
							className="text-xs  rounded-none"
							name="surname"
						/>
						<div className="flex border items-center gap-4 pr-4">
							<Input
								id="phone"
								placeholder="Senha"
								type="password"
								className="text-xs border-none rounded-none"
								name="surname"
							/>
							<Eye color="#CCC" />
						</div>

						<div className="flex  items-center justify-between">
							<div className="flex gap-2">
								<Input
									id="email"
									type="checkbox"
									placeholder="Endereço de e-mail *"
									className="text-xs size-4 rounded-none"
									name="surname"
								/>
								<p className="text-xs text-zinc-600">Permanecer conectado</p>
							</div>
							<button className="text-xs text-blue-400">
								Esqueci minha senha
							</button>
						</div>

						<div className="flex justify-end pt-5">
							<Button className="bg-blue-400 w-full h-9 text-sm hover:bg-blue-500">
								Entrar
							</Button>
						</div>
					</form>
					<Button className="text-xs bg-transparent border border-blue-400 text-blue-500 text-center h-9 w-full mt-4">
						Quero me cadastrar
					</Button>
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
