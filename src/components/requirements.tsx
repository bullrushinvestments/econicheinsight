import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface IFormInputs {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string;
  contentFormat: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setError(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-3">{error}</div>}
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        id="title"
        {...register("title", { required: "This field is required." })}
        className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
      />
      {errors.title && (
        <p role="alert" aria-live="polite" className="text-red-500 text-xs mt-1">{errors.title.message}</p>
      )}

      {/* Repeat similar structure for other fields */}

      <button type="submit" disabled={loading} className={`w-full py-2 px-4 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded`}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { InferProps } from 'prop-types';

interface IFormInputs {
  title: string;
  description: string;
  keywords: string[];
  targetAudience: string;
  contentFormat: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      reset();
      setError(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-3">{error}</div>}
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        type="text"
        id="title"
        {...register("title", { required: "This field is required." })}
        className={`w-full px-3 py-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
      />
      {errors.title && (
        <p role="alert" aria-live="polite" className="text-red-500 text-xs mt-1">{errors.title.message}</p>
      )}

      {/* Repeat similar structure for other fields */}

      <button type="submit" disabled={loading} className={`w-full py-2 px-4 ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded`}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default GatherRequirements;