import React, { useState, useEffect } from "react";
import data from "../../Data/Data.json";
import Course from "../Course/Course";
import "./Body.css";
import Cart from "../Cart/Cart";

const Body = () => {
  console.log(data);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(data);
  }, []);
  const addCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  const [cart, setCart] = useState([]);
  return (
    <div className="course-container">
      <div className="course">
        {courses.map((course) => (
          <Course addCourse={addCourse} course={course}></Course>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Body;
