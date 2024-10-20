let pulsaBalance = 225;

showMainMenu();

document
  .getElementById("sendButton")
  .addEventListener("click", handleMenuSelection);

function handleMenuSelection() {
  const option = document.getElementById("ussd-option").value;

  switch (option) {
    case "1":
      showPulsaDarurat();
      break;
    case "2":
      showPromoInternetBulanan();
      break;
    case "3":
      showHotPromo();
      break;
    case "4":
      showPromoInternetTahunan();
      break;
    case "5":
      showPhoneNumberInput();
      break;
    case "6":
      showInfoPulsa();
      break;
    default:
      document.getElementById("message").textContent =
        "Opsi tidak valid atau belum tersedia.";
  }
}

function showPulsaDarurat() {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Pilih Nominal Pulsa Darurat</h2>
        <ul>
            <li>1. Rp 10.000</li>
            <li>2. Rp 20.000</li>
            <li>3. Rp 50.000</li>
        </ul>
        <input type="text" id="darurat-option" placeholder="Pilih Nominal">
        <div class="buttons">
            <button id="cancelDaruratButton">Cancel</button>
            <button id="confirmDaruratButton">Beli</button>
        </div>
        <div id="message" class="message"></div>
    `;

  document
    .getElementById("cancelDaruratButton")
    .addEventListener("click", showMainMenu);
  document
    .getElementById("confirmDaruratButton")
    .addEventListener("click", processPulsaDarurat);
}

function processPulsaDarurat() {
  const daruratOption = document.getElementById("darurat-option").value;
  let nominal, harga;

  switch (daruratOption) {
    case "1":
      nominal = "Rp 10.000";
      harga = 10000;
      break;
    case "2":
      nominal = "Rp 20.000";
      harga = 20000;
      break;
    case "3":
      nominal = "Rp 50.000";
      harga = 50000;
      break;
    default:
      document.getElementById("message").textContent = "Nominal tidak valid.";
      return;
  }

  pulsaBalance += harga;
  showInfoPulsa();
}

function showPromoInternetBulanan() {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Pilih Promo Internet Bulanan</h2>
        <ul>
            <li>1. 10GB - Rp 100.000</li>
            <li>2. 20GB - Rp 150.000</li>
            <li>3. 30GB - Rp 200.000</li>
            <li>4. 50GB - Rp 250.000</li>
            <li>5. 100GB - Rp 400.000</li>
        </ul>
        <input type="text" id="bulanan-option" placeholder="Pilih Promo">
        <div class="buttons">
            <button id="cancelButton">Cancel</button>
            <button id="confirmBulananButton">Beli</button>
        </div>
        <div id="message" class="message"></div>
    `;

  document
    .getElementById("cancelButton")
    .addEventListener("click", showMainMenu);
  document
    .getElementById("confirmBulananButton")
    .addEventListener("click", processPembelianBulanan);
}

function processPembelianBulanan() {
  const bulananOption = document.getElementById("bulanan-option").value;
  let paket, harga;

  switch (bulananOption) {
    case "1":
      paket = "10GB - Rp 100.000";
      harga = 100000;
      break;
    case "2":
      paket = "20GB - Rp 150.000";
      harga = 150000;
      break;
    case "3":
      paket = "30GB - Rp 200.000";
      harga = 200000;
      break;
    case "4":
      paket = "50GB - Rp 250.000";
      harga = 250000;
      break;
    case "5":
      paket = "100GB - Rp 400.000";
      harga = 400000;
      break;
    default:
      document.getElementById("message").textContent = "Promo tidak valid.";
      return;
  }

  if (pulsaBalance >= harga) {
    pulsaBalance -= harga;
    processPembelianBulananSuccess(paket);
  } else {
    document.getElementById("message").textContent = "Saldo tidak cukup.";
  }
}

function processPembelianBulananSuccess(paket) {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Proses Pembelian</h2>
        <p>Sedang memproses pembelian ${paket}...</p>
    `;

  setTimeout(function () {
    container.innerHTML = `
            <h2>Pembelian Berhasil</h2>
            <p>Paket ${paket} telah berhasil dibeli dan berlaku selama 30 hari.</p>
        `;
    showInfoPulsa();
  }, 2000);
}

function showHotPromo() {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Pilih Hot Promo</h2>
        <ul>
            <li>1. 15GB - Rp 120.000</li>
            <li>2. 30GB - Rp 200.000</li>
            <li>3. 50GB - Rp 300.000</li>
            <li>4. 100GB - Rp 500.000</li>
        </ul>
        <input type="text" id="hotpromo-option" placeholder="Pilih Promo">
        <div class="buttons">
            <button id="cancelButton">Cancel</button>
            <button id="confirmHotPromoButton">Beli</button>
        </div>
        <div id="message" class="message"></div>
    `;

  document
    .getElementById("cancelButton")
    .addEventListener("click", showMainMenu);
  document
    .getElementById("confirmHotPromoButton")
    .addEventListener("click", processPembelianHotPromo);
}

function processPembelianHotPromo() {
  const hotpromoOption = document.getElementById("hotpromo-option").value;
  let paket, harga;

  switch (hotpromoOption) {
    case "1":
      paket = "15GB - Rp 120.000";
      harga = 120000;
      break;
    case "2":
      paket = "30GB - Rp 200.000";
      harga = 200000;
      break;
    case "3":
      paket = "50GB - Rp 300.000";
      harga = 300000;
      break;
    case "4":
      paket = "100GB - Rp 500.000";
      harga = 500000;
      break;
    default:
      document.getElementById("message").textContent = "Promo tidak valid.";
      return;
  }

  if (pulsaBalance >= harga) {
    pulsaBalance -= harga;
    processPembelianHotPromoSuccess(paket);
  } else {
    document.getElementById("message").textContent = "Saldo tidak cukup.";
  }
}

function processPembelianHotPromoSuccess(paket) {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Proses Pembelian</h2>
        <p>Sedang memproses pembelian ${paket}...</p>
    `;

  setTimeout(function () {
    container.innerHTML = `
            <h2>Pembelian Berhasil</h2>
            <p>Paket ${paket} telah berhasil dibeli dan berlaku selama 30 hari.</p>
        `;
    showInfoPulsa();
  }, 2000);
}

function showPromoInternetTahunan() {
  const container = document.querySelector(".container");
  container.innerHTML = `
        <h2>Pilih Promo Internet Tahunan</h2>
        <ul>
            <li>1. Paket 50GB - Rp 150.000</li>
            <li>2. Paket 100GB - Rp 250.000</li>
            <li>3. Paket 200GB - Rp 400.000</li>
            <li>4. Paket 500GB - Rp 700.000</li>
        </ul>
        <input type="text" id="tahunan-option" placeholder="Pilih Promo">
        <div class="buttons">
            <button id="cancelButton">Cancel</button>
            <button id="confirmTahunanButton">Beli</button>
        </div>
        <div id="message" class="message"></div>
    `;

  document
    .getElementById("cancelButton")
    .addEventListener("click", showMainMenu);
  document
    .getElementById("confirmTahunanButton")
    .addEventListener("click", processPembelianTahunan);
}