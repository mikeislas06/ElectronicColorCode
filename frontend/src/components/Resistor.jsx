import { colorCodes } from "../constants";

const Resistor = ({ bandA, bandB, bandC, bandD }) => {
  return (
    <div className="resistor-container">
      <div className="box">
        <div className="grid-container">
          <div className="resistor_body">
            <div
              className="band1"
              style={{
                background: colorCodes[bandA],
                border: `1px solid ${bandA ? colorCodes[bandA] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              className="band2"
              style={{
                background: colorCodes[bandB],
                border: `1px solid ${bandB ? colorCodes[bandB] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              className="band3"
              style={{
                background: colorCodes[bandC],
                border: `1px solid ${bandC ? colorCodes[bandC] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
            <div
              className="band4"
              style={{
                background: colorCodes[bandD],
                border: `1px solid ${bandD ? colorCodes[bandD] : "rgba(0, 0, 0, 0.3)"}`,
              }}
            ></div>
          </div>
          <div className="lead1"></div>
          <div className="lead2"></div>
        </div>
      </div>
    </div>
  );
};

export default Resistor;
