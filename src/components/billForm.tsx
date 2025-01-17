// Form.js
import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../apis/users/usersData';
import '../styles/bill.scss';
import MultipleSelect from '../pages/bills/multipleSelect.tsx';
import Participant from '../models/Particiant.ts';
import BillDetails from '../models/BillDetails.ts';
import SingleSelect from '../pages/bills/singelSelect.tsx';

function BillForm() {
    const [allParticipants, setAllParticipants] = useState<Participant[]>([]);
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [payments, setPayments] = useState<{ [key: string]: number }>({});
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [payer, setPayer] = useState<string>("");
    useEffect(() => {
        fetchUsers().then((data) => {
            setAllParticipants(data);
            console.log('allparticipants: ', data)
        });

        

    }, []);

    const [formData, setFormData] = useState<{
        participants: Participant[];
        payer: string;
        restaurant: string;
        date: string;
        billDetails: BillDetails[];
    }>({
        participants: [],
        payer: '',
        restaurant: '',
        date: '',
        billDetails: [] as BillDetails[],
    });

    const [errors, setErrors] = useState<{ participants?: string; payer?: string; restaurant?: string; date?: string; billDetails?: BillDetails[]; }>({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function updatePayerOptions(participants) {
        console.log('updatePayerOptions: ', participants)
        // const payerSelect = document.getElementById("payer");
        // if (payerSelect) {
            // payerSelect.innerHTML = "";
            // participants.forEach(participant => {
            //     const option = document.createElement("option");
            //     option.value = participant.id;
            //     option.textContent = participant.name;
            //     payerSelect.appendChild(option);
            // });
        // }
    }
    
    function msOnchange(selectedOptions: HTMLCollectionOf<HTMLOptionElement>) {
        console.log(Array.from(selectedOptions).map((x: HTMLOptionElement) => x.value ?? x.text))
        setParticipants(Array.from(selectedOptions).map((x: HTMLOptionElement) => {
            const participant = allParticipants.find(p => p.id.toString() === x.value);
            return participant ? participant : { id: -1, name: '' };
        }))
        // update payer option list
        updatePayerOptions(participants)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors: {participants?: string; payer?: string; restaurant?: string; date?: string; billDetails?: BillDetails[];} = {};

        if (data.participants.length === 0) {
            errors.participants = 'At least one participant is required';
        }

        if (!data.payer.trim()) {
            errors.payer = 'Username is required';
        } 

        if (!data.restaurant.trim()) {
            errors.restaurant = 'Restaurant is required';
        }

        if (!data.date.trim()) {
            errors.date = 'Date is required';
        }

        return errors;
    };

    return (
       
        <div className="form-container">
            <h2 className="form-title">Create Bill Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Participants:
                    </label>
                    <MultipleSelect allParticipants={allParticipants} onChange={(selectedParticipants) => {
                        setParticipants(selectedParticipants);
                        setFormData({
                            ...formData,
                            'participants': selectedParticipants,
                        });
                    }} />
                        {errors.participants && (
                            <span className="error-message">
                                {errors.participants}
                            </span>
                        )}
                </div>

                <div>
                    <label className="form-label">
                        Payer:
                    </label>
                    <SingleSelect participants={participants} onChange={(selectedPayer) => {
                        setPayer(selectedPayer.name);
                        setFormData({
                            ...formData,
                            'payer': selectedPayer.name,
                        });
                    } } />
                    {errors.payer && (
                        <span className="error-message">
                            {errors.payer}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Restaurant:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.restaurant}
                        onChange={handleChange}
                    />
                    {errors.restaurant && (
                        <span className="error-message">
                            {errors.restaurant}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Date:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    {errors.date && (
                        <span className="error-message">
                            {errors.date}
                        </span>
                    )}
                </div>
                <div className="button-container">
                    <button className="submit-button" type="submit">Submit</button>
                    <button className="cancel-button" type="button" data-dismiss="modal">Cancel</button>
                </div>
            </form>
        </div>
     
    );
}

export default BillForm;