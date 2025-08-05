// Counter functionality
let counter = 0;
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');

// Color changer functionality
const colorBtn = document.getElementById('colorBtn');
const body = document.body;

// Array of gradient backgrounds
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
];

let currentGradientIndex = 0;

// Update counter display with animation
function updateCounter() {
    counterDisplay.textContent = counter;
    
    // Add a pulse animation
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

// Counter event listeners
increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
    console.log(`Counter increased to: ${counter}`);
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
    console.log(`Counter decreased to: ${counter}`);
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
    console.log('Counter reset to 0');
    
    // Add a special reset animation
    counterDisplay.style.color = '#e74c3c';
    setTimeout(() => {
        counterDisplay.style.color = '#667eea';
    }, 300);
});

// Color changer event listener
colorBtn.addEventListener('click', () => {
    currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
    body.style.background = gradients[currentGradientIndex];
    
    console.log(`Background changed to gradient ${currentGradientIndex + 1}`);
    
    // Update button text temporarily
    const originalText = colorBtn.textContent;
    colorBtn.textContent = 'Changed!';
    setTimeout(() => {
        colorBtn.textContent = originalText;
    }, 500);
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
        case '+':
            event.preventDefault();
            counter++;
            updateCounter();
            break;
        case 'ArrowDown':
        case '-':
            event.preventDefault();
            counter--;
            updateCounter();
            break;
        case 'r':
        case 'R':
            if (event.ctrlKey || event.metaKey) return; // Don't interfere with browser refresh
            counter = 0;
            updateCounter();
            break;
        case ' ':
            event.preventDefault();
            colorBtn.click();
            break;
    }
});

// Initialize the app
console.log('Web app initialized!');
console.log('Keyboard shortcuts:');
console.log('- Arrow Up/+ : Increase counter');
console.log('- Arrow Down/- : Decrease counter');
console.log('- R : Reset counter');
console.log('- Spacebar : Change background color');

// Add some interactive feedback
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});
