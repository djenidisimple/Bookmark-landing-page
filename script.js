const btnQuestion = document.querySelectorAll('.btn-question');
btnQuestion.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Reset all buttons and answers
        btnQuestion.forEach((b) => {
            b.style.setProperty('--current-icon', 'var(--arrow-down)');
        });
        document.querySelectorAll('.answer').forEach((ans) => { 
            ans.style.display = 'none'; 
        });
        
        // Toggle the clicked answer and icon
        if (!isVisible) {
            answer.style.display = 'block';
            btn.style.setProperty('--current-icon', 'var(--arrow-up)');
        }
    });
});