import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
`;

const BusinessSpecificationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      alert('Business specification created successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {errors.businessName && <p role="alert">Business name is required</p>}
      <label htmlFor="businessName">Business Name:</label>
      <input id="businessName" type="text" {...register('businessName', { required: true })} />

      {errors.description && <p role="alert">Description is required</p>}
      <label htmlFor="description">Description:</label>
      <textarea id="description" rows={4} {...register('description', { required: true })}></textarea>

      <input type="text" placeholder="Website URL (optional)" {...register('websiteUrl')} />

      {errors.contactEmail && <p role="alert">Contact email is required</p>}
      <label htmlFor="contactEmail">Contact Email:</label>
      <input id="contactEmail" type="email" {...register('contactEmail', { required: true })} />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </StyledForm>
  );
};

export default BusinessSpecificationForm;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface BusinessSpecificationForm {
  businessName: string;
  description: string;
  websiteUrl?: string;
  contactEmail: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
`;

const BusinessSpecificationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecificationForm>();

  const onSubmit: SubmitHandler<BusinessSpecificationForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      alert('Business specification created successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {errors.businessName && <p role="alert">Business name is required</p>}
      <label htmlFor="businessName">Business Name:</label>
      <input id="businessName" type="text" {...register('businessName', { required: true })} />

      {errors.description && <p role="alert">Description is required</p>}
      <label htmlFor="description">Description:</label>
      <textarea id="description" rows={4} {...register('description', { required: true })}></textarea>

      <input type="text" placeholder="Website URL (optional)" {...register('websiteUrl')} />

      {errors.contactEmail && <p role="alert">Contact email is required</p>}
      <label htmlFor="contactEmail">Contact Email:</label>
      <input id="contactEmail" type="email" {...register('contactEmail', { required: true })} />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </StyledForm>
  );
};

export default BusinessSpecificationForm;