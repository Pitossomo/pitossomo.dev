class ProjectItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = (
      `<li class="project-item">
        <figure>
          <a href="https://healthmoveis.com.br/cob-3136-carrinho-operacional-com-bateria/">
            <img src="assets/imgs/projects/calculadoraROI.png" alt="Health Móveis ROI Calculator" />
          </a>
          <figcaption>Cálculo de ROI para equipamentos hospitalares</figcaption>
        </figure>
      </li>
      <link href="./src/styles/ProjectItem.css" rel="stylesheet" type="text/css">
      `
    )
  }
}

customElements.define('project-item', ProjectItem)