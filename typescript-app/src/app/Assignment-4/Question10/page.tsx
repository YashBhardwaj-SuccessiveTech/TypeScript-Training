// 10.Create a form with Material-UI text fields and implement form validation. 
// Ensure that error messages are displayed when the user enters invalid data.
"use client";

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

type FormData = {
  name: string,
  email: string,
}

type FormErrors = Partial<FormData>;

function MaterialUIForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = ():FormErrors => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert('Form submitted!');
      // You can do your API call here
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 300, mx: 'auto', mt: 5 }}>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        error={!!formErrors.name}
        helperText={formErrors.name}
      />
      <TextField
        label="Email"
        name="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default MaterialUIForm;

