import { Button, Dialog, DialogActions, DialogContent, DialogTitle, styled } from '@mui/material';
import { Alert as TAlert } from 'model/alert';
import { useState } from 'react';

type AlertProps = TAlert & {
  onTransitionExited: () => void;
};

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    width: '100%',
    padding: 16,
  },
});

function Alert(props: AlertProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    handleClose();
    if (props.onOk) {
      props.onOk();
    }
  };

  const handleCancel = () => {
    handleClose();
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <StyledDialog open={open} onClose={handleClose} onTransitionExited={props.onTransitionExited}>
      {props.title && <DialogTitle variant="h5">{props.title}</DialogTitle>}

      <DialogContent className="text-17">{props.body}</DialogContent>

      <DialogActions>
        <Button color={props.cancelColor} onClick={handleCancel}>
          {props.cancelText || 'Cancel'}
        </Button>

        <Button color={props.okColor} onClick={handleOk}>
          {props.okText || 'OK'}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default Alert;
