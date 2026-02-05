// create element
const para = document.createElement("p");
para.textContent = "This is a dynamically added paragraph";
console.log(para);

// append element
document.getElementById("content").appendChild(para);

// remove element
document.querySelector("#content p").remove();

const image=document.createElement("img");

// To add and set the attribute in the tag
image.setAttribute("src","https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Icon_White_BG.width-500.format-webp.webp")

image.setAttribute("alt","google")

const gallery=document.getElementById("gallery");
gallery.appendChild(image);