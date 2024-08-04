import MuiButton from '../components/MuiButton';

export default {
  title: 'MyComponents/MuiButton',
  component: MuiButton,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'radio' },
    },
  },
  label: {
    control: { type: 'text' },  
  },
};

export const Default = {
  args: {
    label: 'Este es un boton de MUI',
    variant: 'outlined', 
  },
};