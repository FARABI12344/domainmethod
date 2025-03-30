document.getElementById("downloadBtn").addEventListener("click", function() {
    const imageUrl = document.getElementById("generatedImage").src;
    if (imageUrl) {
        const a = document.createElement("a");
        a.href = imageUrl;
        a.download = "generated_image.jpg";
        a.click();
    }
});

document.getElementById("shareBtn").addEventListener("click", function() {
    const imageUrl = document.getElementById("generatedImage").src;
    if (imageUrl) {
        alert(`Share this link: ${window.location.origin}/generated_image.jpg`);
    }
});

document.getElementById("promptInput").addEventListener("input", function() {
    const prompt = document.getElementById("promptInput").value;
    const imageType = document.getElementById("typeChooser").value;

    if (prompt) {
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${imageType === 'banner' ? 1920 : 500}&height=${imageType === 'banner' ? 1080 : 500}&seed=36&enhance=true&nologo=true&model=flux-pro`;
        
        document.getElementById("generatedImage").src = imageUrl;
    }
});

