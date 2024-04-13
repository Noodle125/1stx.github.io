const uploadForm = document.getElementById("upload-form");
const fileInput = document.getElementById("file-input");

uploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const files = fileInput.files;
    const formData = new FormData();
    
    for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
    }

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            console.log("Files uploaded successfully!");
        } else {
            console.error("File upload failed:", response.statusText);
        }
    } catch (error) {
        console.error("An error occurred during file upload:", error);
    }
});
