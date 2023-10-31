import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const programs = [
  {
    name: 'Program 1',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 2',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 3',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 4',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 5',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 6',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 7',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 8',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 9',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 10',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 11',
    icon: './noun-program-3427435.png',
  },
  {
    name: 'Program 12',
    icon: './noun-program-3427435.png',
  },
  // Add more Program objects here...
];

const ProgramCarousel = () => {
    const ProgramsPerPage = 4;
  
    const ProgramGroups = [];
    for (let i = 0; i < programs.length; i += ProgramsPerPage) {
      ProgramGroups.push(programs.slice(i, i + ProgramsPerPage));
    }
  
    return (
      <div>
        <div className="carousel-container flex overflow-x-auto">
          <Carousel showThumbs={false}>
            {ProgramGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="Program-group flex">
                {group.map((Program, index) => (
                  <div key={index} className="Program-item w-1/4 p-4 text-center">
                    <img src={Program.icon} alt={Program.name} className="max-w-full" />
                    <p>{Program.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  };

export default ProgramCarousel;