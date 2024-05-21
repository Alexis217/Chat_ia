// Función para alternar la visibilidad del cuadro de chat
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

// Función para enviar un mensaje
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatContent = document.getElementById('chatContent');
    
    if (userInput.value.trim() !== '') {
        // Crear un nuevo elemento de mensaje
        const userMessage = document.createElement('div');
        userMessage.textContent = userInput.value;
        userMessage.style.marginBottom = '10px';
        userMessage.style.padding = '10px';
        userMessage.style.backgroundColor = '#f1f1f1';
        userMessage.style.borderRadius = '5px';
        
        // Agregar el mensaje al contenido del chat
        chatContent.appendChild(userMessage);
        
        // Limpiar el input del usuario
        userInput.value = '';
        
        // Simular una respuesta después de 1 segundo
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.textContent = 'Respuesta automática';
            botMessage.style.marginBottom = '10px';
            botMessage.style.padding = '10px';
            botMessage.style.backgroundColor = '#e2e2e2';
            botMessage.style.borderRadius = '5px';
            botMessage.style.alignSelf = 'flex-start';
            
            chatContent.appendChild(botMessage);
            
            // Desplazar hacia abajo el contenido del chat
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000);
    }
}

