import { RefAttributes } from 'react';

export type ButtonProps = RefAttributes<HTMLAnchorElement> & {
  to: string;
};
