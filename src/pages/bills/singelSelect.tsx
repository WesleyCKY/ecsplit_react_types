import React, { useEffect } from "react";
import { default as ReactSelect, components } from "react-select";
import Participant from "../../models/Particiant";

  
interface SingleSelectProps {
    participants: Participant[];
    payer: Participant;
    setPayer: (payer: Participant) => void;
    onChange: (payer) => void;
}


const SingleSelect: React.FC<SingleSelectProps> = ({ participants, payer, setPayer, onChange }) => {
    const handleChange = (selectedOption: any) => {
        console.log('selectedOption: ',selectedOption)
        setPayer({name: selectedOption.label, id: selectedOption.value});
    };
  
    const options = participants.map((participant) => ({
      value: participant.id, // assuming 'id' is a string property of Participant
      label: participant.name
    }));

    useEffect(() => {
        setPayer(participants[0]);
    }, [participants]);
  
    return (
      <ReactSelect
        options={options}
        isClearable
        components={{ Option }}
        onChange={handleChange}
        value={payer ? { value: payer.id, label: payer.name } : null}
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