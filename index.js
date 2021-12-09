const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  
  console.log("Name list");
  const nam=scores.map(n=>n.name);
  console.log(nam);

  console.log("Passed students");
  const pass=scores.filter(p=>p.marks>=40);

  console.log(pass);

  console.log("Failed students");
  const fail=scores.filter(f=>f.marks<=40);

  console.log(fail.map(e=>e.name));

  let sum=0;
  console.log("average marks");
  const avg=scores.map(a=>sum=sum+a.marks);
  console.log((sum/7));

  console.log("Topper");
  const top=scores.filter(t=>t.marks>=80);

  console.log(top.map(n=>n.name));