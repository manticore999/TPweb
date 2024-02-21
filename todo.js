function main() {
    const button = document.getElementById("submit-button");
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const text = document.getElementById("content").value;
      if (name && text) {
        const i = document.createElement("li");
        const effacer= document.createElement("button");
        effacer.innerText="X";
        effacer.addEventListener("click", function(event) {
          event.preventDefault();
          i.remove();
        });
        i.innerText = name + " ==> " + text+" ";
        i.appendChild(effacer);
        const liste = document.getElementById("todo-list");
        liste.appendChild(i);
      }
      
    });
  }
  main();