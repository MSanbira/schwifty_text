import React from "react";
import SchwiftyText from "./schwifty-text";
import "./demo.scss";
import schwiftyRick from "./schwifty-rick.jpg";

export default function Demo() {
  return (
    <div className="container">
      <SchwiftyText
        text="schwifty text"
        variant="h1"
        containerSize="l"
        textStyle={{ padding: 0, textAlign: "center" }}
      />
      <SchwiftyText
        text="An animated gradient filled text component"
        variant="h2"
        containerSize="l"
        textStyle={{ textAlign: "center", padding: 0 }}
        options={{ inverse: true }}
      />

      <div className="two-cols-container">
        <div style={{ width: "60%" }}>
          <SchwiftyText containerSize="m">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>Wobba labba dub dub</div>
          </SchwiftyText>
          <SchwiftyText containerSize="m" options={{ speed: "fast" }}>
            <p>
              Elit scelerisque mauris pellentesque pulvinar pellentesque
              habitant morbi tristique senectus. A cras semper auctor neque. At
              quis risus sed vulputate. Erat pellentesque adipiscing commodo
              elit at imperdiet. Leo urna molestie at elementum eu facilisis sed
              odio morbi. Massa tincidunt nunc pulvinar sapien et ligula
              ullamcorper. Dictumst vestibulum rhoncus est pellentesque elit.
              Sem nulla pharetra diam sit amet nisl suscipit. Duis convallis
              convallis tellus id interdum velit. Eget egestas purus viverra
              accumsan in. Laoreet non curabitur gravida arcu ac tortor
              dignissim convallis.
            </p>
          </SchwiftyText>
          <SchwiftyText
            variant="p"
            containerSize="m"
            options={{ speed: "superFast" }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </SchwiftyText>
        </div>

        <SchwiftyText containerSize="m">
          <img src={schwiftyRick} alt="Get Schwifty!" />
        </SchwiftyText>
      </div>

      <div className="arrow-btn-container">
        <SchwiftyText
          options={{ noText: true, speed: "superFast" }}
          className="arrow-right"
          containerSize="s"
        />
        <SchwiftyText
          options={{ spacialElement: "btn" }}
          containerSize="s"
          style={{ width: "100%" }}
        >
          press me
        </SchwiftyText>
        <SchwiftyText
          options={{ noText: true, reverse: true, speed: "superFast" }}
          className="arrow-left"
          containerSize="s"
        />
      </div>
    </div>
  );
}
