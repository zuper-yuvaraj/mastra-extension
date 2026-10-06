---
title: "Overview of Job"
source: https://docs.zuper.co/Work_Order_Management/Jobs/Overview_of_jobs.md
fetched_at: 2026-10-06T13:29:37.488Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview of Job

Use **Jobs** in Zuper to manage the full lifecycle of service work: creation, scheduling, execution, completion, and follow-up.

<CardGroup cols={2}>
  <Card title="Create a new job" icon="plus" href="/Work_Order_Management/Jobs/creating_a_new_job">
    Book a one-off or recurring job and assign a technician.
  </Card>

  <Card title="Manage a job" icon="clipboard-list" href="/Work_Order_Management/Job-detail-page">
    Update status, add notes, and run the job from its details page.
  </Card>
</CardGroup>

## What a job holds

<Card title="Customer and location" icon="user" horizontal>
  Associate the job with a customer or organization, primary and secondary contacts, service address, property, and service territory.
</Card>

<Card title="Classification" icon="tag" horizontal>
  Organize the work with a trade type, job category, priority, tags, lead source, skills, and a parent job for revisits.
</Card>

<Card title="Schedule and visits" icon="calendar" horizontal>
  Set a due date or scheduled time, create recurring work, and add more visits through appointments when enabled.
</Card>

<Card title="Tasks" icon="list-check" horizontal>
  Break the work into service tasks, run in serial or parallel, with checklists or forms attached.
</Card>

<Card title="Parts and services" icon="boxes-stacked" horizontal>
  Add the parts and services the job needs as line items, bundles, sections, item groups, or custom items.
</Card>

<Card title="Time and expenses" icon="clock" horizontal>
  Capture technician time logs and job expenses that feed into job costing.
</Card>

<Card title="Associations" icon="link" horizontal>
  Link the job to related projects, properties, requests, contracts, assets, and attachments.
</Card>

<Card title="Line items view" icon="receipt" horizontal>
  Review all parts, services, and expenses together in one place on the job, so you can track costs and profitability at a glance.
</Card>

<Card title="Custom fields" icon="sliders" horizontal>
  Capture any extra details your organization configures as custom fields.
</Card>

<Card title="Get set up" type="check" icon="angle-double-right" horizontal>
  Set these up once to make every job run smoother.

  1. **Shape your job categories and types.** Categories pre-fill a default description and service tasks. [Trade types](/Trade_Types) sort jobs, quotes, and invoices by line of business.
  2. **Draw your service territories.** Set geo-radius, geo-fence, or zip code rules so jobs land in the right territory with eligible technicians.
  3. **Build your service tasks and custom fields.** Use [service tasks](/Work_Order_Management/Jobs/Creating_and_managing_service_tasks), forms, and required, read-only, or hidden fields to standardize what technicians see.
  4. **Set up job statuses and checklists.** Configure master statuses, dependencies, and the checklists that appear when a status changes.
  5. **Learn how scheduling works.** See how manual scheduling and [Assisted Scheduling](/Work_Order_Management/Jobs/Assisted_Scheduling) pick the right technician and slot.
</Card>

<AccordionGroup>
  <Accordion title="Quick start" icon="bolt">
    1. [Create a job](/Work_Order_Management/Jobs/creating_a_new_job) for the customer and service location.
    2. Add the job category, work details, service tasks, parts, services, or assets.
    3. Schedule the work and assign a technician manually or with [Assisted Scheduling](/Work_Order_Management/Jobs/Assisted_Scheduling).
    4. Start the job and update its status as work progresses.
    5. Record time, expenses, notes, photos, and other job details from the field.
    6. Complete the job and review related costing or billing information.

    <Note>
      **Before you start.** Working with jobs needs access to the Jobs module and its create and edit permissions. Your administrator can turn these on.
    </Note>
  </Accordion>

  <Accordion title="Advanced setup" icon="sliders">
    * Configure job statuses, dependencies, and status-based checklists.
    * Build reusable [service tasks](/Work_Order_Management/Jobs/Creating_and_managing_service_tasks), forms, and inspection checklists.
    * Configure custom fields and control whether they are required, read-only, or hidden.
    * Set up service territories, technician skills, teams, shifts, and work hours.
    * Configure [Assisted Scheduling](/Work_Order_Management/Jobs/Assisted_Scheduling) to recommend suitable technicians and time slots.
    * Enable recurring jobs and appointments for repeat work and multiple visits.
    * Configure job costing and profitability for labor, parts, services, expenses, and revenue.
    * Set up job documents, customer notifications, and public job links.
    * Use workflows to automate actions when jobs are created, updated, assigned, or moved to a new status.
    * Customize Kanban views, saved views, and filters for job management.
  </Accordion>
</AccordionGroup>

## Guides by task

<Tabs>
  <Tab title="Manage jobs">
    <Card>
      * [Create a new job](/Work_Order_Management/Jobs/creating_a_new_job)
      * [Manage the job list, views, and filters](/Work_Order_Management/Jobs/managing_your_jobs)
      * [Work in Kanban view](/Work_Order_Management/Jobs/Kanban_View)
      * [Update job status and checklists](/Work_Order_Management/Job-detail-page)
      * [Handle jobs across multiple visits](/Work_Order_Management/Job-detail-page)
      * [Clone a job or add a child job](/Work_Order_Management/Job-detail-page)
      * [Run bulk actions](/Work_Order_Management/Jobs/managing_your_jobs)
    </Card>
  </Tab>

  <Tab title="Schedule and assign">
    <Card>
      * [Use Assisted Scheduling](/Work_Order_Management/Jobs/Assisted_Scheduling)
      * [Schedule manually and reschedule](/Work_Order_Management/Job-detail-page)
      * [Set up one-off and recurring jobs](/Work_Order_Management/Jobs/creating_a_new_job)
      * [Assign teams and users by territory](/Work_Order_Management/Jobs/creating_a_new_job)
      * [Assign a job to a route](/Work_Order_Management/Job-detail-page)
      * [Manage tasks and subtasks](/Zuper_Dashboard/Tasks)
    </Card>
  </Tab>

  <Tab title="On the job">
    <Card>
      * [Follow service tasks](/Work_Order_Management/Jobs/Creating_and_managing_service_tasks)
      * [Manage job timelogs](/Work_Order_Management/Jobs/Manage_timelog_summary)
      * [Add notes and chats](/Work_Order_Management/Jobs/notes_and_chats)
      * [Use the Jobs gallery](/Work_Order_Management/Jobs/Jobs_gallery)
      * [Create and send job documents](/Work_Order_Management/Job-detail-page)
      * [Call and message with Zuper Connect](/Zuper_Connect/View_Manage_Web_Conversations)
      * [Order property measurements](/Integrations/Measurements_and_estimations/Zuper_Hover)
    </Card>
  </Tab>

  <Tab title="Cost and reports">
    <Card>
      * [Add expenses to a job](/Work_Order_Management/Jobs/Add_expenses_to_Job)
      * [Job costing overview](/Job_Costing/Overview)
      * [Understand job costing details](/Job_Costing/Understanding_Job_Costing_details)
      * [Fixed-price profitability](/Job_Costing/Fixed_Price)
      * [Time and material profitability](/Job_Costing/Time_and_Material)
    </Card>
  </Tab>
</Tabs>

## Common questions

<AccordionGroup>
  <Accordion title="What is the difference between a job, a child job, a task, and a project?">
    A **job** is the work order for a customer request. A **child job** sits under a parent job, such as a revisit. A **task** is a step or milestone inside a job. A **project** groups several related jobs under a larger engagement.
  </Accordion>

  <Accordion title="Can I complete a job without completing its service tasks?">
    Only if your administrator turns on the "Allow managing tasks in completed jobs" setting under Settings, Modules, Jobs, General Settings. Otherwise, resolve every service task before you move the job to Completed or Closed.
  </Accordion>

  <Accordion title="What is the purpose of skills on a job category?">
    Skills capture the expertise a job needs. Assign skills to a job category so every job in that category carries them, and scheduling, including [Assisted Scheduling](/Work_Order_Management/Jobs/Assisted_Scheduling), uses them to match technicians who hold those skills. Set them up under Settings, Modules, Jobs, [Skillsets](/Settings/Modules/Jobs/Configuring-skillsets).
  </Accordion>

  <Accordion title="What are job card templates?">
    A job card template controls the printable job card for a job category: the page size, orientation, margins, and which job fields, tables, and details appear. When Zuper generates a job card, dynamic variables pull live job data such as the work order number, customer, checklist answers, and status into the document. Configure them under Settings, Modules, Jobs, [Job Card Templates](/Settings/Modules/Jobs/Configuring-job-card-template).
  </Accordion>

  <Accordion title="How do I cancel a job?">
    Open the job and use Update Status to move it to a Cancelled status. Cancelling keeps the job and its history in your records. Deleting a job is separate and is available to admins by default, or to roles granted the Delete Job permission.
  </Accordion>

  <Accordion title="What notifications and alerts can I set for jobs?">
    Under Settings, Modules, Jobs, [Job Notifications](/Settings/Modules/Jobs/configuring_job_notifications) you can set three types: Job Reminders before a start time, end time, or due date; Job Delay Alerts when a job runs late by time or by status; and Job Status Alerts when a job reaches a chosen status. Each can go out by push notification, SMS, or email to assigned users, teams, technicians, or team leaders. You can also notify customers through Customer and Contact notifications.
  </Accordion>

  <Accordion title="How do I handle a revisit job?">
    Create the revisit as a child job under the original job, or set the original as the Parent Job when you create the new one, so the two stay linked. Parts and service line items from the parent copy to the child automatically, so remove any that do not apply. This keeps a clear parent-to-child link and a single job history.
  </Accordion>
</AccordionGroup>

## Keep exploring

<CardGroup cols={2}>
  <Card title="Assisted Scheduling" icon="calendar-days" href="/Work_Order_Management/Jobs/Assisted_Scheduling">
    Get the right technician to the right job at the right time.
  </Card>

  <Card title="Job costing" icon="calculator" href="/Job_Costing/Overview">
    See where each job stands on cost and profitability.
  </Card>

  <Card title="Jobs gallery" icon="images" href="/Work_Order_Management/Jobs/Jobs_gallery">
    Find, filter, and download job photos and videos.
  </Card>

  <Card title="Job timelogs" icon="clock" href="/Work_Order_Management/Jobs/Manage_timelog_summary">
    Track technician time captured from the field.
  </Card>
</CardGroup>


## Related topics

- [Overview](/Job_Costing/Overview.md)
- [Overview ](/Projects/Overview_of_projects.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.