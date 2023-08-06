import React, { useState } from 'react';

function Settings() {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div>
      <h1>Settings</h1>
      <div className='login-wrapper'>
        <h3>Sign In</h3>
        <form>
          <label>Email <input type='text' />
          </label>
          <br/>
          <label>Password <input type='password' />
          </label>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>

      <p>Avatar - add a link to a picker page</p>
      <p>lbs / kg drop down</p>
      <label>
        Preferred units:{' '}
        <select
          value='Pounds'
          // onChange={this.handleChange}
        >
          <option value='Pounds'>Pounds</option>
          <option value='Kilograms'>Kilograms</option>
        </select>
      </label>
      <p>demo mode</p>
    </div>
  );
}

export default Settings;
