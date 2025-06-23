let employee = {
    name: "Aarav",
    department: {
        name: "Development",
        id: 101,
        projects: [
            { title: "Website Redesign", hours: 120 },
            { title: "API Integration", hours: 80 },
        ],
        totalHours: (projects) => {
            // Calculate total hours
            let sum=0
            for(let x of projects)
            {
               sum += x.hours 
            }
            console.log(sum);
        }
    },
    skills: ["JavaScript", "React"]
};

employee.department.totalHours(employee.department.projects);

//add new skill to skills array
 employee.skills[2] = "Java"
 console.log(employee.skills);

 //Get project titles where hours > 100
 for(let i of employee.department.projects)
 {
    if(i.hours > 100)
    {
        console.log(i.title);
    }
 }

 //Return: Aarav works in Development department and knows JavaScript, React, Java
 console.log(employee.name + " works in " + employee.department.name + " department and knows " + employee.skills.toString());

 //Sort projects by hours (descending).
//  console.log( '>>>>', employee.department.projects)
 employee.department.projects.sort((a, b) => b.hours - a.hours);
 console.log(employee.department.projects);




