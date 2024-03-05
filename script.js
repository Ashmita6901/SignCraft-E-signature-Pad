// var canvas = document.getElementById("myCanvas");
// function resizeCanvas() {
//     var ratio = Math.max(window.devicePixelRatio || 1, 1);
//     canvas.width = canvas.offsetWidth * ratio;
//     canvas.height = canvas.offsetHeight * ratio;
//     canvas.getContext("2d").scale(ratio, ratio);
// }
// window.onresize = resizeCanvas;
// resizeCanvas();
// var signaturePad = new SignaturePad(canvas, {
//      backgroundColor: 'rgb(250,250,250)'
//     });
//     document.getElementById("clear").addEventListener('click', function(){
//         signaturePad.clear();
//     })
var bgColorPicker = document.getElementById('bgColorPicker');
var penColorPicker = document.getElementById('penColorPicker');
var canvas = document.getElementById('myCanvas');
var signaturePad = new SignaturePad(canvas);
var signaturePad = new SignaturePad(canvas, {
    backgroundColor: bgColorPicker.value, // Background color of the canvas
    penColor: penColorPicker.value // Color of the pen
    // Other options...
});
//clear canvas
document.getElementById("clear").addEventListener('click', function(){
    signaturePad.clear();
})
//save signature as jped img
document.getElementById("save").addEventListener('click', function() {
    // Check if the signature pad has any drawn paths
    if (!signaturePad.isEmpty()) {
        // If not empty, save as JPEG image
        saveSignatureAsImage();
        
        // Save as PDF
        saveSignatureAsPDF();
    } else {
        // If empty, display a message or perform other actions
        alert('Canvas is empty. No signature to save.');
    }
});

// Function to save the signature as a JPEG image
function saveSignatureAsImage() {
    // Convert the signature pad to an image
    var dataURL = signaturePad.toDataURL();
    
    // Create a link element and trigger a click event to download the image
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.jpg';
    link.click();
}




// Update background color when background color picker changes
bgColorPicker.addEventListener('input', function() {
    signaturePad.backgroundColor = bgColorPicker.value;
    signaturePad.clear(); // Clear signature when background color changes
});
// Update pen color when pen color picker changes
penColorPicker.addEventListener('input', function() {
    signaturePad.penColor = penColorPicker.value;
});





