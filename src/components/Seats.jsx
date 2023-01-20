import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import '../styles/Seats.css';

const Seats = () => {
    const navigate = useNavigate();
    const [ticketPrice, setTicketPrice] = useState(localStorage.getItem("ticketPrice"));
   
    let seatArr = [];
    const handleClick = (e)=>{
     
        if(!seatArr.includes(e.target.id)){
            seatArr.push(e.target.id);
            document.getElementById(e.target.id).style.backgroundColor = "red";
        }else{
            seatArr.pop(e.target.id);
            document.getElementById(e.target.id).style.backgroundColor = "var(--bg-color--)";
            console.log( e.target.id)
        }
        console.log(seatArr);
    }
     function calculate(){
        setTicketPrice(seatArr.length * ticketPrice);
        if(seatArr.length===0){
            document.querySelector(".msg").style.display = "Block";
            setTimeout(() => {
                document.querySelector(".msg").style.display = "none";
            }, 2000);
        }else{
            setTimeout(() => {
                navigate("View")
            }, 1);
        }
    }
        localStorage.setItem("TotalPrice" , ticketPrice );
  return (
    <div className="box">
         <h2>Tickets Price: {localStorage.getItem("TotalPrice")}.00 INR/seat</h2>
    <table className="table">
      <thead>
        <tr>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A</td>
          <td id="A1" onClick={handleClick}></td>
          <td id="A2" onClick={handleClick}></td>
          <td id="A3" onClick={handleClick}></td>
          <td id="A4" onClick={handleClick}></td>
          <td id="A5" onClick={handleClick}></td>
          <td id="A6" onClick={handleClick}></td>
          <td id="A7" onClick={handleClick}></td>
          <td id="A8" onClick={handleClick}></td>
          <td id="A9" onClick={handleClick}></td>
          <td id="A10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>B</td>
          <td id="B1" onClick={handleClick}></td>
          <td id="B2" onClick={handleClick}></td>
          <td id="B3" onClick={handleClick}></td>
          <td id="B4" onClick={handleClick}></td>
          <td id="B5" onClick={handleClick}></td>
          <td id="B6" onClick={handleClick}></td>
          <td id="B7" onClick={handleClick}></td>
          <td id="B8" onClick={handleClick}></td>
          <td id="B9" onClick={handleClick}></td>
          <td id="B10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>C</td>
          <td id="C1" onClick={handleClick}></td>
          <td id="C2" onClick={handleClick}></td>
          <td id="C3" onClick={handleClick}></td>
          <td id="C4" onClick={handleClick}></td>
          <td id="C5" onClick={handleClick}></td>
          <td id="C6" onClick={handleClick}></td>
          <td id="C7" onClick={handleClick}></td>
          <td id="C8" onClick={handleClick}></td>
          <td id="C9" onClick={handleClick}></td>
          <td id="C10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>D</td>
          <td id="D1" onClick={handleClick}></td>
          <td id="D2" onClick={handleClick}></td>
          <td id="D3" onClick={handleClick}></td>
          <td id="D4" onClick={handleClick}></td>
          <td id="D5" onClick={handleClick}></td>
          <td id="D6" onClick={handleClick}></td>
          <td id="D7" onClick={handleClick}></td>
          <td id="D8" onClick={handleClick}></td>
          <td id="D9" onClick={handleClick}></td>
          <td id="D10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>E</td>
          <td id="E1" onClick={handleClick}></td>
          <td id="E2" onClick={handleClick}></td>
          <td id="E3" onClick={handleClick}></td>
          <td id="E4" onClick={handleClick}></td>
          <td id="E5" onClick={handleClick}></td>
          <td id="E6" onClick={handleClick}></td>
          <td id="E7" onClick={handleClick}></td>
          <td id="E8" onClick={handleClick}></td>
          <td id="E9" onClick={handleClick}></td>
          <td id="E10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>F</td>
          <td id="F1" onClick={handleClick}></td>
          <td id="F2" onClick={handleClick}></td>
          <td id="F3" onClick={handleClick}></td>
          <td id="F4" onClick={handleClick}></td>
          <td id="F5" onClick={handleClick}></td>
          <td id="F6" onClick={handleClick}></td>
          <td id="F7" onClick={handleClick}></td>
          <td id="F8" onClick={handleClick}></td>
          <td id="F9" onClick={handleClick}></td>
          <td id="F10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>G</td>
          <td id="G1" onClick={handleClick}></td>
          <td id="G2" onClick={handleClick}></td>
          <td id="G3" onClick={handleClick}></td>
          <td id="G4" onClick={handleClick}></td>
          <td id="G5" onClick={handleClick}></td>
          <td id="G6" onClick={handleClick}></td>
          <td id="G7" onClick={handleClick}></td>
          <td id="G8" onClick={handleClick}></td>
          <td id="G9" onClick={handleClick}></td>
          <td id="G10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>H</td>
          <td id="H1" onClick={handleClick}></td>
          <td id="H2" onClick={handleClick}></td>
          <td id="H3" onClick={handleClick}></td>
          <td id="H4" onClick={handleClick}></td>
          <td id="H5" onClick={handleClick}></td>
          <td id="H6" onClick={handleClick}></td>
          <td id="H7" onClick={handleClick}></td>
          <td id="H8" onClick={handleClick}></td>
          <td id="H9" onClick={handleClick}></td>
          <td id="H10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>I</td>
          <td id="I1" onClick={handleClick}></td>
          <td id="I2" onClick={handleClick}></td>
          <td id="I3" onClick={handleClick}></td>
          <td id="I4" onClick={handleClick}></td>
          <td id="I5" onClick={handleClick}></td>
          <td id="I6" onClick={handleClick}></td>
          <td id="I7" onClick={handleClick}></td>
          <td id="I8" onClick={handleClick}></td>
          <td id="I9" onClick={handleClick}></td>
          <td id="I10" onClick={handleClick}></td>
        </tr>
        <tr>
          <td>J</td>
          <td id="J1" onClick={handleClick}></td>
          <td id="J2" onClick={handleClick}></td>
          <td id="J3" onClick={handleClick}></td>
          <td id="J4" onClick={handleClick}></td>
          <td id="J5" onClick={handleClick}></td>
          <td id="J6" onClick={handleClick}></td>
          <td id="J7" onClick={handleClick}></td>
          <td id="J8" onClick={handleClick}></td>
          <td id="J9" onClick={handleClick}></td>
          <td id="J10" onClick={handleClick}></td>
        </tr>
      </tbody>
    </table>
    <button onClick={calculate}>Proceed</button>
    <div className="msg"></div>
    </div>
  );
};

export default Seats;