import { useState, useEffect } from "react";
import { notification } from "antd";
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_7ZV1WpoPHqltcFp8Y4l72");

const useForm = (validate) => {

  const [values, setValues] = useState({name: '', email:'', message:''});
  const [errors, setErrors] = useState({name:'', email:'', message:''});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let template_params = {
      "name": values.name,
      "email": values.email,
      "message": values.message
   }
   
   let service_id = "service_581gpzm";
   let template_id = "template_Nara_Meraki";

    setErrors(validate(values));
    if (Object.keys(values).length === 3) {
      emailjs.send(service_id, template_id, template_params)
      .then((response) => {
         setShouldSubmit(true);
        //  console.log(values);
        //  console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    }

    values.name = "";
    values.email = "";
    values.message = "";

    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';

  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
