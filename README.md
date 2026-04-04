# Character-Select
# Character-Select
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Workflow Test</title>
    <style>
        body { height: 100vh; display: flex; justify-content: center; align-items: center; background: #1a1a1a; }
        button { 
            padding: 20px 40px; font-size: 24px; cursor: pointer;
            background: #003399; color: white; border: none; border-radius: 8px;
            transition: transform 0.2s;
        }
        button:active { transform: scale(0.95); }
    </style>
</head>
<body>

    <button id="test-button">Vibe Check Test</button>

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
    
    <script>
        const btn = document.getElementById('test-button');
        btn.addEventListener('click', () => {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#003399', '#ffffff', '#001B3A'] // Your car colors!
            });
        });
    </script>
</body>
</html>