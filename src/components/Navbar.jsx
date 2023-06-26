import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'



const Navbar = () => {
  const [togle, setTogle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile version  */}

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={togle ? close : menu} alt=""
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setTogle((prev) => !prev)}
        />
        <div className={`${togle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === nav.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar