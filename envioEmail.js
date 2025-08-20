emailjs.init('EBurtjJE28BwlZQUj');

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    emailjs.send("service_raqyx1m", "template_0ptcqad", {
        name: name,
        email: email,
        message: message
    })
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Erro ao enviar a mensagem:", error);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
        });
});