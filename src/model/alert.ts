import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';

export interface Alert {
  key: string;
  body: ReactNode;
  title?: string;
  onCancel?: () => void;
  cancelText?: string;
  cancelColor?: ButtonProps['color'];
  onOk?: () => void;
  okText?: string;
  okColor?: ButtonProps['color'];
}
