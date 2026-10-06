---
title: "Dashboard 101: Getting started"
source: https://docs.zuper.co/Zuper_Dashboard/Dashboard101-Gettingstarted.md
fetched_at: 2026-10-06T13:29:37.262Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Dashboard 101: Getting started

**Welcome to Dashboard 101 of Zuper!**

Zuper Dashboard is your central hub for managing and tracking field service operations. With real-time insights at your fingertips, you can see the pulse of your business with just a glance. By consolidating data from key modules—**Jobs**, **Timesheets**, **Quotes**, **Invoices**, **Requests**, and more—the Dashboard gives you a comprehensive view of your operations.&#x20;

From key performance metrics to actionable data, it empowers you to make informed decisions quickly—whether you're optimizing technician schedules, tracking job progress, or analyzing financials.

**Main Benefits of the Zuper Dashboard**

<Icon icon="monitor-waveform" color="orange" /> **Centralized Data Hub**: You can get a unified view of your operations by integrating key performance metrics from across your business.

<Icon icon="timeline-arrow" color="orange" /> **Real-Time Insights**: You can monitor key activities and metrics as they occur so you can take action when it matters most.

<Icon icon="gear-complex" color="orange" /> **Customizable Widgets**: You can make the Dashboard work for you by adding, removing, and adjusting widgets to focus on what’s most important.

<Icon icon="lightbulb-on" color="orange" /> **Actionable Data**: You can explore detailed performance data to uncover trends, spot potential issues, and find opportunities for improvement.

Below is a breakdown of each module, along with detailed information on what they track.

#### **Jobs Module**

The Jobs module helps you monitor the status and progress of your jobs. Here’s what you can track:

<img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/chrome_0zqmnFAVNi.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=58f14c6292a9e3a55abf90055df56d85" alt="" width="1916" height="907" data-path="Zuper_Dashboard/chrome_0zqmnFAVNi.png" />

<AccordionGroup>
  <Accordion title="Jobs Statistics" defaultOpen={false}>
    Displays an overview of all jobs, categorized by their status for a given date range. This breakdown helps you understand how jobs are progressing and which tasks need immediate attention.

    * **Total Jobs:** The total number of jobs, grouped by team and job category.

    * **Yet to Start:** Jobs that have been scheduled but have not yet begun.

    * **In-progress:** Jobs that are actively being worked on.

    * **Canceled:** Jobs that were terminated or aborted before completion.

    * **Incomplete:** Jobs that have started but are not yet finished.

    * **Completed:** Jobs that have been successfully finished.
  </Accordion>

  <Accordion title="Jobs by Team" defaultOpen={false}>
    Displays the number of jobs assigned to each team. This helps you assess workload distribution and identify teams with higher or lower job volumes.
  </Accordion>

  <Accordion title="Job Scheduled/Booked" defaultOpen={false}>
    Displays jobs that have been scheduled or booked within a specific time frame, helping you manage upcoming workloads effectively.
  </Accordion>

  <Accordion title="Jobs by Category" defaultOpen={false}>
    Displays jobs categorized by their type (e.g., **Maintenance**, **Repair**, **Inspection**). This metric allows you to focus on specific job categories to improve team planning and resource allocation.
  </Accordion>

  <Accordion title="Jobs Leaderboard" defaultOpen={false}>
    Displays a performance leaderboard that ranks users based on the number of jobs they've completed. This can serve as a motivational tool for your team and highlight high performers.
  </Accordion>

  <Accordion title="Jobs by Recurrence Type" defaultOpen={false}>
    Displays jobs categorized as **One-off** and **Recurring**. This helps you track both types of jobs and plan resources accordingly:

    * **One-off Jobs:** Jobs that are scheduled to occur only once.

    * **Recurring Jobs:** Jobs that occur at regular intervals or based on predefined conditions.
  </Accordion>

  <Accordion title="Jobs by Type" defaultOpen={false}>
    Displays jobs categorized as **New** (first-time visits) or **Return Visits** (follow-ups). This distinction is useful for tracking recurring work and customer satisfaction.

    * **New Jobs:** Jobs that are being encountered for the first time.

    * **Return Visits:** Jobs that have been handled before and require follow-up or revisit.
  </Accordion>

  <Accordion title="Jobs by Customer Category" defaultOpen={false}>
    Displays jobs categorized by customer type (e.g., **Commercial**, **Residential**). This metric helps you understand which customer types are generating the most service demand.
  </Accordion>

  <Accordion title="Delayed Jobs" defaultOpen={false}>
    Displays jobs that are running behind schedule. It provides client names, scheduled dates, and the assigned user, allowing you to identify bottlenecks and reassign resources as necessary.
  </Accordion>
</AccordionGroup>

# Timesheet Module

The Timesheet module tracks your team's time management, ensuring that all workers are accounted for throughout the day. The following metrics are key:

<img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/Timereq.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=53dbb9b3eb2ded2f79d4c70596227186" alt="" width="1909" height="660" data-path="Zuper_Dashboard/Timereq.png" />

<AccordionGroup>
  <Accordion title="Team Availability" defaultOpen={false}>
    Displays the total number of users within a team and their current status:

    * **Total Users:** Displays the total headcount of users within a team.

    * **Punched In:** Displays the number of users who have logged into the system and started working.

    * **On Break:** Displays the number of users who are currently on a scheduled break.

    * **Punched Out:** Displays the number of users who have finished their shifts or logged out of the system.
  </Accordion>

  <Accordion title="Time-off Requests" defaultOpen={false}>
    Displays the number of time-off requests submitted and approved within a certain date range. This helps you plan team availability and resource allocation.
  </Accordion>
</AccordionGroup>

# Quotes Module

The Quotes module allows you to manage service estimates and track their success. You can monitor quotes based on their status, enabling you to track the progress from creation to approval or decline:<img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/quoteDash.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=583994ecad46fa48988ebda6dd34fd9b" alt="" width="1902" height="664" data-path="Zuper_Dashboard/quoteDash.png" />

<AccordionGroup>
  <Accordion title="Quote Stats" defaultOpen={false}>
    Displays an overview of all quotes, categorized by their current status:

    * **Total Quotes Created:** Displays the number of quotes generated within a selected time frame.

    * **Draft Quotes:** Displays quotes that are still being drafted and have not yet been sent to the customer.

    * **Sent Quotes:** Displays quotes that have been finalized and sent for customer approval.

    * **Accepted Quotes:** Displays quotes that have been approved by the client and are ready for the next step (e.g., invoicing).

    * **Declined Quotes:** Displays quotes that have been rejected by the client, along with reasons for rejection if available.

    * **Quotes Converted to Invoices:** Displays quotes that have been approved by the customer and converted into invoices for billing.
  </Accordion>

  <Accordion title="Quotes Expiring Soon" defaultOpen={false}>
    Displays quotes that are approaching their expiration date. This ensures that no quote goes unnoticed and that follow-ups can be done before the expiration.
  </Accordion>
</AccordionGroup>

# Invoice Module

The Invoices module allows you to track the status of invoices and ensure that payments are processed in a timely manner. The following metrics provide insight into your billing status: <img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/invoicedash.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=cfc13214cc7986ab4218fc0fa0c8f07a" alt="" width="1908" height="662" data-path="Zuper_Dashboard/invoicedash.png" />

<AccordionGroup>
  <Accordion title="Invoice Stats" defaultOpen={false}>
    Displays an overview of invoices categorized by their status:

    * **Pending Payments**: The total amount of payments that are awaiting processing or settlement for invoices that have been sent to clients.

    * **Partially Paid**: Invoices for which only a portion of the total amount due has been received as payment.

    * **Fully Paid**: Invoices for which the entire amount due has been received and settled.

    * **Overdue**: Invoices that have passed their due date without receiving payment.

    * **Bad Debt**: Amounts that are deemed unrecoverable due to non-payment or default by clients, typically written off as losses.
  </Accordion>

  <Accordion title="Invoice Expiring Soon" defaultOpen={false}>
    Displays invoices that are nearing their due date, ensuring that you can take action to collect payment before they become overdue.
  </Accordion>
</AccordionGroup>

# Maps Module

The Maps module is designed to help you optimize job routing and track your team's locations. The following metrics give you a clear view of your team's movements and job locations:<img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/y3LnMBjjT0.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=d4d6f3aaa2aef1ef9d38dee2582f3072" alt="" width="1895" height="664" data-path="Zuper_Dashboard/y3LnMBjjT0.png" />

<Accordion title="Route Stats" defaultOpen={false}>
  Displays an overview of job routes, with jobs categorized by their status:

  * **Yet to Start:** Displays jobs that have been scheduled but have not yet started.

  * **On My Way:** Displays jobs for which the technician is en route to the job location.

  * **Started:** Displays jobs that are currently in progress.

  * **Completed:** Displays jobs that have been finished and marked complete.
</Accordion>

# Service Contracts Module

The Service Contracts module helps you manage and monitor the status of service contracts. This ensures that your team adheres to service-level agreements (SLAs) and maintains good customer relationships:

<AccordionGroup>
  <Accordion title="Contracts Stats" defaultOpen={false}>
    Displays an overview of contracts, categorized by status:

    * **Active Contracts:** Displays contracts that are currently valid and active.

    * **Pending Approval:** Displays contracts that have been created but are still awaiting customer approval.

    * **Expired Contracts:** Displays contracts that have expired and may need renewal.

    * **On Hold:** Displays contracts that have been paused or suspended temporarily due to issues or customer requests.
  </Accordion>

  <Accordion title="Contracts Expiring Soon" defaultOpen={false}>
    Displays contracts that are nearing their expiration, allowing you to take proactive measures to renew or follow up with the customer.
  </Accordion>
</AccordionGroup>

## Assets Module

Track your company's assets and manage their lifecycle with the Assets module. This module provides essential metrics to ensure your assets are in good condition and available for use:

<Accordion title="Assets Expiring Soon" defaultOpen={false}>
  Displays assets that are nearing their expiration, ensuring that they are replaced or serviced before they become non-functional. This helps avoid any disruptions in your operations.
</Accordion>

# Requests Module

The Request module allows you to monitor service requests from customers. You can categorize these requests and monitor their progress:

<Note>
  **Note:** Statuses that appear here are those configured in the Request settings.
</Note>

<AccordionGroup>
  <Accordion title="Request Statistics" defaultOpen={false}>
    Provides an **overview of requests categorized by various statuses**, including new, open, Progress, On hold, completed, closed, canceled, and recurring for the selected date
    range.

    * **New**: Requests that have been recently submitted and have not yet been processed or assigned.

    * **Open**: Requests that have been acknowledged and are currently being reviewed or worked on.

    * **In-progress**: Requests that are actively being worked on or are in the process of being fulfilled.

    * **On Hold**: Requests that have been temporarily suspended or delayed, typically due to pending issues or dependencies.

    * **Completed**: Requests that have been successfully fulfilled or resolved.

    * **Closed**: Requests that have been finalized and closed, typically after completion or resolution.

    * **Canceled**: Requests that have been terminated or abandoned before completion.

    * **Recurring**: Requests that occur regularly or repeatedly according to a predefined schedule.
  </Accordion>
</AccordionGroup>

# Projects Module

The Projects module enables you to track long-term or ongoing projects with multiple jobs involved:<img src="https://mintcdn.com/zuperinc/-k3Bjeas_7cp9V3d/Zuper_Dashboard/prodash.png?fit=max&auto=format&n=-k3Bjeas_7cp9V3d&q=85&s=9898ac89c980e0ec7b18cbe586029331" alt="" width="1914" height="656" data-path="Zuper_Dashboard/prodash.png" />

<AccordionGroup>
  <Accordion title="Project Stats" defaultOpen={false}>
    Provides an **overview of projects categorized by various statuses**, including total projects, yet to start, in progress, canceled, incomplete, and completed for the selected date range and project category.

    * **Total Projects**: The overall number of projects within the selected date range and project category.

    * **Yet to Start**: Projects that have been scheduled but have not yet begun.

    * **In Progress**: Projects that are currently being worked on or are underway.

    * **Canceled**: Projects that have been terminated or aborted before completion.

    * **Incomplete**: Projects that have started but have not been finished.

    * **Completed**: Projects that have been successfully finished or executed.
  </Accordion>

  <Accordion title="Projects By Category" defaultOpen={false}>
    Represents the number of Projects created across various project categories using a pie chart for the selected date range.

    The dashboard in Zuper serves as a centralized hub that provides users with an overview of their financial activities, tasks, and key metrics. It empowers users to take control of their finances by providing real-time updates and a user-friendly interface that simplifies financial management.
  </Accordion>
</AccordionGroup>


## Related topics

- [Dashboard 101: Customization](/Zuper_Dashboard/Dashboard101-Customization.md)
- [Getting started with your Zuper roofing trial](/Zuper_for_Roofing/Getting-started-with-your-Zuper-roofing-trial.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.