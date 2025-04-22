import Picture from "./../assets/me.jpg";

export const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="avatar-container">
          <img
            src={Picture}
            width={150}
            height={150}
            alt="Avatar"
            className="avatar"
          />
          <span className="hashtag">#Frontend-Technical-Lead</span>
        </div>
        <p>
        I’m a Frontend Technical Lead & Team Lead at Unifiedpost Group with over ten years of hands-on experience. I began my career building Angular apps, then moved into React and, six years ago, stepped into the Technical Lead role for all frontend technologies. For the past two years I’ve been managing a cross‑functional team of frontend developers, QA engineers, and business analysts.
        Currently I’m leading a project built on a micro‑frontend architecture in an NX monorepo, and we’ve developed our own design system in React and Storybook to ensure consistency and speed up delivery. In my dual role I’m responsible for:
        </p>
      </div>
    </section>
  );
};
