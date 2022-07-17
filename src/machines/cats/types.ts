import { ErrorMessage } from "src/machines/types";
import { Nullable } from "@/utils/types";

export interface Cat {
  name: Nullable<string>;
  image: Nullable<string>;
}

export interface CatsModel {
  data: Array<Cat> | [];
  errorMessage?: ErrorMessage;
}
