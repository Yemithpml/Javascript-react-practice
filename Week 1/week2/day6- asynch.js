//Asynchronous Javascript

//Synchronous
console.log("start")
console.log("middle")
console.log("End")

//asynchronous 
//console.log("start")
//setTimeout(() =>{
//    console.log("middle")
//}, 2000)
//console.log("end")

//Callback and Callback  hell
//function getData(Callback){
 //   console.log("Fetching data...");
   // setTimeout(() => {
     //   console.log("Data Recieved");
       // Callback();
    //}, 2000);
//}
//function processData() {
 //       console.log("Processing data...");
 //   }
//getData(processData)

//My Task
function loadData(Callback){
    console.log("Loading data ...");

        setTimeout(() =>{
            console.log("Data Loaded successfully!");
            Callback()
        }, 2000)
    }

function dataUpdate(){
    setTimeout(() =>{
        console.log("Processing complete")
    }, 1000)
}

loadData(dataUpdate)