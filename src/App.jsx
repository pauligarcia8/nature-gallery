import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomImageList from './components/MuiGallery.jsx';
import GutterlessList from './components/MuiList.jsx';


function App() {
  const [favorites, setFavorites] = useState([]);


  
  
  const handleFavoriteToggle = (isFavorite, id, imageTitle) => {
    if (isFavorite) {
      // Remover de favoritos
      setFavorites(favorites.filter(favId => favId.id !== id));
      console.log(`${imageTitle} removido de favoritos`);
    } else {
      // Agregar a favoritos
      setFavorites([...favorites, {
        id, 
        imageTitle
      }
    ]);
    console.log(`${imageTitle} agregado a favoritos`);
  }
};

  
  return (
    <Container maxWidth="xl">
      <Box sx={{p: 2, width: 1}}>
        <Typography variant='h1'>Nature Gallery</Typography>
      </Box>
      <Box 
        display="flex"
        gap={2}
      >
        <CustomImageList favorites={favorites} clickIcon={handleFavoriteToggle}/>
        <GutterlessList list={favorites}/>
      </Box>
    </Container>
  )
}

export default App
