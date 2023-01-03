function save() {
  const imgPath = document.querySelector("input[type=file]").files[0];
  if (imgPath === undefined) {
    alert("upload an image first");
    return;
  }

  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string and save to localStorage
      localStorage.setItem("image", reader.result);
      alert("saved to localstorage!\nnow click retrieve!");
    },
    false
  );

  if (imgPath) {
    reader.readAsDataURL(imgPath);
  }
}

function retrieve() {
  let img = document.getElementById("image");
  img.src = localStorage.getItem("image");
}
