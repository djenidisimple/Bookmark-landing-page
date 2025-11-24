// declaration variable
const btnQuestion = document.querySelectorAll('.btn-question');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const nav = document.getElementById('mobile');

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

btnOpen.addEventListener('click', () => {
    nav.classList.remove('display-none');
    document.body.classList.add('no-scroll');
});

btnClose.addEventListener('click', () => {
    nav.classList.add('display-none');
    document.body.classList.remove('no-scroll');
});