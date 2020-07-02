
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/moneystream-project/',
  component: ComponentCreator('/moneystream-project/'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog',
  component: ComponentCreator('/moneystream-project/blog'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/hello-world',
  component: ComponentCreator('/moneystream-project/blog/hello-world'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/hola',
  component: ComponentCreator('/moneystream-project/blog/hola'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/tags',
  component: ComponentCreator('/moneystream-project/blog/tags'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/tags/docusaurus',
  component: ComponentCreator('/moneystream-project/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/tags/facebook',
  component: ComponentCreator('/moneystream-project/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/tags/hello',
  component: ComponentCreator('/moneystream-project/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/tags/hola',
  component: ComponentCreator('/moneystream-project/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/moneystream-project/blog/welcome',
  component: ComponentCreator('/moneystream-project/blog/welcome'),
  exact: true,
  
},
{
  path: '/moneystream-project/docs',
  component: ComponentCreator('/moneystream-project/docs'),
  
  routes: [
{
  path: '/moneystream-project/docs/',
  component: ComponentCreator('/moneystream-project/docs/'),
  exact: true,
  
},
{
  path: '/moneystream-project/docs/doc2',
  component: ComponentCreator('/moneystream-project/docs/doc2'),
  exact: true,
  
},
{
  path: '/moneystream-project/docs/doc3',
  component: ComponentCreator('/moneystream-project/docs/doc3'),
  exact: true,
  
},
{
  path: '/moneystream-project/docs/mdx',
  component: ComponentCreator('/moneystream-project/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
