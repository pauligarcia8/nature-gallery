import CustomImageList from '../components/MuiGallery';


export default {
  title: 'MyComponents/MuiGallery',
  component: CustomImageList,
  argTypes: {
    onClickFavorite: { action: 'clicked' },
  },
};

const Template = (args) => <CustomImageList {...args} />;

export const Default = Template.bind({});
Default.args = {
  favorites: [],
  onClickFavorite: (isFavorite, id, imageTitle) => console.log(`Favorite clicked: ${imageTitle}`),
};

export const WithFavorites = Template.bind({});
WithFavorites.args = {
  favorites: [
    { id: 1, imageTitle: 'Image 1' },
    { id: 3, imageTitle: 'Image 3' },
  ],
  onClickFavorite: (isFavorite, id, imageTitle) => console.log(`Favorite clicked: ${imageTitle}`),
};

export const NoItems = Template.bind({});
NoItems.args = {
  favorites: [],
  onClickFavorite: (isFavorite, id, imageTitle) => console.log(`Favorite clicked: ${imageTitle}`),
  itemData: [],
};