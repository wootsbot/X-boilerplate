export type FormValues = {
  nameField: string;
};

export type HelloFormProps = {
  onSubmit: ({ name }: { name: string }) => void;
};
