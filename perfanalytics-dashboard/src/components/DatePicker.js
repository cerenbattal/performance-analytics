import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function DatePicker(props) {
    const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());
    const [selectedToDate, setSelectedToDate] = React.useState(new Date());

    const handleFromDateChange = (date) => {
        console.log(date);
        setSelectedFromDate(date);
    };

    const handleToDateChange = (date) => {
        console.log(date);
        setSelectedToDate(date);
    };

    props.onSelectDate(selectedFromDate, selectedToDate)

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline-one"
                    label="From:"
                    value={selectedFromDate}
                    onChange={handleFromDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline-two"
                    label="To:"
                    value={selectedToDate}
                    onChange={handleToDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
}
