import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

type FormInputs = {
  firstName: string;
  lastName: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type="text" {...register("firstName")} />
      <label>Last Name</label>
      <input type="text" {...register("lastName", { minLength: 10 })} />
      {errors.lastName && <p>"This Field must have more than 10 characters"</p>}
      <button type="button" onClick={() => setValue("firstName", "Grace")}>
        Set First Name Value
      </button>
      <button
        type="button"
        onClick={() =>
          setValue("lastName", "Hopper", {
            shouldValidate: true,
            shouldDirty: true
          })
        }
      >
        Set Last Name
      </button>
      <input type="submit" />
    </form>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
