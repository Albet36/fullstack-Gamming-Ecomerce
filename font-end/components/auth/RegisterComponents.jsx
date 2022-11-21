import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Register } from '../../redux/auth.slice';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router';
const initialState = {
  username: "",
  password: "",
  name:"",
  age:"",
  address:"",
  phone:""
}
const RegisterComponent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password,name,age,address,phone,confirmpassword } = formValue;
const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
          dispatch(register({formValue, toast,router}));
      }
  }
  const onInputChange = (e) => {
      let { name, value } = e.target;
    setFormValue({...formValue, [name] : value});
  }
  return (
    
  
  <div className="container p-5" style={{textAlign:'center'}}>
  <form action="">
  <legend>Register</legend>

  <div className="form-group m-5" style={{margin:'30px 0'}}>
   
      <input type="text" className="form-control" name="username" value={username}   onChange={onInputChange}  placeholder="username...." />
  </div>
  <div className="form-group m-5" style={{margin:'30px 0'}}>
 
  <input type="password" className="form-control" name="password" value={password}   onChange={onInputChange}  placeholder="Password..." />
</div>
<div className="form-group m-5" style={{margin:'30px 0'}}>
 
<input type="text" className="form-control" name="confirmpassword" value={confirmpassword}   onChange={onInputChange}  placeholder="Confirm Password..." />
</div>
<div className="form-group m-5" style={{margin:'30px 0'}}>
 
<input type="text" className="form-control" name="name" value={name}   onChange={onInputChange}  placeholder="name..." />
</div>
<div className="form-group m-5" style={{margin:'30px 0'}}>
 
<input type="text" className="form-control" name="age" value={age}   onChange={onInputChange}  placeholder="age..." />
</div>

<div className="form-group m-5" style={{margin:'30px 0'}}>
 
<input type="text" className="form-control" name="address" value={address}   onChange={onInputChange}  placeholder="address..." />
</div>
<div className="form-group m-5" style={{margin:'30px 0'}}>
 
<input type="text" className="form-control" name="phone" value={phone}   onChange={onInputChange}  placeholder="Phone..." />
</div>

  <button type="submit" className="btn btn-primary mt-5" onClick={handleSubmit}>Register</button>
  <a href="/auth/register"><p className='m-1'>I have an account ? sign in</p></a>
</form>
  </div>
  
    
  )
}
export default RegisterComponent;