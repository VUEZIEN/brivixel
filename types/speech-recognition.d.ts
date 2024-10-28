// global.d.ts

interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof SpeechRecognition; // For Safari support
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList; // Add results to the interface
}

// Optional: You can add more detailed types if needed
interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  transcript: string;
}
