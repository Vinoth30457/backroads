import PageLink from "./PageLink";

const Pagelinks = ({ parentClass, itemClass, pageLinks }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default Pagelinks;
