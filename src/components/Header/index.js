import React from 'react';
import Link from 'next/link';
import HeaderStyle from './styles';

const Header = () => (
  <HeaderStyle>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </HeaderStyle>
);

export default Header;
