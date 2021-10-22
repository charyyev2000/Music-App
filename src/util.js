import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Conflicted",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#40556f", "#9d7e8e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24642"
    },
    {
      name: "Falling Short",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#40556f", "#9d7e8e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24643"
    },
    {
      name: "From Afar",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#40556f", "#9d7e8e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24644"
    },
    {
      name: "Out of Place",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#40556f", "#9d7e8e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24645"
    },
    {
      name: "Rolling Eyes",
      artist: "Hanz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#40556f", "#9d7e8e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24646"
    }
  ];
}

export default chillHop;
