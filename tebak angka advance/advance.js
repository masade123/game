// Menghasilkan angka acak antara 1 dan 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Fungsi untuk memeriksa tebakan
function checkGuess() {
  const userGuess = document.getElementById("guess").value;
  attempts++;

  const resultElement = document.getElementById("result");

  if (userGuess == randomNumber) {
    resultElement.textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} kali percobaan.`;
    resultElement.style.color = "green";
  } else if (userGuess < randomNumber) {
    resultElement.textContent = "Terlalu rendah! Coba lagi.";
    resultElement.style.color = "red";
  } else {
    resultElement.textContent = "Terlalu tinggi! Coba lagi.";
    resultElement.style.color = "red";
  }
}

// Event listener untuk tombol tebakan
document.getElementById("guessButton").addEventListener("click", checkGuess);
