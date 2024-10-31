import React from "react";
import { IUser } from "../Models/students.model";

interface StudentsProps {
  studentData: IUser[];
}

const Students: React.FC<StudentsProps> = ({ studentData }) => {
  return (
    <div className="container text-center my-5">
      <div className="row g-2 d-flex">
        {studentData.map((student) => (
          <div
            className="col-md-4  px-3"
            key={student.id}
            style={{ minWidth: "300px" }}
          >
            <div className="student-card border border-light rounded-2 shadow py-3">
              <h4>Name: {student.name}</h4>
              <h6>Age: {student.age}</h6>
              {student.courses.map((course, index) => (
                <div key={index}>
                  <p>Subject: {course.name}</p>
                  <p>Grade: {course.grade}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
