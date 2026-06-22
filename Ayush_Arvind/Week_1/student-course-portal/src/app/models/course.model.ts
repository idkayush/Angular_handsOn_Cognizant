export interface Course { id: number; name: string; code: string; credits: number | null; gradeStatus: 'passed' | 'failed' | 'pending'; }
export type NewCourse = Omit<Course, 'id'>;
