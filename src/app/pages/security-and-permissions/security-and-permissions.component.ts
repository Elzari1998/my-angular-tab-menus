import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-security-and-permissions',
  imports: [CommonModule],
  templateUrl: './security-and-permissions.component.html',
  styleUrl: './security-and-permissions.component.css'
})
export class SecurityAndPermissionsComponent {

  customRolePermissions = [
    {
      id: 1,
      heading: 'Manage Users and Teams',
      description: 'Grants the user permission to view and manage all teams, members, and guests in a Workspace. This includes adding and removing users and teams, changing roles, and managing invites.',
      switches: [false, false, true, false]
    },
    {
      id: 2,
      heading: 'Git',
      description: 'Allows the user to see and open the Github/Bitbucket/Gitlab modal on tasks and use all the features within it.',
      switches: [false, false, true, true]
    },
    {
      id: 3,
      heading: 'Edit Statuses',
      description: 'Gives the user the permission to create, edit, and delete statuses.',
      switches: [false, false, true, true]
    },
    {
      id: 4,
      heading: 'Manage Tags',
      description: 'Gives the user the permission to create, edit, and delete tags.',
      switches: [false, false, true, true]
    },
    {
      id: 5,
      heading: 'Send email (Email CaganApp)',
      description: 'Gives the user the permission to send email through the Email CaganApp.',
      switches: [false, false, true, true]
    },
    {
      id: 6,
      heading: 'Add Email Accounts (Email CaganApp)',
      description: 'Gives the user the permission to add authorized email accounts through the Email CaganApp.',
      switches: [false, false, true, true]
    },
    {
      id: 7,
      heading: 'Manage Custom Fields',
      description: 'Gives the user the permission to create, edit, and delete Custom Fields.',
      switches: [false, false, false, true]
    },
    {
      id: 8,
      heading: 'Pinned Custom Fields',
      description: 'Gives the user the ability to pin a Custom Field.',
      switches: [false, false, true, true]
    },
    {
      id: 9,
      heading: 'Custom Roles',
      description: 'Gives the user the ability to create, edit, delete and manage all custom roles.',
      switches: [false, false, false, true]
    },
    {
      id: 10,
      heading: 'Create Spaces',
      description: 'Gives the user the permission to create Spaces in the team Workspace.',
      switches: [false, false, true, true]
    },
    {
      id: 11,
      heading: 'Create Views',
      description: 'Gives the user the permission to create and edit views on locations. When toggled off, full Members can still create private views.',
      switches: [false, false, true, true]
    },
    {
      id: 12,
      heading: 'Delete Items',
      description: 'Gives the user the permission to delete items. Optionally, you can have it so they can only delete tasks they create.',
      switches: [true, true, true, false],
    },
    {
      id: 13,
      heading: 'Exporting',
      description: 'Gives the user permission to export via the Workspace export setting.',
      switches: [false, false, true, true]
    },
    {
      id: 14,
      heading: 'Importing',
      description: 'Gives the user permission to import tasks via the Workspace import settings.',
      switches: [false, false, true, true]
    },
    {
      id: 15,
      heading: 'Workspace Integrations',
      description: 'Gives the user the permission to setup any third-party Workspace Integrations.',
      switches: [false, false, true, true]
    },
    {
      id: 16,
      heading: 'Workspace Permissions',
      description: 'Gives the user the permission to change Workspace level permissions like 2FA, Public Sharing, SSO.',
      switches: [false, false, false, true]
    },
    {
      id: 17,
      heading: 'View Audit Logs',
      description: 'Gives the user permission to view Workspace audit logs.',
      switches: [false, false, false, true]
    },
    {
      id: 18,
      heading: 'View Team Timesheets',
      description: 'Gives the user permission to view timesheets for other Members.',
      switches: [false, false, true, true]
    }
  ];

  advancedPermissions = [
    {id:1, heading:'Request Access', description:'Default all newly created Spaces to private', },
    {id:2, heading:'Allow admin to manage private spaces', description: 'Give ability to add and manage people '}
  ]

}
