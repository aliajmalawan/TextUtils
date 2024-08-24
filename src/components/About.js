import React from "react";
export default function About(props) {
    let myHeading = {
      color: props.mode === 'dark'?'white':'#042743',
  }
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',
        // backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',     
    }
    let developer = {
      
    }
    

  return (
    <>
    <div className="container">
      <h1 className="my-4" style={myHeading}>{props.myHeading}</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Textutils Gives You Away to Analyze Your Text Quickly and Efficiently, Be It Word Count, Character Count & more etc.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils Is a Free Character Counter Tool That Provides Instant Character Count & Word Count Statistics for a Given Text. TextUtils The Number of Words & Characters. Thus, It is Suitable for Writing Text with Word/ Character Limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            This Word Counter Software Works in Any Web Browsers Such as Chrome, Firefox, Internet Explorer, Safari, Opera. It Suits to Count Characters in Facebook, Blog, Books, Excel Document, PDF Document, Assays, Etc.
            </div>
          </div>
        </div>
        {/* Author */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong>Developed By</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <span style={developer}> <h4>Ali Ajmal Awan</h4> </span>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    </>
  );
}
