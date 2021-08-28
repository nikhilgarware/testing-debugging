import React from "react";
import { Select, Space } from "antd";
import { useState } from "react";
import { dummyResponse } from "./Component1.utilities";
import Component2 from "../Component2";

function Component1() {
  const { Option } = Select;
  const [state, setState] = useState(0);
  let meterNamesWithIds = [];
  dummyResponse.map((items) => {
    meterNamesWithIds.push({
      name: items.name,
      id: items.id,
      applicationType: items.applicationType,
    });
    return items.name;
  });
  function handleChange(value) {
    meterNamesWithIds.map((dataTOCheck) => {
      if (dataTOCheck.name === value) {
        setState(dataTOCheck.id);
      }
      return dataTOCheck.name;
    });
  }
  return (
    <div>
      <Space>
        <Select style={{ width: 160 }} onChange={handleChange}>
          {dummyResponse.map((item) => {
            return (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            );
          })}
        </Select>
        <Component2 db1={state} />;
      </Space>
    </div>
  );
}

export default Component1;
