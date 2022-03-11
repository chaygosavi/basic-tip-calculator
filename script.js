const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  const totals = input.value;
  if (totals < 0) {
    h1.innerText = `Only Non-zero Value`;
    input.value = "";
    return;
  }
  let tiper = totals * 0.15;
  tiper = tiper.toFixed(2);
  h1.innerText = `You should tip $${tiper} on $${totals}`;
  input.value = "";
});
