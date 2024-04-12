"use client";
import React, { useState, useEffect } from 'react'
import StoreContext from './storeContext'

const StoreState = (props) => {
    const [cart, setcart] = useState({})
    const [subtotal, setsubtotal] = useState(0)
    const [Delievry, setDelievry] = useState(0)
    const [finalsubtotal, setfinalsubtotal] = useState(0)

    useEffect(() => {
        try {
            if (localStorage.getItem('cart')) {
                setcart(JSON.parse(localStorage.getItem('cart')))
                saveCart(JSON.parse(localStorage.getItem('cart')))
            }
        }
        catch (error) {
            console.log(error);
            localStorage.clear();
        }
    }, [])

    const ClearCart = () => {
        setcart({});
        saveCart({});
    }


    const saveCart = (myCart) => {
        localStorage.setItem('cart', JSON.stringify(myCart));
        let subt = 0;
        let keys = Object.keys(myCart);
        if (keys.length > 0) {
            keys.forEach((itemKey) => {
                const item = myCart[itemKey]
                subt += item.price * item.qty
            })
            const extracharge = 200;
            const total = subt + extracharge;
            setsubtotal(subt);
            setDelievry(extracharge);
            setfinalsubtotal(total);
        }
        else {
            setsubtotal(0);
            setDelievry(0);
            setfinalsubtotal(0);
        }
    }

    const addtoCart = (ItemCode, qty, image, price, name, size, color) => {
        let newCart = cart;
        if (ItemCode in newCart) {
            newCart[ItemCode].qty = newCart[ItemCode].qty + qty;
        }
        else {
            newCart[ItemCode] = { qty: 1, image, price, name, size, color }
        }
        setcart(newCart);
        saveCart(newCart);
    }

    const removefromCart = (ItemCode, qty, image, price, name, size, color) => {
        let newCart = cart;
        if (ItemCode in newCart) {
            newCart[ItemCode].qty = newCart[ItemCode].qty - qty;
        }
        if (newCart[ItemCode].qty <= 0) {
            delete newCart[ItemCode]
        }
        setcart(newCart);
        saveCart(newCart)
    }
    return (
        <StoreContext.Provider value={{ cart, addtoCart, removefromCart, ClearCart, subtotal, Delievry, finalsubtotal }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState