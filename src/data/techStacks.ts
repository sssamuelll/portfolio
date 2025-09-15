// src/data/techStacks.ts
export interface TechCategory {
  title: string;
  items: stack[];
}

export type stack={
    name: string,
    icon: string,
    projects?: string[]
}

export const techStacks: TechCategory[] = [
  {
    title: 'Frontend',
    items: [{
            name: 'React',
            icon: '',
        },{
            name: 'TypeScript',
            icon: ''
        },{
            name: 'Redux',
            icon: ''
        },{
            name: 'Next.js',
            icon: ''
        },{
            name: 'Flutter',
            icon: ''
        }]
  },
  {
    title: 'Styling / UI',
    items: [{
           name:'CSS3',
           icon: ''
        },{
            name:'SASS',
            icon: ''
        },{ 
            name: 'Styled-Components',
            icon: ''
        },{ 
            name: 'Tailwind CSS',
            icon: ''
        },{ 
            name: 'Figma',
            icon: ''
        }]
  },
  {
    title: 'Build / Tooling',
    items: [{
            name:'Webpack',
            icon:''
        },{
            name:'Vite',
            icon:''
        },{ 
            name:'Babel',
            icon:''
        },{ 
            name:'ESLint',
            icon:''
        },{ 
            name:'Prettier',
            icon:''
        },{ 
            name:'Storybook',
            icon:''
        }]
  },
  {
    title: 'Testing',
    items: [{
            name:'Jest',
            icon:''
        },{ 
            name:'React Testing Library',
            icon:''
        },{ 
            name:'Cypress',
            icon:''
        }]
  },
  {
    title:'API Integration',
    items:[{
            name:'REST (Axios, Fetch)',
            icon:''
        },{
            name:'GraphQL (Apollo Client)',
            icon:''
        }]
  },
  {
    title:'Version Control / CI/CD',
    items:[{
                name:'Git',
                icon:''
            },{
                name:'GitHub Actions',
                icon:''
            },{ 
                name: 'GitLab CI', 
                icon: ''
            },{
                name: 'Jenkins', 
                icon:''
            },{
                name: 'Docker', 
                icon: ''
            },{
                name: 'Nginx',
                icon: ''
            }]
  },
  {
    title:'Backend (for prototyping/mocks)',
    items:[{
        name:'Node.js',
        icon:''
    },{
        name: 'Express',
        icon: ''
    },{
        name: 'Python',
        icon: ''
    },{
        name: 'Flask',
        icon: ''
    }]
  }
];
