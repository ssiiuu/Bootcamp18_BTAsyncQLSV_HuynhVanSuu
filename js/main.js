let renderTableDSSV = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      let convertedArr = res.data.map((item) => {
        let { name, email, toan, ly, hoa, id, ma } = item;
        return new SV(name, email, toan, ly, hoa, id, ma);
      });
      sinhVienControllers.renderTable(convertedArr);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

//render ra giao diện lần đầu tiên
renderTableDSSV();

// ---- Thêm SV-------

document.getElementById("btn-add").addEventListener("click", function () {
  let svObject = sinhVienControllers.layThongTinTuForm();

  let isValid =
    validator.kiemTraSo(svObject.ma, "spanMaSV") &
    validator.kiemTraKiTu(svObject.name, "spanTenSV") &
    validator.kiemTraDoDai(svObject.name, "spanTenSV") &
    validator.kiemTraEmail(svObject.email, "spanEmailSV") &
    validator.kiemTraSo(svObject.toan, "spanToan") &
    validator.kiemTraSo(svObject.ly, "spanLy") &
    validator.kiemTraSo(svObject.hoa, "spanHoa");
  isValid &&
    sinhVienService
      .themSinhVien(svObject)
      .then((res) => {
        renderTableDSSV();
        document.getElementById("formQLSV").reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
});

// ----End Thêm SV-------
// ----Xóa SV------
function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTableDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
}

// ----End Xóa SV------
// ----Sửa SV----------
function suaSV(id) {
  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
      let sv = res.data;
      document.getElementById("txtMaSV").value = sv.ma;
      document.getElementById("txtTenSV").value = sv.name;
      document.getElementById("txtEmail").value = sv.email;
      document.getElementById("txtDiemToan").value = sv.toan;
      document.getElementById("txtDiemLy").value = sv.ly;
      document.getElementById("txtDiemHoa").value = sv.hoa;
    })
    .catch((err) => {
      console.log(err);
    });
}
// ----End Sửa SV----------
// ----Cập nhật SV---------
function capNhatSV() {
  let svUpdated = sinhVienControllers.layThongTinTuForm();
  let isValid =
    validator.kiemTraSo(svUpdated.ma, "spanMaSV") &
    validator.kiemTraKiTu(svUpdated.name, "spanTenSV") &
    validator.kiemTraDoDai(svUpdated.name, "spanTenSV") &
    validator.kiemTraEmail(svUpdated.email, "spanEmailSV") &
    validator.kiemTraSo(svUpdated.toan, "spanToan") &
    validator.kiemTraSo(svUpdated.ly, "spanLy") &
    validator.kiemTraSo(svUpdated.hoa, "spanHoa");
  isValid &&
    sinhVienService
      .capNhatSinhVien(id, svUpdated)
      .then((res) => {
        renderTableDSSV();
        document.getElementById("formQLSV").reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
}
// ----End Cập nhật SV---------
// ----Reset btn-----------
function resetSV() {
  document.getElementById("formQLSV").reset();
}
// ----End Reset btn-----------
