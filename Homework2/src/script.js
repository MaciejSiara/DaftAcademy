import daftcodeImgUrl from "./assets/logo-zonex.png";

export default function() {
  const section = document.createElement("div");
  const img = document.createElement("img");
  img.src = daftcodeImgUrl;
  section.appendChild(img);
  document.getElementById("header").appendChild(section);
}

