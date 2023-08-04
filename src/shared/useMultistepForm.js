import {useState} from "react";

export function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return 1
            return i + 1
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return 1
            return i - 1
        })
    }

    return {
        currentStepIndex,
        setCurrentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isLastStep: currentStepIndex === steps.length - 1,
        next,
        back
    }
}