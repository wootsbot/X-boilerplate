import { useForm } from 'react-hook-form';

import Button from '@design-system/Button';
import InputField from '@design-system/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormValues, HelloFormProps } from './HelloForm.type';

import Container from '@/components/Container';

const schema = yup
  .object({
    nameField: yup.string().required('Name is field required'),
  })
  .required();

function HelloForm({ onSubmit }: HelloFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  function handleSubmitValues(data: FormValues) {
    onSubmit({ name: data.nameField });
  }

  return (
    <form style={{ marginTop: '16px' }} onSubmit={handleSubmit(handleSubmitValues)}>
      <Container>
        <InputField
          placeholder="Hello what's your name"
          isError={Boolean(errors?.nameField)}
          errMsg={errors?.nameField?.message}
          {...register('nameField')}
        />

        <Button style={{ marginTop: '8px' }} type="submit">
          Go to route
        </Button>
      </Container>
    </form>
  );
}

export default HelloForm;
