const buttons = document.querySelectorAll('.dropdown-toggle');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const subCategory = document.getElementById(button.id.replace('Button', 'Subcategories'));
                subCategory.style.display = (subCategory.style.display === 'none' || subCategory.style.display === '') ? 'block' : 'none';
                button.classList.toggle('open');
            });

            // Open the dropdown by default
            const subCategory = document.getElementById(button.id.replace('Button', 'Subcategories'));
            if (subCategory) {
                subCategory.style.display = 'block';  // Ensure it is open by default
                button.classList.add('open');  // Add the open indicator
            }
        });
