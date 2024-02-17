function main() {
    const button = document.getElementById("submit-button");
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const text = document.getElementById("content").value;
      if (name && text) {
        const i = document.createElement("li");
        i.innerText = name + ":" + text;
        const liste = document.getElementById("todo-list");
        liste.appendChild(i);
      }
    });
  }
  main();