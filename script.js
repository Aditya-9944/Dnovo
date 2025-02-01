document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('#banner');
    const resetBtn = document.querySelector('.reset');

    document.querySelectorAll('.switch-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionName = this.textContent.toLowerCase().trim();
            switchBanner(sectionName);
        });

        button.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const sectionName = this.textContent.toLowerCase().trim();
                switchBanner(sectionName);
            }
        });
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', resetBanner);
    }

    function toggleResetBtn(show = true) {
        if (resetBtn) resetBtn.classList.toggle('active', show);
    }

    function switchBanner(sectionName) {
        if (!banner || !['women', 'men', 'special'].includes(sectionName)) {
            console.error(`Invalid section: ${sectionName}`);
            return;
        }

        banner.classList.remove('left', 'middle', 'right');
        banner.classList.add(sectionName === 'women' ? 'left' :
                             sectionName === 'men' ? 'middle' : 'right');
        toggleResetBtn(true);
    }

    function resetBanner() {
        if (!banner) return;
        banner.classList.remove('left', 'middle', 'right');
        toggleResetBtn(false);
    }
});
