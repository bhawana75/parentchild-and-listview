import React,{useState} from 'react'

const MultipleInputs = () => {

  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "", 
    phone: ""
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ... userRegistration, [name] : value });

  }

  const handlesubmit = (e) => {
    e.preventDefault();

    const newRecord = { ... userRegistration, id:new Date().getTime().toString() }
    console.log(records);
    setRecords([ ... records, newRecord]);
    console.log(records);

    setUserRegistration({name: "", email: "", phone: ""});
  }

  return (
    <>
      <form action='' onSubmit={handlesubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type="text" autoComplete='off' 
           value={userRegistration.username}
           onChange={handleInput}
          name="name" id="name" />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" autoComplete='off' 
           value={userRegistration.email}
           onChange={handleInput}
          name="email" id="email" />
        </div>

        <div>
          <label htmlFor='phone'>Phone Number</label>
          <input type="text" autoComplete='off' 
           value={userRegistration.phone}
           onChange={handleInput}
          name="phone" id="phone" />
        </div>


        <button type='submit'>submit</button>

      </form>

      <div>
        {
          records.map((curElem) => {
            const { id, name, email, phone }= curElem;
            return (
              <div className='showDataStyle' key={id} >
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default MultipleInputs
