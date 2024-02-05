// Este script é opcional, mas pode ser útil para ocultar o botão em dispositivos pequenos
window.addEventListener('resize', function() {
    if (window.innerWidth <= 300) {
        document.getElementById('whatsapp-button').style.display = 'none';
    } else {
        document.getElementById('whatsapp-button').style.display = 'block';
    }
});
