import React, { useEffect } from 'react';
import { useState } from 'react';
import './Table.css';
import { xdictArray, ingredientToXdict, xdictToIngredient, uniqueCountries } from './util.js';

/**
 *  Table component that contains a form and a table area. 
 * The form is used to select two ingredients and the table area will show the top cities with the highest or lowest price of one ingredient over other.
 * @return {Component} Table component
 */
function Table (props) {
    const [sequence, setSequence] = useState([
        ['City', 'Price']
    ]);
    const [product, setProduct] = useState('inexpensive-meal');
    const [control, setControl] = useState('usd');
    const [country, setCountry] = useState('all');

    // code should fetch from API and update the sequence state if button is clicked
    console.log("id log " +props.id);
    useEffect(() => {
        // Check if props.country is provided and is a valid option
        if (props.id && uniqueCountries().includes(props.id)) {
            console.log("id log 2 " +props.id);
            setCountry(props.id);
        }
    }, [props.id]);

    function handleButtonClick() {
        fetch(`https://maddata-backend.vercel.app/api/products/${product}/?control=${control}&country=${country}`)
            .then(response => response.json())
            .then(data => {
                data = Object.entries(data);
                setSequence(data);
            });

        removeNaN();
        sortSequence();
    }

    // removes any NaN values from the sequence
    function removeNaN() {
        let filteredSequence = sequence.filter(city => !isNaN(city[1]));
        setSequence(filteredSequence);
    }

    // sorts sequence by the second element of each array
    function sortSequence() {
        let sortedSequence = sequence.sort((a, b) => b[1] - a[1]);
        setSequence(sortedSequence);
    }



    return (
        <div className="main">
            <div className='selectors'>
                <div className="selector">
                    <label htmlFor="product">Product</label>
                    <select id="product" onChange={(e) => setProduct(e.target.value)}>
                        {
                            xdictArray().map((xdict, index) => (
                                <option key={index} value={xdict}>{xdictToIngredient(xdict)}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="selector">
                    <label htmlFor="control">Control</label>
                    <select id="control" onChange={(e) => setControl(e.target.value)}>
                        <option key={0} value="usd">usd</option>
                        {
                            xdictArray().map((xdict, index) => (
                                <option key={index} value={xdict}>{xdictToIngredient(xdict)}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="selector">
                    <label htmlFor="country">Country</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="all">All</option>
                        {
                            uniqueCountries().map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))
                        }
                    </select>
                </div>

            </div>
            <button onClick={handleButtonClick} className='custom-button'>Submit</button>
            <div className="container">
                <table className="result-table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>{product}/{control}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sequence.map((city, index) => (
                            <tr key={index}>
                                <td>{city[0]}</td>
                                <td>{Number(city[1]).toFixed(2)}</td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Table;
