import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomImageList from './components/MuiGallery.jsx';
import GutterlessList from './components/MuiList.jsx';
import BasicModal from './components/MuiModal.jsx';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState(undefined);
  const [selectedFavoriteId, setSelectedFavoriteId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  
  const handleRemoveFromList = (id) => {
    setSelectedFavoriteId(id);
    handleModalState('OPEN', id); // Cambia a una acción explícita para abrir el modal
  };
  
  const handleModalState = (action, id) => {
    if (action === 'OPEN') {
      setModalState('OPEN');
      handleOpen();
    } else if (action === 'DELETE') {
      setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.id !== id));
      setSelectedFavoriteId(null);
      handleClose();
    } else if (action === 'CANCEL') {
      setSelectedFavoriteId(null);
      handleClose();
    }
  };
  

  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 2, width: 1 }}>
        <Typography variant='h1'>Nature Gallery</Typography>
      </Box>
      <Box
        display="flex"
        gap={2}
      >
        <CustomImageList favorites={favorites} onClickFavorite={handleFavoriteToggle} />
        <GutterlessList list={favorites} onRemoveFavorite={handleRemoveFromList}/>
      </Box>
      <BasicModal openModal={open} modalAction={(action) => handleModalState(action, selectedFavoriteId)} imageId={selectedFavoriteId}/>
    </Container>
  )
}

export default App
