import React from 'react';
import err404 from "../../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='justify-items-center'>
            <img src={err404} alt="" />
            <h2 className='text-4xl font-bold'>Oops, page not found!</h2>
            <p className="text-gray-500">The page you are looking for is not available.</p>
            <button className='bg-violet-600 rounded flex text-center p-2 gap-4'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;