
        // let my_list=[1,2,2,3,3,4,5,6,4,6,7];
        // // let duplicate_values= my_list.filter((item,index)=>{
        // //     return my_list.indexOf(item) !== index });
        // // console.log(duplicate_values);

        // let new_list=[...new Set(my_list)];
        // console.log(new_list)


        let names=["ravi","ravi","ram","ram","siva","siva","hari","hari","gopal","gopal"];
        // let new_list=[...new Set(names)];
        let dup_names=names.filter((item,index)=>{
            return names.indexOf(item) !== index
        });
        console.log(dup_names)