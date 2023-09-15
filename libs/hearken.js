Hearken = class Hearken {

  constructor(args = {
    lang: "en-US",
    interim: false,
    continuous: false,
    alternatives: 1
  }) {

    this.getLang = this.getLang.bind(this);
    this.setLang = this.setLang.bind(this);

    this.getInterim = this.getInterim.bind(this);
    this.setInterim = this.setInterim.bind(this);

    this.getContinuous = this.getContinuous.bind(this);
    this.setContinuous = this.setContinuous.bind(this);

    this.getAlternatives = this.getAlternatives.bind(this);
    this.setAlternatives = this.setAlternatives.bind(this);

    this.started = this.started.bind(this);
    this.stoped = this.stoped.bind(this);

    this.audioStart = this.audioStart.bind(this);
    this.audioStop = this.audioStop.bind(this);

    this.soundStart = this.soundStart.bind(this);
    this.soundStop = this.soundStop.bind(this);

    this.speechStart = this.speechStart.bind(this);
    this.speechStop = this.speechStop.bind(this);

    this.noMatch = this.noMatch.bind(this);
    this.result = this.result.bind(this);
    this.error = this.error.bind(this);

    this.start = this.start.bind(this);
    this.abort = this.abort.bind(this);
    this.stop = this.stop.bind(this);

    if (args.lang == null) {
      args.lang = "en-US";
    }

    if (args.interim == null) {
      args.interim = false;
    }

    if (args.continuous == null) {
      args.continuous = false;
    }

    if (args.alternatives == null) {
      args.alternatives = 1;
    }

    // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent
    this.speechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

    // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
    this.speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList
    this.speechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

    this.recognition = new this.speechRecognition();

    if (this.speechGrammarList) {
      this.grammar = new this.speechGrammarList();
      this.recognition.grammars = this.grammar;
    }

    this.setLang(args.lang); // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang
    this.setInterim(args.interim); // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults
    this.setContinuous(args.continuous); // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous
    this.setAlternatives(args.alternatives); // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives

  }

  getLang() {
    return this.recognition.lang;
  }

  setLang(lang = "en-US") {
    return this.recognition.lang = String(lang);
  }

  getInterim() {
    return this.recognition.interimResults;
  }

  setInterim(interim = false) {
    return this.recognition.interimResults = Boolean(interim);
  }

  getContinuous() {
    return this.recognition.continuous;
  }

  setContinuous(continuous = false) {
    return this.recognition.continuous = Boolean(continuous);
  }

  getAlternatives() {
    return this.recognition.maxAlternatives;
  }

  setAlternatives(alternatives = 1) {
    return this.recognition.maxAlternatives = Number(alternatives);
  }

  started(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start_event
    if (typeof func === "function") {
      return this.recognition.onstart = func;
    } else {
      return this.recognition.onstart = (event) => {
        return console.log("Started", event);
      };
    }
  }

  stoped(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/end_event
    if (typeof func === "function") {
      return this.recognition.onend = func;
    } else {
      return this.recognition.onend = (event) => {
        return console.log("Stoped", event);
      };
    }
  }

  audioStart(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audiostart_event
    if (typeof func === "function") {
      return this.recognition.onaudiostart = func;
    } else {
      return this.recognition.onaudiostart = (event) => {
        return console.log("Audio Start", event);
      };
    }
  }

  audioStop(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audioend_event
    if (typeof func === "function") {
      return this.recognition.onaudioend = func;
    } else {
      return this.recognition.onaudioend = (event) => {
        return console.log("Audio Stop", event);
      };
    }
  }

  soundStart(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundstart_event
    if (typeof func === "function") {
      return this.recognition.onsoundstart = func;
    } else {
      return this.recognition.onsoundstart = (event) => {
        return console.log("Sound Start", event);
      };
    }
  }

  soundStop(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundend_event
    if (typeof func === "function") {
      return this.recognition.onsoundend = func;
    } else {
      return this.recognition.onsoundend = (event) => {
        return console.log("Sound Stop", event);
      };
    }
  }

  speechStart(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechstart_event
    if (typeof func === "function") {
      return this.recognition.onspeechstart = func;
    } else {
      return this.recognition.onspeechstart = (event) => {
        return console.log("Speech Start", event);
      };
    }
  }

  speechStop(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechend_event
    if (typeof func === "function") {
      return this.recognition.onspeechend = func;
    } else {
      return this.recognition.onspeechend = (event) => {
        return console.log("Speech Stop", event);
      };
    }
  }

  noMatch(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/nomatch_event
    if (typeof func === "function") {
      return this.recognition.onnomatch = func;
    } else {
      return this.recognition.onnomatch = (event) => {
        return console.log("No Match", event);
      };
    }
  }

  result(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event
    if (typeof func === "function") {
      return this.recognition.onresult = func;
    } else {
      return this.recognition.onresult = (event) => {
        return console.log("Result", event);
      };
    }
  }

  error(func = null) { // Help: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/error_event
    if (typeof func === "function") {
      return this.recognition.onerror = func;
    } else {
      return this.recognition.onerror = (event) => {
        return console.log("Error", event);
      };
    }
  }

  start() {
    return this.recognition.start();
  }

  abort() {
    return this.recognition.abort();
  }

  stop() {
    return this.recognition.stop();
  }

};