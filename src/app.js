let adviceNumber;
let adviceText;

window.document.querySelector("body").onload = async () => {
  await fetchAdvice();
  document.querySelector(
    "#advice-number"
  ).innerHTML = `Advice #${adviceNumber}`;
  document.querySelector("#advice-text").innerHTML = `${adviceText}`;
};

document.querySelector("#random-button").addEventListener("click", async () => {
  await fetchAdvice();
  document.querySelector(
    "#advice-number"
  ).innerHTML = `Advice #${adviceNumber}`;
  document.querySelector("#advice-text").innerHTML = `${adviceText}`;
});

async function fetchAdvice() {
  const api = "https://api.adviceslip.com/advice";
  const res = await fetch(api);
  const data = await res.json();
  const quote = data.slip;
  console.log(quote);
  adviceNumber = quote.id;
  adviceText = quote.advice;
  return;
}
