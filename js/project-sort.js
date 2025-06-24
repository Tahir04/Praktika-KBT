  function filterProjects(element) {
    document.querySelectorAll('.project-type').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  
    const filter = element.getAttribute('data-filter').toLowerCase().trim();
    const cards = document.querySelectorAll('.project-card');
  
    cards.forEach(card => {
      const projectNameElement = card.querySelector('.project-name');
      
      if (!projectNameElement) return;
  
      const projectName = projectNameElement.innerText.replace(/\s+/g, ' ').toLowerCase().trim();
  
      if (filter === 'all' || projectName === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

// SVG icon
document.querySelectorAll('.svg-proj-icons svg').forEach(function(icon) {
  icon.addEventListener('click', function() {
    let projectContainer = document.querySelector('.project4');
    
    if (icon.classList.contains('layout-2')) {
      projectContainer.classList.add('layout-2');
      projectContainer.classList.remove('layout-1');
    } else {
      projectContainer.classList.add('layout-1');
      projectContainer.classList.remove('layout-2');
    }
  });
});

