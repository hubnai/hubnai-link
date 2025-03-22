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
import pix from '@/app/assets/pix.png'
import { BadgeInfo, Copy } from 'lucide-react'

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
										<SelectValue placeholder="PIX" />
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
								Compra por 1 clique
							</h1>
						</div>
						<h1 className="text-left text-xs text-zinc-400 font-normal">
							Para realizar o pagameto, leia o QRCode no app do seu banco ou
							copie o código
						</h1>

						<Image
							alt="company"
							className="object-contain mx-auto"
							src={pix.src}
							width={180}
							height={180}
						/>

						<div className="flex pt-3 items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Código do QRCode
							</h1>
						</div>

						<div className="w-full border">
							<div className="flex  p-2 items-start">
								<h1 className="text-left p-2 text-wrap text-sm font-medium text-zinc-800 ">
									kfjksadjçlfj2qruiewurqwenrner.,mnq324.m,14b2n 34bn21b
									4kh2g4h12h2h34gh21g34j1khjg4jk 1g4mn1b234nb,12h34g
								</h1>
								<Copy size={44} />
							</div>
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
