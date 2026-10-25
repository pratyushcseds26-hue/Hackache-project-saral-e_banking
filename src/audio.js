// Indian Number Words Converter & Audio Helpers
(function(root) {
  function inrToWordsEn(paise) {
    const rupees = Math.floor(paise / 100);
    if (rupees === 0) return "zero rupees";
    
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    function numToWords(n) {
      if (n === 0) return "";
      if (n < 20) return ones[n] + " ";
      if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10] + " ";
      return ones[Math.floor(n / 100)] + " hundred " + numToWords(n % 100);
    }

    let n = rupees;
    let res = "";

    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const remainder = n;

    if (crore > 0) res += numToWords(crore) + "crore ";
    if (lakh > 0) res += numToWords(lakh) + "lakh ";
    if (thousand > 0) res += numToWords(thousand) + "thousand ";
    if (remainder > 0) res += numToWords(remainder);

    return res.trim() + " rupees";
  }

  function inrToWordsHi(paise) {
    const rupees = Math.floor(paise / 100);
    if (rupees === 0) return "शून्य रुपये";

    let n = rupees;
    let parts = [];

    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const hundred = Math.floor(n / 100);
    const rem = n % 100;

    if (crore > 0) parts.push(crore + " करोड़");
    if (lakh > 0) parts.push(lakh + " लाख");
    if (thousand > 0) parts.push(thousand + " हज़ार");
    if (hundred > 0) parts.push(hundred + " सौ");
    if (rem > 0) parts.push(rem.toString());

    return parts.join(" ") + " रुपये";
  }

  function inrToWordsTa(paise) {
    const rupees = Math.floor(paise / 100);
    if (rupees === 0) return "பூஜ்ஜியம் ரூபாய்";

    const ones = ["", "ஒன்று", "இரண்டு", "மூன்று", "நான்கு", "ஐந்து", "ஆறு", "ஏழு", "எட்டு", "ஒன்பது",
      "பத்து", "பதினொன்று", "பன்னிரண்டு", "பதின்மூன்று", "பதினான்கு", "பதினைந்து", "பதினாறு", "பதினேழு", "பதினெட்டு", "பத்தொன்பது"];
    const tens = ["", "", "இருபது", "முப்பது", "நாற்பது", "ஐம்பது", "அறுபது", "எழுபது", "எண்பது", "தொண்ணூறு"];
    const tensPrefix = ["", "", "இருபத்து ", "முப்பத்து ", "நாற்பத்து ", "ஐம்பத்து ", "அறுபத்து ", "எழுபத்து ", "எண்பத்து ", "தொண்ணூற்று "];

    function numUnderHundred(n) {
      if (n === 0) return "";
      if (n < 20) return ones[n];
      const t = Math.floor(n / 10);
      const rem = n % 10;
      if (rem === 0) return tens[t];
      return tensPrefix[t] + ones[rem];
    }

    function unitWord(n) {
      if (n === 1) return "ஒரு";
      return numUnderHundred(n);
    }

    let n = rupees;
    let parts = [];

    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const hundred = Math.floor(n / 100);
    const rem = n % 100;

    if (crore > 0) parts.push(unitWord(crore) + " கோடி");
    if (lakh > 0) parts.push(unitWord(lakh) + " லட்சம்");
    if (thousand > 0) parts.push(unitWord(thousand) + " ஆயிரம்");
    if (hundred > 0) parts.push(hundred === 1 ? "நூறு" : unitWord(hundred) + " நூறு");
    if (rem > 0) parts.push(numUnderHundred(rem));

    return parts.join(" ") + " ரூபாய்";
  }

  // Web Audio chime generator for pleasant audible confirmation
  function playSound(type) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
      } else if (type === 'alert') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(370, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.45);
      }
    } catch(e) {}
  }

  root.SaralAudio = {
    inrToWordsEn,
    inrToWordsHi,
    inrToWordsTa,
    playSound
  };
})(typeof self !== 'undefined' ? self : this);
