import React from 'react';
import Link from 'next/link';
import HeaderStyle from './styles';

class Header extends React.Component {

  handleSearch = () => {
    console.log('search')
    Router.push('/search');
  }

 render() {
   return (
     <HeaderStyle>
         <div
          onClick={this.handleSearch}
         >
           Home1
         </div>
       <Link href="/about">
         <a>About</a>
       </Link>
     </HeaderStyle>
   )
 }
}

export default Header;
