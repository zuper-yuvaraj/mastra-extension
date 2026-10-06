---
title: "Webhooks"
source: https://docs.zuper.co/Settings/Developer_Hub/Webhooks.md
fetched_at: 2026-10-06T13:30:17.576Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks

Webhooks form the backbone of modern API development, allowing you to monitor changes in our systems and trigger actions in external applications, such as sending text messages or updating payment statuses. Zuper provides built-in webhook support, enabling users to register an HTTP/HTTPS URL that activates when an event occurs within Zuper.

With options to create, update, and delete webhooks, the system eliminates the need for periodic API calls and ensures that new updates are seamlessly integrated into the webhook.

<Frame>
  **Navigation**: *Settings -> Developer Hub -> Webhooks*
</Frame>

1. From the settings, select “**Developer Hub**," choose “**Webhooks**," and click "**+New Webhook**."

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WH1.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=9598eacc28815434efbdaf2da0ccea41" alt="WH1 Pn" width="1914" height="896" data-path="images/WH1.png" />

2. Create a new webhook by filling in the following details:

* Webhook Name (Mandatory) - Enter the unique name for the webhook. 
* Module (Mandatory) - Choose the applicable module. 
* Webhook Event (Mandatory) - Choose the applicable webhook's event. 
* Request Method and Request URL -  Choose the applicable method: POST, GET, PUT, and DELETE. A webhook request URL is the unique URL provided by a service or application that allows another application to send data directly to it.
* Headers - Add the key and the respective values. 

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WH2.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=ff43130489afe3b7d3f3811b26baedcb" alt="WH2 Pn" width="1907" height="877" data-path="images/WH2.png" />

| HTTP Method | General Purpose (in REST APIs) | Webhook Context | Common Use Case in Webhooks | Best Practices |
| :- | :- | :- | :- | :- |
| **GET** | Retrieve data without modifying it (idempotent, safe). | Rarely used for delivery (no body for payloads); supported in some tools for simple queries or polling-like triggers. | Fetching webhook configuration or metadata. | Avoid sensitive data; use query params sparingly. Limit to read-only ops. |
| **POST** | Create new resources or submit data (non-idempotent). | The default and most common for webhook payloads. Sends JSON/XML bodies with event details. | Delivering event data. | Always include a signature/header for verification. Expect retries on failure. |
| **PUT** | Update/replace an entire resource (idempotent). | Used in scenarios needing complete resource replacement; less common but supported for updates. | Updating webhook subscriptions. | Ensure idempotency—repeated calls shouldn't create duplicates. Use for complete overwrites, not partial updates. |
| **DELETE** | Remove a resource (idempotent). | Primarily for management, not delivery. | Unsubscribing or deleting a webhook endpoint. | Confirm deletion with a 204 No Content response. Use auth tokens to prevent unauthorized removals. |

Click "**Create**" to add the new webhook. 

3. The new webhook secret key is generated successfully.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WH3.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=d4084bbfee58fb1125f69f4c72bbaacc" alt="WH3 Pn" width="1916" height="875" data-path="images/WH3.png" />

4. Click <Icon icon="ellipsis-vertical" /> icon to Edit Webhook, Copy Webhook URL, and Activate/Deactivate Webhook.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WH4.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=3e903850c8fdb618d15373fc57ce91d2" alt="WH4 Pn" width="1913" height="865" data-path="images/WH4.png" />

5. Click “**Webhook History**” to view the list of webhook executions.

<img src="https://mintcdn.com/zuperinc/SOMllM3YyOKY3_PA/images/WH5.png?fit=max&auto=format&n=SOMllM3YyOKY3_PA&q=85&s=0a8bada1c338428f42aa6a224dfdd4f7" alt="WH5 Pn" width="1911" height="875" data-path="images/WH5.png" />

**Best Practices**

* Ensure your Request URL is publicly accessible and can handle the specified HTTP method.
* Use headers to include authentication tokens or other metadata as needed.
* Test your webhook configuration to confirm it receives events correctly.

Leveraging Zuper API Keys effectively strengthens the security and efficiency of your integrations. Protect your keys by storing them securely, rotating them regularly, and monitoring their usage to maintain a reliable and safe interaction with the Zuper API.


## Related topics

- [Triggers](/Workflow_builder/Triggers.md)
- [Workflow Builder Nodes](/Workflow_builder/workflow_builder_nodes.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.