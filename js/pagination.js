// Function to get the filename without the extension
function getFileNameWithoutExtension() {
  // Get the pathname of the current URL
  const pathname = window.location.pathname;

  // Extract the filename from the pathname
  const filenameWithExtension = pathname.split('/').pop();

  // Split the filename by the period (.) to separate the filename and extension
  const parts = filenameWithExtension.split('.');

  // Take the first part of the resulting array, which represents the filename without the extension
  const filenameWithoutExtension = parts.slice(0, -1).join('.');

  // Return the filename without the extension
  return filenameWithoutExtension;
}

// Example usage
const fileNameWithoutExtension = getFileNameWithoutExtension();
console.log(fileNameWithoutExtension.slice(-1)); // Output: the filename without the extension
// selecting required element
        const element = document.querySelector(".pagination ul");
        let totalPages = 6;
        let page = parseInt(fileNameWithoutExtension.slice(-1));

        //calling function with passing parameters and adding inside element which is ul tag
        element.innerHTML = createPagination(totalPages, page);
        // Function to create pagination
        function createPagination(totalPages) {
            let liTag = '';
            let active;

            // Check if the screen size is less than or equal to 450px
            const isSmallScreen = window.innerWidth <= 450;

            // PREV BUTTON
            if (page > 1) {
                liTag += `<a href="project${page - 1}.html"><li class="btn prev" onclick="prevPage()"><span><i class="fas fa-angle-left"></i></span></li></a>`;
            }

            // Display page numbers based on screen size
            if (isSmallScreen) {
                // Display page - 1
                active = page === (page - 1) ? "active" : "";
                liTag += `<a href="project${page - 1}.html"><li class="numb ${active}" onclick="goToPage(${page - 1})"><span>${page - 1}</span></li></a>`;



                // Display current page 
                active = page === page ? "active" : "";
                liTag += `<a href="project${page}.html"><li class="numb ${active}" onclick="goToPage(${page})"><span>${page}</span></li></a>`;

                // Display dots after page 1
                // liTag += `<li class="dots"><span>...</span></li>`;

                // Display page + 1 
                active = page === (page + 1) ? "active" : "";
                liTag += `<a href="project${page + 1}.html"><li class="numb ${active}" onclick="goToPage(${page + 1})"><span>${page + 1}</span></li></a>`;
            } else {
                // Display all pages
                for (let i = 1; i <= totalPages; i++) {
                    active = page === i ? "active" : "";
                    liTag += `<a href="project${i}.html"><li class="numb ${active}" onclick="goToPage(${i})"><span>${i}</span></li></a>`;
                }
            }

            // NEXT BUTTON
            if (page < totalPages) {
                liTag += `<a href="project${page + 1}.html"><li class="btn next" onclick="nextPage()"><span><i class="fas fa-angle-right"></i></span></li></a>`;
            }

            element.innerHTML = liTag;
            return liTag;
        }

        // Function to go to previous page
        function prevPage() {
            if (page > 1) {
                page--;
                createPagination(totalPages);
            }
        }

        // Function to go to next page
        function nextPage() {
            if (page < totalPages) {
                page++;
                createPagination(totalPages);
            }
        }

        // Function to go to specific page
        function goToPage(p) {
            page = p;
            createPagination(totalPages);
        }

        // Initial call to create pagination
        createPagination(totalPages);

        // Event listener for window resize
        window.addEventListener('resize', function () {
            // Call createPagination function on window resize
            createPagination(totalPages);
        });
