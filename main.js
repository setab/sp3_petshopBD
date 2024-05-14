// const url = "https://api.thecatapi.com/v1/images/search";
// const section = document.querySelector(".cat_pics");

// async function getCatPic() {
//   section.innerHTML = "";
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log("Json:", json);
//     if (json && json.length > 0) {
//       let photo = json[0].url;
//       section.classList.add("cats");

//       let img = document.createElement("img");
//       img.src = photo;
//       img.classList.add("random_cats");
//       img.alt = photo;
//       section.appendChild(img);
//     } else {
//       console.log("No cat pictures found");
//     }
//   } catch (error) {
//     console.error("Error fetching cat picture:", error);
//   }
// }

// for (let i = 0; i < 4; i++) {
//   getCatPic();
// }
