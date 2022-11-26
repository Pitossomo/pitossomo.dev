class ProjectItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(this.build())
    shadow.appendChild(this.styles())
  }

  build() {
    const componentRoot = document.createElement('li')
    componentRoot.setAttribute('class', 'project-item')

    const figure = document.createElement('figure')
    
    const a = document.createElement('a')
    a.href = this.getAttribute('projectUrl') 
    
    const img = document.createElement('img')
    img.src = this.getAttribute('imgSrc')
    img.alt = this.getAttribute('alt')
    a.appendChild(img)
    
    figure.appendChild(a)
    
    const figcaption = document.createElement('figcaption')
    figcaption.innerText = this.getAttribute('figcaption')
    figure.appendChild(figcaption)
    
    componentRoot.appendChild(figure)
    
    return componentRoot
  }

  styles() {
    const link = document.createElement('link')
    link.setAttribute('href','./src/styles/ProjectItem.css')
    link.setAttribute('rel','stylesheet')
    link.setAttribute('type','text/css')
    return link 
  }
}

customElements.define('project-item', ProjectItem)