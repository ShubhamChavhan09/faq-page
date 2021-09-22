import React, { useState } from "react";
import "../App.css";

export default function Accordoin() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion">
      <h1>FAQ</h1>
      {data.map((item, i) => (
        <div className="item">
          <div
            className={selected === i ? "title dark" : "title"}
            onClick={() => toggle(i)}
          >
            <h3>{item.question}</h3>
            <span>
              <i
                className={
                  selected === i ? "fas fa-angle-up" : "fas fa-angle-down"
                }
              ></i>
            </span>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    question: "How many team members can I invite?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet eum recusandae cupiditate commodi nesciunt voluptatibus quae, fugiat hic quos.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet eum recusandae cupiditate commodi nesciunt voluptatibus quae, fugiat hic quos.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet eum recusandae cupiditate commodi nesciunt voluptatibus quae, fugiat hic quos.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet eum recusandae cupiditate commodi nesciunt voluptatibus quae, fugiat hic quos.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eveniet eum recusandae cupiditate commodi nesciunt voluptatibus quae, fugiat hic quos.",
  },
];
