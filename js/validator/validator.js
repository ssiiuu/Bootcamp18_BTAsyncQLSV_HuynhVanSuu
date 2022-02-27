let validator = {
  kiemTraSo: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập số ";
      return false;
    }
  },
  kiemTraKiTu: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let parten = new RegExp("[A-Za-z]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập tên là chữ ";
      return false;
    }
  },
  kiemTraDoDai: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let length = value.trim().length;
    if (length < 5) {
      errEl.innerText = "Độ dài tối thiểu phải lớn hơn 5";
      return false;
    }
    if (length > 15) {
      errEl.innerText = "Độ dài tối đa phải nhỏ hơn 15";
      return false;
    }
    errEl.innerText = "";
    return true;
  },
  kiemTraEmail: function (value, idErr) {
    errEl = document.getElementById(idErr);

    // let parten = new RegExp("/^S+@S+.S+$/");
    let parten = /\S+@\S+\.\S+/;

    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập đúng định dạng email";
      return false;
    }
  },
};
