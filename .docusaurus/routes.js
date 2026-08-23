import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Assignment/__docusaurus/debug',
    component: ComponentCreator('/Assignment/__docusaurus/debug', '756'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/config',
    component: ComponentCreator('/Assignment/__docusaurus/debug/config', 'e3e'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/content',
    component: ComponentCreator('/Assignment/__docusaurus/debug/content', 'baf'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/globalData',
    component: ComponentCreator('/Assignment/__docusaurus/debug/globalData', 'd66'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/metadata',
    component: ComponentCreator('/Assignment/__docusaurus/debug/metadata', '611'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/registry',
    component: ComponentCreator('/Assignment/__docusaurus/debug/registry', '69f'),
    exact: true
  },
  {
    path: '/Assignment/__docusaurus/debug/routes',
    component: ComponentCreator('/Assignment/__docusaurus/debug/routes', 'cfb'),
    exact: true
  },
  {
    path: '/Assignment/blog',
    component: ComponentCreator('/Assignment/blog', '5bb'),
    exact: true
  },
  {
    path: '/Assignment/blog/archive',
    component: ComponentCreator('/Assignment/blog/archive', '34b'),
    exact: true
  },
  {
    path: '/Assignment/blog/authors',
    component: ComponentCreator('/Assignment/blog/authors', 'd41'),
    exact: true
  },
  {
    path: '/Assignment/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Assignment/blog/authors/all-sebastien-lorber-articles', '0d0'),
    exact: true
  },
  {
    path: '/Assignment/blog/authors/yangshun',
    component: ComponentCreator('/Assignment/blog/authors/yangshun', '756'),
    exact: true
  },
  {
    path: '/Assignment/blog/first-blog-post',
    component: ComponentCreator('/Assignment/blog/first-blog-post', '158'),
    exact: true
  },
  {
    path: '/Assignment/blog/long-blog-post',
    component: ComponentCreator('/Assignment/blog/long-blog-post', '361'),
    exact: true
  },
  {
    path: '/Assignment/blog/mdx-blog-post',
    component: ComponentCreator('/Assignment/blog/mdx-blog-post', '3b8'),
    exact: true
  },
  {
    path: '/Assignment/blog/tags',
    component: ComponentCreator('/Assignment/blog/tags', '2ff'),
    exact: true
  },
  {
    path: '/Assignment/blog/tags/docusaurus',
    component: ComponentCreator('/Assignment/blog/tags/docusaurus', '5c6'),
    exact: true
  },
  {
    path: '/Assignment/blog/tags/facebook',
    component: ComponentCreator('/Assignment/blog/tags/facebook', 'e0e'),
    exact: true
  },
  {
    path: '/Assignment/blog/tags/hello',
    component: ComponentCreator('/Assignment/blog/tags/hello', 'dfc'),
    exact: true
  },
  {
    path: '/Assignment/blog/tags/hola',
    component: ComponentCreator('/Assignment/blog/tags/hola', '27b'),
    exact: true
  },
  {
    path: '/Assignment/blog/welcome',
    component: ComponentCreator('/Assignment/blog/welcome', '976'),
    exact: true
  },
  {
    path: '/Assignment/markdown-page',
    component: ComponentCreator('/Assignment/markdown-page', '934'),
    exact: true
  },
  {
    path: '/Assignment/docs',
    component: ComponentCreator('/Assignment/docs', '10c'),
    routes: [
      {
        path: '/Assignment/docs',
        component: ComponentCreator('/Assignment/docs', 'e2b'),
        routes: [
          {
            path: '/Assignment/docs',
            component: ComponentCreator('/Assignment/docs', '213'),
            routes: [
              {
                path: '/Assignment/docs/category/tutorial---basics',
                component: ComponentCreator('/Assignment/docs/category/tutorial---basics', '3b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/category/tutorial---extras',
                component: ComponentCreator('/Assignment/docs/category/tutorial---extras', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/intro',
                component: ComponentCreator('/Assignment/docs/intro', '574'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/manually-collect-consent-data',
                component: ComponentCreator('/Assignment/docs/manually-collect-consent-data', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/congratulations', '243'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/create-a-blog-post', 'ce6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/create-a-document', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/create-a-page', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/deploy-your-site', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Assignment/docs/tutorial-basics/markdown-features', 'fa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Assignment/docs/tutorial-extras/manage-docs-versions', '551'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Assignment/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Assignment/docs/tutorial-extras/translate-your-site', '2c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Assignment/',
    component: ComponentCreator('/Assignment/', 'ff5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
