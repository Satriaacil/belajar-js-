// // Kalkulator Sederhana dengan JavaScript
// function kalkulator() {
//   const operasi = prompt(
//     "Pilih operasi:\n1. Tambah (+)\n2. Kurang (-)\n3. Kali (*)\n4. Bagi (/)\n5. Modulus (%)"
//   );

//   const angka1 = parseFloat(prompt("Masukkan angka pertama:"));
//   const angka2 = parseFloat(prompt("Masukkan angka kedua:"));

//   let hasil;

//   switch (operasi) {
//     case "1":
//     case "+":
//       hasil = angka1 + angka2;
//       alert(`Hasil: ${angka1} + ${angka2} = ${hasil}`);
//       break;
//     case "2":
//     case "-":
//       hasil = angka1 - angka2;
//       alert(`Hasil: ${angka1} - ${angka2} = ${hasil}`);
//       break;
//     case "3":
//     case "*":
//       hasil = angka1 * angka2;
//       alert(`Hasil: ${angka1} * ${angka2} = ${hasil}`);
//       break;
//     case "4":
//     case "/":
//       if (angka2 !== 0) {
//         hasil = angka1 / angka2;
//         alert(`Hasil: ${angka1} / ${angka2} = ${hasil}`);
//       } else {
//         alert("Error: Tidak bisa membagi dengan nol.");
//       }
//       break;
//     case "5":
//     case "%":
//       hasil = angka1 % angka2;
//       alert(`Hasil: ${angka1} % ${angka2} = ${hasil}`);
//       break;
//     default:
//       alert("Operasi tidak valid!");
//       break;
//   }
// }

// // Jalankan kalkulator
// kalkulator();

function calculateSum() {
  const num1 = parseFloat(document.getElementById("addAngka1").value);
  const num2 = parseFloat(document.getElementById("addAngka2").value);
  const result = num1 + num2;

  document.getElementById(
    "addResult"
  ).innerText = `Hasil Penjumlahan : ${result}`;
}

function calculateDifference() {
  const num1 = parseFloat(document.getElementById("subAngka1").value);
  const num2 = parseFloat(document.getElementById("subAngka2").value);
  const result = num1 - num2;

  document.getElementById(
    "subResult"
  ).innerText = `Hasil Pengurangan : ${result}`;
}

function calculateDivision() {
  const num1 = parseFloat(document.getElementById("divAngka1").value);
  const num2 = parseFloat(document.getElementById("divAngka2").value);
  if (num2 === 0) {
    document.getElementById("divResult").innerText =
      "hasil pembagian dengan nol tidak di perbolehkan";
  } else {
    const result = num1 / num2;
    document.getElementById(
      "divResult"
    ).innerText = `Hasil Pembagian : ${result}`;
  }
}

function calculateMultiplication() {
  const num1 = parseFloat(document.getElementById("mulAngka1").value);
  const num2 = parseFloat(document.getElementById("mulAngka2").value);
  const result = num1 * num2;

  document.getElementById(
    "mulResult"
  ).innerText = `Hasil Perkalian : ${result}`;
}
