// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { itemData } from '../itemData';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function MuiGallery({favorites, onClickFavorite}) {

  console.log(favorites)
  const handleClick = (id, imageTitle) => {
      const isCurrentlyFavorite = favorites.some(fav => fav.id === id);
      console.log('iscurrently fav', isCurrentlyFavorite)
      onClickFavorite(isCurrentlyFavorite, id, imageTitle);
    };

  return (
    <ImageList
      sx={{
        width: 1200,
        height: 1100,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={400}
      gap={1}
    >
      {itemData.map((item, idx) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;
        const isFavorite = favorites.some(fav => fav.id === idx);

        return (
          <ImageListItem key={`${item.title}-idx`} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 600, 400, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                  onClick={() => {handleClick(idx, item.title)}}
                >
                  {isFavorite ? <StarIcon/> : <StarBorderIcon/>}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

