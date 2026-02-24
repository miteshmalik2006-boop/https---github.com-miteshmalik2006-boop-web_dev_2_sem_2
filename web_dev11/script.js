let mypromise = new promise((res,rej)=> {
    let data = "this is my data";
    if(data){
        res(data);
    }else{
        rej("error: no data found");
    }
});
// console.log(mypromise);
mypromise.then((d) => {
    console.log(d);
},(err)=> {
    console.log(err);
});