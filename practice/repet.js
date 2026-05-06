//  function count(str){
//     let dict={}
//     for(let i=0;i<=str.length -1;i++){
//         let ch=str[i]
//         if(dict[ch]){
//             dict[ch]++
//         }
//         else{
//             dict[ch]=1
//         } 
//     }
//     return dict
// }
// console.log(count("ravindra"));

function rpt(itam){
    let dict ={}
    for( let i=0; i<=itam.length -1; i++ ){
        let chr =itam[i]

        if (dict[chr]){
            dict[chr]++
        }
        else{
            dict[chr]=1
        }
    } 
    return dict
}
console.log(rpt("1111334567896584569u8649498654805605689467u8967u56896u4586356867856435675433"));