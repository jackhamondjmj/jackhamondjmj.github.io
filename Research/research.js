const toggleElements = document.querySelectorAll('.research-category');

        toggleElements.forEach(element => {
            element.addEventListener('click', function() {
                const subCategory = document.getElementById(element.id + 'Subcategories');
                subCategory.style.display = (subCategory.style.display === 'none' || subCategory.style.display === '') ? 'block' : 'none';
                element.classList.toggle('open');
            });

            // Open the dropdown by default
            const subCategory = document.getElementById(element.id + 'Subcategories');
            if (subCategory) {
                subCategory.style.display = 'block';  // Ensure it is open by default
                element.classList.add('open');  // Add the open indicator
            }
        });
