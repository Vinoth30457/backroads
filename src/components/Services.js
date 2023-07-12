import Title from "./Title";
import Service from "./Service";

import { services } from "../constants";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((item) => {
          return <Service {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
