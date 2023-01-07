const API_KEY = "AIzaSyCAoQ38DFMh9oGib2NgXPDGgikgryfGxwI";

window.addEventListener("load", popular);

async function popular() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("s").addEventListener("click",function(){
  searchVideos();
})
const searchVideos = async () => {
  try {
    let query = document.getElementById("query").value;
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    appendVideos(actual_data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const appendVideos = (data) => {
  document.getElementById("container").innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;
    const videoId = id.videoId || id;
    const thumbnail = snippet.thumbnails.high.url;
    const channel_name = snippet.channelTitle;
    //
    const main_div = document.createElement("div");
    main_div.class = "maindiv";
    main_div.onclick = () => {
      let data = {
        videoId,
        snippet,
        domain:document.domain,
      };
      localStorage.setItem("clicked_item", JSON.stringify(data));
      window.location.href = "video.html";
      console.log(title);
    };
    const img_div = document.createElement("div");
    const title_div = document.createElement("div");
    title_div.class = "limiText";
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", thumbnail);

    const title_html = document.createElement("h4");
    title_html.innerText = title;
    const channel_html = document.createElement("h5");
    channel_html.innerText = channel_name;

    img_div.append(img);
    title_div.append(title_html);
    div.append(channel_html);
    main_div.append(img_div, title_div, div);
    container.append(main_div);

    console.log(title);
  });
};


document.getElementById("l").addEventListener("click",function(){
  signin();
})
function signin() {
  window.location.href = "auth.html";
}

async function categor() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=gaming&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function catego() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=live&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function categ() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=music&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function cate() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=sports&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function cat() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=news&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function ca() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=learning&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("z").addEventListener("click",function(){
  explore();
})

document.getElementById("x").addEventListener("click",function(){
  shorts();
})

async function explore() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=new&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

async function shorts() {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=shorts&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    console.log(data);
    appendVideos(actual_data);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("c").addEventListener("click",function(){
  alerts();
})

document.getElementById("v").addEventListener("click",function(){
  notification();
})
function alerts() {
  alert("You have already LogIn!");
}

function notification() {
  alert ("No new notification!")
}

document.getElementById("navbar").innerHTML=navbar();
import {navbar} from "./component/navbar.js";


document.getElementById("q").addEventListener("click",function(){
  popular();
})

document.getElementById("w").addEventListener("click",function(){
  categor();
})

document.getElementById("e").addEventListener("click",function(){
  catego();
})

document.getElementById("r").addEventListener("click",function(){
  categ();
})

document.getElementById("t").addEventListener("click",function(){
  cate();
})

document.getElementById("y").addEventListener("click",function(){
  cat();
})

document.getElementById("u").addEventListener("click",function(){
  ca();
})