window.onload= function(){
    Particles.init({
        selector:'.background'
    });

};
    function myFunction(){

        const load = parseInt(document.getElementById("watts").value);
        const hrs = parseInt(document.getElementById("hour").value);

        const totalLoad = load * hrs;
        const solarPanel = Math.round(totalLoad / 5 * 1.2);
        const batteryBank = Math.round(totalLoad*2 / 12);
        const chargeController = Math.round(solarPanel /12);
        const inverterW = Math.round(load * 1.25 / 0.8);
        const loadVa = Math.round(load / 0.8);
        const inverterVa = Math.round(loadVa * 1.25 / 0.8);
        
    // document.getElementById('demo').innerHTML="You will need"+" "+load+"w"+" "+"solar panel";
    document.getElementById('sPanel').innerHTML="You will need"+" "+solarPanel+"w"+" "+"solar panel";
    document.getElementById('batbank').innerHTML="You will need"+" "+batteryBank+"ah"+" "+"12v"+" "+"battery";
    document.getElementById('chargecontrol').innerHTML="You will need"+" "+chargeController+"amps"+" "+"charge controller";
    document.getElementById('inverter').innerHTML="You will need"+" "+inverterW+"watts"+" "+"inverter" + " " + "OR";
    document.getElementById('inverterV').innerHTML="You will need"+" "+inverterVa+"VA"+" "+"inverter";
    document.getElementById('call').innerHTML="Requirements";
    };

    setInterval(myFunct, 1000);

//  function myFunct() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }