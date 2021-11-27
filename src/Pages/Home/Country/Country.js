import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import { BiArrowBack } from 'react-icons/bi';

const Country = () => {
    let params = useParams();

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${params.code}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }, [params.code])


    // console.log(country[0].name.official);
    return (
        <React.Fragment>
            <section className=' dark:bg-gray-800 dark:text-white min-h-screen'>
                <Header />
                <div className="container m-auto py-10">
                    <div className='mx-10'>
                        <Link key={country?.alpha3Code} to='/home'><button className='flex items-center justify-between px-8 py-2 mb-5 rounded dark:bg-gray-700'><BiArrowBack /> Back</button></Link>
                        <section key={country?.name} className='flex flex-col md:flex-row justify-between items-center'>
                            <img src={country?.flags?.png} alt="" className='h-full w-full md:w-1/2 md:mr-10 mb-5 md:mb-0' />
                            <article className='md:w-1/2'>
                                <h2 className='text-2xl'><span className='font-bold'>{country?.name?.common}</span></h2>
                                <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
                                    <div>
                                        <p className='py-1'><span className='font-bold'>Native Name: </span>{country?.nativeName}</p>
                                        <p className='py-1'><span className='font-bold'>Population: </span>{country?.population}</p>
                                        <p className='py-1'><span className='font-bold'>Region: </span>{country?.region}</p>
                                        <p className='py-1'><span className='font-bold'>Sub Region: </span>{country?.subregion}</p>
                                        <p className='py-1'><span className='font-bold'>Capital: </span>{country?.capital}</p>
                                    </div>
                                    <div className='mt-5 md:mt-0'>
                                        <p className='py-1'><span className='font-bold'>Top Level Domain: </span>{country?.topLevelDomain}</p>
                                        <p className='py-1'><span className='font-bold'>Currencies: </span>{country?.currencies?.[0]?.name}</p>
                                        <p className='py-1'><span className='font-bold'>Languages: </span>{country?.languages?.[0]?.name}</p>
                                    </div>
                                </div>
                                <div className='md:flex  space-x-2 items-top'>
                                    <h2 className='font-bold'>Border Countries: </h2>
                                    <div className='grid grid-cols-3 gap-3 lg:grid-cols-4 mt-3 md:mt-0'>
                                        {country?.borders ? country?.borders?.map(border => <ul className='dark:bg-gray-700 rounded	'><li className='px-5 rounded'>{border}</li></ul>) : <p className='ml-3'>Not Found</p>}
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Country;