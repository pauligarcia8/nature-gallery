import MuiCard from '../components/MuiCard';

const meta = {
  component: MuiCard,
};
export default {
  title: 'MyComponents/MuiCard',
  component: MuiCard,
  argTypes: {
    buttonPosition: {
      options: ['left', 'rigth'],
      control: { type: 'boolean' },
    },
  },
  label: {
    control: { type: 'text' },  
  },
};

export const Default = {
  args: {
    imgSrc: 'src/assets/autumn-forest-road-from-above-picjumbo-com.jpg', 
    title: 'Autumn Forest', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'
  }
};