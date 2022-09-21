const synth = new Tone.Synth().toDestination();
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

let html = '';
for(let i = 0; i < notes.length; i++){
    let hasSharp = true;
    let note = notes[i];

    if(note == 'E' || note == 'B')
        hasSharp = false;

    html += `<div class='whitenote' onmousedown='noteDown(this)' data-note='${note + '4'}'>`;

    if(hasSharp){ 
        html += `<div class='blacknote' onmousedown='noteDown(this)' data-note='${note + '#4'}'></div>`;
    }

    html += '</div>';
}

document.getElementById('container').innerHTML = html;

function noteDown(elem){
    let note = elem.dataset.note;
    // alert(note);
    synth.triggerAttackRelease(note, '16n');
    ev.stopPropagation();
};