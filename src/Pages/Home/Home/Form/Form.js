import React from 'react';
import './Form.css'


const Form = () => {
    return (
        <div class="container">
            <h2>Online Order</h2>
            <h4>You Can order in online for covid situation</h4>
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Division</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Dhaka</option>
          <option value="canada">Khulna</option>
          <option value="usa">Rajshahi</option>
          <option value="usa">Barishal</option>
          <option value="usa">Chottogram</option>
          <option value="usa">Rangpur</option>
          <option value="usa">Sylhet</option>
          
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Description</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>
    );
};

export default Form;