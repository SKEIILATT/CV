//Principal
export interface Principal{
    first_name: string;
    last_name: string;
    title: string;
    description: string;
    available: boolean;
    email: string;
    github: string;
    linkedin: string;
    avatar: string;
    semester: string;
    city: string;
    country: string;
    university:string;
    career:string;
}
//About
export interface About{
    title: string;
    description: string;
    about_features: AboutFeature[];
}
export interface AboutFeature{
    logoURL: string;
    title: string;
    description: string;
}
//Projects
export interface Project{
    type_project: string;
    title_project: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    demo?:string;
}
// Skills
export type SkillCategory = 'Data Science' | 'Frontend' | 'Backend' | 'Tools' 

export interface Skill{
    name: string;
    category: SkillCategory;
    icon?: `${string}:${string}`; 
    color?:string;
}
//Experience
export interface Experience{
    title_job: string;
    job_place: string;
    startDate: string;
    endDate?: string;
    bullet_description: string[];
}
//Education
export interface Education{
    logoURL: string;
    level: string;
    name_school:string;
    startDate?: string;
    endDate?: string;
    city: string;
    description:string;
}