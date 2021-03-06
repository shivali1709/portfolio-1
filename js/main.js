import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
  'title': "Ecommerce Website",
  'href' : "https://example.com",
  'desc' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  'image':{
  'desc':"example screenshot of a project involving code",
  'src':"images/example1.png",
  'comment':""
  }
},
{
'title': "Portfolio with ReactJS using Lambda",
'href' : "https://github.com/Edward-aws/portfolio",
'desc' : "See Git Hub Link for specifics",
'image':{
'desc':"Serverless Portfolio",
'src':"images/example2.png",
'comment':""
  }
},
{
'title': "Serverless Projects",
'href' : "https://example.com",
'desc' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
'image':{
'desc':"example screenshot of a project involving cats",
'src':"images/example3.png",
'comment':""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
