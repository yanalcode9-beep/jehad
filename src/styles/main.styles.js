export function getStyles(isRTL = false) {
    const direction = isRTL ? 'rtl' : 'ltr';
    const textAlign = isRTL ? 'right' : 'left';
    const marginLeft = isRTL ? 'margin-right' : 'margin-left';
    const marginRight = isRTL ? 'margin-left' : 'margin-right';
    const borderLeft = isRTL ? 'border-right' : 'border-left';
    const left = isRTL ? 'right' : 'left';
    const right = isRTL ? 'left' : 'right';
    
    return `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: ${isRTL ? "'Tajawal', 'Cairo'," : ""} 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: radial-gradient(ellipse at top, #1a1a3e 0%, #0f1527 50%, #0a0e27 100%);
            min-height: 100vh;
            padding: 20px;
            direction: ${direction};
            overflow-x: hidden;
        }
        
        /* ============================================ */
        /* language-toggle */
        /* ============================================ */
        .language-toggle {
            position: fixed;
            top: 10px;
            ${right}: 10px;
            z-index: 1000;
            background: rgba(26, 26, 62, 0.85);
            color: white;
            border: 2px solid rgba(102, 126, 234, 0.4);
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9em;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }
        
      
        .language-toggle::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
            transition: left 0.5s ease;
        }
        
        .language-toggle:hover {
            border-color: rgba(102, 126, 234, 0.8);
            box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
            transform: translateY(-2px);
        }
        
        .language-toggle:hover::before {
            left: 100%;
        }
        
        /* ============================================ */
        /* Particles */
        /* ============================================ */
        #particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }
        
        .particle {
            position: absolute;
            border-radius: 50%;
            animation: float 20s infinite;
            filter: blur(1px);
        }
        
        .particle.glow {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            animation: float 15s infinite, pulse 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
            25% { transform: translate(150px, -120px) rotate(90deg); opacity: 0.8; }
            50% { transform: translate(-80px, 150px) rotate(180deg); opacity: 0.5; }
            75% { transform: translate(200px, 80px) rotate(270deg); opacity: 0.9; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.5); opacity: 1; }
        }
        
        .shooting-star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            animation: shoot 3s linear infinite;
        }
        
        @keyframes shoot {
            0% { transform: translate(0, 0); opacity: 1; }
            100% { transform: translate(-300px, 300px); opacity: 0; }
        }
        
        /* ============================================ */
        /* Container */
        /* ============================================ */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.98);
            border-radius: 30px;
            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            position: relative;
            z-index: 1;
        }
        
        /* ============================================ */
        /* Header */
        /* ============================================ */
        header {
            background: linear-gradient(135deg, #1a1a3e 0%, #0f1b3d 50%, #0a0e27 100%);
            color: white;
            padding: 80px 40px;
            text-align: center;
            position: relative;
        }
        
        .profile-section {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 40px;
            position: relative;
            z-index: 1;
        }
        
        /* ============================================ */
        /* profile-image */
        /* ============================================ */
        .profile-image {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            border: 8px solid #ffffff;
            
            /* border: 8px solid rgba(255, 255, 255, 0.3); */
            
            /* border: 8px solid rgba(102, 126, 234, 0.6); */
            
            
           
            box-shadow: 
                0 15px 40px rgba(255, 255, 255, 0.15),  
                0 0 25px rgba(255, 255, 255, 0.08);     
           
            
            object-fit: cover;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .profile-image:hover {
            transform: scale(1.05) rotate(1deg);
            box-shadow: 
                0 18px 50px rgba(255, 255, 255, 0.2),   
                0 0 35px rgba(255, 255, 255, 0.12);     
       
        }
        
        .profile-image:hover {
            transform: scale(1.08) rotate(2deg);
        }
        
        /* ============================================ */
        /* Typography */
        /* ============================================ */
        h1 {
            font-size: 3em;
            margin-bottom: 15px;
            font-weight: 700;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 1.3em;
            opacity: 0.95;
            font-weight: 300;
        }
        
        /* ============================================ */
        /* Content */
        /* ============================================ */
        .content { 
            padding: 60px 40px;
            text-align: ${textAlign};
        }
        
        .section {
            margin-bottom: 60px;
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .section h2 {
            color: #1a1a3e;
            font-size: 2.2em;
            margin-bottom: 30px;
            padding-bottom: 15px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
        }
        
        .section h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            ${left}: 0;
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 2px;
        }
        
        .section p {
            margin-bottom: 15px;
            font-size: 1.1em;
            color: #555;
            line-height: 1.8;
        }
        
        .highlight-box {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            padding: 30px;
            border-radius: 20px;
            margin: 30px 0;
            ${borderLeft}: 6px solid #667eea;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
        }
        
        .highlight-box:hover { 
            transform: translateX(${isRTL ? '-10px' : '10px'}); 
        }
        
        /* ============================================ */
        /* Video Section */
        /* ============================================ */
        .video-section {
            margin: 50px 0;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            background: #000;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
        }
        
        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* ============================================ */
        /* Stats Cards */
        /* ============================================ */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .stat-card {
            background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
            padding: 35px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-15px) scale(1.05);
            box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
        }
        
        .stat-number {
            font-size: 3em;
            font-weight: 900;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
            margin-bottom: 10px;
        }
        
        .stat-label {
            color: #555;
            font-size: 1em;
            font-weight: 600;
        }
        
        /* ============================================ */
        /* Expertise Grid */
        /* ============================================ */
        .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .expertise-item {
            background: linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%);
            padding: 20px 25px;
            border-radius: 15px;
            ${borderLeft}: 5px solid #764ba2;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            cursor: pointer;
        }
        
        .expertise-item:hover {
            color: white;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transform: translateX(${isRTL ? '-10px' : '10px'}) scale(1.03);
        }
        
        /* ============================================ */
        /* Links */
        /* ============================================ */
        .links {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
        }
        
        .link-button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
        }
        
        .link-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
        }
        
        /* ============================================ */
        /* Lists */
        /* ============================================ */
        ul { 
            list-style: none; 
            ${marginLeft}: 0; 
        }
        
        li {
            margin-bottom: 15px;
            color: #555;
            padding-${left}: 30px;
            position: relative;
            font-size: 1.05em;
        }
        
        li::before {
            content: '${isRTL ? '←' : '→'}';
            position: absolute;
            ${left}: 0;
            color: #667eea;
            font-weight: bold;
            font-size: 1.2em;
        }
        
        /* ============================================ */
        /* Footer */
        /* ============================================ */
        footer {
            background: linear-gradient(135deg, #1a1a3e 0%, #0a0e27 100%);
            color: white;
            text-align: center;
            padding: 40px;
        }
        
        /* ============================================ */
        /* Responsive */
        /* ============================================ */
        @media (max-width: 768px) {
            header { padding: 60px 30px; }
            h1 { font-size: 2.2em; }
            .content { padding: 40px 25px; }
            .profile-image { width: 180px; height: 180px; }
            .stats { grid-template-columns: 1fr; }
            .language-toggle {
                top: 6px;
                ${right}: 6px;
                padding: 10px 20px;
                font-size: 0.85em;
            }
        }
        
        /* ============================================ */
        /* Smooth Scroll */
        /* ============================================ */
        html { scroll-behavior: smooth; }
        
        /* ============================================ */
        /* Google Fonts */
        /* ============================================ */
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@300;400;500;700;900&display=swap');
    `;
}