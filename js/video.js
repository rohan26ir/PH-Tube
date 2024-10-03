function getTimeString(time) {
  const hour = Math.floor(time / 3600);
  let remainingSeconds = time % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  
  return `${hour} Hour ${minutes} Minutes ago`;
}


// video load and show categories on html

// create load categoris
const loadcategories = () =>{
  //  fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories))
  .catch((error) => console.log(error))

};

// 
const loadCatagoryVideo = (id) =>{
  // alert(id)

    //  fetch the data
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error))
}


// create DisplayCategopris
const displayCategories = (categories) =>{
  //  Add data in  html
  
  const categorieCont = document.getElementById('catagories')

  categories.forEach((item) => {
    console.log(item);

    // create Button
    
    const buttonCont = document.createElement("button")

    buttonCont.innerHTML =
    `
    <button onclick="loadCatagoryVideo(${item.category_id})" class='btn mx-2'>
    ${item.category}
    </button>
    `

    // Add button  to catagoris
    categorieCont.append(buttonCont);
    
    
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
  videoCont.innerHTML="";

  if(videos.length == 0){
    videoCont.classList.remove('grid');
    videoCont.innerHTML = 
    `
    <div class="flex flex-col justify-between items-center gap-5 ">
    <img src='assets/Icon.png'/>
    <h1 class="text-center text-lg font-bold">Ooops! Sorry<br> There are no Content Here</h1>
    </div>
    `
  }
  else{
    videoCont.classList.add("grid")
  }

  // videoCont.innerHTML = "";

  videos.forEach((video) => {
    console.log(video);

    // create card
    const card = document.createElement('div');
    card.classList = "card card-compact bg-base-100 shadow-xl";
    card.innerHTML= `
    
      <figure class="h-[200px] relative">
        <img class="h-full w-full object-cover"
         src=${video.thumbnail}
         alt="Shoes" />

         ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black rounded-lg py-1 px-2 text-white">${getTimeString(video.others.posted_date)}</span>`}
         
      </figure>
    <div class="px-0 py-2 flex gap-2">
      <div class='p-2'>
      <img class="h-8 w-8 rounded-full" src=${video.authors[0].profile_picture}>
      </div>

      <div>
      <h2 class='text-lg font-bold'>${video.title}</h2>
      <div class='flex items-center'>
      <p>${video.authors[0].profile_name}</p>
      ${video.authors[0].verified == true ? ` <img class='h-5 w-5' src='https://img.icons8.com/?size=96&id=2sZ0sdlG9kWP&format=png'>` : "" }
      </div>
      <p class="text-sm">${video.others.views} views</P>
      </div>
    </div>
    `

    
    // Add button  to catagoris
    videoCont.append(card);
    
    
  });
 
}



loadcategories();
loadVideo();