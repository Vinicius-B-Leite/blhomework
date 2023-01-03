import React, { useContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { HomeworkContext } from '../../contexts/homeworkContext';

export default function Calendar({ open, setOpen }) {

    const { dateSelected, setDateSelected } = useContext(HomeworkContext)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setOpen(false);
        setDateSelected(currentDate);
      };
    
    return open && (
        <DateTimePicker
            mode='date'
            value={dateSelected}
            onChange={onChange}
        />
    );
}