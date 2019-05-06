import * as Yup from 'yup';

export default Yup.object().shape({
  Applicant: Yup.object().shape({
    FirstName: Yup.string()
      .min(3, 'Must be greater than 2')
      .required('First Name is Required'),
    LastName: Yup.string().required('Last Name is Required'),
    Phone: Yup.string().required('Phone Number is Required'),
    Email: Yup.string()
      .email('Enter a valid email address e.g. name@example.com')
      .required('Email is Required'),
    Address: Yup.object().shape({
      Street: Yup.string().required('Street is Required'),
      UnitNumber: Yup.string().required('Unit Number is Required'),
      City: Yup.string().required('City is Required'),
      State: Yup.string().required('State is Required'),
      PostalCode: Yup.string().required('Postal Code is Required'),
    }),
  }),
});
