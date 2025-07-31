let btn=document.querySelector("button")
let img=document.querySelector("#result")

btn.addEventListener("click", async()=>{
    let generate_picture=img.src=await getpic()
    return generate_picture;
    
   
  
})

let url="https://dog.ceo/api/breeds/image/random"

async function getpic() {
    try{
         let pic= await axios.get(url)
    return pic.data.message;
    }catch(err){
        console.log(err)
       console.log("picture not found")    }
   
    
}