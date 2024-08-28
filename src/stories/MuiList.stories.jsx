import GutterlessList from '../components/MuiList';

export default {
  title: 'MyComponents/MuiList',
  component: GutterlessList,
  argTypes: {
    onRemoveFavorite: { action: 'clicked' },
  },
};

const Template = (args) => <GutterlessList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    { id: 1, imageTitle: 'Image 1' },
    { id: 2, imageTitle: 'Image 2' },
    { id: 3, imageTitle: 'Image 3' },
  ],
  onRemoveFavorite: (id) => alert(`Removed item with id: ${id}`),
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  list: [],
  onRemoveFavorite: (id) => alert(`Removed item with id: ${id}`),
};