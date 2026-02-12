let btn = document.querySelector("#btn");
let img = document.querySelector("#result");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    btn.innerText = "Loading..."; // Feedback for user
    btn.style.opacity = "0.7";
    
    let photoUrl = await getpic();
    img.src = photoUrl;
    
    btn.innerText = "Get New Picture";
    btn.style.opacity = "1";
});

async function getpic() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (err) {
        console.error("Error fetching data:", err);
        return "https://via.placeholder.com/450x300?text=Error+Loading+Image";
    }
}