import { useState } from 'react'
import Dropdown from './dropdown'
import '../app.css'

function HeaderComponent(){
      const [isChecked, setIsChecked] = useState(false);
      const handleCheckboxChange = (event) => {
            setIsChecked(event.target.checked);
      };
            return(
                  <>
                        <header>
                              <h1>Calculator</h1>
                              <div id="nav">
                                    <h4>About</h4>
                                    <h4>Pricing</h4>
                                    <h4>Terms and Condition</h4>
                                    <select name="Profile" id="profile">
                                          <option value="" hidden>Profile</option>
                                          <option value="">Account</option>
                                          <option value="">Logout</option>
                                    </select>
                              </div>
                              <input type="checkbox" name="" id="" className="dropTrigger" checked={isChecked} onChange={handleCheckboxChange}/>
                        </header>
                        {isChecked && <Dropdown />}
                  </>
            )
}
export default HeaderComponent