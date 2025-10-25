// Birthday Data
const birthdays = {
    0: [ // January
        { name: "Jijo G", date: 9 },
        { name: "M.Abishake", date: 10 },
        { name: "Jeshwin Antony Benadictus", date: 22 }
    ],
    1: [ // February
        { name: "M. John Shalamon", date: 13 }
    ],
    2: [ // March
        { name: "Samuel Morris F", date: 12 },
        { name: "Beule sujarsa A", date: 26 }
    ],
    3: [ // April
        { name: "Archana C", date: 2 },
        { name: "Bennyhinn Sam", date: 18 },
        { name: "P. N. Nithisha", date: 21 },
        { name: "Vishal", date: 24 },
        { name: "Lethin k J", date: 24 }
    ],
    4: [ // May
        { name: "Shaniya", date: 10 },
        { name: "Andrea Betrina P", date: 10 },
        { name: "Amrutha B", date: 20 },
        { name: "Prim sajun", date: 26 },
        { name: "M.Sriharshini", date: 31 }
    ],
    5: [ // June
        { name: "Geo Nithin J", date: 3 },
        { name: "Sowmiya S", date: 22 }
    ],
    6: [ // July
        { name: "Luxica Bency G K", date: 1 },
        { name: "Anjai S", date: 2 },
        { name: "A.S.Arthi", date: 3 },
        { name: "Roshan Lal J", date: 6 },
        { name: "Maxwell Rubert", date: 10 },
        { name: "Akshaya Libin Sibcy.L", date: 18 },
        { name: "Muhilan Raj", date: 18 }
    ],
    7: [ // August
        { name: "Ajisha Vishnu", date: 3 },
        { name: "Abin I", date: 10 },
        { name: "Hamdhan Hussain", date: 17 },
        { name: "SV Aparna Suresh", date: 26 },
        { name: "Ashva Rishenth M", date: 29 }
    ],
    8: [], // September (no birthdays)
    9: [ // October
        { name: "Shailu Mirsha S", date: 3 },
        { name: "Ancy.A", date: 15 },
        { name: "A.S.Alisha", date: 18 },
        { name: "Infance Tony", date: 23 }
    ],
    10: [ // November
        { name: "Danu Peter", date: 5 },
        { name: "Mohamed Ashif M", date: 8 },
        { name: "Aadhithya M S", date: 11 },
        { name: "Michal Nithesh", date: 14 },
        { name: "Jenish.s", date: 21 },
        { name: "Moun Sando Falin A", date: 29 }
    ],
    11: [ // December
        { name: "Sriram S", date: 1 },
        { name: "R. Lifnan shijo", date: 8 },
        { name: "Anitus A", date: 11 },
        { name: "Dhanush M", date: 18 }
    ]
};

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Jan
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Feb
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Mar
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", // Apr
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", // May
    "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", // Jun
    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", // Jul
    "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)", // Aug
    "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", // Sep
    "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)", // Oct
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Nov
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"  // Dec
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderBirthdayCards();
    checkTodaysBirthdays();
    calculateNextBirthday();
    updateStats();
    setupMonthNavigation();
    addLogoAnimation();
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const symbols = ['$', '>', '#', '{', '}', '/', '*', '</>'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Render birthday cards
function renderBirthdayCards() {
    const grid = document.getElementById('birthdayGrid');
    grid.innerHTML = '';
    
    for (let month = 0; month < 12; month++) {
        if (birthdays[month] && birthdays[month].length > 0) {
            const card = createMonthCard(month);
            grid.appendChild(card);
        }
    }
}

// Create individual month card
function createMonthCard(month) {
    const card = document.createElement('div');
    card.className = 'month-card';
    card.style.animationDelay = (month * 0.1) + 's';
    card.style.background = monthColors[month];
    
    const birthList = birthdays[month];
    
    card.innerHTML = `
        <div class="month-header">
            <div class="month-name">${monthNames[month]}</div>
            <div class="birthday-count">🎂 ${birthList.length}</div>
        </div>
        <div class="toggle-icon">▼</div>
        <div class="birthday-list">
            ${birthList.map((person, index) => `
                <div class="birthday-item" style="animation-delay: ${index * 0.1}s">
                    <div class="basher-name">🎉 ${person.name}</div>
                    <div class="basher-date">${monthNames[month]} ${person.date}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
    
    return card;
}

// Check for today's birthdays
function checkTodaysBirthdays() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    
    const todaysBirthdays = birthdays[currentMonth]?.filter(person => person.date === currentDate) || [];
    
    if (todaysBirthdays.length > 0) {
        const banner = document.getElementById('todayBanner');
        const namesDiv = document.getElementById('todayNames');
        
        namesDiv.innerHTML = todaysBirthdays.map(person => person.name).join(', ');
        banner.classList.remove('hidden');
        
        createConfetti();
    }
}

// Create confetti animation
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
}

// Calculate next birthday
function calculateNextBirthday() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    
    let nextBirthday = null;
    let minDays = Infinity;
    
    // Check all months
    for (let monthOffset = 0; monthOffset <= 12; monthOffset++) {
        const checkMonth = (currentMonth + monthOffset) % 12;
        const checkYear = today.getFullYear() + Math.floor((currentMonth + monthOffset) / 12);
        
        if (birthdays[checkMonth]) {
            for (const person of birthdays[checkMonth]) {
                const birthdayDate = new Date(checkYear, checkMonth, person.date);
                
                // Skip if birthday has already passed today
                if (monthOffset === 0 && person.date < currentDate) {
                    continue;
                }
                
                const daysUntil = Math.ceil((birthdayDate - today) / (1000 * 60 * 60 * 24));
                
                if (daysUntil >= 0 && daysUntil < minDays) {
                    minDays = daysUntil;
                    nextBirthday = {
                        name: person.name,
                        days: daysUntil,
                        month: monthNames[checkMonth],
                        date: person.date
                    };
                }
            }
        }
    }
    
    const nextBirthdayElement = document.getElementById('nextBirthday');
    
    if (nextBirthday) {
        if (nextBirthday.days === 0) {
            nextBirthdayElement.innerHTML = `🎉 <strong>${nextBirthday.name}'s</strong> birthday is TODAY!`;
        } else if (nextBirthday.days === 1) {
            nextBirthdayElement.innerHTML = `Next up: <strong>${nextBirthday.name}</strong> - Tomorrow! 🎂`;
        } else {
            nextBirthdayElement.innerHTML = `Next up: <strong>${nextBirthday.name}</strong> in <strong>${nextBirthday.days} days</strong> (${nextBirthday.month} ${nextBirthday.date})`;
        }
    }
}

// Update statistics
function updateStats() {
    // Total bashers
    let total = 0;
    for (let month = 0; month < 12; month++) {
        if (birthdays[month]) {
            total += birthdays[month].length;
        }
    }
    document.getElementById('totalBashers').textContent = total;
    
    // Busiest month
    let busiestMonth = 0;
    let maxBirthdays = 0;
    
    for (let month = 0; month < 12; month++) {
        if (birthdays[month] && birthdays[month].length > maxBirthdays) {
            maxBirthdays = birthdays[month].length;
            busiestMonth = month;
        }
    }
    
    document.getElementById('busiestMonth').textContent = monthNames[busiestMonth];
}

// Setup month navigation
function setupMonthNavigation() {
    const buttons = document.querySelectorAll('.month-btn');
    const currentMonth = new Date().getMonth();
    
    // Highlight current month
    buttons[currentMonth].classList.add('active');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const month = parseInt(button.dataset.month);
            
            // Update active state
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Scroll to month card
            const cards = document.querySelectorAll('.month-card');
            let targetCard = null;
            let cardIndex = 0;
            
            for (let m = 0; m < 12; m++) {
                if (birthdays[m] && birthdays[m].length > 0) {
                    if (m === month) {
                        targetCard = cards[cardIndex];
                        break;
                    }
                    cardIndex++;
                }
            }
            
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add highlight effect
                targetCard.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.6)';
                setTimeout(() => {
                    targetCard.style.boxShadow = '';
                }, 2000);
            }
        });
    });
}

// Add logo animation on click
function addLogoAnimation() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        logo.style.animation = 'none';
        setTimeout(() => {
            logo.style.animation = 'bounce 2s infinite';
        }, 10);
        
        // Extra fun: create confetti burst
        createConfetti();
    });
}

// Easter egg: Type "bash birthday" anywhere
let typedString = '';
document.addEventListener('keypress', (e) => {
    typedString += e.key;
    if (typedString.includes('bashbirthday')) {
        createConfetti();
        typedString = '';
        
        // Show message
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: #4ade80;
            padding: 30px 50px;
            border-radius: 20px;
            font-size: 2em;
            z-index: 9999;
            animation: fadeIn 0.5s ease-out;
        `;
        message.textContent = '🎉 Easter Egg Found! 🎉';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    
    // Keep only last 20 characters
    if (typedString.length > 20) {
        typedString = typedString.slice(-20);
    }
});
