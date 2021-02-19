import React, {useState} from 'react'
import {useRef} from 'react'
import { Firstname, Label, Name, Lastname, Input, Form, PasswordField, Password, ConfirmPassword, Date, Contact, StyledButton, Error } from './StyledMainContent'


import { useForm } from "react-hook-form";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const minLength = "Your input should contain atleast 8 letters";
const pattern = "Incorrect Format";

// Error Component
const errorMessage = error => {
    return <div className="invalid-feedback" style={{display: "block !important", color: "red", marginTop: "-10px", fontSize: "0.8rem"}}>{error}</div>;
};


function MainContent() {
  // Use it like any other component.
    const { register, handleSubmit, errors, watch } = useForm();
    const onSubmit = data => {
        alert(`Hello ${data.firstname} ${data.lastname}`);
        console.log(data);
    }
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Name>
                <Firstname>
                    <Label>Firstname: </Label>
                    <Input 
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    ref={register({ required: true, maxLength: 20 })}/> 
                    {errors.firstname &&
                    errors.firstname.type === "required" &&
                    errorMessage(required)}
                    {errors.firstname &&
                    errors.firstname.type === "maxLength" &&
                    errorMessage(maxLength)} <br />
                </Firstname>
                
                
                <Lastname>
                    <Label>Lastname: </Label>
                    <Input 
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    ref={register({ required: true, maxLength: 20 })}/> 
                    {errors.lastname &&
                    errors.lastname.type === "required" &&
                    errorMessage(required)}
                    {errors.lastname &&
                    errors.lastname.type === "maxLength" &&
                    errorMessage(maxLength)}<br />
                </Lastname>
            </Name>
            <PasswordField>
                <Password>
                    <Label>Password: </Label>
                    <Input 
                    name="password"
                    type="password"
                    ref={register({ required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}/> 
                    {errors.password &&
                    errors.password.type === "required" &&
                    errorMessage(required)}
                    {errors.password &&
                    errors.password.type === "minLength" &&
                    errorMessage(minLength)} 
                    {errors.password &&
                    errors.password.type === "pattern" &&
                    errorMessage(pattern)} 
                    <br />
                </Password>
                
                <ConfirmPassword>
                    <Label>Confirm Password: </Label>
                    <Input 
                    name="cpassword"
                    type="password" 
                    ref={register({ required: true, minLength: 8, validate: value =>
                        value === password.current || "The passwords do not match" })}/> 
                    {errors.cpassword &&
                    errors.cpassword.type === "required" &&
                    errorMessage(required)}
                    {errors.cpassword &&
                    errors.cpassword.type === "minLength" &&
                    errorMessage(minLength)}
                    {errors.cpassword && <p style={{fontSize: "0.8rem", marginTop: "-10px"}}>{errors.cpassword.message}</p>}
                    
                    <br />
                </ConfirmPassword>
            </PasswordField>

            <Date>
                <Label>Date: </Label>
                <Input 
                name="date"
                type="date" 
                ref={register({ required: true })}/> 
                    {errors.date &&
                    errors.date.type === "required" &&
                    errorMessage(required)}
                <br />
            </Date>

            <Contact>
                <Label>Contact No.: </Label>
                <Input 
                name="contact"
                type="tel" 
                ref={register({ required: true, maxLength: 20 })}/> 
                    {errors.contact &&
                    errors.contact.type === "required" &&
                    errorMessage(required)}
                    {errors.contact &&
                    errors.contact.type === "maxLength" &&
                    errorMessage(maxLength)} 
                <br />
            </Contact>
            
            <StyledButton type="submit"> Submit </StyledButton>
        </Form>
    )
}

export default MainContent