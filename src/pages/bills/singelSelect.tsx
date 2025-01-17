import React from "react";
import { default as ReactSelect, components } from "react-select";
import Participant from "../../models/Particiant";

  
interface SingleSelectProps {
    participants: Participant[];
    onChange: (selectedPayer: Participant) => void;
}


const SingleSelect: React.FC<SingleSelectProps> = ({ participants, onChange }) => {
    const handleChange = (selectedOption: any) => {
      onChange(selectedOption.value);
    };
  
    const options = participants.map(participant => ({
      value: participant,
      label: participant.name
    }));
  
    return (
      <ReactSelect
        options={options}
        isClearable
        components={{ Option }}
        onChange={handleChange}
      />
    );
  };
  
  const Option = (props: any) => {
    console.log('single select props: ',props)
    return (
      <components.Option {...props}>
        <div style={{ display: 'flex', alignItems: 'left' }}>
          <label>{props.data.label}</label>
        </div>
      </components.Option>
    );
  };
  
  export default SingleSelect;