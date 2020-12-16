import React from 'react'
import FullWidthGrid from './components/fullWidthGrid';
import NavBar from './components/navbar'
import SabjiBox from './components/sabjibox';
import "fontsource-roboto";

const sabji_list = [
    {
        name: 'Tomato',
        price: 45,
        unit: 'kg',
        visible: true
    },
    {
        name: 'Onion',
        price: 30,
        unit: 'kg',
        visible: true
    },
    {
        name: 'Milk',
        price: 45,
        unit: 'litre',
        visible: true
    },
    {
        name: 'Potato',
        price: 15,
        unit: 'kg',
        visible: true
    },
]

export default function() {
    return (
        <>
            <NavBar />
            {sabji_list.map(
                (val, index) => <SabjiBox props={val} />
            )}

            {/* <FullWidthGrid /> */}
        </>
    )
}