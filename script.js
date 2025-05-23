
function toggleContent(id) {
    let allContents = document.querySelectorAll(".specializations p");
    
    allContents.forEach(content => {
        if (content.id !== id) {
            content.classList.add("hidden");
        }
    });

    let content = document.getElementById(id);
    content.classList.toggle("hidden");
}