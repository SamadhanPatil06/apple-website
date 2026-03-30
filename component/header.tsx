import Image from 'next/image'
import { navLinks } from '@/section/prop'


const Header = () => {
  return (
    <header>
        <nav>
            <Image src="/images/logo.svg" alt="Apple Logo" height={24} width={24}/>
            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                       <a href="#">{label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex-center gap-3">
          <button>
            <img src="/images/search.svg" alt="search" height={24} width={24} />
          </button>
          <button>
            <img src="/images/cart.svg" alt="cart" height={24} width={24} />
          </button>
        </div>
        </nav>
    </header>
  )
}

export default Header