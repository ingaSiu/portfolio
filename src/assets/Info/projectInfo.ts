const imageRootPath = '/src/assets/project_img/';

type InfoProps = {
  name: string;
  img: string;
  id: number;
  urlDemo: string;
  urlGit: string;
  description: string;
};

export const projectInfo: InfoProps[] = [
  {
    name: 'Food Blog',
    img: `${imageRootPath}Project_1_main.png`,
    description:
      'A blog to browse through various recipe posts. Search , add comment and rate recipe posts. Admin has to log in, can create, edit and delete posts and categories. ',
    id: 1,
    urlDemo: 'https://food-blog.ingasiu.online/#/',
    urlGit: 'https://github.com/ingaSiu/food-blog',
  },

  {
    name: 'CatOwerflow forum',
    img: `${imageRootPath}forum_main.png`,
    description:
      'A full-stack website to share post online. Register, log in, post to feed, see other users posts, rate answers, sort/filter, edit posts',
    id: 3,
    urlDemo: '#',
    urlGit: 'https://github.com/ingaSiu/final-project',
  },
  {
    name: 'Food Blog API',
    img: `${imageRootPath}api_main.png`,
    description: 'A back-end project for Food-blog. ',
    id: 2,
    urlDemo: 'https://food-blog-api.ingasiu.online/',
    urlGit: 'https://github.com/ingaSiu/food-blog-api',
  },
  {
    name: 'Ecommerce project',
    img: `${imageRootPath}ecommerce_main.png`,
    description:
      'An e-commerce website to buy clothes - register, login, search, filter, add to cart, checkout clothes from a database. ',
    id: 4,
    urlDemo: '#',
    urlGit: 'https://github.com/ingaSiu/ecommerce-project',
  },
  {
    name: 'Pinterest type website',
    img: `${imageRootPath}interest_main.png`,
    description:
      'A pinterest-type website for favouriting and saving images from Pexels API. Infinite scroll, responsive image loading for better performance ',
    id: 5,
    urlDemo: '#',
    urlGit: 'https://github.com/ingaSiu/interest-page',
  },
];
