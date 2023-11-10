import React from 'react'
import { Header } from '../components/Headers/Header.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { SoporteForm } from '../components/Formularios/SoporteForm.jsx'
import { SoporteTexto } from '../components/otros/SoporteTexto.jsx'
export const Support = () => {
  return (
    <>
    <Header/>
    <SoporteTexto/>
    <SoporteForm/>
    <Footer/>
    </>
  )
}
