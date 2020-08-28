import React from "react";
import "./Course.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Course = (props) => {
  const { instructor, course, price, img, duration, rating } = props.course;
  console.log(props);
  return (
    <div class="shadow-none p-3 mb-5 bg-light rounded">
      <div>
        <img className="course-img" src={img} alt="" />
      </div>
      <div>
        <h4 class="text-primary">
          {course}
          <span class="badge badge-primary">New</span>
        </h4>
        <p>Instructor: {instructor}</p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <p>Course Duration: {duration}</p>
        <p>Rating: {rating}</p>
        <button
          class="btn btn-success"
          onClick={() => props.addCourse(props.course)}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Course;
