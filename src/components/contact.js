import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead" style={{color:'white'}}>
                Contact Peaks and Professors
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
