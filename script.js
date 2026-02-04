// ============================================
// MOCK DATA - Player Database
// ============================================

const mockPlayers = [
    {
        id: 1,
        name: "Lionel Messi",
        age: 36,
        nationality: "Argentina",
        position: "FWD",
        club: "Inter Miami",
        league: "MLS",
        rating: 90,
        goals: 672,
        assists: 303,
        appearances: 778,
        marketValue: 25000000,
        achievements: ["8x Ballon d'Or", "World Cup 2022", "4x Champions League"]
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        age: 38,
        nationality: "Portugal",
        position: "FWD",
        club: "Al Nassr",
        league: "Saudi Pro League",
        rating: 88,
        goals: 850,
        assists: 250,
        appearances: 1100,
        marketValue: 15000000,
        achievements: ["5x Ballon d'Or", "5x Champions League", "Euro 2016"]
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        age: 25,
        nationality: "France",
        position: "FWD",
        club: "Real Madrid",
        league: "La Liga",
        rating: 92,
        goals: 280,
        assists: 120,
        appearances: 350,
        marketValue: 180000000,
        achievements: ["World Cup 2018", "4x Ligue 1", "Golden Boot"]
    },
    {
        id: 4,
        name: "Erling Haaland",
        age: 23,
        nationality: "Norway",
        position: "FWD",
        club: "Manchester City",
        league: "Premier League",
        rating: 91,
        goals: 220,
        assists: 45,
        appearances: 250,
        marketValue: 170000000,
        achievements: ["Premier League", "Champions League", "Golden Boot"]
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        age: 32,
        nationality: "Belgium",
        position: "MID",
        club: "Manchester City",
        league: "Premier League",
        rating: 91,
        goals: 95,
        assists: 165,
        appearances: 380,
        marketValue: 80000000,
        achievements: ["Premier League", "Champions League", "PFA Player"]
    },
    {
        id: 6,
        name: "Virgil van Dijk",
        age: 32,
        nationality: "Netherlands",
        position: "DEF",
        club: "Liverpool",
        league: "Premier League",
        rating: 89,
        goals: 25,
        assists: 12,
        appearances: 280,
        marketValue: 50000000,
        achievements: ["Premier League", "Champions League", "PFA Player"]
    },
    {
        id: 7,
        name: "Alisson Becker",
        age: 31,
        nationality: "Brazil",
        position: "GK",
        club: "Liverpool",
        league: "Premier League",
        rating: 89,
        goals: 0,
        assists: 2,
        appearances: 250,
        marketValue: 45000000,
        achievements: ["Premier League", "Champions League", "Golden Glove"]
    },
    {
        id: 8,
        name: "Robert Lewandowski",
        age: 35,
        nationality: "Poland",
        position: "FWD",
        club: "Barcelona",
        league: "La Liga",
        rating: 89,
        goals: 580,
        assists: 110,
        appearances: 750,
        marketValue: 35000000,
        achievements: ["Champions League", "8x Bundesliga", "Golden Boot"]
    },
    {
        id: 9,
        name: "Luka Modrić",
        age: 38,
        nationality: "Croatia",
        position: "MID",
        club: "Real Madrid",
        league: "La Liga",
        rating: 87,
        goals: 75,
        assists: 95,
        appearances: 520,
        marketValue: 10000000,
        achievements: ["Ballon d'Or 2018", "5x Champions League", "World Cup Final"]
    },
    {
        id: 10,
        name: "Mohamed Salah",
        age: 31,
        nationality: "Egypt",
        position: "FWD",
        club: "Liverpool",
        league: "Premier League",
        rating: 89,
        goals: 200,
        assists: 85,
        appearances: 340,
        marketValue: 70000000,
        achievements: ["Premier League", "Champions League", "3x Golden Boot"]
    },
    {
        id: 11,
        name: "Thibaut Courtois",
        age: 31,
        nationality: "Belgium",
        position: "GK",
        club: "Real Madrid",
        league: "La Liga",
        rating: 89,
        goals: 0,
        assists: 1,
        appearances: 420,
        marketValue: 50000000,
        achievements: ["Champions League", "La Liga", "Golden Glove"]
    },
    {
        id: 12,
        name: "Joshua Kimmich",
        age: 28,
        nationality: "Germany",
        position: "MID",
        club: "Bayern Munich",
        league: "Bundesliga",
        rating: 89,
        goals: 40,
        assists: 95,
        appearances: 380,
        marketValue: 75000000,
        achievements: ["Champions League", "7x Bundesliga", "World Cup"]
    }
];

// ============================================
// MOCK DATA - Teams Database
// ============================================

const mockTeams = [
    {
        id: 1,
        name: "Manchester City",
        league: "Premier League",
        country: "England",
        stadium: "Etihad Stadium",
        founded: 1880,
        titles: 9,
        squadSize: 25,
        avgAge: 26.8
    },
    {
        id: 2,
        name: "Real Madrid",
        league: "La Liga",
        country: "Spain",
        stadium: "Santiago Bernabéu",
        founded: 1902,
        titles: 35,
        squadSize: 26,
        avgAge: 27.2
    },
    {
        id: 3,
        name: "Barcelona",
        league: "La Liga",
        country: "Spain",
        stadium: "Camp Nou",
        founded: 1899,
        titles: 27,
        squadSize: 28,
        avgAge: 26.5
    },
    {
        id: 4,
        name: "Bayern Munich",
        league: "Bundesliga",
        country: "Germany",
        stadium: "Allianz Arena",
        founded: 1900,
        titles: 32,
        squadSize: 24,
        avgAge: 26.9
    },
    {
        id: 5,
        name: "Liverpool",
        league: "Premier League",
        country: "England",
        stadium: "Anfield",
        founded: 1892,
        titles: 19,
        squadSize: 27,
        avgAge: 27.1
    },
    {
        id: 6,
        name: "Paris Saint-Germain",
        league: "Ligue 1",
        country: "France",
        stadium: "Parc des Princes",
        founded: 1970,
        titles: 11,
        squadSize: 26,
        avgAge: 26.3
    }
];

// ============================================
// MOCK DATA - Quiz Questions
// ============================================

const quizQuestions = {
    general: [
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Brazil", "Germany", "Italy", "Argentina"],
            correct: 0
        },
        {
            question: "How many players are on a football team on the field?",
            options: ["9", "10", "11", "12"],
            correct: 2
        },
        {
            question: "What is the duration of a standard football match?",
            options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
            correct: 1
        },
        {
            question: "Which club has won the most UEFA Champions League titles?",
            options: ["Barcelona", "AC Milan", "Real Madrid", "Bayern Munich"],
            correct: 2
        },
        {
            question: "What color card does a referee show for a serious foul?",
            options: ["Yellow", "Red", "Green", "Blue"],
            correct: 1
        }
    ],
    worldcup: [
        {
            question: "Who won the 2022 FIFA World Cup?",
            options: ["France", "Argentina", "Brazil", "Germany"],
            correct: 1
        },
        {
            question: "How often is the FIFA World Cup held?",
            options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
            correct: 2
        },
        {
            question: "Which country hosted the 2018 World Cup?",
            options: ["Brazil", "Russia", "Qatar", "South Africa"],
            correct: 1
        },
        {
            question: "Who is the all-time top scorer in World Cup history?",
            options: ["Pelé", "Ronaldo", "Miroslav Klose", "Lionel Messi"],
            correct: 2
        },
        {
            question: "Which country won the first ever World Cup in 1930?",
            options: ["Uruguay", "Argentina", "Brazil", "Italy"],
            correct: 0
        }
    ],
    players: [
        {
            question: "Who has won the most Ballon d'Or awards?",
            options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
            correct: 1
        },
        {
            question: "Which player is known as 'CR7'?",
            options: ["Carlos Ramos", "Cristiano Ronaldo", "Clarence Regis", "Charles Roberts"],
            correct: 1
        },
        {
            question: "What position does Kylian Mbappé primarily play?",
            options: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
            correct: 3
        },
        {
            question: "Which Brazilian footballer is known as 'O Fenômeno'?",
            options: ["Ronaldinho", "Ronaldo", "Rivaldo", "Romário"],
            correct: 1
        },
        {
            question: "Who is the all-time top scorer for Argentina's national team?",
            options: ["Diego Maradona", "Gabriel Batistuta", "Sergio Agüero", "Lionel Messi"],
            correct: 3
        }
    ],
    clubs: [
        {
            question: "Which English club is known as 'The Red Devils'?",
            options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
            correct: 2
        },
        {
            question: "What is the home stadium of Barcelona?",
            options: ["Camp Nou", "Santiago Bernabéu", "San Siro", "Allianz Arena"],
            correct: 0
        },
        {
            question: "Which Italian club has won the most Serie A titles?",
            options: ["AC Milan", "Inter Milan", "Juventus", "Roma"],
            correct: 2
        },
        {
            question: "What are the colors of Bayern Munich?",
            options: ["Blue and White", "Red and White", "Red and Blue", "Black and Yellow"],
            correct: 1
        },
        {
            question: "Which club is known as 'Los Blancos'?",
            options: ["Barcelona", "Real Madrid", "Atlético Madrid", "Valencia"],
            correct: 1
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentSection = 'players';
let filteredPlayers = [...mockPlayers];
let filteredTeams = [...mockTeams];
let currentFormation = '4-4-2';
let selectedPlayers = {};
let isDarkTheme = false;

// Quiz state
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedAnswer = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderPlayers();
    renderTeams();
    initializeFormationBuilder();
    loadThemePreference();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchSection(e.target.dataset.section);
        });
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Player search and filters
    document.getElementById('playerSearch').addEventListener('input', filterPlayers);
    document.getElementById('positionFilter').addEventListener('change', filterPlayers);
    document.getElementById('leagueFilter').addEventListener('change', filterPlayers);
    document.getElementById('nationalityFilter').addEventListener('change', filterPlayers);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Team search and filter
    document.getElementById('teamSearch').addEventListener('input', filterTeams);
    document.getElementById('teamLeagueFilter').addEventListener('change', filterTeams);

    // Formation builder
    document.getElementById('formationSelect').addEventListener('change', (e) => {
        currentFormation = e.target.value;
        renderFormation();
    });
    document.getElementById('saveFormation').addEventListener('click', saveFormation);
    document.getElementById('clearFormation').addEventListener('click', clearFormation);

    // Quiz
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('restartQuiz').addEventListener('click', resetQuiz);

    // Modal close
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Close modal on outside click
    document.getElementById('playerModal').addEventListener('click', (e) => {
        if (e.target.id === 'playerModal') closeModals();
    });
    document.getElementById('teamModal').addEventListener('click', (e) => {
        if (e.target.id === 'teamModal') closeModals();
    });
}

// ============================================
// NAVIGATION
// ============================================

function switchSection(sectionId) {
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Show selected section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    currentSection = sectionId;
}

// ============================================
// THEME TOGGLE
// ============================================

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.getElementById('themeToggle').textContent = isDarkTheme ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggle').textContent = '☀️';
    }
}

// ============================================
// PLAYERS - RENDERING & FILTERING
// ============================================

function renderPlayers() {
    const grid = document.getElementById('playersGrid');
    grid.innerHTML = '';

    if (filteredPlayers.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No players found. Try adjusting your filters.</p>';
        return;
    }

    filteredPlayers.forEach(player => {
        const card = createPlayerCard(player);
        grid.appendChild(card);
    });
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
        <div class="player-card-header">
            <div>
                <div class="player-name">${player.name}</div>
                <div class="player-info">${player.age} years • ${player.nationality}</div>
            </div>
            <div class="player-rating">${player.rating}</div>
        </div>
        <div class="player-info">
            <strong>${player.position}</strong> • ${player.club}
        </div>
        <div class="player-info">${player.league}</div>
        <div class="player-stats">
            <div class="stat-item">
                <span class="stat-value">${player.goals}</span>
                <span class="stat-label">Goals</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${player.assists}</span>
                <span class="stat-label">Assists</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${player.appearances}</span>
                <span class="stat-label">Apps</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => showPlayerDetails(player));
    return card;
}

function filterPlayers() {
    const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
    const position = document.getElementById('positionFilter').value;
    const league = document.getElementById('leagueFilter').value;
    const nationality = document.getElementById('nationalityFilter').value;

    filteredPlayers = mockPlayers.filter(player => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm);
        const matchesPosition = !position || player.position === position;
        const matchesLeague = !league || player.league === league;
        const matchesNationality = !nationality || player.nationality === nationality;

        return matchesSearch && matchesPosition && matchesLeague && matchesNationality;
    });

    renderPlayers();
}

function clearFilters() {
    document.getElementById('playerSearch').value = '';
    document.getElementById('positionFilter').value = '';
    document.getElementById('leagueFilter').value = '';
    document.getElementById('nationalityFilter').value = '';
    filteredPlayers = [...mockPlayers];
    renderPlayers();
}

function showPlayerDetails(player) {
    const modal = document.getElementById('playerModal');
    const details = document.getElementById('playerDetails');

    details.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${player.name}</h2>
            <p class="modal-subtitle">${player.club} • ${player.league}</p>
        </div>
        
        <div class="modal-stats">
            <div class="modal-stat">
                <div class="modal-stat-label">Position</div>
                <div class="modal-stat-value">${player.position}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Age</div>
                <div class="modal-stat-value">${player.age}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Nationality</div>
                <div class="modal-stat-value">${player.nationality}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Rating</div>
                <div class="modal-stat-value">${player.rating}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Goals</div>
                <div class="modal-stat-value">${player.goals}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Assists</div>
                <div class="modal-stat-value">${player.assists}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Appearances</div>
                <div class="modal-stat-value">${player.appearances}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Market Value</div>
                <div class="modal-stat-value">$${(player.marketValue / 1000000).toFixed(1)}M</div>
            </div>
        </div>
        
        <div style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem;">Achievements</h3>
            <ul style="list-style: none; padding: 0;">
                ${player.achievements.map(ach => `<li style="padding: 0.25rem 0;">🏆 ${ach}</li>`).join('')}
            </ul>
        </div>
    `;

    modal.classList.add('show');
}

// ============================================
// TEAMS - RENDERING & FILTERING
// ============================================

function renderTeams() {
    const grid = document.getElementById('teamsGrid');
    grid.innerHTML = '';

    if (filteredTeams.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No teams found.</p>';
        return;
    }

    filteredTeams.forEach(team => {
        const card = createTeamCard(team);
        grid.appendChild(card);
    });
}

function createTeamCard(team) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
        <div class="team-header">
            <h3 class="team-name">${team.name}</h3>
            <p class="team-league">${team.league} • ${team.country}</p>
        </div>
        <div class="team-stats">
            <div class="stat-item">
                <span class="stat-value">${team.titles}</span>
                <span class="stat-label">Titles</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${team.squadSize}</span>
                <span class="stat-label">Squad</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">${team.avgAge}</span>
                <span class="stat-label">Avg Age</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => showTeamDetails(team));
    return card;
}

function filterTeams() {
    const searchTerm = document.getElementById('teamSearch').value.toLowerCase();
    const league = document.getElementById('teamLeagueFilter').value;

    filteredTeams = mockTeams.filter(team => {
        const matchesSearch = team.name.toLowerCase().includes(searchTerm);
        const matchesLeague = !league || team.league === league;
        return matchesSearch && matchesLeague;
    });

    renderTeams();
}

function showTeamDetails(team) {
    const modal = document.getElementById('teamModal');
    const details = document.getElementById('teamDetails');

    details.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${team.name}</h2>
            <p class="modal-subtitle">${team.league} • ${team.country}</p>
        </div>
        
        <div class="modal-stats">
            <div class="modal-stat">
                <div class="modal-stat-label">Stadium</div>
                <div class="modal-stat-value">${team.stadium}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Founded</div>
                <div class="modal-stat-value">${team.founded}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">League Titles</div>
                <div class="modal-stat-value">${team.titles}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Squad Size</div>
                <div class="modal-stat-value">${team.squadSize}</div>
            </div>
            <div class="modal-stat">
                <div class="modal-stat-label">Average Age</div>
                <div class="modal-stat-value">${team.avgAge} years</div>
            </div>
        </div>
    `;

    modal.classList.add('show');
}

// ============================================
// TEAM BUILDER
// ============================================

const formations = {
    '4-4-2': [
        { pos: 'GK', x: 50, y: 5 },
        { pos: 'DEF', x: 15, y: 25 }, { pos: 'DEF', x: 35, y: 25 },
        { pos: 'DEF', x: 65, y: 25 }, { pos: 'DEF', x: 85, y: 25 },
        { pos: 'MID', x: 15, y: 50 }, { pos: 'MID', x: 35, y: 50 },
        { pos: 'MID', x: 65, y: 50 }, { pos: 'MID', x: 85, y: 50 },
        { pos: 'FWD', x: 35, y: 80 }, { pos: 'FWD', x: 65, y: 80 }
    ],
    '4-3-3': [
        { pos: 'GK', x: 50, y: 5 },
        { pos: 'DEF', x: 15, y: 25 }, { pos: 'DEF', x: 35, y: 25 },
        { pos: 'DEF', x: 65, y: 25 }, { pos: 'DEF', x: 85, y: 25 },
        { pos: 'MID', x: 25, y: 50 }, { pos: 'MID', x: 50, y: 50 }, { pos: 'MID', x: 75, y: 50 },
        { pos: 'FWD', x: 20, y: 80 }, { pos: 'FWD', x: 50, y: 85 }, { pos: 'FWD', x: 80, y: 80 }
    ],
    '3-5-2': [
        { pos: 'GK', x: 50, y: 5 },
        { pos: 'DEF', x: 25, y: 25 }, { pos: 'DEF', x: 50, y: 25 }, { pos: 'DEF', x: 75, y: 25 },
        { pos: 'MID', x: 10, y: 50 }, { pos: 'MID', x: 30, y: 50 }, { pos: 'MID', x: 50, y: 50 },
        { pos: 'MID', x: 70, y: 50 }, { pos: 'MID', x: 90, y: 50 },
        { pos: 'FWD', x: 35, y: 80 }, { pos: 'FWD', x: 65, y: 80 }
    ],
    '4-2-3-1': [
        { pos: 'GK', x: 50, y: 5 },
        { pos: 'DEF', x: 15, y: 25 }, { pos: 'DEF', x: 35, y: 25 },
        { pos: 'DEF', x: 65, y: 25 }, { pos: 'DEF', x: 85, y: 25 },
        { pos: 'MID', x: 35, y: 45 }, { pos: 'MID', x: 65, y: 45 },
        { pos: 'MID', x: 20, y: 65 }, { pos: 'MID', x: 50, y: 65 }, { pos: 'MID', x: 80, y: 65 },
        { pos: 'FWD', x: 50, y: 85 }
    ]
};

function initializeFormationBuilder() {
    renderAvailablePlayers();
    renderFormation();
}

function renderAvailablePlayers() {
    const container = document.getElementById('availablePlayers');
    container.innerHTML = '';

    const builderPlayers = mockPlayers.slice(0, 8);
    builderPlayers.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'available-player';
        playerDiv.draggable = true;
        playerDiv.dataset.playerId = player.id;
        playerDiv.innerHTML = `
            <strong>${player.name}</strong><br>
            <small>${player.position} • ${player.rating}</small>
        `;

        playerDiv.addEventListener('dragstart', handleDragStart);
        playerDiv.addEventListener('dragend', handleDragEnd);

        container.appendChild(playerDiv);
    });
}

function renderFormation() {
    const pitch = document.getElementById('pitch');
    pitch.innerHTML = '';

    const formationData = formations[currentFormation];
    formationData.forEach((position, index) => {
        const posDiv = document.createElement('div');
        posDiv.className = 'player-position';
        posDiv.style.left = `${position.x}%`;
        posDiv.style.top = `${position.y}%`;
        posDiv.dataset.positionIndex = index;

        if (selectedPlayers[index]) {
            posDiv.textContent = selectedPlayers[index].name.split(' ').pop();
            posDiv.classList.add('occupied');
        } else {
            posDiv.textContent = position.pos;
        }

        posDiv.addEventListener('dragover', handleDragOver);
        posDiv.addEventListener('drop', handleDrop);
        posDiv.addEventListener('click', () => removePlayerFromPosition(index));

        pitch.appendChild(posDiv);
    });
}

function handleDragStart(e) {
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.currentTarget.dataset.playerId);
}

function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drop-target');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drop-target');

    const playerId = parseInt(e.dataTransfer.getData('text/plain'));
    const positionIndex = parseInt(e.currentTarget.dataset.positionIndex);
    const player = mockPlayers.find(p => p.id === playerId);

    if (player) {
        selectedPlayers[positionIndex] = player;
        renderFormation();
    }
}

function removePlayerFromPosition(index) {
    if (selectedPlayers[index]) {
        delete selectedPlayers[index];
        renderFormation();
    }
}

function saveFormation() {
    const count = Object.keys(selectedPlayers).length;
    if (count === 0) {
        alert('Please add players to your formation first!');
        return;
    }
    
    const formationData = {
        formation: currentFormation,
        players: selectedPlayers,
        savedAt: new Date().toISOString()
    };
    
    localStorage.setItem('savedFormation', JSON.stringify(formationData));
    alert(`Formation saved! You have ${count} players selected.`);
}

function clearFormation() {
    selectedPlayers = {};
    renderFormation();
}

// ============================================
// QUIZ FUNCTIONALITY
// ============================================

function startQuiz() {
    const category = document.getElementById('quizCategory').value;
    currentQuiz = [...quizQuestions[category]];
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;

    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizGame').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');

    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentQuiz.length;
    document.getElementById('currentScore').textContent = quizScore;
    document.getElementById('questionText').textContent = question.question;

    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    selectedAnswer = null;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Already answered

    selectedAnswer = answerIndex;
    const question = currentQuiz[currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');

    options.forEach((option, index) => {
        option.disabled = true;
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && answerIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    if (answerIndex === question.correct) {
        quizScore++;
        document.getElementById('currentScore').textContent = quizScore;
    }

    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quizGame').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');

    document.getElementById('finalScore').textContent = quizScore;
    document.getElementById('finalTotal').textContent = currentQuiz.length;

    const percentage = (quizScore / currentQuiz.length) * 100;
    let message = '';

    if (percentage === 100) {
        message = '🏆 Perfect Score! You\'re a football expert!';
    } else if (percentage >= 80) {
        message = '⭐ Excellent! Great knowledge!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep learning!';
    } else {
        message = '📚 Keep practicing!';
    }

    document.getElementById('scoreMessage').textContent = message;
}

function resetQuiz() {
    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('quizGame').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

// ============================================
// MODAL MANAGEMENT
// ============================================

function closeModals() {
    document.getElementById('playerModal').classList.remove('show');
    document.getElementById('teamModal').classList.remove('show');
}

// ============================================
// END OF SCRIPT
// ============================================
