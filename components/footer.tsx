import React from 'react'
const footer = () => {
    const currentYear = new Date().getFullYear();
    const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
  return (
    <footer className="border-t">
        <div className='p-5 flex-center'>
            <p className='text-sm text-gray-800'>
                &copy; {currentYear} {APP_NAME}. All rights reserved.
            </p>
        </div>
    
    </footer>
  )
}

export default footer