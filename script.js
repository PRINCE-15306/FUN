document.addEventListener('copy', function(e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', 'You have been pranked! This is the new copied text.');
});
