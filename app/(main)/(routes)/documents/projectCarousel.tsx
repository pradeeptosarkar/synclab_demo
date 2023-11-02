import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    name: 'SyncLab',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 2',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 3',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 4',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 5',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 6',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 7',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 8',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 9',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 10',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 11',
    icon: './clipboard.png',
    url: ''
  },
  {
    name: 'Project 12',
    icon: './clipboard.png',
    url: ''
  },
  // Add more Program objects here...
];

const ProjectCarousel = () => {
    const ProjectsPerPage = 4;
  
    const ProjectGroups = [];
    for (let i = 0; i < projects.length; i += ProjectsPerPage) {
      ProjectGroups.push(projects.slice(i, i + ProjectsPerPage));
    }
  
    const handleProjectClick = (project: { url?: string }) => {
        if (project.url) {
          window.open(project.url, '_blank');
        }
      };

    return (
      <div>
        <div className="carousel-container flex overflow-x-auto">
          <Carousel showThumbs={false}>
            {ProjectGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="Program-group flex">
                {group.map((Project, index) => (
                  <div key={index} className="Program-item w-1/4 p-4 text-center cursor-pointer" onClick={() => handleProjectClick(Project)}>
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