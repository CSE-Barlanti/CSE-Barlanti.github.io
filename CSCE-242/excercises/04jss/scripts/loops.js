document.getElementById("#btn-loop") = (e) => {
    const loopResult = document.getElementById("#loop-result");
    for(let i=0; i < 10; i++){
        //loopResult.innerHTML += i; prints loop
        let p = document.createElement("p");
        p.innerHTML = i;
        loopResult.append(p);
    }

    for(let i=0; i < 10; i++){
        loopResult.innerHTML += '<p>i</p>';
    }
};
