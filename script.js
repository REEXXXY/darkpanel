<main>
  <section class="reservation-form">
    <div class="container">
      <h2>Rezervasyon Yap</h2>
      <form>
        <label for="start-date">Başlangıç Tarihi:</label>
        <input type="date" id="start-date" name="start-date" required>

        <label for="end-date">Bitiş Tarihi:</label>
        <input type="date" id="end-date" name="end-date" required>

        <label for="rental-days">Kiralama Gün Sayısı:</label>
        <input type="number" id="rental-days" name="rental-days" min="1" required>

        <button type="submit" class="btn">Rezervasyon Yap</button>
      </form>
    </div>
  </section>

  <section class="caravan-list">
    <div class="container">
      <h2>Karavanlarımız</h2>
      <div class="caravan-container">
        <div class="caravan">
          <img src="images/caravan1.jpg" alt="Karavan">
          <div class="caravan-details">
            <h3>Özellikler</h3>
            <ul>
              <li>Yataklar: 4 kişilik</li>
              <li>Mutfak: Tam donanımlı</li>
              <li>Banyo: Duş ve tuvalet</li>
              <li>Aksesuarlar: Klima, uydu TV, Wi-Fi</li>
            </ul>
            <p class="price"><span class="price-label">Günlük Fiyat:</span> 300 TL</p>
            <button class="btn">Rezervasyon Yap</button>
          </div>
        </div>

        <div class="caravan">
          <img src="images/caravan2.jpg" alt="Karavan">
          <div class="caravan-details">
            <h3>Özellikler</h3>
            <ul>
              <li>Yataklar: 6 kişilik</li>
              <li>Mutfak: Tam donanımlı</li>
              <li>Banyo: Duş ve tuvalet</li>
              <li>Aksesuarlar: Klima, uydu TV, Wi-Fi</li>
            </ul>
            <p class="price"><span class="price-label">Günlük Fiyat:</span> 400 TL</p>
            <button class="btn">Rezervasyon Yap</button>
          </div>
        </div>

        <div class="caravan">
          <img src="images/caravan3.jpg" alt="Karavan">
          <div class="caravan-details">
            <h3>Özellikler</h3>
            <ul>
              <li>Yataklar: 2 kişilik</li>
              <li>Mutfak: Tam donanımlı</li>
              <li>Banyo: Duş ve tuvalet</li>
              <li>Aksesuarlar: Klima, uydu TV, Wi-Fi</li>
            </ul>
            <p class="price"><span class="price-label">Günlük Fiyat:</span> 400 TL</p>
            <button class="btn">Rezervasyon Yap</button>
          </div>
        </div>

// Karavan özellikleri
const caravans = [
  { beds: 4, dailyPrice: 600 },
  { beds: 6, dailyPrice: 500 },
  { beds: 2, dailyPrice: 400 }
];

// Tarih seçicileri
const startDateInput = document.getElementById('start-date');
const endDateInput = document.getElementById('end-date');

// Fiyat hesaplama fonksiyonu
function calculatePrice() {
  // Tarihlerin değerleri
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);

  // Tarihler arasındaki fark
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Karavan seçimi
  const selectedCaravanIndex = document.getElementById('caravan-select').selectedIndex;
  const selectedCaravan = caravans[selectedCaravanIndex];

  // Fiyat hesaplama
  const totalPrice = diffDays * selectedCaravan.dailyPrice;

  // Fiyatı ekrana yazdırma
  document.getElementById('total-price').textContent = `${totalPrice} TL`;
}

// Tarih değiştiğinde fiyatın hesaplanmasını tetikleyen event listener'lar
startDateInput.addEventListener('change', calculatePrice);
endDateInput.addEventListener('change', calculatePrice);
document.getElementById('caravan-select').addEventListener('change', calculatePrice);
