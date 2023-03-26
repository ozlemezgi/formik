import './App.css';
import { useFormik } from 'formik';

function App() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Ezgi',
      lastName: 'SARI',
      email: 'oes@gmail.com',
      gender: 'female',
      hobies: [],
      country: "Turkey",
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input 
          name="firstName" 
          placeholder="Jane" 
          onChange={handleChange}
          value={values.firstName}/>
        <br/><br/>

        <label htmlFor="lastName">Last Name</label>
        <input 
          name="lastName" 
          placeholder="Doe" 
          onChange={handleChange}
          value={values.lastName}/>
        <br/><br/>

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
        />
        <br/><br/>
{/* Radio Button */}
          <label htmlFor="Gender">Gender   </label>

          <span>Male</span>
          <input
            type="radio"
            name="male"
            onChange={handleChange}
            checked={values.gender === "male"} />

          <span>Female</span>
          <input
            type="radio"
            name="female"
            onChange={handleChange}
            checked={values.gender === "female"} />
          <br /><br />

{/* Check Box */}
          <div>Software
            <input type="checkbox" name='hobies' value="Software" onChange={handleChange} />
          </div>
          <div>Cinema
            <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} />
          </div>
          <div>Camping
            <input type="checkbox" name='hobies' value="Camping" onChange={handleChange} />
          </div>
          <br /><br />

{/* Dropdown  */}
          <select
            name='country'
            onChange={handleChange}
            value={values.country}>
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>
          </select>
          <br /><br />

          <button type="submit">Submit</button>
          <br /><br />
          
          <code>{JSON.stringify(values)}</code>


      </form>
    </div>
  );
}

export default App;
