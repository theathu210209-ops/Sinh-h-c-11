function loadQuestions() {
    let list = JSON.parse(localStorage.getItem("questions") || "[]");
    let box = document.getElementById("questionList");
    box.innerHTML = "";

    list.forEach(q => {
        let div = document.createElement("div");
        div.className = "question-item";
        div.innerHTML = `<p>${q}</p><hr>`;
        box.appendChild(div);
    });
}

function postQuestion() {
    let q = document.getElementById("question").value.trim();
    if (!q) return;

    let list = JSON.parse(localStorage.getItem("questions") || "[]");
    list.unshift(q);
    localStorage.setItem("questions", JSON.stringify(list));
    
    document.getElementById("question").value = "";
    loadQuestions();
}

window.onload = loadQuestions;
