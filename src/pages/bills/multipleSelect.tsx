import React, { useState } from 'react';
import { default as ReactSelect, components } from "react-select";
import Participant from '../../models/Particiant';

interface MultipleSelectProps {
  allParticipants: Participant[];
  onChange: (selectedParticipants: Participant[]) => void;
}

const Option = (props) => {
  return (
      <components.Option {...props}>
         <div  style={{ display: 'flex' }}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
            style={{ marginRight: '10px' }}
          />{" "}
          <label>{props.data.label}</label>
         </div>
      </components.Option>
  );
};

const MultipleSelect: React.FC<MultipleSelectProps> = ({ allParticipants, onChange }) => {
  const [selectedParticipants, setSelectedParticipants] = useState<Participant[]>([]);
  // const [state, setState] = useState({ optionSelected: null });
  
  const handleChange = (selectedOptions: any) => {
    const selected = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    setSelectedParticipants(selected);
    onChange(selected);
  };

  return (
    <ReactSelect
        options={allParticipants.map(participant => ({
          value: participant,
          label: participant.name
        }))}
        isMulti
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        hideSelectedOptions={false}
        components={{ Option }}
        onChange={handleChange}
        value={selectedParticipants.map(participant => ({
          value: participant,
          label: `${participant.name}`
        }))}
      />
  );
};

export default MultipleSelect;