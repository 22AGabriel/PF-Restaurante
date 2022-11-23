import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../views/Admin';
import AgregarProducto from '../views/producto/AgregarProducto';
import EditarProducto from '../views/producto/EditarProducto';
import Pedidos from '../views/Pedidos';

const RutasAdmin = () => {
    return (
        <>
        <Routes>
        <Route exact path="/administrar" element={<Admin/>}/>
        <Route exact path="/administrar/agregar" element={<AgregarProducto/>}/>
        <Route exact path="/administrar/editar/:id" element={<EditarProducto/>}/>
        </Routes>
        </>
    );
};

export default RutasAdmin;