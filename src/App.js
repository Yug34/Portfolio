import './App.css';
import React, {useState, useEffect} from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

function App() {
    let [vantaRef] = useState(React.createRef());

    useEffect(() => {
        // shininess: 57.00,
        let vantaEffect = WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 2.0,
            waveHeight: 11.50,
            waveSpeed: 0.70,
            scaleMobile: 1.00,
            zoom: 1.32,
            color: 0x0
        });
    }, [vantaRef])

    return (
        <div className="App">
            <div className="App-header" ref={vantaRef}>
            </div>
        </div>
    );
}

export default App;