import type { Dayjs } from 'dayjs';

export enum StepType {
  Multiple = 'multiple',
  Single = 'single',
}

export interface SingleStepFormEntity {
  address?: string;
  city?: string;
  country?: string;
  email: string;
  fullName: string;
  major?: string;
  phoneNumber: string;
  state?: string;
  zip?: string;
}

export interface MultipleFormFirstStepEntity {
  address?: string;
  city?: string;
  dateOfBirth?: Dayjs;
  email: string;
  fullName: string;
  phoneNumber: string;
}

export interface MultipleFormSecondStepEntity {
  companyName: string;
  currentJobTitle: string;
  previousCompanyName?: string;
  previousJobTitle?: string;
  yearsOfExperience: number;
  yearsOfExperienceInPreviousJob?: number;
}

export interface MultipleFormThirdStepEntity {
  gpa: number;
  graduationDate: Dayjs;
  highestEducationLevel: string;
  major: string;
  relevantCourses: string;
  university: string;
}
