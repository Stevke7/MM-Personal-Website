import {Form, Modal} from "react-bootstrap";
import Box from '@mui/material/Box';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";


export function Step2({handleChangeTimepicker, data, nextStep,}) {
    console.log(data.start)

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h4 className="mb-3 w-25 text-center">Do you have
                    a timeline?</h4>
                <Form className="my-5">
                    <div>
                        <Form.Label>Start <span className='text-gray'>(optional)</span></Form.Label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                label=""
                                inputFormat="DD/MM/YYYY"
                                value={data?.start}
                                onChange={(e) => handleChangeTimepicker(e, 'start')}
                                renderInput={({inputRef, inputProps, InputProps}) => (
                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                        <input ref={inputRef} {...inputProps} />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='mt-3'>
                        <Form.Label>End <span className='text-gray'>(optional)</span></Form.Label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                label=""
                                inputFormat="DD/MM/YYYY"
                                value={data.end}
                                onChange={(e) => handleChangeTimepicker(e, 'end')}
                                renderInput={({inputRef, inputProps, InputProps}) => (
                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                        <input ref={inputRef} {...inputProps} />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                </Form>
                <button onClick={nextStep} className="btn text-white mt-5">Next
                </button>
            </div>
        </>

    )
}

