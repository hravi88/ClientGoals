import React, { useState, useEffect } from "react";

const useForm = ({ initialFieldValues, validate }: { initialFieldValues: any; validate: any; }) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    };
}

export default useForm;
