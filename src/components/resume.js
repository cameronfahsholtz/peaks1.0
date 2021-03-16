import React, { Component } from 'react';
import resumeData from '../resumeData';
// import { pdfjs, Document, Page } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {

  render() {
    return (
      <section id="leads">

        {/* <Document
          file="Feenstra-Resume.pdf"
        >
          <Page pageNumber={1} />
        </Document>

        <div className="resume-link">
          <a href="Feenstra-Resume.pdf" target="_blank">
            <button>View PDF File</button>
          </a>
        </div> */}


        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Leadership Team</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Trip Leads</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item, i) => {
                return (
                  <div key={i} className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

      </section>
    );
  }
}
