import React from 'react';
import './PdfCard.css';
import {Link} from 'react-router-dom';


function PdfCard({year,description,imgUrl,faculty,title,pdfUrl}) {


  return (
    <>
    <div className='col-md-3'>
        <div className='pdf-item-card text-center'>
            <div>
            <img src={imgUrl} alt='pdf-png' className='pdf-item-card-header-img'/>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{year}</p>
            <span>{faculty}</span>
            <Link to={pdfUrl}> <button className='btn-view-pdf btn btn-success '> View Pdf</button></Link> <br/>
        </div>
    </div>

    </>
  )
}

export default PdfCard
