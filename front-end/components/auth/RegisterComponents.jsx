import { useState } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/auth.slice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const initialState = {
  username: "",
  password: "",
  name: "",
  age: "",
  address: "",
  phone: "",
};
const RegisterComponent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password, name, age, address, phone, confirmpassword } =
    formValue;
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(register({ formValue, toast, router }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="px-48">
      <div
        className="container p-5 my-10 px-[262px] bg-green-300 rounded-xl"
        style={{ textAlign: "center" }}>
        <legend className="text-[50px]">Register</legend>
        <form action="">
          <div className="flex gap-5 justify-center">
            <div>
              {" "}
              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="text"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                  placeholder="username...."
                />
              </div>
              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="password"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  placeholder="Password..."
                />
              </div>
              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="text"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={onInputChange}
                  placeholder="Confirm Password..."
                />
              </div>
            </div>
            <div>
              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="text"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  placeholder="name..."
                />
              </div>
              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="text"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="age"
                  value={age}
                  onChange={onInputChange}
                  placeholder="age..."
                />
              </div>

              <div className="form-group m-5" style={{ margin: "30px 0" }}>
                <input
                  type="text"
                  className="form-control outline-none bg-slate-100 p-3"
                  name="address"
                  value={address}
                  onChange={onInputChange}
                  placeholder="address..."
                />
              </div>
              </div>
              </div>
              <div className="form-group m-5" style={{ margin: " 0" }}>
                <input
                  type="text"
                  className="w-full form-control outline-none bg-slate-100 p-3"
                  name="phone"
                  value={phone}
                  onChange={onInputChange}
                  placeholder="Phone..."
                />
              </div>

          <button
            type="submit"
            className="btn btn-primary my-5 border px-5 py-2 hover:bg-gray-400 transition"
            onClick={handleSubmit}>
            Register
          </button>
          <a href="/auth" className="hover:text-red-300 transition">
            <p className="m-1">I have an account ? sign in</p>
          </a>
        </form>
      </div>
    </div>
  );
};
export default RegisterComponent;
