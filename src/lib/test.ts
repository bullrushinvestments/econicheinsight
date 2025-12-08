import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, CircularProgress } from '@material-ui/core';

interface WriteTestProps {
  onSubmit: (values: TestFormValues) => void;
}

interface TestFormValues {
  title: string;
  content: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

export const WriteTest: React.FC<WriteTestProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik<TestFormValues>({
    initialValues: { title: '', content: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await onSubmit(values);
      } catch (error) {
        console.error('Error submitting test:', error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        aria-label="test-title"
        fullWidth
      />
      <TextField
        label="Content"
        name="content"
        multiline
        rows={4}
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        aria-label="test-content"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !formik.isValid}
        aria-label="submit-test"
        tabIndex={0}
      >
        {loading ? <CircularProgress size={24} /> : 'Submit Test'}
      </Button>
    </form>
  );
};

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, CircularProgress } from '@material-ui/core';

interface WriteTestProps {
  onSubmit: (values: TestFormValues) => void;
}

interface TestFormValues {
  title: string;
  content: string;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

export const WriteTest: React.FC<WriteTestProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik<TestFormValues>({
    initialValues: { title: '', content: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await onSubmit(values);
      } catch (error) {
        console.error('Error submitting test:', error);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        aria-label="test-title"
        fullWidth
      />
      <TextField
        label="Content"
        name="content"
        multiline
        rows={4}
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.content && Boolean(formik.errors.content)}
        helperText={formik.touched.content && formik.errors.content}
        aria-label="test-content"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !formik.isValid}
        aria-label="submit-test"
        tabIndex={0}
      >
        {loading ? <CircularProgress size={24} /> : 'Submit Test'}
      </Button>
    </form>
  );
};