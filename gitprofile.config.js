// gitprofile.config.js

const config = {
  github: {
    username: 'golles', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['golles'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sandergols',
    twitter: 'golles13',
    facebook: 'sandergols',
    instagram: 'golles13',
    dribbble: '',
    behance: '',
    medium: 'golles',
    dev: '',
    stackoverflow: '4532975/sander', // format: userid/username
    website: 'https://golles.nl',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Android',
    'JavaScript',
    'React Native',
    'Docker',
    'Python',
    'Git',
    'Bash',
    'PHP',
    'MySQL',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'TomTom International',
      position: 'Senior Software Engineer',
      from: 'July 2016',
      to: 'Present',
      companyLink: 'https://tomtom.com',
    },
    {
      company: 'TomTom International',
      position: 'Software Engineer',
      from: 'July 2012',
      to: 'July 2016',
      companyLink: 'https://tomtom.com',
    },
    {
      company: 'TomTom International',
      position: 'Junior Software Engineer',
      from: 'September 2011',
      to: 'July 2012',
      companyLink: 'https://tomtom.com',
    },
    {
      company: 'NC-Websites',
      position: 'Software developer',
      from: 'September 2008',
      to: 'July 2012',
      companyLink: 'https://nc-websites.nl',
    },
  ],
  education: [
    {
      institution: 'Hanze University of Applied Sciences Groningen',
      degree: 'Bachelor of Science',
      from: '2008',
      to: '2012',
    },
    {
      institution: 'Noorderpoort College',
      degree: 'MBO 4',
      from: '2007',
      to: '2008',
    },
    {
      institution: 'Noorderpoort College',
      degree: 'MBO 3',
      from: '2004',
      to: '2007',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'golles',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-QWRTF9CC02', // Please remove this and use your own tag id or keep it empty
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#03a9f4',
      secondary: '#f000b8',
      accent: '#37cdbe',
      neutral: '#3d4451',
      'base-100': '#ffffff',
    },
  },
};

export default config;
