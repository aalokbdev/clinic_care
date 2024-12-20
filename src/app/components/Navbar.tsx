import Bug from '../assets/svg/bug.svg'
import Logo from '../assets/svg/Logo.svg'
import CalenderIcon from '../assets/svg/calender.svg'
import WebIcon from '../assets/svg/Webicon.svg'


import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between px-16 py-6 bg-white'>
                    <Image src={Logo} alt='logo icon'/>
                     <div className='flex gap-6'>
                        <div className='flex items-center gap-2 border border-red-600 rounded-lg px-6 py-3'>
                        <Image src={Bug} alt='bug icon'/>
                        <p>Zgłoś problem</p>
                        </div>

                    <div   className='flex items-center gap-2 rounded-lg px-6 py-3 text-white  bg-blue-500'>
                    <Image src={CalenderIcon} alt='calender icon'/>
                    <p>Umów wizytę</p>
                    </div>
                    
                    <div  className='flex items-center gap-2'>
                        <Image src={WebIcon} alt='web icon' />
                        <select>
                             <option>WL</option>
                        </select>
                    </div>
                     </div>
        </div>
    )
}

export default Navbar;