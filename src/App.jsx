import React, { Suspense } from 'react';

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
        <div className="gutter"></div>
        <Project />
        <div className="gutter"></div>
        <GetInTouch />
        <div className="gutter"></div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
