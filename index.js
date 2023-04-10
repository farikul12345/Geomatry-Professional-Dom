document.getElementById("cal-btn").addEventListener("click", function(){
    const triangle = document.getElementById("trinagle-btn").value;
    const area = triangle * 0.5;
    console.log(area)
});
document.getElementById("rectan-btn").addEventListener("click", function(){
    const triangle = document.getElementById("second-btn").value;
    const area = triangle;
    console.log(area)
})
document.getElementById("parallel-btn").addEventListener("click", function(){
    const parallel = document.getElementById("second-btn").value;
    const area = parallel * 10 * 12;
    console.log(area);
})
document.getElementById("rhom-pri-btn").addEventListener("click", function(){
    const rhombus = document.getElementById("rohm-second-btn").value;
    const area = 0.5 * 16 * 12;
    console.log(area);
})
document.getElementById("pentagon-btn").addEventListener("click", function(){
    const pentagon = document.getElementById("pentagon-second-btn").value;
    const area =0.5 * 6 * 12;
    console.log(area);
})
document.getElementById("elipese-btn").addEventListener("click", function(){
    const elipese = document.getElementById("elipese-sec-btn").value;
    const area =22/7 * 10 * 4;
    console.log(area);
})
