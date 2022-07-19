import React from 'react';
import Link from 'next/link'
import Image from "next/image"
import Logo from '../../public/static/img/logo-white.png'
import { Navbar } from 'reactstrap';

export const DashbordPanelHeader = () => {
  return (
    <Navbar color="light" light expand="md" className="navbar">
      <a>
    <Link href="/" className="p-0" >
                        <Image src={Logo} className="white-logo" alt="image" width={200} height={80} />
                    </Link></a> 
    </Navbar> )
}
