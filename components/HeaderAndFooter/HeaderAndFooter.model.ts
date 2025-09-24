import type { ReactNode } from 'react';

export interface IHeaderAndFooter {
  showHeader?: boolean;
  showFooter?: boolean;
  childWrappingClasses?: string;
  childWrappingTag:
    | 'main'
    | 'article'
    | 'header'
    | 'footer'
    | 'section'
    | 'div';
  children: ReactNode;
}
