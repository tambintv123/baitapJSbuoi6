// bai 1
const soNguyenNhoNhat = () => {
  let sum = 0;
  let number = 0;
  while (sum < 10000) {
    number++;
    sum += number;
  }
  return number;
};

const result_1 = document.getElementById("result-1");
document.getElementById("btnFind").addEventListener("click", function () {
  let result = soNguyenNhoNhat();
  result_1.innerHTML = `so nguyen duong nho nhat la: ${result}`;
});

//bai 2
const result_2 = document.getElementById("result-2");
const tinhTong = (x, n) => {
  let tich = 1;
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tich = Math.pow(x, i);
    tong += tich;
  }
  return tong;
};
document.getElementById("btnCal").addEventListener("click", function () {
  let x = +document.getElementById("txtX").value;
  let n = +document.getElementById("number").value;
  let ketqua = tinhTong(x, n);

  result_2.innerHTML = `Tong la: ${ketqua}`;
});
//bai 3
const result_3 = document.getElementById("result-3");
const tinhGiaiThua = (number) => {
  let tich = 1;
  for (let i = 1; i <= number; i++) {
    tich *= i;
  }
  return tich;
};
document.getElementById("btnCalSum").addEventListener("click", function () {
  let number = +document.getElementById("txtNumber").value;
  let sum = tinhGiaiThua(number);

  result_3.innerText = sum;
});
//bai 4
const result_4 = document.getElementById("result-4");
document.getElementById("btnCreate").onclick = () => {
  result_4.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    i % 2 === 0
      ? (result_4.innerHTML = `${result_4.innerHTML}<div style="background: #ef5757;">Div Chan ${i}</div>`)
      : (result_4.innerHTML = `${result_4.innerHTML}<div style="background: #82b9f9;">Div le ${i}</div>`);
  }
};
