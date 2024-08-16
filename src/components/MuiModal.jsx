import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MuiButton from './MuiButton.jsx';
import { itemData } from '../itemData.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    outline: 0
};

export default function BasicModal({ openModal, handleClose, imageId, modalAction }) {


    const onCancel = () => {
        console.log('CANCEL');
        modalAction('CANCEL');
    }

    const onDelete = () => {
        console.log('DELETE');
        modalAction('DELETE');
    }


    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to remove this image from your favorites?
                    </Typography>
                    <img src={itemData[imageId]?.img || 'defaultImagePath'} alt="" width={332} height={232} />
                    <Box display="flex" justifyContent="space-evenly">
                        <MuiButton label="Cancel" onClick={onCancel} />
                        <MuiButton label="Delete" onClick={onDelete} />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
