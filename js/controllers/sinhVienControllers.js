let sinhVienControllers = {
  renderTable: function (arr) {
    let tBodyEl = document.getElementById("tbodySinhVien");

    let contentHTML = "";

    arr.map((item) => {
      let trContent = ` <tr>
                            <td>${item.ma}</td>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.getDTB()}</td>
                            <td>
                                <button class="btn btn-success" onclick="suaSV(${
                                  item.id
                                })">Sửa</button>
                                <button class="btn btn-danger" onclick="xoaSV(${
                                  item.id
                                })">Xóa</button>
                            </td>
                        </tr>`;

      contentHTML += trContent;
    });
    tBodyEl.innerHTML = contentHTML;
  },
  layThongTinTuForm: function () {
    let tenSV = document.getElementById("txtTenSV").value;
    let email = document.getElementById("txtEmail").value;
    let maSV = document.getElementById("txtMaSV").value;
    let diemToan = document.getElementById("txtDiemToan").value * 1;
    let diemHoa = document.getElementById("txtDiemHoa").value * 1;
    let diemLy = document.getElementById("txtDiemLy").value * 1;

    return {
      name: tenSV,
      email: email,
      toan: diemToan,
      ly: diemLy,
      hoa: diemHoa,
      ma: maSV,
    };
  },
};
