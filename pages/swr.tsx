import StudentDetail from "@/components/swr/student";
import { useState } from "react";

export default function SWR() {
  const [students, setStudents] = useState([1, 1, 1]);

  const handleAddStudent = () => {
    setStudents((prev) => [...prev, 1]);
  };
  return (
    <div>
      <h1>SWR Page</h1>
      <button onClick={handleAddStudent}>Add detail</button>
      <ul>
        {students.map((i, index) => (
          <li key={index}>
            <StudentDetail studentId="lea11ziflg8xoiza" />
          </li>
        ))}
      </ul>
    </div>
  );
}
