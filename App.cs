:root {
  --primary-color: #6387ff;
  --secondary-color: #50E3C2; 
  --background-dark: #1F2022; 
  --text-light: #F0F2F5; 
  --card-background: #2C2D30; 
  --border-color: rgba(206, 68, 68, 0.1);
  --gradient-background: linear-gradient(135deg, #1F2022 0%, #3a3b3e 100%);
  --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  --border-radius-card: 10px;
  --transition-speed: 0.3s ease;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--gradient-background);
  color: var(--text-light);
  min-height: 100vh;
  line-height: 1.6;
}

h1, h2, h3 {
  color: var(--primary-color);
  margin-bottom: 0.8em;
}

.main-content-wrapper {
  padding: 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--text-light);
  font-weight: bold;
  cursor: pointer;
  transition: background-color var(--transition-speed), transform 0.1s ease;
}

button:hover {
  background-color: #5a52d3;
}
