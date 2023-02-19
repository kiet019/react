import React, { useEffect } from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="about">
      <h3 style={{ color: "white" }}>About Us</h3>
      <Collapsible accordion popout>
        <CollapsibleItem
          expanded={false}
          header="About Us"
          icon={<Icon>theaters</Icon>}
          node="div"
        >
            Welcome to our website! We are a platform that provides the latest and most popular movies in a range of genres. We constantly update our selection so that you can stay up-to-date with the most sought-after titles.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Our Mission"
          icon={<Icon>flag</Icon>}
          node="div"
        >
          Our mission is to provide users with the best movie streaming experience on the web. We ensure that users enjoy a smooth, comprehensive, and convenient movie-watching experience. We also commit to protecting users' personal information and ensuring the safety of transactions on our website.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Our Team"
          icon={<Icon>group</Icon>}
          node="div"
        >
          We are a group of web development experts and movie enthusiasts. We strive to provide users with the best experience possible on our website. We always welcome and listen to user feedback to improve our service.
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
