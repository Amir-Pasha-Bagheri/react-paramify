import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

export interface BodyProps {
  onClose: () => void;
}

export interface Modal {
  key: string;
  body: (bodyProps: BodyProps) => ReactNode;
  title?: string;
  closeIcon?: ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  scroll?: DialogProps['scroll'];
  fullScreen?: boolean;
}
