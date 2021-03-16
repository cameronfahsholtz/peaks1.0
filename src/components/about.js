import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class About extends Component {
  render() {
    return (
      <section id="mission">
         <div className="row">
            <div className="nine columns main-col">

               <h2>Mission</h2>
               <p>
                  {resumeData.aboutme}
               </p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Vision Statement</h2>
                     <p className="address">
                        <span>
                           {resumeData.address}
                        </span>
                        <br></br>
                        <span>{resumeData.website}</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
