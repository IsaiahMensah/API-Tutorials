
import './App.css';

function App() {

    fetch("https://retoolapi.dev/AbzkwP/people")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[3].Email);
        data.forEach((user) => {
          const markup = `<tr>
     <th scope="row">${user.id}</th>
      <td>${user.Name}</td>
      <td>${user.Email}</td>
      <td>${user.Phone}</td>
      <td>${user.Address}</td>
      <td>${user.Company}</td>
      <td>${user.Position}</td>
      
    </tr>`;
          document
            .querySelector("tbody")
            .insertAdjacentHTML("beforeend", markup);
        });
      })
      .catch((err) => {
        //console.log(error);
      });
 
  return (
    <div className="App">
      <div class="head">
        <h1>User Info</h1>
      </div>
      <table class="table ">
        <thead class="thead">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Company</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody class="tbody"></tbody>
      </table>
    </div>
  );
}

export default App;
