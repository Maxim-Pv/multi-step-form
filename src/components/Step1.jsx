import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,12}$/, 'Enter a valid phone number')
    .required('This field is required'),
});

const Step1 = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('formData');
    return savedInfo ? JSON.parse(savedInfo) : {};
  });
  
  const formik = useFormik({
    initialValues: {
      name: info.name || '',
      email: info.email || '',
      phone: info.phone || ''
    },
    validationSchema,
    onSubmit: values => {
      const formData = JSON.stringify(values, null, 2);
      setInfo(formData);
      localStorage.setItem('formData', formData)
      navigate('/step2');
    },
    
  });
  
  
  return (
      <div className="step-content">
        <div>
          <div>
            <h1 className="title">Personal info</h1>
            <p className="description">Please provide your name, email address, and phone number.</p>
          </div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <div className="label">
                <Form.Label>Name</Form.Label>
                {formik.touched.name && formik.errors.name ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                ) : formik.touched.name && !formik.errors.name ? (
                  <Form.Control.Feedback type="valid" />
                ) : null}
              </div>
              <Form.Control 
                id="name"
                name="name"
                type="text" 
                placeholder="e.g. Stephen King" 
                value={formik.values.name}
                onChange={formik.handleChange}
                isInvalid={formik.touched.name && !!formik.errors.name}
                isValid={formik.touched.name && !formik.errors.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <div className="label">
                <Form.Label>Email Address</Form.Label>
                {formik.touched.email && formik.errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                ) : formik.touched.email && !formik.errors.email ? (
                  <Form.Control.Feedback type="valid" />
                ) : null}
              </div>
              <Form.Control 
                id="email"
                name="email"
                type="text" 
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="e.g. stephenking@lorem.com" 
                isInvalid={formik.touched.email && !!formik.errors.email}
                isValid={formik.touched.email && !formik.errors.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="label">
                <Form.Label>Phone Number</Form.Label>
                {formik.touched.phone && formik.errors.phone ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phone}
                  </Form.Control.Feedback>
                ) : formik.touched.phone && !formik.errors.phone ? (
                  <Form.Control.Feedback type="valid" />
                ) : null}
              </div>
              <Form.Control 
                id="phone"
                name="phone"
                type="number" 
                placeholder="e.g. +1 234 567 890" 
                value={formik.values.phone}
                onChange={formik.handleChange}
                isInvalid={formik.touched.phone && !!formik.errors.phone}
                isValid={formik.touched.phone && !formik.errors.phone}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="button">
          <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
            Next Step
          </Button>
        </div>
      </div>
  );
};

export default Step1;
