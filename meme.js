const form = document.querySelector('form');
const memeURL = document.querySelector("#memeURL");
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const memeContainer = document.querySelector('#memes');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newMeme = makeMeme(
    memeURL.value,
    topText.value,
    bottomText.value,
  );

  memeContainer.appendChild(newMeme);

  memeURL.value = "";
  topText.value = "";
  bottomText.value = "";
});

memeContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});

function makeMeme(memeURL, topText, bottomText) {
  const image = document.createElement("img");
  const topT = document.createElement("p");
  const bottomT = document.createElement("p");
  const rmvBtn = document.createElement("button");
  const container = document.createElement('div');

  image.src = memeURL;
  topT.innerText = topText;
  bottomT.innerText = bottomText;
  rmvBtn.innerText = "Remove";

  image.classList.add('pic');
  topT.classList.add('top');
  bottomT.classList.add('bottom');
  rmvBtn.classList.add('remove');
  container.classList.add('meme');

  container.appendChild(topT);
  container.appendChild(image);
  container.appendChild(bottomT);
  container.appendChild(rmvBtn);

  return container;
}

