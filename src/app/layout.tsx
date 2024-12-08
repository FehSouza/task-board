import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Task Board',
  description:
    'Gerencie suas tarefas e projetos com eficiência. Acompanhe prioridades, status e aumente a produtividade da sua equipe com uma interface simples e intuitiva.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
