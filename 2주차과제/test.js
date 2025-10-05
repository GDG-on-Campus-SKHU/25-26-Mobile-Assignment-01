const students = [
  { name: "홍길동", scores: [80, 75, 90] },
  { name: "이몽룡", scores: [60, 70, 65] },
  { name: "임꺽정", scores: [] },
  { name: "전우치", scores: [95, 100, 90, 85] },
  { name: "연흥부", scores: [50] }
];


// 1. 학생 정보 확장, 평균 점수 계산 포함
const studentsWithAvg = students.map(student => {
  if (student.scores.length === 0) {
    return { ...student, avg: null };
  }
  const sum = student.scores.reduce((acc, score) => acc + score, 0);
  const avg = sum / student.scores.length;
  return { ...student, avg: avg };
});

// 2. 최고 점수 학생 찾기
const topStudent = studentsWithAvg
  .filter(student => student.avg !== null) 
  .reduce((top, current) => (current.avg > top.avg ? current : top));

// 3. 정렬
const sortedStudents = [...studentsWithAvg].sort((a, b) => {
  if (a.avg === null) return 1;  
  if (b.avg === null) return -1; 

  if (a.avg !== b.avg) {
    return b.avg - a.avg;
  }
});

// 4. 출력
console.log("최종 성적표");
sortedStudents.forEach(student => {
  const avgScore = student.avg !== null ? `${student.avg.toFixed(2)}점` : '점수 없음';
  console.log(`${student.name}: ${avgScore}`);

});
console.log("최고 점수 학생")
const topStudentInfo = `${topStudent.name}: ${topStudent.avg}점`;
console.log(topStudentInfo);