import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { FormRegister } from '../components/Formularios/FormRegister';

export const Register = () => {
  return (
    <NextUIProvider>
      <FormRegister />
    </NextUIProvider>
  );
}
