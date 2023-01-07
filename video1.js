const API_KEY = "AIzaSyCAoQ38DFMh9oGib2NgXPDGgikgryfGxwI";
window.addEventListener("load", popular);

async function popular() {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    appendVideos(actual_data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const playVideo = () => {
  const { videoId, snippet } = JSON.parse(localStorage.getItem("clicked_item"));
  console.log(videoId);
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  iframe.width = "100%";
  iframe.height = "100%";
  document.getElementById("video_details").append(iframe);
  iframe.setAttribute("allowfullscreen", true);

  let title = document.createElement("h4");
  title.innerText = snippet.title;
  document.getElementById("info").append(title);

  let mytitle = document.getElementById("mytitle");
  mytitle.innerText = snippet.title;
};

let query = document.getElementById("query").value;

const searchVideos = async () => {
  try {
    let query = document.getElementById("query").value;
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    const actual_data = data.items;
    appendVideos(actual_data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const appendVideos = (data) => {
  document.getElementById("rec").innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;
    const videoId = id.videoId;
    const thumbnail = snippet.thumbnails.high.url;
    const channel_name = snippet.channelTitle;
    //
    const main_div = document.createElement("div");
    main_div.id = "maindiv";
    main_div.onclick = () => {
      let data = {
        videoId,
        snippet,
      };
      localStorage.setItem("clicked_item", JSON.stringify(data));
      window.location.href = "video.html";
      console.log(title);
    };
    const img_div = document.createElement("div");
    const title_div = document.createElement("div");
    title_div.id = "title";
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", thumbnail);

    const title_html = document.createElement("h4");
    title_html.innerText = title;
    const channel_html = document.createElement("h5");
    channel_html.innerText = channel_name;

    img_div.append(img);
    title_div.append(title_html, channel_html);

    main_div.append(img_div,title_div);
    document.getElementById("rec").append(main_div);

    console.log(title);
  });
};



function home1(){
  window.location.href="Landingpage.html";
}

document.getElementById("l").addEventListener("click",function(){
  signin();
})
function signin() {
  window.location.href = "auth.html";
}

