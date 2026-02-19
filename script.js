// دکمه نمایش داده شده پس از اسکرول
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

// عمل برگشت به بالا
document.getElementById("back-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
