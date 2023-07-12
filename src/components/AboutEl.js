import Title from "./Title";
import aboutImg from "../images/about.jpeg";
const AboutEl = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} alt="About image" className="about-photo" />
        </div>
        <article className="about-info">
          <h3>Explore The Difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel labore
            sint nulla inventore nemo, error voluptas velit mollitia esse
            doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            debitis neque quasi labore explicabo voluptas quam magnam officiis
            illum odit.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default AboutEl;
