import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth.slice';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router';
const initialState = {
  username: "",
  password: ""
}
const LoginComponent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
          dispatch(login({formValue, toast,router}));
      }
  }
  const onInputChange = (e) => {
      let { name, value } = e.target;
    setFormValue({...formValue, [name] : value});
  }
  return (
    
  
  <div className='px-[500px]'>
  <div className="container p-5 mt-36 bg-green-300 rounded-xl" style={{textAlign:'center'}}>
  <form action="">
  <legend className='text-[50px]'>Login</legend>

  <div className="form-group m-5" style={{margin:'30px 0'}}>
   
      <input type="text" className="form-control outline-none bg-slate-100 p-3" name="username" value={username}   onChange={onInputChange}  placeholder="username...." />
  </div>
  <div className="form-group m-5" style={{margin:'30px 0'}}>
 
  <input type="password" className="form-control outline-none bg-slate-100 p-3" name="password" value={password}   onChange={onInputChange}  placeholder="Password..." />
</div>
  

  <button type="submit" className="btn btn-primary my-5 border px-5 py-2" onClick={handleSubmit}>Submit</button>
  <a href="/auth/register" className='hover:text-red-300 transition'><p className='m-1'>Don't have an account ? sign up</p></a>
</form>
  </div></div>
  
    
  )
}
export default LoginComponent;