import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bryan Tiernan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello my name is Bryan and this is my site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is ',
  name: 'Bryan Tiernan',
  subtitle: 'Welcome to my Personal Site!',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I\'m a recent ECE graduate from the University of Limerick, majoring in Computer Engineering.',
  paragraphTwo: 'I\'m looking for any positions as a Backend software engineer.',
  paragraphThree: 'I\'m really passionate about technology.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Python trading bot',
    info: 'Coming soon to a portfolio site near you',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me ? Email me at bryantiernan@gmail.com',
  btn: 'Email me',
  email: 'bryantiernan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bryan-tiernan-4abaab180/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Bryan-Tiernan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
