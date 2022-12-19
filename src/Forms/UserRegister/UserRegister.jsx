//import style from "./style.module.scss";
import { useState } from "react";
import formstyle from "../form.module.scss";
import { createUser } from "../../api/requests";
export default function RegisterForm() {
  const emptyInputs = {
    fullName: "",
    passportID: "",
  };
  const [inputs, setInputs] = useState(emptyInputs);
  const clearInputs = () => {
    setInputs(() => emptyInputs);
  };
  const createNewUser = async (e) => {
    e.preventDefault();
    await createUser(inputs);
    clearInputs();
  };
  return (
    <form
      className={formstyle.form}
      onSubmit={createNewUser}
      onReset={clearInputs}
    >
      <p className={formstyle.title}>Register a New User</p>
      <div className={formstyle["form-control"]}>
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="name family"
          value={inputs.fullName}
          onChange={(e) =>
            setInputs((st) => ({ ...st, fullName: e.target.value }))
          }
          required
        />
      </div>
      <div className={formstyle["form-control"]}>
        <label htmlFor="passportID">Passport ID</label>
        <input
          type="text"
          id="passportID"
          name="passportID"
          placeholder="9 digits"
          pattern="[0-9]{9}"
          value={inputs.passportID}
          onChange={(e) =>
            setInputs((st) => ({ ...st, passportID: e.target.value }))
          }
          required
        />
      </div>
      <div className={formstyle.buttons}>
        <button type="reset" className={formstyle.button}>
          Clear form
        </button>
        <button type="submit" className={formstyle.button}>
          Submit
        </button>
      </div>
    </form>
  );
}
