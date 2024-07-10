import { memo } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material';

// styles
const LinearLoadingWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});

// ==============================|| LOADER ||============================== //

const LinearLoading = (props: LinearProgressProps) => (
  <LinearLoadingWrapper>
    <LinearProgress {...props} />
  </LinearLoadingWrapper>
);

export default memo(LinearLoading);
