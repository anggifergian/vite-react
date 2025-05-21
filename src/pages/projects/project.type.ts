export interface Project {
    id: string;
    title: string;
    priority: 'Low' | 'Medium' | 'Urgent';
    lead: string;
    targetDate: string;
    status: string;
  }