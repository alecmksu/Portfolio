// Target external links to open in a new tab
document.querySelectorAll('a').forEach(link => {
    if (link.href && !link.href.startsWith('#')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});