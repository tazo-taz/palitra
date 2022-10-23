import { useState, useCallback } from 'react';

export default function useToggle(defaultValue: boolean) {
    const [state, setState] = useState(defaultValue);
    
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle] as const
}