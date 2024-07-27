import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: ReactNode;
};

const Link = ({ page, selectedPage, setSelectedPage, children }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      className={`transition duration-500 hover:text-blue-400 ${isSelected ? 'text-emerald-600' : ''}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {children}
    </AnchorLink>
  );
};

export default Link;
