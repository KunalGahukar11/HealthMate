import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    emailId: 'edwardvincent9@gmail.com',
    phoneNo: '+1 123 456 7890',
    address: {
      line1: '57th Cross,Richmand',
      line2: 'Circle,Church road,London'
    },
    gender: 'Male',
    DOB: '2000-1-13'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col text-sm gap-2'>
      <img className='w-36 rounded' src={userData.image} alt={userData.name} />
      {
        isEdit ?
          <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} /> :
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.emailId}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
              <input className='bg-gray-100 max-w-52' type="text" value={userData.phoneNo} onChange={(e) => setUserData(prev => ({ ...prev, phoneNo: e.target.value }))} /> :
              <p className='text-blue-400'>{userData.phoneNo}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <p>
                <input className='bg-gray-50' value={userData.address.line1} onChange={(e) => { setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } })) }} type="text" />
                <br />
                <input className='bg-gray-50' value={userData.address.line2} onChange={(e) => { setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } })) }} type="text" /></p> :
              <p className='text-gray-500'>
                {userData.address.line1} <br />
                {userData.address.line2}
              </p>
          }
        </div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
              <select className='max-w-28 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select> :
              <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Birth Date</p>
          {
            isEdit ?
              <input className='max-w-28 bg-gray-100' type="date" value={userData.DOB} onChange={(e) => setUserData(prev => ({ ...prev, DOB: e.target.value }))} /> :
              <p className='text-gray-400'>{userData.DOB}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
            ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save Information</button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile