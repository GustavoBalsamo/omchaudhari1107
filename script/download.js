document.querySelector(".btn").addEventListener("click", function () {
  // alert('CV on update')
  // return
  var cvUrl = './Luis-balsamo-CV.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Luis-balsamo-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
