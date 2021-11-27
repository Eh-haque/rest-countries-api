import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import { AiOutlineSearch } from 'react-icons/ai'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [originData, setOriginData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then(data => {
        setCountries(data)
        setFiltered(data)
        console.log(data);
        setLoading(true)
      })
  }, []);

  // Search by name
  const handleSearch = e => {
    const search = e.target.value;
    const matchedProduct = countries.filter(scountry => scountry.name.toLowerCase().includes(search.toLowerCase()));
    setFiltered(matchedProduct);
    setLoading(true);
  }

  // Filter by region
  const handleFilter = filter => {
    const matchedProduct = countries.filter(rcountry => rcountry.region.toLowerCase().includes(filter.toLowerCase()));
    setFiltered(matchedProduct);
    setLoading(true);
  }

  // const handleCountry = code3 => {
  //   const code = code3.toLowerCase()
  //   const url = (`https://restcountries.com/v3.1/alpha/${code}`)
  //   console.log(url);
  // }

  return (
    <React.Fragment>
      <section className='dark:bg-gray-800 dark:text-white min-h-screen'>
        <Header />
        <div className="container m-auto py-10">
          <div className="mx-10">
            <div className="pb-5 justify-between flex flex-col md:flex-row">
              <div className='relative'>
                <AiOutlineSearch className='absolute top-3 left-2'/>
                <input className="shadow rounded px-8 py-2 border border-gray-300 focus:border-blue-300 dark:bg-gray-700" placeholder="Search for a country..." onChange={handleSearch} />
              </div>
              <div className="select">
                <select
                  className="shadow rounded px-8 py-2 my-3 md:m-0 border border-gray-300 focus:border-blue-300  dark:bg-gray-700" name="select"
                  id="select"
                  onClick={(e) => handleFilter(e.target.value)}
                >
                  <option value="">Filter by Region</option>
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="americas">Americas</option>
                  <option value="oceania">Oceania</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 rounded">
              {
                filtered.map((country) =>
                  <Link to={`/home/${country.alpha3Code.toLowerCase()}`} key={country.alpha3Code}>
                    < div key={country.name} className="shadow-xl dark:bg-gray-700">
                      <img src={country.flag} alt="" className="h-40 w-full m-auto" />
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-3">{country.name}</h3>
                        <p><span className="font-bold">Population: </span>{country.population}</p>
                        <p><span className="font-bold">Region: </span>{country.region}</p>
                        <p><span className="font-bold">Capital: </span>{country.capital}</p>
                      </div>
                    </div>
                  </Link>
                )
              }
            </div>
            {!loading && <button type="button" className="bg-rose-600" disabled>Loading...</button>}
          </div>
        </div>
      </section>
    </React.Fragment >
  );
};

export default Countries;