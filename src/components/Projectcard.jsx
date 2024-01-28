import './App.css'
import Learnmorebtn from './Learnmorebtn';
import dinkesProjectImage from '../assets/images/Dinkes.png';
import portfolioImage from '../assets/images/Portfolio.png';
import Cashier from '../assets/images/Cashier.png'


// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, imageSrc, technologies, description }) => {
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
      
      <Learnmorebtn title={title} technologies={technologies} description={description} />
    </div>
  );
};

const ProjectCardList = () => {
  const projects = [
    {
      title: 'Information System',
      imageSrc: dinkesProjectImage,
      technologies: 'Laravel-Tailwind-Jquery-Docker-Mysql',
      description: 'Information system website for Dinas Kesehatan Kota Semarang.Build with laravel full stack framework and tailwind for the front end.This web for manage employee and make work letter for the employee.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: portfolioImage,
      technologies: 'ReactJs-Javascript-Tailwind-FramerMotion',
      description: 'Portfolio website for review my project.This website build with NextJs,Tailwind,And FramerMotion.',
    },
    {
      title: 'Cashier Web',
      imageSrc: Cashier,
      technologies: 'ReactJs-Javascript-Laravel-Tailwind',
      description: 'Cashier web apps for coffeshop.This build with ReactJs for frontend,And Laravel rest api for backend.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: portfolioImage,
      technologies: 'ReactJs-Javascript-Tailwind-FramerMotion',
      description: 'Portfolio website for review my project.This website build with NextJs,Tailwind,And FramerMotion.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: portfolioImage,
      technologies: 'ReactJs-Javascript-Tailwind-FramerMotion',
      description: 'Portfolio website for review my project.This website build with NextJs,Tailwind,And FramerMotion.',
    },
    {
      title: 'Portfolio Website',
      imageSrc: portfolioImage,
      technologies: 'ReactJs-Javascript-Tailwind-FramerMotion',
      description: 'Portfolio website for review my project.This website build with NextJs,Tailwind,And FramerMotion.',
    },
    // Add more projects as needed
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
