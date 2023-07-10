import React, { createContext, useState } from 'react';

export const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
    const [data, setData] = useState({
        webDesign: false,
        logoDesign: false,
        graphicDesign: false,
        start: new Date(),
        end: '',
        minBudget: false,
        middleBudget: false,
        maxBudget: false,
        name: '',
        companyName: '',
        website: '',
        projectDescription: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    return (
        <ContactModalContext.Provider value={{ data, setData }}>
            {children}
        </ContactModalContext.Provider>
    );
}