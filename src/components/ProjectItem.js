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
    a.setAttribute('href', 'https://healthmoveis.com.br/cob-3136-carrinho-operacional-com-bateria') 
    
    const img = document.createElement('img')
    img.setAttribute('src', 'assets/imgs/projects/calculadoraROI.png')
    img.setAttribute('alt', 'Health Móveis ROI Calculator')
    a.appendChild(img)
    
    figure.appendChild(a)
    
    const figcaption = document.createElement('figcaption')
    figcaption.innerText = 'Cálculo de ROI para equipamentos hospitalares'
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