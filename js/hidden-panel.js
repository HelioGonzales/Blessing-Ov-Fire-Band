export default function hiddenPanel(hPanel) {
    const d = document;

    d.addEventListener("click", e => {
        if(e.target.matches(hPanel)) {
            d.querySelector("panel").classList.toggle("is-active");
        }
        
        if(e.target.matches(hPanel)) {
            d.querySelector("panel").classList.remove("is-active");
        }


    })
}