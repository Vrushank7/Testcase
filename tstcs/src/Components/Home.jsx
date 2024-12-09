import '../App.css';
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    username: 'default',
    email: 'default@gmail.com',
    occupation: 'student',
    gender: 'male',
    languages: ['html'],
    dateOfBirth: '',
    phoneNumber: '',
    appointmentTime: ''
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name === 'languages') {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value);
      }

      setFormData(copy);
    } else if (event.target.name === 'email') {
      const email = event.target.value;
      setFormData({ ...formData, email });

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    } else if (event.target.name === 'phoneNumber') {
      const phoneNumber = event.target.value;
      setFormData({ ...formData, phoneNumber });

      if (phoneNumber.length !== 10) {
        setPhoneError('Phone number must be 10 digits');
      } else {
        setPhoneError('');
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      }); console.log("data",formData);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!emailError && !phoneError) {
      try {
        const response = await fetch('http://localhost:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          console.log('Submitted Data:', formData);
        } else {
          alert('Error submitting the form');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form contains errors');
    }
  };

  return (
    <div className="form-page">
      <div className="content form-section">
        <h1 className="form-title">Basic Form</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">User Name</label>
            <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
            {emailError && <span style={{ color: 'black' }}>{emailError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="occupation" className="form-label">Occupation</label>
            <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" name="dateOfBirth" onChange={onChangeHandler} value={formData.dateOfBirth} />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input className="form-control" name="phoneNumber" type="tel" maxLength="10" onChange={onChangeHandler} value={formData.phoneNumber} />
            {phoneError && <span style={{ color: 'black' }}>{phoneError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
            <input type="time" className="form-control" name="appointmentTime" onChange={onChangeHandler} value={formData.appointmentTime} />
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender</label>
            <div>
              <div>
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="languages" className="form-label">Languages</label>
            <div>
              <div>
                <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
                <label htmlFor="html">HTML</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
                <label htmlFor="javascript">Javascript</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <button className="btn" type="submit" disabled={!!emailError || !!phoneError}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
