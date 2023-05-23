import Link from 'next/link';


import Token from '../assets/tokenFillo.svg';
import ArrowRight from '../assets/chevronRight.svg';

const NavItem = ({ href, label }) => (
  <li className='hover:bg-bg-hover-nav-amazon p-2'>
    <Link href={href} className='flex items-center justify-between'>
      <div>
        <p>{label}</p>
      </div>
      <div>
        <ArrowRight className="w-6 h-6" />
      </div>
    </Link>
  </li>
)

const Nav = () => {
  return (
    <nav className='flex flex-col bg-white h-screen'>
      <div className='w-[20rem]'>
        <div className='flex items-center justify-center p-4 bg-bg-amazon-azul-escuro'>
          <div>
            <Token className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className='text-white'>E.O.P</h1>
          </div>
        </div>

        <div className='text-texto-amazon-1 pr-4 pl-4'>
          <h1 className=' mt-5 mb-5 font-bold'>GENERAL</h1>
          <ul className='gap-2 flex flex-col'>
            <NavItem href="/home" label="Deputados Federais" />
            <NavItem href="/location" label="Ministros" />
            <NavItem href="/about" label="Presidente Brasil" />
            <NavItem href="/docs" label="Membros STF" />
            <NavItem href="/showcase" label="Deputados Estaduais" />
            <NavItem href="/analytics" label="Analytics" />
          </ul>
        </div>

        <div className='text-texto-amazon-1 pr-4 pl-4'>
          <h1 className='mt-10 mb-5 font-bold'>EXTRA</h1>
          <ul className='gap-2 flex flex-col'>
            <NavItem href="/home" label="Gastos com a máquina pública" />
            <NavItem href="/location" label="Location" />
            <NavItem href="/about" label="About" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;