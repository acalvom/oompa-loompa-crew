import { Link } from 'react-router-dom'
import oompaLogo from '@/assets/logo-oompa.png'

export const Header = () => {
  return (
    <header>
      <nav className="bg-grey-light px-8 sm:px-24 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={oompaLogo}
              className="mr-4 h-7 sm:mr-8 sm:h-9"
              alt="Oompa Loompa Logo"
              data-testid="oompa-logo"
            />
            <span
              className="self-center text-md sm:text-xl font-bold whitespace-nowrap"
              data-testid="oompa-nav-text"
            >
              Oompa Loompa's Crew
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
