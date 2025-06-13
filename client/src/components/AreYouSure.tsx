import React from 'react'

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export default function AreYouSure({ onConfirm, onCancel, message }: Props) {
  return (
    <div className='w-screen h-screen flex items-center fixed top-0 left-0 justify-center z-[100] bg-black/70 bg-opacity-50'>
      <div className='p-5 bg-white rounded shadow-lg text-center'>
        <p>{message}</p>
        <div className='flex gap-5 justify-center mt-5'>
          <button onClick={onConfirm} className='bg-green-300 px-5 transition hover:bg-green-500 py-2 w-[100px] cursor-pointer rounded-lg'>Xa</button>
          <button onClick={onCancel} className='bg-red-300 px-5 transition hover:bg-red-500 py-2 w-[100px] cursor-pointer rounded-lg'>Yo'q</button>
        </div>
      </div>
    </div>
  )
}