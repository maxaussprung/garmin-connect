// API TYPES

interface IActivityExerciseSet {
    activityId: number;
    exerciseSets: IExerciseSet[];
}

interface IExerciseSet {
    exercises: IExercise[];
    duration: number;
    repetitionCount: number | null;
    weight: number | null;
    setType: 'REST' | 'ACTIVE';
    startTime: string | null;
    wktStepIndex: number | null;
    messageIndex: number | null;
}

interface IExercise {
    category: string;
    name: string;
    probability: number;
}
