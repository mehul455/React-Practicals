import React from 'react'
import {Routes,Route} from "react-router-dom"


import Action from './Action'
import Dropdownn from './Dropdownn'
const Defaultroute = () => {
    return (
        <>
    <Routes>
    <Route path="/action" element={<Action />} />
    <Route path="/" element={<Dropdownn />} />
     </Routes>
        </>
    )
}

export default Defaultroute
