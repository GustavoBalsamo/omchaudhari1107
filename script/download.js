document.querySelector(".btn").addEventListener("click", function () {
  alert('Check CV on laptop for certifications links.')
  var cvUrl = './Om_Chaudhari_CV.pdf';
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Om CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
