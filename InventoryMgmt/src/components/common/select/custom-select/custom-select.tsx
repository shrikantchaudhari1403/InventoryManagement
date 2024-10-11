import React from "react";
import Select, { components } from "react-select";
import "./index.css";

const Menu = (props:any) => {
  return (
    <>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
          <button
            className={"change-data"}
            onClick={props.selectProps.changeOptionsData}
          >
            Change data
          </button>
        </div>
      </components.Menu>
    </>
  );
};

const Option = (props:any) => {
  return (
    <>
      <components.Option {...props}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div>{props.children}</div>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Edit clicked: ", props.data.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Delete clicked: ", props.data.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </components.Option>
    </>
  );
};

const CustomSelect = ({ options, changeOptionsData, fetchingData, onChange,value ,name}: {
  options?: any;
  changeOptionsData?: any;
  fetchingData?: any;
  onChange?: any;
  value?:any;
  name?:any;
}) => {
  return (
    <div>
      <Select
        name={name}
        options={options}
        components={{ Menu }}
        fetchingData={fetchingData}
        changeOptionsData={changeOptionsData}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
export default CustomSelect;
