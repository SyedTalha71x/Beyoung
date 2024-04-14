"use client";
import React, { useState, useEffect } from 'react'
import StoreContext from './storeContext'

const StoreState = (props) => {
    const [cart, setcart] = useState({})
    const [subtotal, setsubtotal] = useState(0)
    const [Delievry, setDelievry] = useState(0)
    const [finalsubtotal, setfinalsubtotal] = useState(0)
    const [favourite, setfavourite] = useState({})

    useEffect(() => {
        const cartsystem = () => {
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
        }
        const favoruitesystem = () => {

            try {
                if (localStorage.getItem('favourite')) {
                    setfavourite(JSON.parse(localStorage.getItem('favourite')))
                    saveFavourite(JSON.parse(localStorage.getItem('favourite')))
                }
            }
            catch (error) {
                console.log(error);
                localStorage.clear();
            }
        }
        cartsystem();
        favoruitesystem();
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

    const addtoFavourite = (ItemCode, qty, image, price, name, size, color) => {
        let newFavoruite = favourite;
        if (ItemCode in newFavoruite) {
            newFavoruite[ItemCode].qty += qty;
        }
        else {
            newFavoruite[ItemCode] = { qty: 1, image, price, name, size, color }
        }
        setfavourite(newFavoruite);
        saveFavourite(newFavoruite)
    }

    const removefromfavoruite = (ItemCode, qty, image, price, name, size, color) => {
        let newFavoruite = favourite;
        if (ItemCode in newFavoruite) {
            newFavoruite[ItemCode].qty -= qty;
        }
        if (newFavoruite[ItemCode].qty <= 0) {
            delete newFavoruite[ItemCode];
        }
        setfavourite(newFavoruite);
        saveFavourite(newFavoruite);
    }

    const saveFavourite = (favourite) => {
        localStorage.setItem('favourite', JSON.stringify(favourite));
    }

    const ClearFavourite = () => {
        setfavourite({});
        localStorage.removeItem('favourite')
    }

    return (
        <StoreContext.Provider value={{
            cart, addtoCart, removefromCart, ClearCart, subtotal, Delievry, finalsubtotal,
            favourite, addtoFavourite, removefromfavoruite, ClearFavourite, Favoruitelength: Object.keys(favourite).length
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState