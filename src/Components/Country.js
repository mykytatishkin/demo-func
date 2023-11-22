import React, { useEffect, useState } from 'react'

export default function Country(props) {

    const initialData = () => {
        const items = JSON.parse( localStorage.getItem('items') );
        console.log('init');
        return items;
    }

    const [country, setCountry] = useState({id: 0, name: '', capital:'', population:0});
    const [list, setList] = useState(initialData);

    useEffect(
        () => {
            console.log(list);
        },
        [list]
    );

    const addCountry = (event) => {
        const countyId = list.length;
        setCountry({...country, id:countyId})
        setList([...list, country]);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <input type='text' name='name' placeholder='Country name' onChange={ (event) => {
                // country.name = event.target.value;       // this is wrong way
                // setCountry({name:event.target.value});   // this way replaces the original object

                // correct but long
                //const newCountry = {id:0, name:event.target.value, capital:country.capital, population:country.population}
                
                setCountry( {...country, name: event.target.value} );
            } } />
            <input type='text' name='capital' placeholder='Capital' onChange={ (event) => {
                setCountry( {...country, capital: event.target.value} );
            } } />
            <input type='text' name='population' placeholder='Population' onChange={ (event) => {
                setCountry( {...country, population: event.target.value} );
            } } />
            <button type='button' className='btn btn-dark' onClick={addCountry}>Add</button>
            <hr/>
            { list.length > 0 
            ?
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Capital</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map( (c, index) => <tr key={index}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.capital}</td>
                            <td>{c.population}</td>
                        </tr>)}
                    </tbody>
                </table>
            :
                <span>No countries</span>
            }
        </div>
    )
}
