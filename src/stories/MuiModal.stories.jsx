import BasicModal from '../components/MuiModal';

export default {
  title: 'MyComponents/MuiModal',  
  component: BasicModal,           
  argTypes: {
    openModal: { control: 'boolean' }, 
    imageId: { control: 'number' },    
  },
};

const Template = (args) => <BasicModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  openModal: true,      
  handleClose: () => console.log('Modal closed'), 
  imageId: 0,            
  modalAction: (action) => console.log(`Action: ${action}`), 
};

export const WithAnotherImage = Template.bind({});
WithAnotherImage.args = {
  ...Default.args,
  imageId: 1,  
};