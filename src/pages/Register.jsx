import React from 'react'

function Register() {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>FIGHTR</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='display name'/>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input className='choose-file' type="file" id='file'/>
          <label htmlFor='file'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" alt="" />
            <span>Add profile picture</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register