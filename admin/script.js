document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('exerciseForm');
    const videoFileInput = document.getElementById('videoFile');
    const videoPreview = document.getElementById('videoPreview');
    const noFileChosen = document.getElementById('noFileChosen');

    videoFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);
        video.controls = true;
        videoPreview.innerHTML = '';
        videoPreview.appendChild(video);
        noFileChosen.style.display = 'none'; // Oculta o texto "Nenhum arquivo escolhido" quando um arquivo é selecionado
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const exerciseName = document.getElementById('exerciseName').value;
        const description = document.getElementById('description').value;
        const equipment = document.getElementById('equipment').value;

        const videoFile = videoFileInput.files[0];

        console.log('Nome do Exercício:', exerciseName);
        console.log('Descrição:', description);
        console.log('Equipamentos Necessários:', equipment);

        if (videoFile) {
            console.log('Arquivo de Vídeo:', videoFile);
            noFileChosen.style.display = 'none'; // Oculta o texto "Nenhum arquivo escolhido" se um arquivo for selecionado
        } else {
            noFileChosen.style.display = 'inline'; // Exibe o texto "Nenhum arquivo escolhido" se nenhum arquivo for selecionado
        }

        form.reset();
        videoPreview.innerHTML = '';
    });
});
