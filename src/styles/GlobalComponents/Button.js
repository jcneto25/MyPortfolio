import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = ({ alt, form, disabled, children, onClick }) => (
  <ButtonBack $alt={alt} $form={form} disabled={disabled}>{children}
    <ButtonFront $alt={alt} onClick={onClick} disabled={disabled}>{children}</ButtonFront>
  </ButtonBack>
);

export default Button
