const btn = document.getElementById('notClick')

btn.addEventListener('click', () => {
    const name = window.prompt('Qual seu nome?');
    if (name) {
        const confirmacao = window.confirm('Deseja continuar?');
        if (confirmacao) {
            window.alert('Continuando')
        } else {
            window.alert('Operação cancelada')
        }
    } else {
        window.alert('ERROR')
    }
})