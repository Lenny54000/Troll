// scripts.js

document.getElementById('downloadText').addEventListener('click', () => {
    const text = "Félicitations ! Vous avez été Rickrollé !\n\nCliquez sur le lien ci-dessous pour écouter une chanson très spéciale :\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rickroll.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

document.getElementById('downloadImage').addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#496D89';
    ctx.fillRect(0, 0, 200, 100);
    ctx.fillStyle = '#FFFF00';
    ctx.font = '20px Arial';
    ctx.fillText('Vous avez été trollé!', 10, 50);

    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'troll_image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});

document.getElementById('downloadAudio').addEventListener('click', () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
    const blob = new Blob([buffer], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'silent_audio.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
