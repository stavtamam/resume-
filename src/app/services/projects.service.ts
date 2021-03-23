import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  constructor(private afs: AngularFirestore) {
    this.projectCollection = this.afs.collection('projects');
    // this.customersCollection = this.afs.collection('customers');
  }

  getProjects(): Observable<Project[]> {
    this.projects = this.projectCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Project;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    return this.projects;
  }

  addProject(project: Project) {
    this.projectCollection.add(project);

  }

  getPtoject(id: string): Observable<Project> {
    this.projectDoc = this.afs.doc<Project>(`projects/${id}`);
    this.project = this.projectDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Project;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.project;
  }

  getP() {
    return this.afs.firestore.collection('project');
  }

  updateProject(project: Project) {
    this.projectDoc = this.afs.doc(`projects/${project.id}`);
    this.projectDoc.update(project);
  }

  deleteProject(projectId) {
    this.projectDoc = this.afs.doc(`project/${projectId}`);
    this.projectDoc.delete();
  }
}
