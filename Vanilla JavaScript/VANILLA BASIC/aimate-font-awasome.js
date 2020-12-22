// Brake chain animation
function brakeChain ()
{
    let chain = document.getElementById("chain");
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function ()
    {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}
//  call animation
brakeChain();
//  animate every 2 seconds
setInterval(brakeChain, 5000);

// Battery charge animation
function chargeBattery ()
{
    let battery = document.getElementById("battery");
    battery.innerHTML = "&#xf244;";
    setTimeout(function ()
    {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function ()
    {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function ()
    {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function ()
    {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}
// run animation
chargeBattery();
// run animation every 5 seconds
setInterval(chargeBattery, 5000);

// Hourglass Tip Animation
function hourglassTip ()
{
    let hourglass = document.getElementById("hourglass");
    hourglass.innerHTML = "&#xf251;";
    setTimeout(function ()
    {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function ()
    {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}
// run animation
hourglassTip();
// run animation every 3 seconds
setInterval(hourglassTip, 3000);
