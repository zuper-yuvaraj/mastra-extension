---
title: "Monitoring and version control"
source: https://docs.zuper.co/Workflow_builder/Monitoring_and_version_control.md
fetched_at: 2026-10-06T13:30:08.011Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Monitoring and version control 

## **Version control overview**

 The Revision History records who saved what and when across both states – live and draft- giving you a clear audit trail. Use it to pinpoint whether a recent change may have introduced failures around a specific timestamp.

* **Live**: The published, active version that runs in production. Changes take effect only after you publish and impact real executions.
* **Draft**: Your editable working copy for design, testing, and review. Safe to change—no impact on production until you publish.

Use this to understand if a recent change may have introduced failures before/after a specific timestamp.

1. Select any of the workflows to view the workflow in detail.

<img src="https://mintcdn.com/zuperinc/A5eElFuTAkZCdwLe/images/WE1.png?fit=max&auto=format&n=A5eElFuTAkZCdwLe&q=85&s=f04199c1f924a462af8ba3486cd417f5" alt="WE1 Pn" width="1903" height="870" data-path="images/WE1.png" />

2. From My Workflows, open the workflow and click the three-dot menu. Select the “**Revision History**.”

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE2.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=53b083d3d8b6998b761396ee555c1e6e" alt="WE2 Pn" width="1907" height="861" data-path="images/WE2.png" />

3. You can view the live and draft revision histories. 

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE3.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=defb8a9fd5db68c271ec30aedd048c54" alt="WE3 Pn" width="1902" height="859" data-path="images/WE3.png" />

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE4.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=dffd72cd895a61bd3fdced28b85104a8" alt="WE4 Pn" width="1898" height="867" data-path="images/WE4.png" />

## Rollback

 Rollback restores a workflow to a previously saved revision from Revision History. It replaces the current version with that earlier snapshot so you can quickly return to a known‑good state.

 Click any one of the histories from the sidebar. Now you will get the option <br />“**Rollback to this version**.”

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WRO3.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=d16203cb6dc3d4ddb9aa786597bc32d1" alt="WRO3 Pn" width="1905" height="872" data-path="images/WRO3.png" />

## **Monitoring** 

Overview

* You can track runs at three levels: per-record (sidebar on the entity), per-workflow (from the workflow builder), and globally (Execution History).
* Actions available: View run details and retry failed runs.
* Known limitations: workflow-level history shows only the most recent 100 executions.

###  **i)Record-level monitoring (Sidebar on the entity)**

<Note>
  **Note**: This sidebar on the entity applies to all the modules. Below is an example of the Jobs module's use case.
</Note>

1. Select the “**Jobs**” module from the left navigation menu and choose any jobs to view the job details page.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE5.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=33e24b26dcf2a116b07a43c40a051da5" alt="WE5 Pn" width="1902" height="864" data-path="images/WE5.png" />

2. Under the “**Workflow Activity**,” click any of the activities.

*  On an entity (e.g., Job), the Workflow Activity panel shows recent runs tied to that record, with success/failed indicators.
* Clicking the “**View History**” button opens the “Workflow Executions” list with:

  - Execution ID (copyable)

  - Workflow name (redirection)

  - Status

  - Executed at

  - Actions: Acknowledge and Retry (circular arrow)

###  Prerequisites

The workflow must use:

* A Zuper trigger or at least one Zuper node, or
* A Webhook trigger configured with the correct x-module (i.e., mapped to the same entity type, such as Job). Without this, per-record executions won’t appear in the sidebar.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE6.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=2f97be5d8994150225a20d56841f098c" alt="WE6 Pn" width="1904" height="871" data-path="images/WE6.png" />

###  Filters

You can quickly filter the list by status (e.g., All, Failed) to focus on errors.

 1. Click the retry icon to retry the workflow for the failed executions only.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE7.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=0be9f58cc84461830d69a43e6588a87f" alt="WE7 Pn" width="1920" height="874" data-path="images/WE7.png" />

2. The system will retry the execution.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE7.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=0be9f58cc84461830d69a43e6588a87f" alt="WE7 Pn" width="1920" height="874" data-path="images/WE7.png" />

3. Click the icon to acknowledge the workflow. If you want to fix the issues manually and want other admins to avoid retrying, you can simply acknowledge, which will remove the retry option.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE9.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=2d09e3177ba093a1094aedf967c10c84" alt="WE9 Pn" width="1917" height="876" data-path="images/WE9.png" />

4. The acknowledgment is successfully done.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WE10.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=00642af7a4028507e17de16185a62973" alt="WE10 Pn" width="1912" height="865" data-path="images/WE10.png" />

### **ii) Workflow-level monitoring (within a specific workflow)**

**Access**

Choose Execution History to see runs for that workflow.

**What you get** 

* A list of the most recent executions for that workflow.
* Limitation: Only the latest 100 executions are shown at the workflow level.

### **iii) Global-level**

Access the Execution History tab to review past workflow runs and monitor their performance. This section provides critical details for tracking and troubleshooting:

 Filters: Use dropdowns to filter by Workflow, All Status, Triggered Date, and Mode. Check the “**Flagged**” box to view only flagged items.

**Search**: Enter a Workflow Name in the search bar to quickly find specific executions.

 **Columns**:

* **Execution ID**: Unique identifier for each execution.
* **Workflow Name**: Name of the executed workflow.
* **Triggered at**: Time when the workflow was initiated.
* **Executed at**: Time when the workflow was processed.
* **Status**: Indicates success, failure, in progress, or queued.
* **Time Taken**: Duration of the execution, with warnings for failures.

**Other options**:

* **Total Executions**: Displays the number of executions for the current month, along with the remaining quota.
* **Pagination**: Navigate through pages using the controls at the bottom.

**Interpreting Status**

**Created Time vs. Triggered Time**

* **Created Time**: The timestamp when the workflow is queued or initiated in the system. Due to system processing or queueing delays, this may be slightly later than the Triggered Time.
* **Triggered Time**: The timestamp when the trigger condition is met (e.g., when a “**Job Created**” event occurs or a webhook is received).

**Why It’s Helpful**

* **Troubleshooting**: A large gap between Triggered Time and Created Time may indicate system latency or resource issues.
* **Audit Accuracy**: Triggered Time confirms when the event occurred, while Created Time shows when the system began processing.
* **Use Case**: Use filters to quickly find problematic runs (e.g., all failed executions in the last week) or flag an execution for further investigation if it produces unexpected results.

### **Best practices and tips**

* Always check the Revision History when failures cluster after a recent change.
* For webhook-triggered flows, confirm the x-module is set to the same entity you’re viewing; otherwise, you won’t see sidebar activity on the record.
* Before retrying, scan the error details to confirm whether a fix (credentials, mapping, condition) is needed first.

### **Common troubleshooting scenarios**

* Record has no Workflow Activity entries: Confirm the prerequisites (Zuper trigger/node or correctly mapped Webhook x-module)
* I need to see older runs beyond 100: Use Workflows > Execution History (global view) and filter by the workflow name/date range
* Long delay between Triggered and Executed: Check for the concurrency limit set for a specific workflow.

## FAQs

<AccordionGroup>
  <Accordion title="Why was my execution skipped?">
    An execution is skipped when it matches a filter rule or condition set in your workflow's trigger node. Skipped executions do not count toward your limits.
  </Accordion>

  <Accordion title="What happens when a record is deleted?">
    A workflow might try to interact with a record, such as a job or an invoice, that has been deleted. When this happens, the execution is marked as failed.
  </Accordion>

  <Accordion title="How can I track and troubleshoot my workflow executions?">
    Monitor every workflow run from the Execution History tab. This tab shows the Execution ID, Status (Success, Failed, In Progress, or Queued), and Duration for each run.

    For a broader view, use the Execution Insights dashboard. It shows total executions, success and failure rates, and trends over a custom time range.
  </Accordion>

  <Accordion title="What are the best practices for building optimal workflows?">
    Zuper Workflow Builder works best when you follow a few core principles around triggers, node design, and error handling.

    See [Best practices](https://docs.zuper.co/Workflow_builder/Workflow_overview#best-practices) in the Workflow Builder overview for the full list.
  </Accordion>
</AccordionGroup>


## Related topics

- [Navigation & Key Pages](/Workflow_builder/workflow.md)
- [Login Logs](/Settings/Security/login_logs.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.