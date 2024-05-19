const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth;
const totalSlides = slides.children.length;
let counter = 0;

const captions = [
  "Bursa'nın tarih kokan sakin sokakları arasında, Yıldırım Beyazıt tarafından inşa edilen eşsiz biryapıya rastlamak mümkün, Bursa Kapalı Çarşı. Bu çarşı, mimari zarafeti ve tarihi önemiyle Bursa&#39;yagelen herkesin uğramadan gitmeyeceği bir noktadır. Orhangazi döneminde hanların aralarınınçatılarla kapatılmasıyla başlayan bir süreç sonucunda ortaya çıkan Kapalı Çarşı, zaman içinde farklıçarşıların eklenmesiyle bugünkü görünümüne kavuşmuştur.",
  "Bursa’nın tarihi sembollerinden olan cami, çok ayaklı cami şemasının en klasik ve anıtsal örneğisayılır. Yirmi kubbeli yapı, Türkiye’deki iç cemaat yeri en geniş camidir.  Caminin kündekari tekniğiile yapılmış minberi Selçuklu oyma sanatından Osmanlı ahşap oymacılığı sanatına geçişin enönemli örneklerinden biri kabul edilen değerli bir sanat eseridir.",
  "Eskihisar Kalesi’nden ilk olarak Georgios Akropolite 1241 yılında söz etmiştir. Palekanon Savaşınedeniyle de tarihte adı geçmiştir. Latin İmparatorluğu’nun bölgeye hakim olduğu dönemde bukalenin isminden çoğu kez söz edilmiştir. O zamanlar İznik İmparatoru III.İonidis Kocaeliyarımadasını ve buradaki kaleleri fethetmiştir. Bu olaylara göre, Eskihisar Kalesi’nin 1241 yılında varolduğu anlaşılmaktadır. Eskihisar Kalesi ve surları üç aşamalı olarak yapılmıştır. Kalenin iç surlarıI.Manuel Komnenos (1143-1180) tarafından XII.yüzyılda; kalenin peçe duvarları İznik İmparatoruII.Ducas-Vatatzes (1222-1254) tarafından 1241’de; dış surlar ve güneydoğu köşesindeki burçPaleologoslar döneminde (1261-1453), yaklaşık 1300 yıllarında yapılmıştır.",
  "Yeşil Türbe, I. Bayezid&#39;in oğlu Mehmet Çelebi tarafından 1421 yılında yaptırılmıştır. Bursa&#39;nınsembolü hâline gelen yapı şehrin her yerinden görülebilecek bir konuma sahiptir. I.Mehmed sağlığında türbeyi yaptırmış, 40 gün sonra da ölmüştür. Türbede Çelebi Sultan Mehmet ileoğulları Şehzade Mustafa, Mahmut ve Yusuf ile kızları Selçuk Hatun, Sitti Hatun, Hafsa Hatun, AyşeHatun ve dadısı Daya Hatuna ait olmak üzere toplam 9 sanduka bulunmaktadır.",
  "14 Şubat 2004’te açılan Bursa Kent Müzesi, Bursa Büyükşehir Belediyesi tarafından kentin kültürel,tarihsel, sosyal ve ekonomik birikimini korumak, tanıtmak ve yarının kentlilerine yol göstermekamacıyla kurulmuş özel bir müzedir.Müze, 1926 yılında Mimar Ekrem Hakkı Ayverdi tarafından I. Ulusal Mimarlık Akımı Üslubunda inşaedilen Adliye ve Maliye (Defterdarlık) binalarında faaliyet göstermektedir. Bursa ile ilgili her türlübelge, eşya, kitap, görsel malzeme, ses ve görüntü kayıtlarının toplandığı Bursa Kent Müzesi,kuruluşundan günümüze hazırladığı sergiler, gerçekleştirdiği etkinlikler ve planladığı eğitimprogramları ile Türkiye’nin en nitelikli ve sevilen müzelerinden biri haline gelmiştir.",
  "Bursa&#39;nın tarih kokan sakin sokakları arasında, Yıldırım Beyazıt tarafından inşa edilen eşsiz biryapıya rastlamak mümkün, Bursa Kapalı Çarşı. Bu çarşı, mimari zarafeti ve tarihi önemiyle Bursa&#39;yagelen herkesin uğramadan gitmeyeceği bir noktadır. Orhangazi döneminde hanların aralarınınçatılarla kapatılmasıyla başlayan bir süreç sonucunda ortaya çıkan Kapalı Çarşı, zaman içinde farklıçarşıların eklenmesiyle bugünkü görünümüne kavuşmuştur.",
];

function nextSlide() {
  if (counter >= totalSlides - 1) {
    counter = 0; // Son slayta ulaşıldığında sıfıra dön
  } else {
    counter++;
  }
  updateSlidePosition();
  updateCaption();
}

function prevSlide() {
  if (counter <= 0) {
    counter = totalSlides - 1; // İlk slayta ulaşıldığında son slayta git
  } else {
    counter--;
  }
  updateSlidePosition();
  updateCaption();
}

function updateSlidePosition() {
  slides.style.transition = 'transform 0.5s ease'; // Geçişe bir geçiş efekti eklendi
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function updateCaption() {
  const currentCaption = captions[counter];
  const captionElement = document.querySelectorAll('.caption');
  captionElement.forEach((caption, index) => {
    if(index === counter) {
      caption.textContent = currentCaption;
    }
  });
}

// İlk yüklemede doğru caption'ın gösterilmesi için çağırın
updateCaption();
