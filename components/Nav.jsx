'use client'

import Link from 'next/link';
import Image from 'next/image';
import useHoverImage from '@hooks/useHoverImage';
import { useState } from 'react';

const Nav = () => {
    const [selectedPage, setSelectedPage] = useState('');
    
    const [titleImageSrc, setTitleImageHover, setTitleImageUnselect] = useHoverImage(
        '/assets/JohnErwinUnselected.svg',
        '/assets/JohnErwinSelected.svg',
        selectedPage === 'home'
    );
    
    const [projectsImageSrc, setProjectsImageHover, setProjectsImageUnselect] = useHoverImage(
        '/assets/ProjectsUnselected.svg',
        '/assets/ProjectsSelected.svg',
        selectedPage === 'projects'
    );

    const [workSchoolImageSrc, setWorkSchoolImageHover, setWorkSchoolImageUnselect] = useHoverImage(
        '/assets/WorkSchoolUnselected.svg',
        '/assets/WorkSchoolSelected.svg',
        selectedPage === 'workschool'
    )

    const [aboutImageSrc, setAboutImageHover, setAboutImageUnselect] = useHoverImage(
        '/assets/AboutUnselected.svg',
        '/assets/AboutSelected.svg',
        selectedPage === 'about'
    )

    const handleLinkClick = (page) => {
        setSelectedPage(page);
    }


    return (
    <nav className="flex justify-between w-full mb-2 pt-3">

        <Link href='/' className='flex gap-2 flex-center ml-2' onClick={() => handleLinkClick('home')}>
            <Image
                src={titleImageSrc}
                alt='John Erwin'
                width={250}
                height={20}
                onMouseEnter={setTitleImageHover}
                onMouseLeave={setTitleImageUnselect}
            />
        </Link>
        <div className='flex gap-2 mr-2 items-center'>
            <Link href='/projects' onClick={() => handleLinkClick('projects')}>
                <Image
                    src={projectsImageSrc}
                    alt='Projects'
                    width={150}
                    height={20}
                    onMouseEnter={setProjectsImageHover}
                    onMouseLeave={setProjectsImageUnselect}
                />
            </Link>
            <Link href='/workschool' onClick={() => handleLinkClick('workschool')}>
                <Image
                    src={workSchoolImageSrc}
                    alt='Work and School'
                    width={150}
                    height={20}
                    onMouseEnter={setWorkSchoolImageHover}
                    onMouseLeave={setWorkSchoolImageUnselect}
                />
            </Link>
            <Link href='/about' onClick={() => handleLinkClick('about')}>
                <Image
                    src={aboutImageSrc}
                    alt='About'
                    width={150}
                    height={20}
                    onMouseEnter={setAboutImageHover}
                    onMouseLeave={setAboutImageUnselect}
                />
            </Link>
        </div>
        
    </nav>
  )
}

export default Nav