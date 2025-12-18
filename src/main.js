import * as Tone from 'tone';

document.querySelector('#app').innerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #1a1a2e; color: #e94560; font-family: monospace;">
    <h1>Audio Processor</h1>
    
    <div style="margin: 20px; padding: 20px; border: 2px solid #e94560; border-radius: 10px;">
      <label>Distortion (Grit)</label><br/>
      <input type="range" id="distortion-dist" min="0" max="1" step="0.01" value="0">
    </div>

    <div style="margin: 20px; padding: 20px; border: 2px solid #e94560; border-radius: 10px;">
      <label>Delay (Echo)</label><br/>
      <input type="range" id="delay-wet" min="0" max="1" step="0.01" value="0">
    </div>

    <button id="start-stop" style="padding: 15px 30px; background: #e94560; color: white; border: none; cursor: pointer; font-weight: bold;">START AUDIO</button>
  </div>
`;

// 1. Create the Effects
const dist = new Tone.Distortion(0).toDestination();
const delay = new Tone.FeedbackDelay("8n", 0.5).connect(dist);

// 2. Create the Synth and connect it to the START of the chain
const synth = new Tone.MonoSynth({
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.1 }
}).connect(delay);

// 3. Slider Listeners
document.getElementById('distortion-dist').addEventListener('input', (e) => {
  dist.distortion = parseFloat(e.target.value);
});

document.getElementById('delay-wet').addEventListener('input', (e) => {
  // 'wet' controls the mix (0 = no echo, 1 = only echo)
  delay.wet.value = parseFloat(e.target.value);
});

// 4. Music Logic (A simple repeating bassline)
const notes = ["E2", "E2", "G2", "A2"];
let index = 0;

Tone.getTransport().scheduleRepeat((time) => {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, "16n", time);
  index++;
}, "8n");

// 5. Start/Stop
document.getElementById('start-stop').addEventListener('click', async () => {
  if (Tone.getTransport().state === 'started') {
    Tone.getTransport().stop();
  } else {
    await Tone.start();
    Tone.getTransport().start();
  }
});