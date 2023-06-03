import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be altleast 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age should atleast be 18" }),
});

type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  //   // if (nameRef.current != null) {
  //   //   person.name = nameRef.current.value;
  //   // }
  //   // if (ageRef.current != null) {
  //   //   person.age = parseInt(ageRef.current.value);
  //   // }
  //   // console.log(person);
  // };

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be atleast 3 characters</p>
        )} */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: event.target.value })
          // }
          // value={person.age}
          {...register("age", { required: true, valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {/* {errors.age?.type === "required" && (
          <p className="text-danger">The age is required</p>
        )} */}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
