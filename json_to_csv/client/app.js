$(document).ready(function() {
  $(":button").on("click", function() {
    var fileInput = $("input[name=file]")[0];
    if (fileInput.files.length < 1) {
      alert("You must upload a file");
    } else {
      $.ajax({
        // Your server script to process the upload
        url: "/JSON-to-CSV",
        type: "POST",

        // Form data
        data: new FormData($("form")[0]),

        // Tell jQuery not to process data or worry about content-type
        // You *must* include these options!
        cache: false,
        contentType: false,
        processData: false,

        // Custom XMLHttpRequest
        xhr: function() {
          var myXhr = $.ajaxSettings.xhr();
          if (myXhr.upload) {
            // For handling the progress of the upload
            myXhr.upload.addEventListener(
              "progress",
              function(e) {
                if (e.lengthComputable) {
                  $("progress").attr({
                    value: e.loaded,
                    max: e.total
                  });
                }
              },
              false
            );
          }
          return myXhr;
        },
        success: function(result) {
          $("#CSV_result").html(result);
          $("#CSV").append(
            '<br><div id="CSV_download"> <a href="/download_latest_csv">Download CSV</a> </div>'
          );
        }
      });
    }
  });
});
