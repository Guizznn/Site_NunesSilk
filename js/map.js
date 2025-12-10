// map.js
// Garante que o script só inicialize o mapa depois que a estrutura HTML (DOM)
// do elemento #nunes-silk-map estiver completamente carregada e acessível.

document.addEventListener('DOMContentLoaded', () => { 
    const mapElementId = 'nunes-silk-map';

    // 1. Verifica se o elemento do mapa existe na página
    if (document.getElementById(mapElementId)) {
        
        // Coordenadas de exemplo (Você pode ajustar estas coordenadas
        // para a localização exata da Nunes Silk)
        const nunesSilkCoords = [-15.35, -45.34]; 
        
        // 2. Inicializa o mapa com o elemento ID, visualização e nível de zoom (15)
        const map = L.map(mapElementId).setView(nunesSilkCoords, 15);

        // 3. Adiciona a camada de telhas (tiles) do CartoDB (Base OpenStreetMap)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // 4. Adiciona o marcador (pin) no centro
        L.marker(nunesSilkCoords)
            .addTo(map)
            .bindPopup('Nunes Silk Estamparia')
            .openPopup();
            
        // 5. Comando de segurança para recalcular o tamanho do mapa, caso necessário
        map.invalidateSize(); 
    }
});