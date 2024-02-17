function main(){
    let choix=Number(prompt("choose  the level"));
    switch(choix){
        case 1:
            const x=Math.floor(Math.random()*10)
            tentative=100;
            let test=false;
            while(tentative!=0 && !test){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===x){
                    alert("bravo")
                    test=true;
                }
            }
            if(!test){
                alert("tu as perdu")
            }
            break;

        case 2:
            const y=Math.floor(Math.random()*100)
            tentative=50;
            let ok=false;
            while(tentative!=0 && !ok){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===y){
                    alert("bravo")
                    ok=true;
                }
            }
            if(!ok){
                alert("tu as perdu")
            }
            break;
        case 3:
            const z=Math.floor(Math.random()*1000)
            tentative=10;
            let okk=false;
            while(tentative!=0 && !okk){
                let nombre=Number(prompt("donner un chiffre : "))
                if(nombre===z){
                    alert("bravo")
                    okk=true;
                }
            }
            if(!okk){
                alert("tu as perdu")
            }
            break;


    }

}
main();
