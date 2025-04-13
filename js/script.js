const agentes = [
    {
      nome: 'PHOENIX',
      funcao: 'DUELISTA',
      imagem: 'https://static.wikia.nocookie.net/valorant/images/9/9a/Phoenix_artwork.png',
      descricao: 'Phoenix usa o poder do fogo para combater seus inimigos e se curar com suas próprias chamas.',
      habilidades: [
        'https://static.wikia.nocookie.net/valorant/images/f/f0/Hot_Hands.png',
        'https://static.wikia.nocookie.net/valorant/images/b/b3/Curveball.png',
        'https://static.wikia.nocookie.net/valorant/images/d/dc/Blaze.png',
        'https://static.wikia.nocookie.net/valorant/images/4/40/Run_it_Back.png',
      ]
    },
    {
      nome: 'JETT',
      funcao: 'DUELISTA',
      imagem: 'https://static.wikia.nocookie.net/valorant/images/7/74/Jett_artwork.png',
      descricao: 'Ágil e letal, Jett usa sua mobilidade para confundir e eliminar os inimigos com velocidade.',
      habilidades: [
        'https://static.wikia.nocookie.net/valorant/images/8/80/Cloudburst.png',
        'https://static.wikia.nocookie.net/valorant/images/d/d6/Updraft.png',
        'https://static.wikia.nocookie.net/valorant/images/f/f1/Tailwind.png',
        'https://static.wikia.nocookie.net/valorant/images/5/51/Blade_Storm.png',
      ]
    },
    {
      nome: 'NEON',
      funcao: 'DUELISTA',
      imagem: 'https://static.wikia.nocookie.net/valorant/images/f/fb/Neon_artwork.png',
      descricao: 'Neon avança com velocidade e solta rajadas elétricas devastadoras, derrotando inimigos como um raio.',
      habilidades: [
        'https://static.wikia.nocookie.net/valorant/images/b/b1/High_Gear.png',
        'https://static.wikia.nocookie.net/valorant/images/e/e0/Fast_Lane.png',
        'https://static.wikia.nocookie.net/valorant/images/3/3d/Relay_Bolt.png',
        'https://static.wikia.nocookie.net/valorant/images/f/f5/Overdrive.png',
      ]
    },
    {
      nome: 'RAZE',
      funcao: 'DUELISTA',
      imagem: 'https://static.wikia.nocookie.net/valorant/images/f/f0/Raze_artwork.png',
      descricao: 'Raze entra com tudo e faz barulho com seus explosivos para eliminar o inimigo com pura força.',
      habilidades: [
        'https://static.wikia.nocookie.net/valorant/images/d/d8/Blast_Pack.png',
        'https://static.wikia.nocookie.net/valorant/images/3/32/Paint_Shells.png',
        'https://static.wikia.nocookie.net/valorant/images/1/1e/Boom_Bot.png',
        'https://static.wikia.nocookie.net/valorant/images/1/18/Showstopper.png',
      ]
    },
    {
      nome: 'SOVA',
      funcao: 'INICIADOR',
      imagem: 'https://static.wikia.nocookie.net/valorant/images/0/01/Sova_artwork.png',
      descricao: 'Sova rastreia, revela e elimina inimigos à distância com precisão e informação.',
      habilidades: [
        'https://static.wikia.nocookie.net/valorant/images/f/f2/Shock_Bolt.png',
        'https://static.wikia.nocookie.net/valorant/images/0/01/Owl_Drone.png',
        'https://static.wikia.nocookie.net/valorant/images/c/c1/Recon_Bolt.png',
        'https://static.wikia.nocookie.net/valorant/images/d/d9/Hunter%27s_Fury.png',
      ]
    },
  ];
  
  function selecionarAgente(index) {
    const agente = agentes[index];
    document.getElementById('nomeAgente').innerText = agente.nome;
    document.getElementById('funcaoAgente').innerText = agente.funcao;
    document.getElementById('imagemPrincipal').src = agente.imagem;
    document.getElementById('descricaoAgente').innerText = agente.descricao;
  
    const habilidadesDiv = document.querySelector('.habilidades');
    habilidadesDiv.innerHTML = '';
    agente.habilidades.forEach(hab => {
      const img = document.createElement('img');
      img.src = hab;
      habilidadesDiv.appendChild(img);
    });
  }
  
