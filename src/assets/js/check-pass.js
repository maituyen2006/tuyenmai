(function() {
  var protectedInput = document.querySelectorAll(".protected input")[0];
  inputObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
          if (mutation.attributeName === "type") {
              var message = '<span class="notice">Bạn đã thay đổi kiểu giá trị ngoài trường Password. Làm mới lại trang để tiếp tục sử dụng</span>';
              protectedInput.parentNode.innerHTML = message;
          }
      });
  });
  inputObserver.observe(protectedInput, {attributes: true});
})();