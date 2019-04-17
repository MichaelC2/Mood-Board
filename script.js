var angry =
["https://mymind.org/wp-content/uploads/2015/09/Anger-708x492.jpg", "https://www.improvisedlife.com/cms/wp-content/uploads/2017/11/angry-emoji-1.jpg", "https://media.swncdn.com/cms/CW/Couples/singles/38397-angrywoman-steamoutofears-thinkstock-SIphotography.1200w.tn.jpg"];
var excited = ["https://3.bp.blogspot.com/-p1_RDo5Byxw/XFvoAybqnQI/AAAAAAAACQI/O-moCOU6cXYWZ4PjqiGyX62VNOJZEa5DQCLcBGAs/s1600/1.%2BExcited%2BMeme.jpg", "http://unseenflirtspoetry.files.wordpress.com/2012/05/homer-excited.png?w=286&h=262", "https://media.istockphoto.com/photos/happy-emoji-isolated-on-white-background-emoticon-with-raised-hands-picture-id868644330?k=6&m=868644330&s=612x612&w=0&h=9V3_Neg6wV2G1jAOrOgrFvmm9217XBcs50sAf-GcOzg="];
var scared = ["https://www.cranbournenorthdental.com.au/wp-content/uploads/2017/08/scared-Medium.jpg", "https://i.kinja-img.com/gawker-media/image/upload/s--aiV4W3p7--/c_scale,f_auto,fl_progressive,q_80,w_800/gcr42nwcr1kkund8kimw.jpg", "https://ago.ca/sites/default/files/styles/max_800x800/public/2017-08/Psycho.jpg?itok=1Zz89cm7"];


$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "angry") {
        angryMood();
    } else if (input === "scared") {
        scaredMood();
    } else if (input === "excited") {
        excitedMood();
    } else {
        alert("Please enter comedy, romance, or horror!");
    }
});


function angryMood() {

    changeTextColor("red");
    displayImage(angry);
}

function scaredMood() {

    changeTextColor("ypurple");
    displayImage(excited);
}

function excitedMood() {

    changeTextColor("yellow");
    displayImage(scared);
}


function changeBackground(backgroundImage) {
    $('body').css('background-image', "url(" + backgroundImage + ")");
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(images) {
   
    images.forEach(function(image) {
        $('.images').append('<img src =' + image + '>');

    });
}