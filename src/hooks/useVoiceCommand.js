import { useEffect } from 'react';

export default function useVoiceCommand(onCommand) {
  useEffect(() => {
    // Simple placeholder for voice commands
    // TODO: Add actual speech recognition later
    console.log('Voice command hook ready');
    
    // For now, just set up a keyboard shortcut as a demo
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'Enter') {
        if (onCommand) {
          onCommand('Voice command triggered!');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCommand]);
}
