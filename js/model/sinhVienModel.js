function SV(name, email, toan, ly, hoa, id, ma) {
  this.name = name;
  this.email = email;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.id = id;
  this.ma = ma;

  this.getDTB = function () {
    return (this.toan + this.ly + this.hoa) / 3;
  };
}
