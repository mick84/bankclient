import { Link } from "react-router-dom";
import page from "../page.module.scss";
export default function Homepage() {
  return (
    <div className={page.page}>
      <h1>Welcome to Mike's bank place!</h1>
      <h3>Please choose the needed action to continue</h3>
      <p>
        New client? Click <Link to={"/register-user"}>here</Link> to register
      </p>
      <p>
        Already have an account? Click <Link to={"/enter-account"}>here </Link>
        to enter
      </p>
    </div>
  );
}
