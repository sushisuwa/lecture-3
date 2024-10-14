import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "New test game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

function boost_score(score: number) {
  return score + Math.sqrt(score);
}

let num_clicks = 0;
const button = document.createElement("button");
button.innerHTML = "Click me!";
button.onclick = () => {
  num_clicks = boost_score(num_clicks);
  button.innerHTML = `${num_clicks} clicks so far`;
};
app.append(button);
