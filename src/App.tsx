

import { IUser } from './Models/students.model';
import Students from './Students/Students';

export default function App() {
  const students: IUser[] = [
    { id: 1, name: "MMM", age: 23, dept: "dept1", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: 'C' }] },
    { id: 2, name: "Aly", age: 20, dept: "dept1", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: "C" }] },
    { id: 3, name: "Mo", age: 15, dept: "dept2", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: 'C' }] },
    { id: 4, name: "Ahmed", age: 30, dept: "dept2", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: "C" }] },
    { id: 5, name: "MMM", age: 22, dept: "dept3", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: "C" }] },
    { id: 6, name: "Mo", age: 21, dept: "dept4", courses: [{ name: 'database', grade: 'B+' }, { name: "AI", grade: "C" }] },
  ];

  return (
    <div>
      <Students studentData={students} />
    </div>
  );
}
