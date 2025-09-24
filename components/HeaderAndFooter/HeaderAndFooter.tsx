import clsx from 'clsx';
import Header from '@/components/Header';
import Footer from '../Footer';
import type { IHeaderAndFooter } from './HeaderAndFooter.model';

const HeaderAndFooter = ({
  showHeader = true,
  showFooter = true,
  childWrappingClasses,
  childWrappingTag = 'div',
  children,
}: IHeaderAndFooter) => {
  const bodyClasses = clsx(childWrappingClasses, {
    'min-h-[calc(100vh-theme(space.12))] pt-20': showHeader && showFooter,
    'min-h-screen': showHeader && !showFooter,
  });

  const Tag = `${childWrappingTag}` as IHeaderAndFooter['childWrappingTag'];

  return (
    <>
      {showHeader ? <Header /> : null}
      <Tag className={bodyClasses}>{children}</Tag>
      {showFooter ? <Footer /> : null}
    </>
  );
};

export default HeaderAndFooter;
