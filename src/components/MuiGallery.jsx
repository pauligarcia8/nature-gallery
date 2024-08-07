// import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import autumn from '../assets/autumn-forest-road-from-above-picjumbo-com.jpg'
import greenHills from '../assets/beautiful-green-hills-with-flowers-and-sunset-picjumbo-com.jpeg'
import landscape from '../assets/beautifully-gentle-hilly-landscape-picjumbo-com.jpeg'
import mountain from '../assets/kirkjufell-mountain-picjumbo-com.jpg'
import sunset from '../assets/purple-romantic-sunset-on-the-coast-picjumbo-com.jpeg'
import norway_mountain from '../assets/segla-mountain-norway-free-photos-picjumbo-com.jpg'
import { useState } from 'react';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList({clickIcon}) {
    const [starClicked, setStarClicked] = useState();

    const handleClick = (id) => {
        setStarClicked(() => !starClicked)

        clickIcon(id);
    }

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

        return (
          <ImageListItem key={`${item.img}-idx`} cols={cols} rows={rows}>
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
                >
                  {starClicked ? <StarIcon onClick={() => {handleClick(idx)}} /> : <StarBorderIcon onClick={() => {handleClick(idx)}}/>}
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

const itemData = [
  {
    img: autumn,
    title: 'Autumn',
    featured: true,
  },
  {
    img: greenHills,
    title: 'Green Hills',
    author: '@rollelflex_graphy726',
  },
  {
    img: landscape,
    title: 'Landscape',
    author: '@helloimnik',
  },
  {
    img: mountain,
    title: 'Mountain',
    author: '@nolanissac',
  },
  {
    img: sunset,
    title: 'Sunset',
    author: '@hjrc33',
  },
  {
    img: norway_mountain,
    title: 'Norway Mountain',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: greenHills,
    title: 'Green Hills',
    author: '@rollelflex_graphy726',
  },
  {
    img: landscape,
    title: 'Landscape',
    author: '@helloimnik',
  },
  
];
