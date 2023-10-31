import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    name: 'Project 1',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 2',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 3',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 4',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 5',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 6',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 7',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 8',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 9',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 10',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 11',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Project 12',
    icon: './noun-program-3427435.png',
  },
  // Add more Program objects here...
];

const ProjectCarousel = () => {
    const ProjectsPerPage = 4;
  
    const ProjectGroups = [];
    for (let i = 0; i < projects.length; i += ProjectsPerPage) {
      ProjectGroups.push(projects.slice(i, i + ProjectsPerPage));
    }
  
    return (
      <div>
        <div className="carousel-container flex overflow-x-auto">
          <Carousel showThumbs={false}>
            {ProjectGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="Program-group flex">
                {group.map((Project, index) => (
                  <div key={index} className="Program-item w-1/4 p-4 text-center">
                    <img src={Project.icon} alt={Project.name} className="max-w-full" />
                    <p>{Project.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };

export default ProjectCarousel;