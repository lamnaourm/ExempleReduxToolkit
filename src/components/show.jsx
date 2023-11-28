import React from 'react'
import { useSelector } from 'react-redux'
import { CounterSlice } from '../redux/CounterSlice'

export default function Show() {

    const compteur = useSelector(state => state.counter.compteur)
    //const counterSlice = CounterSlice

    //console.log(counterSlice)
  return (
    <div>
        <h1>{compteur}</h1>
    </div>
  )
}
