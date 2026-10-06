---
title: "Overview"
source: https://docs.zuper.co/Workflow_builder/Workflow_overview.md
fetched_at: 2026-10-06T13:30:06.719Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

**Zuper Workflow Builder** is a powerful tool for automating and streamlining business processes through a node-based system. It enables users to create custom workflows to automate tasks like job assignments, invoicing, and status updates, reducing manual effort and boosting efficiency.

Workflow Builder is currently in Private Beta. To request access, please email our support team at [support@zuper.co](mailto:support@zuper.co).

## **Zuper Workflow builder components**

Below is an overview of its key components:

* **Canvas**: The primary workspace where workflows are designed by arranging and connecting nodes to define task sequences.
* **Triggers**: Define when a workflow starts and what data is passed into it. Three types include:
  * **Zuper Event Trigger**: Starts workflows based on platform events (e.g., "Job Created" or "Invoice Updated").
  * **Scheduled Trigger**: Runs workflows for recurring tasks on fixed intervals (e.g., every 15 minutes) or cron-based schedules (e.g., daily at 9 AM PST).
  * **Webhook Trigger**: Initiates workflows via external HTTP requests (e.g., POST to [https://zuper.workflow.endpoint/wf1](https://zuper.workflow.endpoint/wf1)) with headers like x-module and x-module-uid to link to records (e.g., job ID: abc123).
* **Nodes**: Individual actions or steps in a workflow, such as sending emails, updating attributes, or performing complex operations like API calls via the **HTTP node** for seamless external system integration.
* **Path**: Links between nodes that dictate the workflow's flow and sequence of actions.
* **Inputs**: Data or information a node requires to execute, such as API parameters or user inputs, often sourced from triggers or previous nodes.
* **Variables**: Variables are values you can define that can be shared across workflows and its execution.
* **Executions**: Each workflow run is tracked in the Execution History tab, with details like Execution ID, Workflow Name, Triggered/Created Time, Status (Success, Failed, In Progress, Queued), and Duration. Use filters to analyze runs or flag issues for troubleshooting.
* **Templates**: Pre-built workflow flows to serve as starting points or inspiration for faster setup.
* **Notes**: Add annotations to workflows for additional context or links to documentation, improving clarity and maintenance.
* **Insights**: Access the **Execution Insights** dashboard to view total executions, success/failure rates, and trends. Filter by time range (e.g., "Last Days") and export data for analysis.

## Best practices

Follow these guidelines to build reliable, efficient, and scalable workflows.

### General administration

<Warning>
  Do not delete the user who created a workflow, and do not change their role. Workflows depend on the creator's account for their API context. Changing this user might cause the workflow to fail or behave unexpectedly.

  When a Zuper node updates a module, Zuper performs the action using the workflow creator's account. You can configure the creator in the **Ignore Events Triggered By** filter. If you do, the workflow does not trigger when the creator acts directly in the Zuper app.
</Warning>

### Workflow optimization measures

* Use Zuper's native workflow features instead of Workflow Builder whenever they can handle the automation directly. Native workflows run more efficiently, use fewer of your monthly executions, and reduce the load on the system.
* Avoid creating multiple workflows that share the exact same trigger. Instead, build one workflow and use a **Split** node to handle the different logic paths.
* Use node-level filters and reverse user check filters to skip steps you do not need. This approach reduces the number of extra nodes and lowers your execution usage.
* Avoid writing large, complex logic in a single **Code** node. Split the logic across multiple smaller nodes instead. Smaller nodes use memory more efficiently, and they are easier to debug and maintain.
* Watch for race conditions when you combine workflows or chain dependent actions into a single workflow. Confirm the sequencing and dependencies are correct to avoid execution conflicts.

### Configuration guidelines

* Use the **Zuper Event Trigger** instead of a webhook node for events that happen inside the Zuper platform.
* Give each node a clear, descriptive name. Meaningful names make the workflow logic easier to read, maintain, and troubleshoot.
* When you call list APIs, such as the Zuper jobs listing, use batching and filters wherever possible. This practice avoids high memory use, which can cause the workflow to time out. Use a **Loop** node for these tasks whenever you can.

<Warning>
  Do not set a **Wait** node for a date and time beyond one year, pending confirmation. Do not use a **Wait** node to pause and wait for another workflow to complete.
</Warning>

### Advanced features

* The **Webhook** node's Advanced Settings let you trigger another webhook when an execution completes or fails. Use this to build sub-process workflows, or to send alerts and notifications based on the execution status.

<Warning>
  To retry a failed HTTP call automatically, set **Error action** to **Continue** in the **HTTP Request** node's Advanced Settings. Then, enter the number of attempts in **Maximum Retries**. Enter the wait time between attempts in **Retry Interval**, up to 3,000 milliseconds. Confirm the default retry behavior with your product team before publishing.
</Warning>

<Warning>
  Workflow-level concurrency lets you control how many executions run simultaneously. The limit is up to 10 executions, pending confirmation. Use this to manage queues, prevent API rate limits, and keep executions running in sequence.
</Warning>

<Warning>
  In the **IF/Else** node, use the **Manual Type Switch** to choose between expression-based or value-based comparison. This gives you greater control and accuracy when evaluating conditions. Confirm this control name with your product team before publishing.
</Warning>

* Use the **Function Picker** alongside the **Expression Picker** to simplify common transformations. This reduces the frequency with which you need a **Code** node and improves the readability of your workflows.
* `GetLatestNode Data` is the default expression syntax. It retrieves the latest execution data or the last available node output, and it simplifies data access inside loops.
* Use `GetNodeData` when you need the complete array of results from a referenced node. You can also use it when you access a node's output outside a loop. This syntax works well for aggregation or bulk processing.

## FAQs

<AccordionGroup>
  <Accordion title="What is Zuper Workflow Builder?">
    Zuper Workflow Builder is a node-based automation tool that helps you streamline your business processes. Use it to build custom workflows that automate repetitive tasks, such as job assignments, invoicing, and status updates.
  </Accordion>

  <Accordion title="Can I pause my workflow?">
    Yes. Deactivate a workflow at any time to stop new executions from triggering. Activate it again whenever you are ready.
  </Accordion>
</AccordionGroup>


## Related topics

- [Overview](/Client/Overview.md)
- [Overview ](/Projects/Overview_of_projects.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.