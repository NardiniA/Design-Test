window.addEventListener('DOMContentLoaded', (e) => {
    let path = window.location.pathname;
    console.log(path);
    let page = path.split("/").pop();
    console.log(page);

    let match = page.match(/(\d+)/);

    let next = `navbar-${parseInt(match[0])+1}.html`;
    let prev = `navbar-${match[0]-1}.html`;

    ImportCSS();

    let next_btn = document.createElement("a");
    next_btn.classList.add("page-test");
    next_btn.style.position = "absolute";
    next_btn.style.top = "50%";
    next_btn.style.right = "20px";
    next_btn.innerHTML = "Next";
    next_btn.href = next;

    let prev_btn = document.createElement("a");
    prev_btn.classList.add("page-test");
    prev_btn.style.position = "absolute";
    prev_btn.style.top = "50%";
    prev_btn.style.left = "20px";
    prev_btn.innerHTML = "Prev";
    prev_btn.href = prev;

    document.querySelector("body").appendChild(next_btn);
    document.querySelector("body").appendChild(prev_btn);
});

function ImportCSS() {
    let head = document.querySelector("head");

    let link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "css/page-test.css";

    head.appendChild(link);
}