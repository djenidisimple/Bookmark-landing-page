// declaration variable
const btnQuestion = document.querySelectorAll('.btn-question');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const nav = document.getElementById('mobile');
const btnLinks = document.querySelectorAll('.btn-link');

btnQuestion.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Reset all buttons and answers
        btnQuestion.forEach((b) => {
            b.style.setProperty('--current-icon', 'var(--arrow-down)');
        });
        
        btn.classList.toggle('active', !isVisible);

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

btnLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all links
        btnLinks.forEach((l) => l.classList.remove('btn-active'));
        // Add active class to the clicked link
        link.classList.add('btn-active');
        
        // Hide all content containers
        document.querySelectorAll('.two-container').forEach((container) => {
            container.classList.add('display-none');
        });
        // Show the corresponding content container
        document.querySelectorAll('.two-container')[index].classList.remove('display-none');
    })
});