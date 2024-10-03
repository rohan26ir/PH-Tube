// video load and show categories on html


// create load categoris
const loadcategories = () =>{
  //  fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error))

};




// create DisplayCategopris
const displayCategories = (categories) =>{
  //  Add data in  html
  
  const categorieCont = document.getElementById('catagories')

  categories.forEach((item) => {
    console.log(item);

    // create Button
    
    const buttons = document.createElement("button")
    buttons.classList = "btn mx-2";
    buttons.innerText = item.category;

    
    // Add button  to catagoris
    categorieCont.append(buttons);
    
    
  });
 
};


// 2nd time

// create load video
const loadVideo = () =>{
  //  fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then((res) => res.json())
  .then((data) => displayVideos(data.videos))
  .catch((error) => console.log(error))

};

// create displayVideo

const displayVideos = (videos) =>{
  //  Add data in  html
  
  const videoCont = document.getElementById('videos')

  videos.forEach((video) => {
    console.log(video);

    // create card
    const card = document.createElement('div');
    card.classList = "card card-compact bg-base-100 shadow-xl";
    card.innerHTML= `
    
      <figure class="h-[200px]">
        <img class="h-full w-full object-cover"
         src=${video.thumbnail}
         alt="Shoes" />
      </figure>
    <div class="px-0 py-2 flex">
      <div>
      <img class="h-8 w-8 rounded-full" src=${video.authors[0].profile_picture}>
      </div>

      <div>
      <h2>${video.title}</h2>
      <div class='flex items-center'>
      <p>${video.authors[0].profile_name}</p>
      <img class='h-5 w-5' src='https://img.icons8.com/?size=96&id=2sZ0sdlG9kWP&format=png'>
      </div>
      </div>
    </div>
    `

    
    // Add button  to catagoris
    videoCont.append(card);
    
    
  });
 
}



loadcategories();
loadVideo();