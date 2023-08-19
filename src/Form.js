





// import React from 'react';
// import { useState } from 'react';

// function Form({onSubmit}) {
//     const[userName,setUserName] = useState('');
//     const[email,setEmail] = useState('');
//     const[password,setPassword] = useState('');

    
//     function handleSubmit(e){
//         e.preventDefault();
//         const formData = {
//             userName : userName,
//             email   : email,
//             password : password
    
//         };
//         onSubmit(formData);
//     }


//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor='name'>UserName</label>
//                 <input type='text' value={userName} id="Username"
//                 onChange={(e)=>setUserName(e.target.value)}/>           
//             </div>
//             <div>
//                 <label htmlFor='email'>Email</label>
//                 <input type='email' value={email} id="Email"
//                 onChange={(e)=>setEmail(e.target.value)}
//                 />           
//             </div>
//             <div>
//                 <label htmlFor='password'>password</label>
//                 <input type='password' value={password} id="password"
//                 onChange={(e)=>setPassword(e.target.value)}/>           
//             </div>

//             <button type='submit'>Submit</button>
//         </form>
      
//     </div>
//   )
// }

// export default Form
