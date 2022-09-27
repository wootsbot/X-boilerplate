import { ErrorMessage } from '@/machines/types';

import { Nullable } from '@/utils/types';

export interface DogResponse {
  message: Nullable<string>;
  status: Nullable<string>;
}

export interface DogModel {
  data: Nullable<DogResponse>;
  errorMessage?: ErrorMessage;
}
