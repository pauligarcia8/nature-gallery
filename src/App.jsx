import * as React from 'react';
import NatureCard from './components/MuiCard';
import autumn from './assets/autumn-forest-road-from-above-picjumbo-com.jpg'
import greenHills from './assets/beautiful-green-hills-with-flowers-and-sunset-picjumbo-com.jpeg'
import landscape from './assets/beautifully-gentle-hilly-landscape-picjumbo-com.jpeg'
import mountain from './assets/kirkjufell-mountain-picjumbo-com.jpg'
import sunset from './assets/purple-romantic-sunset-on-the-coast-picjumbo-com.jpeg'
import norway_mountain from './assets/segla-mountain-norway-free-photos-picjumbo-com.jpg'
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Container maxWidth="xl">
      <Box sx={{p: 2, width: 1}}>
        <Typography variant='h1'>Starting project</Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard 
            imgSrc={autumn} 
            title="Autumn on road" 
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'
          />

        </Grid>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard imgSrc={greenHills} title="Green Hills" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'></NatureCard>
        </Grid>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard imgSrc={landscape} title="Landscape" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'></NatureCard>
        </Grid>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard imgSrc={mountain} title="Mountain" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'></NatureCard>
        </Grid>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard imgSrc={sunset} title="Sunset" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'></NatureCard>
        </Grid>
        <Grid item={{xs: 4, sm: 8, md: 12}}>
          <NatureCard imgSrc={norway_mountain} title="Norway Mountain" content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'></NatureCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
