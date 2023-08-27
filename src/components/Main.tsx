import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./Home'));

// Simulate a lazy loading
// const Skills = React.lazy(() => import('./Skills'));
const Skills = React.lazy(() => 
  import("./Skills").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 500);
    });
  })
);

const Projects = React.lazy(() => 
  import("./Projects").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 500);
    });
  })
);

const Contacts = React.lazy(() => 
  import("./Contacts").then((module) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(module as any);
      }, 500);
    });
  })
);

import Loader from './base/Loader'

const Main = () => {
return (         
  <React.Suspense fallback={<Loader />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  </React.Suspense>
);
}
export default Main;