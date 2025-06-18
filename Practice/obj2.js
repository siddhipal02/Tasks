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