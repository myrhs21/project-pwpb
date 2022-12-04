import {container, label, textarea, button } from "react-bootstrap";
import React, {useState} from "react";

 const Contact= () => {
  const [judul, setJudul] = useState('CONTACT');
  function handleName(e){
    setJudul(e.target.value);
  }
   return(
    <container>
    <div align="center">
      <h1 className="text-white text-center" id="contact">{judul}</h1>
        <div class="container-fluid"><br/>
          <div class="col-7">
          <h4>
            <label for="floatingTextarea" className="text-white">Name</label></h4>
            <textarea class="form-control" id="floatingTextarea" onChange={handleName}></textarea><br/>
          </div>

          <div class="col-7">
            <h4>
            <label for="floatingTextarea" className="text-white">Comments</label></h4>
            <textarea class="form-control" id="floatingTextarea"></textarea><br/>
          </div>
          <h3>
          <button type="submit" class="btn btn-success mt-4">SEND</button></h3>
        </div>  
        </div>
    </container>
    )
 }
export default Contact;