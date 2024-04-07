const showContent = (selectedId) => {
    const sectionIds = ["intro-content", "skills-content", "education-content", "experience-content", "certification-content"];

    sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (sectionId === selectedId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    })

    
}

