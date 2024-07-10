import { ReactNode, Suspense } from 'react';
import LinearLoading from 'components/loading/linear-loading';

interface ConditionProps {
  children: ReactNode;
  condition: boolean;
  fallback?: ReactNode;
}

function Condition(props: ConditionProps) {
  if (props.condition)
    return <Suspense fallback={props.fallback || <LinearLoading />}>{props.children}</Suspense>;

  return undefined;
}

export default Condition;
