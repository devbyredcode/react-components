import React, { useState } from "react";
import Form from "../../Components/Molekul/FormValidation";
import { Button } from "reactstrap";

const ValidationForm = () => {
    const [validationClick, setValidationClick] = useState(false);
    const listForm = [
        {
            type: "email",
            action: "input",
            name: "email",
            placeholder: "Email",
            col: 6,
            valid: "Email tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            type: "text",
            name: "name",
            action: "input",
            placeholder: "Name",
            col: 6,
            valid: "Nama tidak boleh kosong",
            value: "",
            status: false,
        },
    ];
    const handlerSubmitData = () => {
        let isError = false;
        listForm.forEach((item) => {
            console.log("item", item);
            if (!item.status) {
                isError = true;
            }
        });

        setValidationClick(isError);
    };
    return (
        <div>
            <Form validationClick={validationClick} form={listForm} />
            <Button onClick={handlerSubmitData}>check value</Button>
        </div>
    );
};
export default ValidationForm;