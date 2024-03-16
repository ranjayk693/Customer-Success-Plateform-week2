import { Component } from '@angular/core';

@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrl: './escalation-matrix.component.css'
})


export class EscalationMatrixComponent {
  operationalMatrix: Matrix[] = [
    { level: 1, name: 'Dipa Manjumdar', role: 'Project Manager' },
    { level: 2, name: 'Shres Parikh', role: 'FinancialMatrix' },
    { level: 3, name: 'Chintan Shah', role: 'Amin' }
  ];

  financialMatrix: Matrix[] = [
    { level: 1, name: 'Dipa Manjumdar', role: 'Project Manager' },
    { level: 2, name: 'Dipa Manjumdar', role: 'Project Manager' },
    { level: 3, name: 'Dipa Manjumdar', role: 'Project Manager' }
  ];

  technicalMatrix: Matrix[] = [
    { level: 1, name: 'Dipa Manjumdar', role: 'Project Manager' },
    { level: 2, name: 'Dipa Manjumdar', role: 'Project Manager' },
    { level: 3, name: 'Dipa Manjumdar', role: 'Project Manager' }
  ];
}

export interface Matrix {
  level: number;
  name: string;
  role: string;
}