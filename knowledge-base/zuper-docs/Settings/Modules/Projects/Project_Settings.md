---
title: "Configuring Project Settings"
source: https://docs.zuper.co/Settings/Modules/Projects/Project_Settings.md
fetched_at: 2026-10-06T13:30:08.752Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Configuring Project Settings

The Project Settings module in Zuper allows you to configure and customize project-related settings to streamline workflows. This module includes options to manage general settings, project categories, and custom fields for projects.

<Frame>
  **Navigation:** *Settings -> Modules -> Projects - > Project General Settings*
</Frame>

## **Project general settings**

* Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Projects**." Select the "**Project General Settings**."

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/Prjs1.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=37a881aa77e39e1450354428d189cd03" alt="Prjs1 Pn" width="1888" height="864" data-path="images/Prjs1.png" />

* **Project Prefix**
  Define a custom identifier prefixed to all projects. A project prefix helps categorize jobs systematically, making them easily identifiable.
* **Enable Timelog for Projects?**
  Toggle to Yes will enable the time log for projects. Toggle to No will disable the time log for projects.
* **Enable Secondary Contacts**
  Toggle the Enable option to enable adding secondary contacts to projects. Toggle the Disable option to restrict projects to primary contacts only.
* **Enable Kanban View**
  Enable the Kanban view for projects, allowing teams to visualize work progress across different stages. This improves task tracking, prioritization, and workflow management.
* **Automatically add task assignees to the project**
  When toggle to Yes, assigning a user to a task automatically adds them as an assignee on the project. When toggle to No, the user is assigned to the task only and is not added to the project.
* **Enable Project Value** Enable to view the project value.

Users can now associate secondary contacts with their projects, both during project creation and after the project has been created. This enhancement ensures that all relevant contacts can be linked to projects for better collaboration and communication.

Click the  "**Save**" button to save the project's general settings.

<img src="https://mintcdn.com/zuperinc/t5Ge0uu1AhBFQ2ss/images/tasksettings-02.png?fit=max&auto=format&n=t5Ge0uu1AhBFQ2ss&q=85&s=1e53c5606068c251b3cc3b7c3ef79529" alt="Tasksettings 02" width="1920" height="869" data-path="images/tasksettings-02.png" />

## **Project category**

<Frame>
  **Navigation:** *Settings -> Modules -> Projects - > Project Category*
</Frame>

1. Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Projects**." Select the "**Project Category**."

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs6.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=d94043de06702cb653035af16cebc0c6" alt="Prjs6 Pn" width="1913" height="857" data-path="images/Prjs6.png" />

2. Click the  "**+ New Category**" to create a new project category.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs4.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=830b8c3ce7eed656da6d09ee4c3d6252" alt="Prjs4 Pn" width="1913" height="884" data-path="images/Prjs4.png" />

3. A dialog box appears. Enter the following details
   * **Category Name\***: The name of the project category.
   * **Category prefix**: This optional prefix can be used as a shorthand or identifier for the project category.
   * **Category color**: Choose a color to represent the category visually. This color can help quickly distinguish between different categories when viewing project lists.
   * **Estimated Duration\***: Provide an estimated duration that a project might take to complete.
   * **Category description**: Briefly explain the purpose or scope of projects within this category.

Click "**Create**" to save the new project category.

<Note>
  **Note**: The symbol "\*" indicates that the field is mandatory.
</Note>

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs5.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=7e2640c3da1c6527d239ca89e6a6a2b6" alt="Prjs5 Pn" width="1909" height="873" data-path="images/Prjs5.png" />

## Project status

<Frame>
  **Navigation**: *Settings -> Modules -> Projects - > Project Categories - > Project Status*
</Frame>

Project status refers to a project's current state or condition, including its goals, timeline, and milestones. In Zuper, the project status types include Open, In-progress, Closed, On Hold, and Cancelled, which can be tailored to your specific preferences.

1. Select any one of the project categories to view the project listing page.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs7.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=ad6e8e1d52db6c0371468bf5eda278f7" alt="Prjs7 Pn" width="1912" height="874" data-path="images/Prjs7.png" />

2. The list of Job statuses is displayed. If needed, click "**+ New Status**" to add a status for the selected project category. Click "**Edit Project Category** " to modify the project category.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs8.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=e9c2b82ae407209adb99574416293f30" alt="Prjs8 Pn" width="1909" height="876" data-path="images/Prjs8.png" />

3. A dialog box appears. Enter the following details to create a project status.
   * **Status Name\***: Assign a unique name to the status within the project category.
   * **Status Type\***: Select the appropriate type for the status from the dropdown menu.
   * **Description**: Enter a brief explanation of the status's purpose in the category.
   * **Status Color**: Pick a color to represent the status visually. This helps quickly identify and differentiate project statuses in lists.
   * **Dependent Status**: o Toggle the Enable option to allow the dependent status. o Toggle the Disable option to disable the dependent status.
   * **Restrict to Custom Roles**: o Toggle the Enable option to restrict the status to custom roles. o Toggle the Disable option to assign the status to custom roles.
   * **Prompt Remark**s: o Toggle the Enable option to allow the user to enter the remarks. o Toggle the Disable option to restrict the user from entering the remarks.
   * Click the "**Add Status**" button.

<Note>
  Note: The symbol "\*" indicates that the field is mandatory.
</Note>

4. You can edit/delete the status as needed by clicking the edit or delete icon available next to the status name.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs9.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=0c8ea3be02f9ee54cad0d8c51c698de7" alt="Prjs9 Pn" width="1879" height="863" data-path="images/Prjs9.png" />

## Project Custom fields

<Note>
  Navigation: Settings -> Modules -> Projects - > Project Custom Fields
</Note>

Select the "**Settings**" module from the left panel. Under the "**Modules**," choose the "**Projects**." Select the "**Project Custom Fields**."

<img src="https://mintcdn.com/zuperinc/-gCTzqboWMxs3nCY/images/Prjs10.png?fit=max&auto=format&n=-gCTzqboWMxs3nCY&q=85&s=0bc161b38a3a039f5b74276b5cfba075" alt="Prjs10.png" width="1920" height="867" data-path="images/Prjs10.png" />

**Text**

* Single-Line Input: This allows you to create a field to enter a single line of free text.
* Multi-Line Input: This allows you to create a field to enter multiple lines of free text.

**Date**

* Date Input: This allows you to create a field to select a specific date from a calendar.
* Time Input: This allows you to create a field where you can select a specific time.
* Date Time Input: This allows you to create a field where both date and time can be selected.

**Selection**

* Single-Selection: This allows you to create a radio input Field where one of the provided options can be selected.
* Multi-Selection: This allows you to create check boxes where the provided options can be checked.
* Drop-Down: This allows you to create a drop-down field with the required list of options.

**Media**

* Upload: This allows you to create a file input field to upload files.

**Misc**

* **Look up** : This allows you to create a file input field to look up the products from the parts and services module.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs11.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=cf0a47206849cdd9824355cf4c65d6c0" alt="Prjs11.png" width="1912" height="878" data-path="images/Prjs11.png" />

<Note>
  Note: You can also control the behavior and visibility of each field using the following options:

  * Mark as Required Field -  Makes the field mandatory to fill out before submitting the form.
  * Mark as Read Only—This option makes the field non-editable; users can view the value but cannot modify it.
  * Mark as hidden field- This hides the field from all users; it will not appear in the form interface.
  * Hide to FE/Technician- This option makes the field invisible to technicians or front-end users during form access.
</Note>

Click “**Create New**” to create the “**Custom Field**” group.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs14.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=2c949e7fa0eee1fd8645ef2d6bd21b4f" alt="Prjs14 Pn" width="1917" height="865" data-path="images/Prjs14.png" />

Click "**Save**" button to save the custom field group.

<img src="https://mintcdn.com/zuperinc/KefXDBv2w02vbWo0/images/Prjs13.png?fit=max&auto=format&n=KefXDBv2w02vbWo0&q=85&s=aa818e34090f7def6ecbd00f4d1a7fe0" alt="Prjs13 Pn" width="1917" height="865" data-path="images/Prjs13.png" />

By following the outlined steps, you can easily organize project statuses and categories, ensuring clarity and coherence in project management.


## Related topics

- [Configuring General Job Settings](/Settings/Modules/Jobs/Configuring_General_Job_settings.md)
- [Configuring Request Settings](/Settings/Modules/Requests/Request_Settings.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.