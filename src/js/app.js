/**
 * Historical Figure Quiz Application
 * Modern ES6+ JavaScript with Design Patterns
 * 
 * Features:
 * - Module pattern for encapsulation
 * - Observer pattern for state management
 * - Factory pattern for result generation
 * - Clean separation of concerns
 */

// ============================================
// Data Models
// ============================================

/**
 * Question data structure
 */
const QUESTIONS = [
    'Do you prefer a race to another race?',
    'Are you willing to do a sacrifice for greater things (like killing)?',
    'Do you believe in equality between all the people of a community?',
    'Do you prefer a religion to another?',
    'Do you want to increase your land ownership?',
    'Do you like to make all the people know about your culture?',
    'Do you like to make laws?',
    'Do you prefer to go the same way as your ancestors did?',
    'Do you learn from your previous mistakes?',
    'Would you do anything to make yourself happy?'
];

/**
 * Historical figures database with binary matching patterns
 */
const HISTORICAL_FIGURES = {
    '1101000000': {
        name: 'Adolf Hitler',
        description: 'German dictator who led the Nazi Party and was responsible for starting World War II in Europe and the Holocaust.',
        era: '1889-1945',
        region: 'Germany'
    },
    '1000100000': {
        name: 'Xerxes I',
        description: 'Persian King who expanded the Achaemenid Empire and is known for his invasion of Greece.',
        era: '518-465 BC',
        region: 'Persia'
    },
    '1000000000': {
        name: 'Sadegh Hedayat',
        description: 'Influential Iranian writer and translator, one of the most significant figures in modern Persian literature.',
        era: '1906-1951',
        region: 'Iran'
    },
    '0011100000': {
        name: 'Cyrus the Great',
        description: 'Founder of the Achaemenid Empire, known for his tolerance and respect for diverse cultures and religions.',
        era: '600-530 BC',
        region: 'Persia'
    },
    '0011101000': {
        name: 'Cambyses II',
        description: 'Son of Cyrus the Great who expanded the Persian Empire into Egypt.',
        era: '?-522 BC',
        region: 'Persia'
    },
    '0010010000': {
        name: 'Anthony of Rome',
        description: 'Roman general and politician who played a critical role in the transformation of Rome from republic to empire.',
        era: '83-30 BC',
        region: 'Rome'
    },
    '0010000000': {
        name: 'Louis the Pious',
        description: 'King of the Franks and Holy Roman Emperor, known for his religious devotion.',
        era: '778-840',
        region: 'Frankish Empire'
    },
    '0000001000': {
        name: 'Joseph Stalin',
        description: 'Soviet revolutionary and political leader who ruled the Soviet Union from the mid-1920s until his death.',
        era: '1878-1953',
        region: 'Soviet Union'
    },
    '0000000001': {
        name: 'Osama bin Laden',
        description: 'Saudi Arabian founder of al-Qaeda, responsible for numerous terrorist attacks including 9/11.',
        era: '1957-2011',
        region: 'Saudi Arabia'
    },
    '1111100000': {
        name: 'Julius Caesar',
        description: 'Roman general and statesman whose actions led to the end of the Roman Republic and rise of the Roman Empire.',
        era: '100-44 BC',
        region: 'Rome'
    },
    '1111111100': {
        name: 'Cleopatra VII',
        description: 'Last active ruler of the Ptolemaic Kingdom of Egypt, known for her intelligence and political acumen.',
        era: '69-30 BC',
        region: 'Egypt'
    },
    '0101100100': {
        name: 'Joan of Arc',
        description: 'French peasant girl who became a military leader and national heroine during the Hundred Years\' War.',
        era: '1412-1431',
        region: 'France'
    },
    '0000100100': {
        name: 'Leonardo da Vinci',
        description: 'Italian polymath of the Renaissance, known for his contributions to art, science, and engineering.',
        era: '1452-1519',
        region: 'Italy'
    },
    '0100101000': {
        name: 'William Shakespeare',
        description: 'English playwright and poet, widely regarded as the greatest writer in the English language.',
        era: '1564-1616',
        region: 'England'
    },
    '0100100010': {
        name: 'Amelia Earhart',
        description: 'American aviation pioneer and author, first female aviator to fly solo across the Atlantic Ocean.',
        era: '1897-1939',
        region: 'United States'
    },
    '0100100001': {
        name: 'Albert Einstein',
        description: 'German-born theoretical physicist who developed the theory of relativity, one of the pillars of modern physics.',
        era: '1879-1955',
        region: 'Germany/Switzerland/USA'
    },
    '0101000000': {
        name: 'Genghis Khan',
        description: 'Founder and first Great Khan of the Mongol Empire, which became the largest contiguous empire in history.',
        era: '1162-1227',
        region: 'Mongolia'
    },
    '1111000000': {
        name: 'Mao Zedong',
        description: 'Chinese communist revolutionary and founding father of the People\'s Republic of China.',
        era: '1893-1976',
        region: 'China'
    }
};

// ============================================
// State Management (Observer Pattern)
// ============================================

class QuizState {
    constructor() {
        this.listeners = [];
        this.state = {
            currentQuestionIndex: 0,
            answers: new Array(QUESTIONS.length).fill(null),
            isComplete: false,
            result: null
        };
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }

    getCurrentQuestionIndex() {
        return this.state.currentQuestionIndex;
    }

    setCurrentQuestionIndex(index) {
        this.state.currentQuestionIndex = Math.max(0, Math.min(index, QUESTIONS.length - 1));
        this.notify();
    }

    getAnswer(index) {
        return this.state.answers[index];
    }

    setAnswer(index, value) {
        this.state.answers[index] = value;
        this.notify();
    }

    getAllAnswers() {
        return [...this.state.answers];
    }

    getProgress() {
        const answeredCount = this.state.answers.filter(a => a !== null).length;
        return (answeredCount / QUESTIONS.length) * 100;
    }

    reset() {
        this.state = {
            currentQuestionIndex: 0,
            answers: new Array(QUESTIONS.length).fill(null),
            isComplete: false,
            result: null
        };
        this.notify();
    }
}

// ============================================
// Result Calculator (Factory Pattern)
// ============================================

class ResultCalculator {
    static calculateBinaryString(answers) {
        return answers.map(answer => answer === 'yes' ? '1' : '0').join('');
    }

    static findMatch(binaryString) {
        if (HISTORICAL_FIGURES[binaryString]) {
            return {
                found: true,
                figure: HISTORICAL_FIGURES[binaryString],
                binaryString: binaryString
            };
        }
        
        // Try to find closest match (Hamming distance)
        const closestMatch = this.findClosestMatch(binaryString);
        return {
            found: false,
            closestFigure: closestMatch.figure,
            distance: closestMatch.distance,
            binaryString: binaryString
        };
    }

    static findClosestMatch(binaryString) {
        let minDistance = Infinity;
        let closestFigure = null;

        for (const [pattern, figure] of Object.entries(HISTORICAL_FIGURES)) {
            const distance = this.calculateHammingDistance(binaryString, pattern);
            if (distance < minDistance) {
                minDistance = distance;
                closestFigure = { pattern, ...figure };
            }
        }

        return { figure: closestFigure, distance: minDistance };
    }

    static calculateHammingDistance(str1, str2) {
        if (str1.length !== str2.length) return Infinity;
        let distance = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) distance++;
        }
        return distance;
    }
}

// ============================================
// UI Controller
// ============================================

class UIController {
    constructor() {
        this.screens = {
            welcome: document.getElementById('welcome-screen'),
            quiz: document.getElementById('quiz-screen'),
            result: document.getElementById('result-screen')
        };
        
        this.elements = {
            questionText: document.getElementById('question-text'),
            questionNumber: document.getElementById('q-number'),
            currentQuestion: document.getElementById('current-question'),
            totalQuestions: document.getElementById('total-questions'),
            progressPercent: document.getElementById('progress-percent'),
            progressFill: document.getElementById('progress-fill'),
            resultContent: document.getElementById('result-content'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            submitBtn: document.getElementById('submit-btn'),
            answerButtons: document.querySelectorAll('.answer-btn')
        };

        this.init();
    }

    init() {
        this.elements.totalQuestions.textContent = QUESTIONS.length;
    }

    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        this.screens[screenName].classList.add('active');
    }

    updateQuestion(index) {
        this.elements.questionNumber.textContent = index + 1;
        this.elements.currentQuestion.textContent = index + 1;
        this.elements.questionText.textContent = QUESTIONS[index];
        
        const progress = ((index + 1) / QUESTIONS.length) * 100;
        this.elements.progressPercent.textContent = Math.round(progress);
        this.elements.progressFill.style.width = `${progress}%`;

        // Update navigation buttons
        this.elements.prevBtn.disabled = index === 0;
        
        if (index === QUESTIONS.length - 1) {
            this.elements.nextBtn.style.display = 'none';
            this.elements.submitBtn.style.display = 'inline-flex';
        } else {
            this.elements.nextBtn.style.display = 'inline-flex';
            this.elements.submitBtn.style.display = 'none';
        }

        // Update answer button states
        this.elements.answerButtons.forEach(btn => {
            btn.classList.remove('selected');
            const answerType = btn.dataset.answer;
            const currentAnswer = window.quizApp?.state?.getAnswer(index);
            
            if (currentAnswer === answerType) {
                btn.classList.add('selected');
            }
        });
    }

    displayResult(result) {
        if (!result.found && !result.closestFigure) {
            this.elements.resultContent.innerHTML = `
                <div class="no-match">
                    <p>Your unique combination of answers doesn't match any historical figure in our database.</p>
                    <p style="margin-top: 1rem; font-size: 0.9em;">You have NO PERSONALITY... or perhaps you're truly one of a kind! ✨</p>
                </div>
            `;
            return;
        }

        const figure = result.found ? result.figure : result.closestFigure;
        const matchPercentage = result.found ? 100 : Math.max(0, 100 - (result.distance * 10));

        this.elements.resultContent.innerHTML = `
            <h3 class="figure-name">${figure.name}</h3>
            <p class="figure-description">${figure.description}</p>
            <div style="margin-top: 1.5rem;">
                <span class="figure-match-score">
                    ${result.found ? '✓ Perfect Match!' : `~${Math.round(matchPercentage)}% Similar`}
                </span>
            </div>
            <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <span class="figure-match-score" style="background: rgba(236, 72, 153, 0.1); border-color: #ec4899;">
                    📅 ${figure.era}
                </span>
                <span class="figure-match-score" style="background: rgba(20, 184, 166, 0.1); border-color: #14b8a6;">
                    🌍 ${figure.region}
                </span>
            </div>
        `;
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ============================================
// Main Application (Module Pattern)
// ============================================

const QuizApp = (() => {
    let state;
    let ui;

    function init() {
        state = new QuizState();
        ui = new UIController();

        // Subscribe to state changes
        state.subscribe((newState) => {
            ui.updateQuestion(newState.currentQuestionIndex);
        });

        // Initialize event listeners
        setupEventListeners();

        // Show welcome screen
        ui.showScreen('welcome');
    }

    function setupEventListeners() {
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            ui.showScreen('quiz');
            ui.updateQuestion(state.getCurrentQuestionIndex());
        });

        // Answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const answer = e.currentTarget.dataset.answer;
                const currentIndex = state.getCurrentQuestionIndex();
                
                // Toggle selection
                const currentAnswer = state.getAnswer(currentIndex);
                if (currentAnswer === answer) {
                    state.setAnswer(currentIndex, null);
                } else {
                    state.setAnswer(currentIndex, answer);
                }
                
                ui.updateQuestion(currentIndex);
            });
        });

        // Previous button
        document.getElementById('prev-btn').addEventListener('click', () => {
            const currentIndex = state.getCurrentQuestionIndex();
            if (currentIndex > 0) {
                state.setCurrentQuestionIndex(currentIndex - 1);
            }
        });

        // Next button
        document.getElementById('next-btn').addEventListener('click', () => {
            const currentIndex = state.getCurrentQuestionIndex();
            const currentAnswer = state.getAnswer(currentIndex);
            
            if (!currentAnswer) {
                ui.showToast('Please select an answer before continuing', 'error');
                return;
            }
            
            if (currentIndex < QUESTIONS.length - 1) {
                state.setCurrentQuestionIndex(currentIndex + 1);
            }
        });

        // Submit button
        document.getElementById('submit-btn').addEventListener('click', handleSubmission);

        // Retake button
        document.getElementById('retake-btn').addEventListener('click', () => {
            state.reset();
            ui.showScreen('welcome');
        });

        // Share button
        document.getElementById('share-btn').addEventListener('click', handleShare);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('quiz-screen').classList.contains('active')) {
                return;
            }

            const currentIndex = state.getCurrentQuestionIndex();
            
            if (e.key === 'ArrowLeft' || e.key === 'h') {
                if (currentIndex > 0) {
                    state.setCurrentQuestionIndex(currentIndex - 1);
                }
            } else if (e.key === 'ArrowRight' || e.key === 'l') {
                const currentAnswer = state.getAnswer(currentIndex);
                if (currentAnswer && currentIndex < QUESTIONS.length - 1) {
                    state.setCurrentQuestionIndex(currentIndex + 1);
                } else if (!currentAnswer) {
                    ui.showToast('Please select an answer first', 'error');
                }
            } else if (e.key === '1' || e.key === 'y') {
                state.setAnswer(currentIndex, 'yes');
            } else if (e.key === '2' || e.key === 'n') {
                state.setAnswer(currentIndex, 'no');
            } else if (e.key === 'Enter') {
                const currentAnswer = state.getAnswer(currentIndex);
                if (currentAnswer && currentIndex < QUESTIONS.length - 1) {
                    state.setCurrentQuestionIndex(currentIndex + 1);
                } else if (currentIndex === QUESTIONS.length - 1 && currentAnswer) {
                    handleSubmission();
                }
            }
        });
    }

    function handleSubmission() {
        const answers = state.getAllAnswers();
        
        // Validate all questions are answered
        const unansweredIndex = answers.findIndex(a => a === null);
        if (unansweredIndex !== -1) {
            ui.showToast(`Please answer question ${unansweredIndex + 1}`, 'error');
            state.setCurrentQuestionIndex(unansweredIndex);
            return;
        }

        // Calculate result
        const binaryString = ResultCalculator.calculateBinaryString(answers);
        const result = ResultCalculator.findMatch(binaryString);
        
        state.state.result = result;
        
        // Display result
        ui.displayResult(result);
        ui.showScreen('result');
    }

    function handleShare() {
        const result = state.state.result;
        if (!result) return;

        const shareText = result.found 
            ? `I got ${result.figure.name} on the Historical Figure Quiz!`
            : `I took the Historical Figure Quiz - my results were unique!`;

        if (navigator.share) {
            navigator.share({
                title: 'Historical Figure Quiz Result',
                text: shareText,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText} ${window.location.href}`)
                .then(() => {
                    ui.showToast('Result copied to clipboard!', 'success');
                })
                .catch(() => {
                    ui.showToast('Unable to share', 'error');
                });
        }
    }

    return {
        init,
        get state() { return state; }
    };
})();

// Export for module usage
window.quizApp = QuizApp;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => QuizApp.init());
} else {
    QuizApp.init();
}
