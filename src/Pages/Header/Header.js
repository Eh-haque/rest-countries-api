import React from 'react';
import Toggle from '../Toggle/Toggle';

const Header = () => {
    return (
        <div className=' dark:bg-gray-700 dark:text-white shadow-2xl'>
            <section className='container mx-auto py-2'>
                <div className='mx-10 flex justify-between'><h2 className='text-2xl font-bold dark:divide-gray-700'>Where in the world?</h2>
                    <Toggle /></div>
            </section>
        </div>
    );
};

export default Header;