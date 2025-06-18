// Configuração dos links de pagamento
// IMPORTANTE: Substitua os links abaixo pelos seus links de pagamento reais
const PAYMENT_LINKS = {
    primary: 'https://pay.hotmart.com/SEU-LINK-AQUI', // Link do botão principal
    secondary: 'https://pay.hotmart.com/SEU-LINK-PROVA-AQUI' // Link do botão secundário
};

// Função para redirecionar para pagamento
function redirectToPayment(buttonType) {
    const link = PAYMENT_LINKS[buttonType];
    
    // Verifica se o link foi configurado
    if (link.includes('SEU-LINK-AQUI') || link.includes('SEU-LINK-PROVA-AQUI')) {
        alert('⚠️ ATENÇÃO: Configure seus links de pagamento no arquivo script.js antes de usar os botões!');
        return;
    }
    
    // Abre o link em uma nova aba
    window.open(link, '_blank');
    
    // Opcional: Rastrear cliques (descomente se usar Google Analytics)
    // gtag('event', 'click', {
    //     event_category: 'button',
    //     event_label: buttonType,
    //     value: 1
    // });
}

// Animações e efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada dos elementos
    const animateElements = document.querySelectorAll('.method-badge, .main-title, .description, .stats, .buttons, .image-container');
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Efeito de pulsação no badge "100% com IA"
    const badge = document.querySelector('.badge');
    if (badge) {
        setInterval(() => {
            badge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Efeito de brilho no botão principal
    const primaryButton = document.querySelector('.btn-primary');
    if (primaryButton) {
        setInterval(() => {
            primaryButton.style.boxShadow = '0 0 40px rgba(0, 255, 127, 0.8)';
            setTimeout(() => {
                primaryButton.style.boxShadow = '0 0 30px rgba(0, 255, 127, 0.4)';
            }, 1000);
        }, 4000);
    }
    
    // Animação da silhueta do personagem
    const silhouette = document.querySelector('.character-silhouette');
    if (silhouette) {
        let rotation = 0;
        setInterval(() => {
            rotation += 1;
            silhouette.style.transform = `rotate(${Math.sin(rotation * 0.1) * 2}deg)`;
        }, 100);
    }
});

// Função para rastrear eventos (opcional - para Google Analytics)
function trackEvent(action, category, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Detectar quando o usuário está prestes a sair da página
let exitIntentShown = false;
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !exitIntentShown) {
        exitIntentShown = true;
        // Aqui você pode mostrar um popup de saída ou oferta especial
        // Por exemplo: mostrar um desconto de última hora
        console.log('Exit intent detected - você pode adicionar um popup aqui');
    }
});

// Função para copiar link da página (útil para compartilhamento)
function copyPageLink() {
    navigator.clipboard.writeText(window.location.href).then(function() {
        alert('Link copiado para a área de transferência!');
    });
}

// Adicionar evento de scroll para efeitos visuais
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.image-content');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Prevenção de clique direito (opcional - para proteger conteúdo)
// Descomente as linhas abaixo se quiser desabilitar o clique direito
/*
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});
*/

