import React, { useState, useEffect } from "react";
import MainInfo from "./MainInfo";
import ExtraInfo from "./ExtraInfo";
function MainDiv() {
  let [city, setCity] = useState("");
  let [ Temp, setTemp] = useState("");
  let [wheather, setwheather] = useState(null);
  let [mistake, setError] = useState(false);
  
  const handleChange = (e) => {
    setTemp(e.target.value);
  }

  const handleclick = () => {
    if (Temp === "") {
      alert("Please enter a city name");
      return;
    }
    setCity(Temp);
    setTemp("");
  }
let error = "/photos/error.png"
  const getdata = async (city) => {
    const apiKey = "f46e589263dbe2318c96bb1ef5596f56"; 
    fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        setError(true);
        
        return;
      }
      console.log(json);
      setwheather(json);
      setError(false);
    })
  }



  useEffect(() => {
    if (city === "") return; // Prevent fetching if city is empty
    getdata(city);
  }, [city]);

  useEffect(() => {
    if (wheather === "null") return; // Prevent fetching if weather is null
    console.log(wheather) // This works initially, but it won't fetch for the updated city
  }, [wheather]);
  
  return (
    <div className="bg-transparent backdrop-blur-lg w-[45%] h-[80%] rounded-lg flex flex-col items-center justify-around gap-6">
      <div className="flex items-center gap-2 w-[80%] h-fit">
      <i className="fa-solid fa-location-dot text-amber-50 text-xl relative left-9"></i>
        <input
          type="text"
          placeholder="Enter city..."
          value={Temp}
          onChange={handleChange}
          className="group border-2 border-amber-50 text-white bg-transparent px-10 py-2 rounded-md w-[80%] h-11 focus:outline-none placeholder:text-gray-300 capitalize hover:border-fuchsia-700 hover:border"
        />
        <button onClick={handleclick} className="text-white border border-amber-50 w-2 h flex items-center justify-center h-11 hover:border-fuchsia-900">
          <i className="fa-solid fa-magnifying-glass  hover:text-fuchsia-800 "></i>
        </button>
      </div>
      <MainInfo wheather={wheather} error={mistake}/>
      <ExtraInfo wheather={wheather} error={mistake}/>
    </div>
  );
}
export default MainDiv;
