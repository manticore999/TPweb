
function main(){
    let choix=Number(prompt("choose  the level"));
    switch(choix){
        case 1:
            const x=Math.floor(Math.random()*10)
            let tentative=100;
            let test=false;
            while(tentative!=0 && !test){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===-1){
                    break
                }
                if(nombre===x){
                    alert("bravo")
                    test=true;
                }
                if(nombre>x){
                    alert("plus petit")
                }
                if(nombre<x){
                    alert("plus grand")
                }
                tentative--;
            }
            if(!test){
                alert("tu as perdu")
            }
            break;

        case 2:
            const y=Math.floor(Math.random()*100)
            let tentative2=50;
            let ok=false;
            while(tentative2!=0 && !ok){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===y){
                    alert("bravo")
                    ok=true;
                }
                if(nombre>x){
                    alert("plus petit")
                }
                if(nombre<x){
                    alert("plus grand")
                }
                tentative2--;
            }
            if(!ok){
                alert("tu as perdu")
            }
            break;
        case 3:
            const z=Math.floor(Math.random()*1000)
            let tentative3=10;
            let okk=false;
            while(tentative3!=0 && !okk){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===z){
                    alert("bravo")
                    okk=true;
                }
                if(nombre>x){
                    alert("plus petit")
                }
                if(nombre<x){
                    alert("plus grand")
                }
                tentative3--;
            }
            if(!okk){
                alert("tu as perdu")
            }
            break;
    }
}
main();
