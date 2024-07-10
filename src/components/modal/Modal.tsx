import { Dialog, DialogContent, DialogTitle, IconButton, styled } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Modal as TModal } from 'model/modal';
import { useState } from 'react';

type ModalProps = TModal & {
  onTransitionExited: () => void;
};

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    width: '100%',
    padding: 16,
  },
});

function Modal(props: ModalProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      onTransitionExited={props.onTransitionExited}
      maxWidth={props.maxWidth}
      fullScreen={props.fullScreen}
      scroll={props.scroll}
    >
      <div className="flex justify-between items-center">
        {props.title && <DialogTitle variant="h5">{props.title}</DialogTitle>}

        {props.closeIcon && (
          <IconButton className="border-0" onClick={handleClose}>
            <Close />
          </IconButton>
        )}
      </div>

      <DialogContent>
        {props.body({
          onClose: handleClose,
        })}
      </DialogContent>
    </StyledDialog>
  );
}

export default Modal;
