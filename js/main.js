// DOM Elementleri Seçimi
const tabItems = document.querySelectorAll('.tab-item');
const tabPanes = document.querySelectorAll('.tab-pane');

// Tab Menü İşlevselliği
tabItems.forEach(item => {
    item.addEventListener('click', function() {
        // Aktif tab'ı değiştir
        tabItems.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        
        // İlgili içeriği göster
        const tabId = this.getAttribute('data-tab');
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === tabId) {
                pane.classList.add('active');
            }
        });
    });
});

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
    // İlk tab'ı aktif olarak ayarla
    tabItems[0].classList.add('active');
    tabPanes[0].classList.add('active');
});

// Smooth Scroll için iç linkler
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Header yüksekliğini hesaba kat
                behavior: 'smooth'
            });
        }
    });
});