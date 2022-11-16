import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth.slice';
import {toast} from 'react-toastify';
const initialState = {
  username: "",
  password: ""
}
const LoginComponent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
          dispatch(login({formValue, toast}));

      }
  }
  const onInputChange = (e) => {
      let { name, value } = e.target;
    setFormValue({...formValue, [name] : value});
  }
  return (
    
  
  <div className="container p-5">
  <form action="">
  <legend>Login</legend>

  <div className="form-group m-5">
      <label htmlFor="">Username</label>
      <input type="text" className="form-control" name="username" value={username}   onChange={onInputChange}  placeholder="username...." />
  </div>
  <div className="form-group m-5">
  <label htmlFor="">Password</label>
  <input type="password" className="form-control" name="password" value={password}   onChange={onInputChange}  placeholder="Password..." />
</div>
  

  <button type="submit" className="btn btn-primary mt-5" onClick={handleSubmit}>Submit</button>
  <a href="/auth/register"><p className='m-1'>Don't have an account ? sign up</p></a>
</form>
  </div>
  
    
  )
}
export default LoginComponent;