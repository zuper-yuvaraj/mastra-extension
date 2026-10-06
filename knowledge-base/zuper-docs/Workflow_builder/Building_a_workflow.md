---
title: "Building a workflow"
source: https://docs.zuper.co/Workflow_builder/Building_a_workflow.md
fetched_at: 2026-10-06T13:30:07.647Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Building a workflow

Workflows allow you to automate processes by defining steps triggered by specific events. Follow these steps to build a workflow:

## Create a workflow

1. Access the Workflow Builder
   * Navigate to the Workflow section in the Zuper dashboard.
   * Click "**Create Workflow**" to start.

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WW1.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=75ee2d725bed524b6f72c6b7afb67834" alt="WW1 Pn" width="1900" height="872" data-path="images/WW1.png" />

2. Define the Trigger
   * Select an event-based trigger and choose the "**On Create Job**" trigger.

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT7.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=de2245b3acbca672ff3573a2793b6e57" alt="WT7 Pn" width="1904" height="872" data-path="images/WT7.png" />

3. Add Flow Steps
   * Get Record: To get the complete information about the jobs.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WT15.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=982f51cbc384977dcf9efbf925240ebf" alt="WT15 Pn" width="1910" height="862" data-path="images/WT15.png" />

4. Copy Custom Fields You can copy and add the customer's custom fields to the jobs module by mapping the appropriate options in the form's fields. 

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT22.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=4bf84bad2c7c3e217424b8e7bf3c9e20" alt="WT22 Pn" width="1909" height="865" data-path="images/WT22.png" />

5. Choose the “**Customer Uid**” and map the fields to get copied from the Jobs module to the customers module.

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT25.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=6a94de08f729776ab3ba6cc235a45f74" alt="WT25 Pn" width="1915" height="874" data-path="images/WT25.png" />

6. Click “**Save as draft**.”

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT26.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=99f1f6e7fd0938b7ee35a8e95364729f" alt="WT26 Pn" width="1907" height="869" data-path="images/WT26.png" />

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT27.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=84331bb5b73a55afe33a8a14c1654a27" alt="WT27 Pn" width="1897" height="864" data-path="images/WT27.png" />

## **Testing a Workflow**

Testing ensures your workflow executes as intended. Follow these steps:

1. If test data is already pinned, it reuses the pinned data. Pinning lets you reuse input data for future test executions. If the data is not pinned, it links to the live data, and once it is executed, we can pin the data to reuse it for testing.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WT12.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=d0f48d432b81cda52c116c17a2feba68" alt="WT12 Pn" width="1919" height="868" data-path="images/WT12.png" />

2. Initiate Test Mode: Open the saved workflow and click "**Test Workflow**". <img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT18.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=88f586df9e36aa669ee361e30bc5104f" alt="WT18 Pn" width="1914" height="862" data-path="images/WT18.png" />

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT9.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=ba83dc029634787dee23ce1dcc9112d0" alt="WT9 Pn" width="1903" height="869" data-path="images/WT9.png" />

<Note>
  **Note**: Select the **Pin** icon in the **Output** panel to save the current test data. Pinned data saves time when you test subsequent triggers, since you do not need to trigger the event again.
</Note>

## **Activating a Workflow**

Click the “**More Icons**” icon to choose “**Save and Publish**.”

<img src="https://mintcdn.com/zuperinc/SR5Y7F9ICGyDqcYh/images/WT28.png?fit=max&auto=format&n=SR5Y7F9ICGyDqcYh&q=85&s=ab154553ede22d1926a63ed4c14b64c3" alt="WT28 Pn" width="1905" height="865" data-path="images/WT28.png" />


## Related topics

- [Monitoring and version control ](/Workflow_builder/Monitoring_and_version_control.md)
- [Workflows](/Settings/Miscellaneous/workflows.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.