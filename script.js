// Validazione e invio WhatsApp
function sendWhatsApp() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
        alert('Per favore, compila tutti i campi!');
        return;
    }

    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
        alert('Per favore, inserisci un numero di telefono valido!');
        return;
    }

    const fullMessage = `Ciao, sono ${name}.\n${message}\n\nMio telefono: ${phone}`;
    const whatsappUrl = `https://wa.me/393473968952?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Validazione e invio Email
function sendEmail() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
        alert('Per favore, compila tutti i campi!');
        return;
    }

    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
        alert('Per favore, inserisci un numero di telefono valido!');
        return;
    }

    const subject = 'Richiesta da sito web F&F Tuttofare';
    const body = `Nome: ${name}\nTelefono: ${phone}\n\nMessaggio:\n${message}`;
    const emailUrl = `mailto:tobia.fontana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
}

// Pulisci form dopo invio
function resetForm() {
    document.getElementById('contactForm').reset();
}

// Aggiungi classe 'active' al link del navbar in base allo scroll
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});