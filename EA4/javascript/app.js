document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------------------------------------
    // 1. NAVEGAÇÃO SUAVE (Smooth Scrolling)
    // ------------------------------------------------------------------
    
    // Seleciona todos os links internos que começam com '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Previne o comportamento de salto padrão do navegador
            e.preventDefault();
            
            // Pega o destino do link (ex: '#solucao')
            const targetId = this.getAttribute('href');
            
            // Rola até o destino suavemente
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ------------------------------------------------------------------
    // 2. SIMULAÇÃO DE ENVIO DE DEMONSTRAÇÃO/FORMULÁRIO
    // ------------------------------------------------------------------

    // A. Função para o Botão da Hero Section ("Solicite uma Demonstração Gratuita")
    const heroBtn = document.querySelector('.hero-ctas .btn-primary');
    
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o link de fazer o jump ou ir para outra página
            
            // Simula uma ação bem-sucedida após a submissão
            alert('✅ Demonstração solicitada com sucesso! Em breve um de nossos especialistas entrará em contato.');
            
            // Opcional: Você pode forçar o scroll para o formulário de contato:
            // document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
        });
    }


    // B. Função para o Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página
            
            // Aqui você faria o envio real dos dados para um servidor (backend)
            
            // Simulação de Sucesso
            alert('📧 Mensagem enviada! Agradecemos o seu contato. Responderemos em até 24h.');
            
            // Limpa o formulário após o "envio"
            contactForm.reset();
        });
    }

});