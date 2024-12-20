"use client"
import Image from 'next/image';
import ProfileIcon from '../assets/svg/avatar.svg';
import homeIcon from '../assets/svg/home.svg';
import BriefCaseIcon from '../assets/svg/briefcase-medical.svg';
import StationaryIcon from '../assets/svg/stationary.svg';
import HeadPhoneIcon from '../assets/svg/headphone.svg';

const Profile = () => {
    return (
       <div className='max-w-72 border p-6 bg-white rounded-lg'>
          <div className='flex flex-col gap-2'>
               <Image src={ProfileIcon} alt='avatar icon' /> 
               <p className='text-xs font-bold text-[#1A3F7A]'>Imię Nazwisko</p>
               <p className='text-xs font-semibold text-[#6D7178]'>Operator</p>
               <p className='text-xs font-semibold text-[#6D7178]'>name@gmail.com</p>
          </div>

          <div className='border border-[#D7D8DB] mt-6'>

          </div>
          <div className='flex flex-col gap-4 mt-4'>
              <div className='flex items-center gap-2'>
                   <Image src={homeIcon} alt='home icon' />
                   <p className='text-[#242628] text-sm font-bold'>Strona główna</p>
              </div>

              <div className='flex items-center gap-2'>
                   <Image src={HeadPhoneIcon} alt='phone icon' />
                   <p className='text-[#242628] text-sm font-bold'>Wizyty online</p>
              </div>

              <div className='flex items-center gap-2'>
                   <Image src={BriefCaseIcon} alt='briefcase icon' />
                   <p className='text-[#242628] text-sm font-bold'>Wizyty domowe</p>
              </div>

              <div className='flex items-center gap-2'>
                   <Image src={StationaryIcon} alt='stationary icon' />
                   <p className='text-[#242628] text-sm font-bold'>Wizyty stacjonarne</p>
              </div>
          </div>
       </div>
    )
}

export default Profile;