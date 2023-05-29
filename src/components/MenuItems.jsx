const MenuItems = () => {
    const menuLinks = [
        {
            id: 1,
            title: 'Home',
            path: '#home'
        },
        {
            id: 2,
            title: 'Speakers',
            path: '#speakers'
        },
        {
            id: 3,
            title: 'Media',
            path: '#stacked-covered'
        },
        {
            id: 4,
            title: 'EDP',
            path: '#faqs'
        },
        {
            id: 5,
            title: 'Faqs',
            path: '#faqs'
        }
    ];

  return (
    <nav>
        <ul className='flex flex-col gap-3 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem] mt-2'>
            {menuLinks.map(({title, path, id}) => (
                <li key={id} className='text-black text-base'>
                    <a href={path} className='text-black text-base hover:text-blue'>
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MenuItems;