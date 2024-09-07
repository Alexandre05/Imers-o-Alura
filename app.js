function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById
    ("resultados-pesquisa");
    let campoPesquisa= document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    
  
    // Inicializa uma string para armazenar os resultados formatados.
    let resultados = "";
      let titulo ="";
      let descricao="";
      let tag= "";
    // Itera sobre cada notícia no array 'noticias'.
    for (let dado of noticias) {
        titulo= dado.titulo.toLowerCase()
        descricao=dado.descricao.toLowerCase()
        tag=dado.tag.toLowerCase()
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)
            || tag.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank"> Mais Informações </a>
            </div>
          `;

        }

        if(campoPesquisa==""){
              section.innerHTML="<h2> Sem Informações!</h2>"
            return
        }
        
       // console.log(dado.titulo.includes(campoPesquisa))
      // Cria um novo elemento HTML para cada notícia e adiciona as informações.
      
    }
  
    // Atualiza o conteúdo da seção com os resultados formatados.
    section.innerHTML = resultados;
  }