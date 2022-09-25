/* js
var loadFile = function(event) {
    var output = document.getElementById('avatar');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
    }
  };

  var loadTemplate = function(event) {
    var output = document.getElementById('bingkai');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
    }
  };

  function gen() {
      alert("Click OK to continue...");
      // Mensetting Variabel
        var img1 = document.getElementById('avatar');
        console.log(img1);
        var img2 = document.getElementById('bingkai');
        console.log(img2);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var width = img2.width;
        var height = img2.height;
        canvas.width = width;
        canvas.height = height;
        // Fungsi untuk men-draw gambar
        context.drawImage(img1, 0, 1, width, height);
        var image1 = context.getImageData(0, 0, width, height);
        var imageData1 = image1.data;
        context.drawImage(img2, 0, 0, width, height);
        var image2 = context.getImageData(0, 0, width, height);
        var imageData2 = image2.data;
  }

  function download(canvas, filename) {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'), e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
        if (document.createEvent) {
            e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", true, true, window,
                            0, 0, 0, 0, 0, false, false, false,
                            false, 0, null);

            lnk.dispatchEvent(e);
        } else if (lnk.fireEvent) {
            lnk.fireEvent("onclick");
        }
    }

    var dwn = document.getElementById('btndownload');
        dwn.onclick = function(){
        download(canvas, 'susahberak.png');
    };
*/
dmFyIGxvYWRGaWxlID0gZnVuY3Rpb24oZXZlbnQpIHsKICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJyk7CiAgICBvdXRwdXQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pOwogICAgb3V0cHV0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgewogICAgVVJMLnJldm9rZU9iamVjdFVSTChvdXRwdXQuc3JjKQogICAgfQogIH07CgogIHZhciBsb2FkVGVtcGxhdGUgPSBmdW5jdGlvbihldmVudCkgewogICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW5na2FpJyk7CiAgICBvdXRwdXQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pOwogICAgb3V0cHV0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgewogICAgVVJMLnJldm9rZU9iamVjdFVSTChvdXRwdXQuc3JjKQogICAgfQogIH07CgogIGZ1bmN0aW9uIGdlbigpIHsKICAgICAgYWxlcnQoIkNsaWNrIE9LIHRvIGNvbnRpbnVlLi4uIik7CiAgICAgIC8vIE1lbnNldHRpbmcgVmFyaWFiZWwKICAgICAgICB2YXIgaW1nMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdmF0YXInKTsKICAgICAgICBjb25zb2xlLmxvZyhpbWcxKTsKICAgICAgICB2YXIgaW1nMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW5na2FpJyk7CiAgICAgICAgY29uc29sZS5sb2coaW1nMik7CiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjYW52YXMiKTsKICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCIyZCIpOwogICAgICAgIHZhciB3aWR0aCA9IGltZzIud2lkdGg7CiAgICAgICAgdmFyIGhlaWdodCA9IGltZzIuaGVpZ2h0OwogICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoOwogICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7CiAgICAgICAgLy8gRnVuZ3NpIHVudHVrIG1lbi1kcmF3IGdhbWJhcgogICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZzEsIDAsIDEsIHdpZHRoLCBoZWlnaHQpOwogICAgICAgIHZhciBpbWFnZTEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsKICAgICAgICB2YXIgaW1hZ2VEYXRhMSA9IGltYWdlMS5kYXRhOwogICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZzIsIDAsIDAsIHdpZHRoLCBoZWlnaHQpOwogICAgICAgIHZhciBpbWFnZTIgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsKICAgICAgICB2YXIgaW1hZ2VEYXRhMiA9IGltYWdlMi5kYXRhOwogIH0KCiAgZnVuY3Rpb24gZG93bmxvYWQoY2FudmFzLCBmaWxlbmFtZSkgewogICAgLy8vIGNyZWF0ZSBhbiAib2ZmLXNjcmVlbiIgYW5jaG9yIHRhZwogICAgdmFyIGxuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSwgZTsKCiAgICAvLy8gdGhlIGtleSBoZXJlIGlzIHRvIHNldCB0aGUgZG93bmxvYWQgYXR0cmlidXRlIG9mIHRoZSBhIHRhZwogICAgbG5rLmRvd25sb2FkID0gZmlsZW5hbWU7CgogICAgLy8vIGNvbnZlcnQgY2FudmFzIGNvbnRlbnQgdG8gZGF0YS11cmkgZm9yIGxpbmsuIFdoZW4gZG93bmxvYWQKICAgIC8vLyBhdHRyaWJ1dGUgaXMgc2V0IHRoZSBjb250ZW50IHBvaW50ZWQgdG8gYnkgbGluayB3aWxsIGJlCiAgICAvLy8gcHVzaGVkIGFzICJkb3dubG9hZCIgaW4gSFRNTDUgY2FwYWJsZSBicm93c2VycwogICAgbG5rLmhyZWYgPSBjYW52YXMudG9EYXRhVVJMKCJpbWFnZS9wbmc7YmFzZTY0Iik7CgogICAgLy8vIGNyZWF0ZSBhICJmYWtlIiBjbGljay1ldmVudCB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZAogICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkgewogICAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoIk1vdXNlRXZlbnRzIik7CiAgICAgICAgICAgIGUuaW5pdE1vdXNlRXZlbnQoImNsaWNrIiwgdHJ1ZSwgdHJ1ZSwgd2luZG93LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCAwLCBudWxsKTsKCiAgICAgICAgICAgIGxuay5kaXNwYXRjaEV2ZW50KGUpOwogICAgICAgIH0gZWxzZSBpZiAobG5rLmZpcmVFdmVudCkgewogICAgICAgICAgICBsbmsuZmlyZUV2ZW50KCJvbmNsaWNrIik7CiAgICAgICAgfQogICAgfQoKICAgIHZhciBkd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuZG93bmxvYWQnKTsKICAgICAgICBkd24ub25jbGljayA9IGZ1bmN0aW9uKCl7CiAgICAgICAgZG93bmxvYWQoY2FudmFzLCAnc3VzYWhiZXJhay5wbmcnKTsKICAgIH07Cg==
