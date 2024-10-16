import { ReactNode } from 'react'
import Sidebar from '../_components/Sidebar'

interface LayoutProps {
	children: ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className='flex h-screen'>
      <aside className='h-full'>
        <Sidebar />
      </aside>
      <main className='h-full p-6'>
        {children}
      </main>
    </div>
  )
}
