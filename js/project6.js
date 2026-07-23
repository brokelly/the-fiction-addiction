function submitBlogPost() {
    // Get user input values
    let title = document.getElementById('blogTitle').value;
    let author = document.getElementById('blogAuthor').value;
    let content = document.getElementById('blogContent').value;

    // Validate that all fields are filled
    if (title.trim() === "" || author.trim() === "" || content.trim() === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Display the blog post in the preview section
    document.getElementById('blogDisplay').innerHTML = `
        <h2>${title}</h2>
        <h4>by ${author}</h4>
        <p>${content}</p>
    `;
}
function showContent(sectionId) {
         // Hide all content sections
         var sections = document.querySelectorAll('.content-section');
         sections.forEach(function(section) {
             section.classList.remove('active');
         });

         // Show the selected section
         document.getElementById(sectionId).classList.add('active');
     }
     // Open the modal
           function openModal() {
               document.getElementById("popupModal").style.display = "flex";
           }

           // Close the modal
           function closeModal() {
               document.getElementById("popupModal").style.display = "none";
           }

           // Close modal if user clicks outside the content box
           window.onclick = function(event) {
               let modal = document.getElementById("popupModal");
               if (event.target === modal) {
                   modal.style.display = "none";
               }
           }
