import React, { useState, Fragment } from "react";
import Form from "../../Components/Molekul/FormValidation";
import { Button, Card, CardBody } from "reactstrap";
import TabMenu from "../../Components/Molekul/TabMenu";
import Code from "./Code";

const ValidationForm = () => {
    const [validationClick, setValidationClick] = useState(true);
    const [validateForm, setValidateForm] = useState(true);
    const [listForm, setForm] = useState([
        {
            type: "text",
            action: "text",
            name: "name",
            placeholder: "Name",
            col: 6,
            valid: "Nama tidak boleh kosong",
            value: "",
            status: false,
            character: {
                min: {
                    length: 3,
                    valid: "Minimal 3 character",
                },
                max: {
                    length: 10,
                    valid: "Maximal 10 character",
                },
            },
        },
        {
            type: "email",
            action: "email",
            name: "email",
            placeholder: "Email",
            col: 6,
            valid: "Email tidak boleh kosong",
            value: "",
            status: false,
        },
        {
            action: "price",
            name: "price",
            col: 6,
            valid: "Harap isi form harga",
            value: "",
            currencyLogo: "Rp. ",
            min: {
                price: 10000,
                valid: "Field harga tidak boleh kurang dari 10.000",
            },
            status: false,
        },
        {
            type: "file",
            action: "file",
            name: "file",
            placeholder: "Upload File",
            col: 6,
            valid: "Harap masukan file",
            value: "",
            status: false,
        },
        {
            type: "image",
            action: "uploadImage",
            name: "image",
            placeholder: "Klik Untuk Masukan Gambar",
            col: 6,
            valid: "Harap masukan gambar",
            value: "",
            status: false,
            normalData: false,
        },
        {
            type: "image",
            action: "uploadImageMultiple",
            name: "image-multiple",
            col: 6,
            valid: "Harap masukan gambar",
            value: [],
            status: false,
            max: 3,
        },
    ]);
    // const onGetValue = (param) => {
    //     let isError = false;
    //     for (let key in param) {
    //         if (!param[key].status) {
    //             isError = true;
    //         }
    //     }
    //     setValidationClick(isError);
    //     setValidateForm(false);
    //     console.log("isError", isError);
    //     if (!validationClick) {
    //         alert("form is valid, put your action endpoint is here");
    //     }
    // };
    const handlerSubmitData = () => {
        let isError = false;
        for (let key in listForm) {
            if (!listForm[key].status) {
                isError = true;
            }
        }
        setValidationClick(isError);
        setValidateForm(false);
        console.log("isError", isError);
        if (!isError) {
            alert("form is valid, put your action endpoint is here");
        }
        // onGetValue(listForm);
        // console.log("validationClick", validationClick);
    };
    return (
        <section>
            <h3 className="title">Validation Form</h3>
            <Card>
                <CardBody>
                    <TabMenu
                        color={{
                            text: "#aaa",
                            background: "#aaa",
                            activeColor: "#000",
                            activeBackground: "#000",
                        }}
                        data={[
                            {
                                title: "HTML",
                                key: 1,
                                render: () => {
                                    return (
                                        <Fragment>
                                            <Form
                                                setForm={setForm}
                                                validateForm={validateForm}
                                                validationClick={
                                                    validationClick
                                                }
                                                form={listForm}
                                            />
                                            <Button onClick={handlerSubmitData}>
                                                Submit
                                            </Button>
                                        </Fragment>
                                    );
                                },
                            },
                            {
                                title: "Code",
                                key: 2,
                                render: () => {
                                    return <Code />;
                                },
                            },
                        ]}
                    />
                    <div>
                        <p>Download Component Form in here</p>
                    </div>
                    <div>
                        <p>Download particle Form in here</p>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
};
export default ValidationForm;
