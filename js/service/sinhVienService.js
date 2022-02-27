const BASE_URL = "https://6217499271e7672e53795b74.mockapi.io/sinhvienn";

const sinhVienService = {
  layDanhSachSinhVien: function () {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  themSinhVien: function (_data) {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: _data,
    });
  },
  xoaSinhVien: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  layChiTietSinhVien: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  capNhatSinhVien: function (id, _data) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: _data,
    });
  },
};

// sinhVienService
//   .layDanhSachSinhVien()
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });
