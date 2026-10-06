---
title: "Triggers"
source: https://docs.zuper.co/Workflow_builder/Triggers.md
fetched_at: 2026-10-06T13:30:07.394Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Triggers

## What are Triggers?

Triggers initiate a workflow's execution and help configure when it should be executed. They are the starting points of a workflow and define when and why it should begin. In Zuper Workflow Builder, triggers can be based on platform events, schedules, or external system calls (webhooks). Choosing the right trigger is essential for automating the correct business process at the right time.

<Note>
  **Note**: Select the **Pin** icon in the **Output** panel to save the current test data. Pinned data saves time when you test subsequent triggers, since you do not need to trigger the event again.
</Note>

## Supported Triggers

## **1. Zuper Event-Based Triggers**

**Definition:**

These triggers initiate workflows in response to specific events within the Zuper platform (For instance, when a job is created or an invoice is updated).

 **Common Use Cases:**

* Automate notifications when a job is created or updated.
* Send the quote PDF to the customer when a quote is accepted.
* Update records or send alerts when an invoice status changes.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WFT0.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=c47bd17604e4d21631d2c70eaf699596" alt="WFT0 Pn" width="1915" height="871" data-path="images/WFT0.png" />

**How to Configure:**

* In the Workflow Builder, select an event (For instance, "**On Create Job**").
* **Set conditions** (For instance, job type and priority).
* **Example**: Trigger when a new "**Service**" job with "**High**" priority is created.

<Frame>
  <img src="https://mintcdn.com/zuperinc/f1TDTAbQZrKvmFO4/images/treigexe.png?fit=max&auto=format&n=f1TDTAbQZrKvmFO4&q=85&s=058d2959bd1f44760d2fdf788ca808d3" alt="Treigexe" width="1594" height="875" data-path="images/treigexe.png" />
</Frame>

**Preventing Recursive and Looping Executions**

The Zuper Trigger node includes execution controls that prevent a workflow from triggering itself or another workflow in an unwanted loop.

You can configure the trigger to:

* Skip execution if the event was triggered by specific user(s).
* Skip execution based on which workflow originated the update:
  * The same workflow.
  * Any workflow.
  * Specific workflow(s).
  * Allow all updates.

<Note>
  By default, Zuper ignores updates from any workflow. A notification indicates when this default setting is active. Change this setting if your workflow needs to respond to updates made by other workflows.
</Note>

**Why It Matters:**

These controls prevent accidental workflow loops while giving you complete control over execution behavior.

**Use Case:**

Workflow A updates a work order, which normally triggers Workflow B. If Workflow B also updates the same work order, it could create an endless loop. With these settings, Zuper automatically prevents this recursive execution.

**Best For:**

Automating internal processes based on Zuper platform activity.

## **2. Schedule-Based Triggers**

**Definition:**

These triggers start workflows at predefined times or intervals, without manual intervention.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WS1.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=7e55b8afa9766fbc86243cf4d986efd4" alt="WS1 Pn" width="1907" height="859" data-path="images/WS1.png" />

**Types:**

* **Cron-Based** (**Repeats Every**): Use cron expressions for precise scheduling (For instance, every Monday at 8 AM).
* **Recurrence**: Daily, weekly, monthly, or yearly schedules.
* **Fixed Interval**: Run at regular intervals (For instance, every 15 minutes, hourly, daily at 9 AM).

 **What is Recurrence in Scheduled Triggers?**

Recurrence allows you to set up your workflow to run automatically at regular intervals, such as every day, week, or month, without manual intervention. This is useful for automating repetitive tasks like sending reports, reminders, or performing routine data updates.

##  Types of Recurrence

**1. Daily**

* The workflow runs every day at a specified time.
* Example: Send a daily summary email at 8:00 AM.

**2. Weekly**

The workflow runs at a specified time on selected days of the week (For instance, every Monday and Wednesday).

* Recurrence: Every Week
* Days selected: Monday (Mo) and Wednesday (We)
* Time: 16:08 (4:08 PM)

<Note>
  Note: **The weekly schedule allows you to choose multiple days of the week.**
</Note>

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT31.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=1b242b5730a5f9b51947943e51989a5c" alt="WT31 Pn" width="1904" height="864" data-path="images/WT31.png" />

**3. Monthly**

The workflow runs at a specified time on selected days of the month (For instance, the 4th, and the 27th).

* Recurrence: Every Month
* Days selected: 4 and 27

<Note>
  Note: **The monthly schedule allows you to choose multiple dates of the month.**
</Note>

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT32.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=d882eca41b0f7326bd731f8330979bff" alt="WT32 Pn" width="1906" height="863" data-path="images/WT32.png" />

### How to Set Recurrence?

* Choose "**On Schedule**" as your trigger.
* Select "**Repeats every**" to set up a recurring schedule.
* Pick the recurrence frequency (**Every Day, Every Week, Every Month**).
* Specify the exact days and time you want the workflow to run.
* Set the timezone to ensure the workflow runs at the correct local time.

### **Why Use Recurrence?**

* Automate repetitive tasks (For instance, reschedule open jobs for the next day at the end of every day).
* Reduce manual effort and ensure consistency.
* Customize schedules to fit your business needs (For instance, only on workdays, or specific days of the month).

### Configuration Steps:

* Add the "**On Schedule**" trigger in the workflow canvas.
* Set the schedule (**Interval**, **specific time**, or **cron expression**).
* Choose the timezone for accurate execution.

**Example**: Run a workflow daily at 8 AM Mountain Time to send a sales summary.

**Preventing Recursive and Looping Executions**

The Zuper Trigger node includes execution controls that prevent a workflow from triggering itself or another workflow in an unwanted loop.

You can configure the trigger to:

* Skip execution if the event was triggered by specific user(s).
* Skip execution based on which workflow originated the update:
  * The same workflow.
  * Any workflow.
  * Specific workflow(s).
  * Allow all updates.

<Note>
  By default, Zuper ignores updates from any workflow. A notification indicates when this default setting is active. Change this setting if your workflow needs to respond to updates made by other workflows.
</Note>

**Why It Matters:**

These controls prevent accidental workflow loops while giving you complete control over execution behavior.

**Use Case:**

Workflow A updates a work order, which normally triggers Workflow B. If Workflow B also updates the same work order, it could create an endless loop. With these settings, Zuper automatically prevents this recursive execution.

**Best For:**

Routine, periodic tasks like report generation, reminders, or data syncs.

##  **3. External Webhook Triggers**

**Definition**:

These triggers start workflows when an external system sends an HTTP request (webhook) to a specific Zuper endpoint.

 **How it Works**:

*  External apps (For instance, CRM and ERP) send data to a unique webhook URL.
* The workflow is triggered in real-time upon receiving the request.

**Configuration Steps:**

* Add the "**On Webhook**" trigger in the workflow.
* Configure the webhook URL, HTTP method (GET/POST), and any required headers (e.g., Authorization).
* Optionally, use headers like x-module and x-module-uid to associate the execution with a specific Zuper record (For instance, a job).

The "**Advanced Settings**" in the Zuper Workflow Builder for the "**On Webhook**" trigger allow you to customize the behavior of the webhook trigger to enhance functionality and control how the workflow responds to external HTTP requests.

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WTAD1.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=85959e8f0876b99b32e5cacc9a59895d" alt="WTAD1 Pn" width="1908" height="863" data-path="images/WTAD1.png" />

**Respond after completion/failure:**

1. **Description:** This setting determines whether the webhook endpoint sends a callback request to the external system after the workflow completes or fails. **Options:**
   * Enabled: The workflow will send a response (for instance, an HTTP status code or payload) to the calling system once it finishes executing or encounters a failure.
   * Disabled (default): No response is sent, and the external system may time out or assume the request was processed based on its logic. **Use Case:** This is useful for notifying external systems (e.g., a CRM) about the success or failure of the triggered action, ensuring real-time feedback.
2. **Method:**
   * **Description:** Specifies the HTTP method used to send the response back to the external system.
   * **Options:**
     * GET: Returns a response with data retrieved from the workflow.
     * Other methods (For instance, POST) may be available depending on the platform, though only GET is shown in the image.
   * **Use Case:** Determines how the response is formatted or delivered, with GET typically used for simple status checks or data retrieval.
3. **Notify when the Workflow finishes:**
   * **Description:** This option allows you to configure a notification (for instance, an email or a log entry) when the workflow execution concludes.
   * **Example URL:** [https://us-west-1-workflow.zuperpro.com/api/](https://us-west-1-workflow.zuperpro.com/api/) (A sample URL) might be a placeholder or actual endpoint for sending notifications.
   * **Use Case:** Helps monitor workflow execution, especially for debugging or auditing purposes, by alerting a team or logging the event.
4. **Send Headers:**
   * **Description:** Enables the inclusion of custom HTTP headers in the response sent back to the external system.
   * **Fields:**
     * **Key:**  Enter the header name.
     * **Value:** Enter the header value.
   * **Use Case:** This is useful for authentication (For instance, API keys), custom metadata, or ensuring the external system can validate the response (For instance, using a token like n73Bk).

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WTAD2.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=209024968a5572a17a87b8a16c5d48a0" alt="WTAD2 Pn" width="1907" height="873" data-path="images/WTAD2.png" />

**Practical Application**

* The concurrency limit (up to 10 simultaneous runs) mentioned earlier might also influence how these settings behave under heavy load, potentially queuing responses if the limit is reached.

**Example:**

When a deal is closed, a CRM sends a POST request to Zuper, triggering a workflow to create a job in Zuper and log the execution under the relevant job record.

**Best For:**

Real-time integrations with external systems, syncing data, or automating cross-platform processes.

| **Trigger Type** | **Best For** | **Example Scenario** |
| :- | :- | :- |
| Zuper Event-Based | Internal automation on platform events. | Notify the technician when a job is created. |
| Schedule-Based | Routine, periodic, or time-based automation. | Send daily reports at 8 AM. |
| External Webhook | Real-time integration with external systems. | Create a job in Zuper when a CRM deal is closed. |

## FAQs

<AccordionGroup>
  <Accordion title="What types of triggers can start a workflow?">
    Triggers are the starting point of your workflow. Zuper Workflow Builder supports three trigger types:

    * **Zuper Event Trigger**: Starts a workflow based on platform events, such as when you create a new job or update an invoice.
    * **Scheduled Trigger**: Runs a workflow automatically on a fixed interval or a custom schedule.
    * **Webhook Trigger**: Starts a workflow through an external HTTP request, so you can integrate with third-party systems.
  </Accordion>

  <Accordion title="How can I prevent endless workflow loops?">
    Zuper ignores updates triggered by any workflow by default, to prevent infinite execution loops. If your process needs it, you can change this setting to let workflows respond to updates from other workflows. You can also configure the trigger to skip executions from specific users.
  </Accordion>

  <Accordion title="Can I schedule a workflow to run on specific days of the week or month?">
    Yes. Use the **On Schedule** trigger to set up recurring workflows for tasks such as daily summaries or rescheduling open jobs. Set the recurrence to daily, weekly, or monthly. For a weekly recurrence, select specific days, such as Monday and Wednesday. For a monthly recurrence, select specific dates, such as the fourth and the 27th.
  </Accordion>
</AccordionGroup>


## Related topics

- [Agent anatomy](/Zuper_Sense/Agent_Studio/Agent_Anatomy.md)
- [Proposal Template with CPQ](/Zuper_for_Roofing/Proposal_Template_with_CPQ.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.