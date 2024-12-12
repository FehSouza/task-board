import { Header } from '@/components'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.scss'

const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Task Board',
  description:
    'Gerencie suas tarefas e projetos com eficiência. Acompanhe prioridades, status e aumente a produtividade da sua equipe com uma interface simples e intuitiva.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR" className={roboto.className}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
