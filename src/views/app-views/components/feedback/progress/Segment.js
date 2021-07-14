import React, { Component } from "react";
import { Tooltip, Progress } from "antd";

export class Segment extends Component {
  render() {
    return (
      <div>
        <Tooltip className="mb-2" title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} />
        </Tooltip>

        <Tooltip className="mr-2" title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="circle" />
        </Tooltip>

        <Tooltip className="mr-2" title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="dashboard" />
        </Tooltip>
      </div>
    );
  }
}

export default Segment;
