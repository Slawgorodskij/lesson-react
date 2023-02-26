import React, { FC } from 'react';
import MUIButton from '@material-ui/core/Button';

interface ButtonProps {
  label: string;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = ({ label, disabled = false }) => {
  return (
    <MUIButton
      disabled={disabled}
      variant="contained"
      type={'submit'}
      data-testid={'button'}
    >
      {label}
    </MUIButton>
  );
};
