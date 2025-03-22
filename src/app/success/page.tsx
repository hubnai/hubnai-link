import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

import company from '@/app/assets/havan.png'
import logo from '@/app/assets/hubnai-logo.png'
import { BadgeInfo, CheckCircle } from 'lucide-react'

export default function Home() {
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

						<Button className="bg-blue-400 text-[10px] hover:bg-blue-500">
							Novo pagamento
						</Button>
					</div>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						<div className="border-t border-b py-2">
							<h1 className="text-center text-sm text-zinc-400 font-semibold">
								Confirmação do pagamento
							</h1>
						</div>
						<h1 className="text-right text-xs text-blue-500 font-normal">
							Extrato de pagamentos
						</h1>

						<div className="flex pt-3 items-start gap-5">
							<CheckCircle color={'green'} size={80} />
							<h1 className="text-left text-lg text-zinc-800 font-semibold">
								Obrigado!
								<p className="text-sm font-normal">
									Seu pagamento{' '}
									<span className="font-semibold">#BE12345839920199</span> foi
									realizado.
								</p>
							</h1>
						</div>

						<div className="w-full border">
							<div className="flex  p-2 items-start">
								<h1 className="text-left p-2 text-wrap text-sm font-medium text-zinc-800 ">
									Nós enviamos o comprovante do pagamento realizado e confirmado
									para o e-mail hubner@mail.com.
								</h1>
							</div>
						</div>
						<h1 className="text-left text-xs text-zinc-800 ">
							Horário do processamento: 10/12/2025 12:45 AM
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							Valor Pago: R$ 1.200,00
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							Número de parcelas: 2
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							Valor da parcela: R$ 600,00
						</h1>
						<h1 className="text-left pt-4 text-xs text-zinc-800 ">
							Cartão: 54XX XXXX XXXX 0299
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							Status: <b className="text-green-600">Pago</b>
						</h1>
						<div className="flex pt-4 items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Dados do cliente
							</h1>
						</div>
						<h1 className="text-left text-xs text-zinc-800 ">
							Hubner Vem para a Hubnai
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							hubner@email.com
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							+55 (00) 00000-0000
						</h1>
						<div className="flex pt-4 items-center gap-2">
							<BadgeInfo size={16} />
							<h1 className="text-left text-xs text-zinc-600 font-semibold">
								Dados do negócio recebedor
							</h1>
						</div>
						<h1 className="text-left text-xs text-zinc-800 ">Loja XPTO</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							falecom@hubnai.com
						</h1>
						<h1 className="text-left text-xs text-zinc-800 ">
							+55 (00) 00000-0000
						</h1>
					</div>
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
