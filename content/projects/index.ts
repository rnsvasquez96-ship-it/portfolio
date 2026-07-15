import type { Project } from '@/types';
import signalos from './signalos';
import aerosense from './aerosense';
import pulsegrid from './pulsegrid';

const projects: Project[] = [signalos, aerosense, pulsegrid];

export default projects;
