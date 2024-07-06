const encryptValues = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

function hidden() {
    document.getElementById('hidden-card').style.display = 'none';
    document.getElementById('hidden-messege').style.display = 'flex';
}
function visible() {
    document.getElementById('hidden-card').style.display = 'flex';
    document.getElementById('hidden-messege').style.display = 'none';
}

function encrypt() {
    const text = document.getElementById('textArea').value;
    if (text) {
        const encrypting = /[aeiou]/gi;
        hidden();
        return document.querySelector('#encrypted').textContent = text.replace(encrypting, encrypt => encryptValues[encrypt.toLowerCase()] || encrypt);
    }
    alert('Type something')
}

function decrypt() {
    const text = document.getElementById('textArea').value;
    if (text) {
        hidden();
        const decrypting = {};
        for (let [vowel, encrypt] of Object.entries(encryptValues)) {
            decrypting[encrypt] = vowel;
        }
        const regex = new RegExp(Object.keys(decrypting).join('|'), 'gi');
        return document.querySelector('#encrypted').textContent = text.replace(regex, encrypting => decrypting[encrypting.toLowerCase()] || encrypting);
    }
    alert('Type something')
}

function copy() {
    const text = document.querySelector('#encrypted').innerText;
    navigator.clipboard.writeText(text);
    document.querySelector('#encrypted').innerText = '';
    document.getElementById('textArea').value = ''
    visible();
    alert('Copied to your clipboard')

}