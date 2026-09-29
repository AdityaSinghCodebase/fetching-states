const stateApi = "https://state-api-jbgm.onrender.com/api/states";

const stateList = document.getElementById("state-list");
const stateName = document.getElementById("state-name");
const capital = document.getElementById("capital-name");

fetch(stateApi)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((state) => {
      // Create div
      const stateInfo = document.createElement("div");

      // Add class
      stateInfo.classList.add("state-info");

      //Add state and capital
      stateInfo.innerHTML = `
      <h4>State: ${state.state}</h4>
      <p>Capital: ${state.capital}</p>
      `;

      //Add div to container
      stateList.appendChild(stateInfo);
    });
  })
  .catch((error) => {
    console.error(error);
  });
