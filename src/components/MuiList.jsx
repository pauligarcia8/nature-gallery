import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function GutterlessList({list}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {list.map((item) => (
        <ListItem
          key={item.id}
          sx={{color: 'black'}}
          disableGutters
          secondaryAction={
            <IconButton aria-label="delete">
              <DeleteIcon sx={{color: 'black'}}/>
            </IconButton>
          }
        >
          <ListItemText primary={item.imageTitle}  />
        </ListItem>
      ))}
    </List>
  );
}
