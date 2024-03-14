import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-view-approve-team',
  templateUrl: './view-approve-team.component.html',
  styleUrl: './view-approve-team.component.css',
})
export class ViewApproveTeamComponent {
  // projectData: any[] = []; //empty array
  // constructor(private service: ServiceService) {
  //   service.getApprovedTeamData().subscribe(
  //     (response) => {
  //       this.projectData = response.items;
  //     },
  //     (error) => {
  //       alert('Someting went wrong while fetching the api');
  //     }
  //   );
  // }

  // onDeleteProject(id: string) {
  //   if (confirm('Are you sure?')) {
  //     this.service.deleteApproveTeamData(id).subscribe(
  //       (response) => {
  //         this.projectData = this.projectData.filter((item) => item.id !== id);
  //       },
  //       (error) => {
  //         alert('Something went wrong while Deleting data');
  //       }
  //     );
  //   }
  // }
  projectApprove: any[] = [];
  constructor(private service: ServiceService) {
    service.getApprovedTeamData().subscribe(
      (response) => {
        this.projectApprove = response.items;
      },
      (error) => {}
    );
  }

  deleteApproveTeam(id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteApproveTeamData(id).subscribe(
        (response) => {
          this.projectApprove = this.projectApprove.filter((item) => {
            item.id !== id;
          });
        },
        (error) => {
          alert('OOPS! server error');
        }
      );
    }
  }

  onCancel(item: any) {
    Object.assign(item, item.editCopy);
    item.isEdit = false;
    console.log(item);
  }

  onEdit(item: any) {
    item.editCopy = { ...item };
    item.isEdit = true;
    console.log(item);
  }

  onUpdate(item: any) {
    const data = {
      projectId: item.projectId,
      noOfResources: item.noOfResources,
      role: item.role,
      availability: item.availability,
      duration: item.duration,
      phase: item.phase,
    };
    this.service.putApproveTeamData(item.id, data).subscribe(
      (response) => {},
      (error) => {
        Object.assign(item, item.editCopy);
        alert('Something went wrong while updating the data');
      }
    );
    item.isEdit = false;
  }
}
