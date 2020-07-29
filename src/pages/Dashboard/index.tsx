import React from 'react';

import { Container } from './styles';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import initialData from '../../data/initialData.json';
import Carousel from '../../components/Carousel';

const Dashboard: React.FC = () => {
  return (
    <div style={{ background: '#21222c' }}>
      <Container>
        <Menu />
        <Banner
          videoTitle={initialData.categories[0].videos[0].title}
          url={initialData.categories[0].videos[0].url}
          videoDescription={'something'}
        />
        <Carousel ignoreFirstVideo category={initialData.categories[0]} />
        <Carousel category={initialData.categories[1]} />
        <Carousel category={initialData.categories[2]} />
        <Carousel category={initialData.categories[3]} />
        <Carousel category={initialData.categories[4]} />
        <Carousel category={initialData.categories[5]} />
        <Footer />
      </Container>
    </div>
  );
};

export default Dashboard;
