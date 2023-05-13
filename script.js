// Karavanlar için özellikler ve fiyatlar
var caravans = [
  { name: "Caravan A", features: ["2 yatak odası", "Mutfak", "Banyo"], price: 120 },
  { name: "Caravan B", features: ["3 yatak odası", "Mutfak", "Banyo"], price: 150 },
  { name: "Caravan C", features: ["1 yatak odası", "Küçük mutfak", "Tuvalet"], price: 90 },
  { name: "Caravan D", features: ["2 yatak odası", "Geniş mutfak", "Banyo"], price: 180 }
];

// Karavanları listeleyen fonksiyon
function listCaravans() {
  var caravanList = document.getElementById("caravan-list");
  caravanList.innerHTML = "";
  
  for (var i = 0; i < caravans.length; i++) {
    var caravan = caravans[i];
    
    // Karavanın adı ve özellikleri
    var nameElement = document.createElement("h2");
    nameElement.textContent = caravan.name;
    
    var featuresElement = document.createElement("ul");
    for (var j = 0; j < caravan.features.length; j++) {
      var feature = caravan.features[j];
      var featureElement = document.createElement("li");
      featureElement.textContent = feature;
      featuresElement.appendChild(featureElement);
    }
    
    // Karavanın fiyatı
    var priceElement = document.createElement("p");
    priceElement.textContent = "Fiyat: " + caravan.price + " TL/gece";
    
    // Karavanın rezervasyon butonu
    var buttonElement = document.createElement("button");
    buttonElement.textContent = "Rezervasyon Yap";
    buttonElement.addEventListener("click", function(event) {
      var selectedCaravan = caravans[i];
      alert("Rezervasyon yapıldı: " + selectedCaravan.name + " - " + selectedCaravan.price + " TL");
    });
    
    // Karavanın elemanlarını birleştir
    var caravanElement = document.createElement("div");
    caravanElement.appendChild(nameElement);
    caravanElement.appendChild(featuresElement);
    caravanElement.appendChild(priceElement);
    caravanElement.appendChild(buttonElement);
    
    // Karavanı listeye ekle
    caravanList.appendChild(caravanElement);
  }
}

// Karavanları listeleyen fonksiyonu çağır
listCaravans();
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3] + '-' + match[4];
  }
  return null;
}

function validateForm() {
  var nameInput = document.forms['booking-form']['name'];
  var emailInput = document.forms['booking-form']['email'];
  var phoneInput = document.forms['booking-form']['phone'];

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var phone = phoneInput.value.trim();

  if (name === '' || email === '' || phone === '') {
    alert('Lütfen tüm alanları doldurun.');
    return false;
  }

  if (phone.length !== 10) {
    alert('Lütfen geçerli bir telefon numarası girin.');
    return false;
  }

  var formattedPhone = formatPhoneNumber(phone);
  if (formattedPhone === null) {
    alert('Lütfen geçerli bir telefon numarası girin.');
    return false;
  } else {
    phoneInput.value = formattedPhone;
  }

  return true;
}
