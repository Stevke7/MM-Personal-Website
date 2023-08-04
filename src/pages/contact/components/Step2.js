import { Col, Form, Row } from "react-bootstrap";
import Box from '@mui/material/Box';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export function Step2({ handleChangeTimepicker, data, nextStep, }) {
    return (
        <>
            <Row className="d-flex flex-column align-items-center justify-content-center  max-height-385 ">
                <Col xs={12} md={6}>
                    <h4 className="mb-3 text-center">Do you have
                        a timeline?</h4>
                    {/*<Form className="mt-5">*/}

                    <div className="w-100">
                        <Form.Label>Start <span className='text-gray'>(optional)</span></Form.Label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                label=""
                                inputFormat="DD/MM/YYYY"
                                value={data?.start}
                                onChange={(e) => handleChangeTimepicker(e, 'start')}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <input ref={inputRef} {...inputProps} />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='mt-3 w-100'>
                        <Form.Label>End <span className='text-gray'>(optional)</span></Form.Label>
                        <LocalizationProvider sx={"w-100"} className={"w-100"} dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disablePast
                                label=""
                                inputFormat="DD/MM/YYYY"
                                value={data.end}
                                onChange={(e) => handleChangeTimepicker(e, 'end')}
                                renderInput={({ inputRef, inputProps, InputProps }) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <input ref={inputRef} {...inputProps} />
                                        {InputProps?.endAdornment}
                                    </Box>
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    {/*</Form>*/}
                </Col>

            </Row>
        </>

    )
}

