import { ErrorMessage, Field } from 'formik';

import { InputHTMLAttributes } from 'react';

type Props = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
};

const FormikTextarea = ({ name, ...restProps }: Props) => {
  return (
    <div>
      <Field name={name} as="textarea" {...restProps} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikTextarea;
