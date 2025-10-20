import React from 'react';
import errapp from "../../assets/App-Error.png"

const ErrorApp = () => {
    return (
        <div className=' justify-items-center'>
            <img src={errapp} alt="" />
            <h1 className='text-3xl font-bold p-2'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
        <button className='bg-violet-600 rounded flex text-center p-2 gap-4'>Go Back!</button>
        </div>
    );
};

export default ErrorApp;