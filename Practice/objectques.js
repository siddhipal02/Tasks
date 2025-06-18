let user = {
    firstname: "fusdhklgfjh",
    bio: {
        address: "fkdshaflik",
        pincode: 578364,
        marks: [
                {
                    subject: "abc",
                    value: 67,
                },
                {
                    subject: "tuyer",
                    value: 34,
                },
                {
                    subject: "xyz",
                    value: 78,
                },

            ],
            cal: () => {
                //cal......
               for(let i of user.bio.marks)
                {
                    if(i.value > 50)
                    {
                        console.log(i.value);
                    }
                }

            }
    },
    lang: ['hindi', 'english']
}
 
for(let x of user.lang)
{
    console.log(x);
}

user.bio.cal();
//   for(let i of user.bio.marks)
//                 {
//                     if(i.value > 50)
//                     {
//                         console.log(i.value);
//                     }
//                 }
