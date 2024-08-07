import * as React from 'react';

import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomImageList from './components/MuiGallery.jsx';

function App() {

  const handleFavorite = (id) => {
    console.log('click en', id);
  }
  
  return (
    <Container maxWidth="xl">
      <Box sx={{p: 2, width: 1}}>
        <Typography variant='h1'>Nature Gallery</Typography>
      </Box>
      <CustomImageList clickIcon={handleFavorite}/>
      
    </Container>
  )
}

export default App
