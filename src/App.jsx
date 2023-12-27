import React, { Suspense } from 'react';
import Gutter from './component/Gutter';

const Navigation = React.lazy(() => import('./component/Navigation'))
const Header = React.lazy(() => import('./component/Header'))
const Project = React.lazy(() => import('./component/Project'))
const GetInTouch = React.lazy(() => import('./component/GetInTouch'))
const Footer = React.lazy(() => import('./component/Footer'))
const Loader = React.lazy(() => import('./component/Loader'))

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Header />
        {/* gutter */}
        <Gutter />
        <Project />
        {/* gutter */}
        <Gutter />
        <GetInTouch />
        {/* gutter */}
        <Gutter />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
