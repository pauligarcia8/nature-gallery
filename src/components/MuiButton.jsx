import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MuiButton({ variant, label, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant} onClick={onClick}>{label}</Button>
    </Stack>
  );
}