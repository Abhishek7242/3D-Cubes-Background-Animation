// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const numberOfShapes = 50;  

    for (let i = 0; i < numberOfShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';

        // Add faces to the shape
        ['front', 'back', 'left', 'right', 'top', 'bottom'].forEach(face => {
            const faceDiv = document.createElement('div');
            faceDiv.className = face;
            shape.appendChild(faceDiv);
        });

      
        const x = Math.random() * 100;
        const y = Math.random() * 100; 
        const z = Math.random() * 1000 - 500; 

        shape.style.left = `${x}%`;
        shape.style.top = `${y}%`;
        shape.style.transform = `translateZ(${z}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;

        scene.appendChild(shape);
    }
});
