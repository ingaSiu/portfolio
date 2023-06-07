import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import style from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={style.home_wrapper}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
