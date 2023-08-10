import { colorCodes } from "../constants";

const Resistor = ({ bandA, bandB, bandC, bandD }) => {
  return (
    <div className="resistor-container">
      <div class="box">
        <div class="grid-container">
          <div class="resistor_body">
            <div
              class="band1"
              style={{
                background: colorCodes[bandA],
                border: `1px solid ${bandA ? colorCodes[bandA] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              class="band2"
              style={{
                background: colorCodes[bandB],
                border: `1px solid ${bandB ? colorCodes[bandB] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              class="band3"
              style={{
                background: colorCodes[bandC],
                border: `1px solid ${bandC ? colorCodes[bandC] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              class="band4"
              style={{
                background: colorCodes[bandD],
                border: `1px solid ${bandD ? colorCodes[bandD] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
          </div>
          <div class="lead1"></div>
          <div class="lead2"></div>
        </div>
      </div>
    </div>
  );
};

export default Resistor;
