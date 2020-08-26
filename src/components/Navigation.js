const Navigation = () => {
    const template = `
    <nav class="nav-container">
        <ul class="nav-list">
            <li class="nav-list__item">about me</li>
            <li class="nav-list__item">projects</li>
            <li class="nav-list__item">technology</li>
            <li class="nav-list__item">contact</li>
        </ul>
        <div class="nav-list__underline"></div>
        <div class="nav-list__clipcover"></div>
    </nav>
    `
    return template;
}

export default Navigation;