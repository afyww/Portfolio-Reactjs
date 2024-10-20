import './App.css'
import Learnmorebtn from './Learnmorebtn';
import Dinkes from '../assets/images/Dinkes.png';
import Custompedia from '../assets/images/Custompedia.png'
import Cashier from '../assets/images/Cashier.png'
import Aquashine from '../assets/images/Aqua.png'
import Luthfiyasin from '../assets/images/Luthfiyasin.png'


// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, imageSrc, technologies, description, link }) => {
  return (
    <div className="rounded-sm space-y-3">
      <img
        className="transition-transform ease-linear duration-300 transform hover:scale-110 rounded-sm"
        src={imageSrc}
        width={300}
        height={300}
        alt=""
      />
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="text-emerald-600 line-clamp-1">{technologies}</p>
      <p className="text-left font-light line-clamp-2 max-w-xs">{description}</p>
      <div className='flex justify-between'>
      <Learnmorebtn title={title} technologies={technologies} description={description} />
      <a className='bg-red-500 hover:bg-red-700 text-black font-light py-2 px-4 rounded-sm' href={link} target="_blank" rel="noopener noreferrer">Visit</a>
      </div>
    </div>
  );
};

const ProjectCardList = () => {
  const projects = [
    {
      title: 'Sistem Informasi Surat Kerja',
      imageSrc: Dinkes,
      technologies: 'Laravel-Tailwind-Jquery-Docker-Mysql',
      description: 'Information system website for Dinas Kesehatan Kota Semarang.Build with laravel full stack framework and tailwind for the front end.This web for manage employee and make work letter for the employee.',
      link: 'http://119.2.50.170:5500/surat-p2p/',
    },
    {
      title: 'PT.Custompedia Agency Creative With CMS',
      imageSrc: Custompedia,
      technologies: 'ReactJs-Javascript-Tailwind-Laravel',
      description: 'Profile Company website for update project.This website build with ReactJs,Tailwind,And For CMS use Laravel.',
      link: 'https://custompedia.agency/',
    },
    {
      title: 'Profile Cagub Jawa Tengah',
      imageSrc: Luthfiyasin,
      technologies: 'ReactJs-Javascript-Tailwind',
      description: 'Profile Company for Calon Gubernur Jawa Tengah.This website build with ReactJs,Tailwind.',
      link: 'https://custompedia.agency/',
    },
    {
      title: 'Beil Cashier App',
      imageSrc: Cashier,
      technologies: 'ReactJs-React Native-Laravel-Tailwind-Redis',
      description: 'Cashier web apps and mobile.This build with ReactJs for frontend,And Laravel rest api for backend and use Laravel Octane with Swoole for boost app and use redis for cache, mobile use React Native.',
      link: 'https://beilcoff.shop/',
    },
    {
      title: 'Company Profile',
      imageSrc: Aquashine,
      technologies: 'ReactJs-Javascript',
      description: 'Company profile web for business aquascape.This build with ReactJs.',
      link: 'https://aquashine.company/',
    },
  ];

  return (
    <div className="space-y-4 xl:mx-auto xl:my-auto">
      <div className="flex justify-center space-x-8">
        <p className="text-white rounded-sm p-2 border">My Recent Works</p>
      </div>
      <div className="grid xl:grid-cols-2 gap-8 overflow-y-scroll h-96 text-white p-8 bg-gray-600">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;
