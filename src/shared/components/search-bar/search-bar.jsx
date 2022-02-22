import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Paper
      id='search-form'
      component="form"
      autoComplete='off'
      sx={{ display: 'flex', alignItems: 'center', width: 400, height: 34 }}
    >
      <Button id="search-icon" type="submit">
        <span className="material-icons md-24">search</span>
      </Button>
      <InputBase
        id='search-input'
        type='search'
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar un juego"
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
