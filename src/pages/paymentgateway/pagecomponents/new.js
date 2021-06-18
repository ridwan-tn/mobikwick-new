import React, { useState } from 'react';
import "./Threed.css";
import data from './data';
import SingleQuestion from './Question';
import {Navbar,Nav,Image,Button,Accordion,Card} from 'react-bootstrap';
function New() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div style={{
  background: "var(--clr-white)",
  borderRadius: "var(--radius)",
  padding: "2.5rem 2rem",
  maxWidth: "var(--fixed-width)",
  display: "grid",
  gap: "1rem 2rem",
  maxWidth:"600px",minWidth:"380px",textAlign:"Left"}}>
        <section className="cardlast" className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion  key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default New;