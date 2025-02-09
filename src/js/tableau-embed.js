function initViz() {
    const containerDiv = document.getElementById("tableauViz");
    const url = "YOUR_TABLEAU_PUBLIC_URL";
    const options = {
        hideTabs: true,
        width: "100%",
        height: "700px",
    };
    let viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener("DOMContentLoaded", initViz); 