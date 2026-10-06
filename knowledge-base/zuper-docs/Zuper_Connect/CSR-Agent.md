---
title: "AI CSR Agent"
source: https://docs.zuper.co/Zuper_Connect/CSR-Agent.md
fetched_at: 2026-10-06T13:29:36.416Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# AI CSR Agent

## **Overview**

The CSR (Customer Support Representative) Agent is an AI-driven customer support that ensures all inbound calls are answered. The agent greets the caller, determines whether they are new or returning, and resolves their request without transfers or callbacks.

Whether a customer needs to book a job, check an appointment, or receive a payment link by SMS, the agent handles it from start to finish. Your team stays focused on work that requires a human. Customers receive a faster, more consistent experience every time they call.

## **Before you begin**

CSR Agent must be enabled on your Zuper Connect plan. Contact Zuper [Support](mailto:support@zuper.co) to request activation.

## **How CSR agent work**

When a customer calls your business number, the agent answers immediately. It greets the caller and checks your Zuper records at the same time.

The agent identifies the caller's needs and acts on them directly in Zuper. It can:

* Book a job
* Check an existing appointment
* Send a payment link by SMS

## **CSR agent setup**

Setting up your agent takes four stages. Each stage builds on the previous one, so your agent is fully prepared before it answers its first call.

<AccordionGroup>
  <Accordion title="Stage 1 — Set up your agent profile">
    The first stage is the agent profile, where you give your agent its name and purpose. The name you choose is what the agent speaks when it greets callers, while the description is internal — it helps your team identify this agent on the listing page.

    <Frame>
      **Navigation:** *Zuper Connect → CSR Agent → + New Agent*
    </Frame>

    1. Select **Zuper Connect** from the left navigation menu and then choose **CSR Agent**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent1-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=70ea1a305ef414993b8f8d526625e920" alt="Csragent1 2" width="1920" height="878" data-path="images/csragent1-2.png" />
    </Frame>

    2. Select **+ New Agent** at the top right of the page to create a new one. The agent setup opens with four stages shown at the top: **Agent Profile**, **Superpowers**, **Knowledge Base**, and **Add to Route**.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent01-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=d44dcfeb273643f8e765293478b212f4" alt="Csragent01 2" width="1920" height="878" data-path="images/csragent01-2.png" />
    </Frame>

    3. Enter a name for your agent in the **Name** field.
    4. Enter a description in the **Description** field to help your team identify this agent.

    <Note>
      Note: A live preview on the right side of the screen updates as you configure the profile, so you can see exactly how your agent will appear before you proceed.
    </Note>

    5. **Tone** and **Voice** are set to system defaults. You do not need to change these.
    6. Select **Proceed** to move to the next stage.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent2-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=4cc814b41915d0fce021407ec7f510ae" alt="Csragent2 2" width="1920" height="878" data-path="images/csragent2-2.png" />
    </Frame>
  </Accordion>

  <Accordion title="Stage 2 — Choose your superpowers">
    Superpowers are the actions your agent can take during a call. **Gather information** is always on because every call starts there — review the remaining superpowers and enable only those that fit how your business operates.

    Select the toggle next to each superpower you want to enable.

    | **Superpower** | **Purpose** |
    | :- | :- |
    | **Booking a new service** | Schedules a new job for the customer. |
    | **Checking job details** | Reads existing job information to the caller. |
    | **Rescheduling a job** | Moves an existing booking to a new time. |
    | **Get Available Job Slots** | Create job based on the real time slot availability. |
    | **Send quote details** | Shares quote details with the customer by SMS. |
    | **Send quote deposit payment link** | Sends a payment link for a quote deposit by SMS. |
    | **Send invoice details** | Shares invoice information with the customer by SMS. |
    | **Send invoice payment link** | Sends a payment link for an outstanding invoice by SMS. |
    | **Forward call to human** | Transfers the call to a human agent when needed. |

    <Note>
      Note: **Forward call to human** requires setup by the Zuper support team. Contact Zuper [Support ](support@zuper.co)to request activation.
    </Note>

    <Tip>
      **Tip**:  You can update your agent's superpowers at any time from the agent settings page.
    </Tip>

    **Get available job slots**

    When enabled, the CSR agent checks your **Scheduling Assistant** in real time during a call, confirms an available slot, and creates the job in a single conversation. It respects your business hours, closed days, and team assignments, and suggests alternative slots when the requested time is not available.

    **Key note:** For new customers, this can be configured during CSR Agent setup. For existing CSR Agent customers, enabling the Scheduling Assistant requires an update by the Zuper Connect team — it is not self-serve. Contact your CSM or the Connect team to activate it.

    **Before activating, verify this setting in your Zuper account:** Settings → Modules → Jobs → General Job Settings → Assignment → **Notify user upon assignment.** This toggle controls whether assigned technicians receive a notification when Nova books a job. Confirm with your operations team whether you want this active — if enabled, every job Nova creates triggers an assignment notification to the technician.

    * Select Proceed to move to the next stage.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent3-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=2b9418bd6c75d816d95ec17f27f3ae12" alt="Csragent3 2" width="1920" height="878" data-path="images/csragent3-2.png" />
    </Frame>
  </Accordion>

  <Accordion title="Stage 3 — Build your knowledge base">
    Use this stage to teach your agent about your services, pricing, hours, service areas, and booking rules. Accurate input leads to accurate answers on every call.

    You can use one source at a time — either a website URL or a document upload. Once you add your content, Zuper AI generates a set of training questions and answers for you to review and refine.

    **Option A: Add your website URL**

    1. Enter website address in the **Your website** field.

    2.  Select **Continue**. The agent fetches your site content and begins processing, displaying a "**Processing your content**..." message on screen. Wait for the process to complete before moving to the next step.

    <Tip>
      **Tip**: Use your main landing page or services page. These are usually the most complete and up-to-date sources of information about your offerings, location, and contact details./
    </Tip>

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent5-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=a56cc022a16125e4e20b12d0cad2e6f3" alt="Csragent5 2" width="1920" height="878" data-path="images/csragent5-2.png" />
    </Frame>

    <Note>
      **Note**: The greeting your agent speaks at the start of a call is limited to 500 characters. The agent details field is limited to 2,500 characters.
    </Note>

    **Option B: Upload a file**

    Drag your file into the **Drop your file here** area, or select it to browse your files.

    <Note>
      **Note:** You can upload only one document per agent. If you have multiple documents, combine them into a single file before uploading.
    </Note>

    Supported file formats: **.docx**, **.txt**, and **.doc**. The maximum file size is **2 MB**.

    <Tip>
      To add content directly instead of uploading a file or providing a URL, select **Edit Manually** at the bottom of the page.
    </Tip>

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent4-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=4591d75af56c2055243d282dc50f19f0" alt="Csragent4 2" width="1920" height="878" data-path="images/csragent4-2.png" />
    </Frame>

    **Review and refine training questions**

    Once your content is processed, Zuper AI-powered agent generates **Training Questions**, a set of questions and answers based on your source content that become the responses your agent gives when callers ask about your business.

    Review every question and answer before you save, and correct anything that is inaccurate, incomplete, or does not reflect how your business operates.

    **Limits:** Each agent supports up to **30 training questions**. The total character limit across all **questions and answers** is **8,000 characters**.

    A counter at the top right of the **Training Questions** section shows your current usage.

    <Tip>
      **Tip**: Do not skip the review step. Inaccurate training questions lead to inaccurate answers on live customer calls.

      If you reach the 30-question limit or the 8,000-character limit, edit or remove existing questions before adding new ones.
    </Tip>

    To edit an existing training question:

    1. Select the question or answer text you want to change.
    2. Edit the text directly in the field.
    3. Select **Update Agent** to save your change.
  </Accordion>

  <Accordion title="Stage 4 — Add to route">
    A call route controls how incoming calls reach your agent. It sets the operating hours, opening greeting, and the number it answers.

    On the confirmation screen, select **Add to Route**. You can create a new route or add the agent to an existing one.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent6-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=db85cc8eb9aa9e76852baf88b32737a1" alt="Csragent6 2" width="1920" height="878" data-path="images/csragent6-2.png" />
    </Frame>

    **Note:** The **Add to Route** stage includes two tabs: **Incoming Calls** and **Incoming Messages**.

    * Use the **Incoming Calls tab** to define how phone calls reach your team and the CSR Agent.

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent7-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=4b7e7753660360c41e4de077d989852d" alt="Csragent7 2" width="1920" height="878" data-path="images/csragent7-2.png" />
    </Frame>

    <Frame>
      <img src="https://mintcdn.com/zuperinc/O9ergopoL4vWjBzP/images/csragent8-2.png?fit=max&auto=format&n=O9ergopoL4vWjBzP&q=85&s=3c4219a759e2a5a94cecbb40c26efd06" alt="Csragent8 2" width="1920" height="878" data-path="images/csragent8-2.png" />
    </Frame>

    * Use the  **Messages** tab to route inbound texts to your team and CSR Agent. For configuring routes, see [Setting up call routings](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/Call_Routings).
  </Accordion>
</AccordionGroup>

After you complete all four stages, two final steps help you confirm everything is working and keep your agent accurate over time.

## **Test your agent**

Before your agent handles real calls, place a test call to the number assigned to your route. Listen to the greeting, ask one of your training questions, and confirm the agent responds accurately. If the answer is wrong or incomplete, return to Stage 3 and refine the relevant training question.

<Tip>
  **Tip:** Test with questions your callers ask most often — not just the questions your agent was trained on.
</Tip>

## **Update your knowledge base**

Review your training questions whenever your services, pricing, or hours change. After you save an update, the agent applies those changes to new conversations. Conversations already in progress at the time of the update might not reflect the new content — restart the agent to apply changes immediately.

<Tip>
  **Tip**: Set a monthly reminder to review your training questions, especially before seasonal changes in pricing or availability.
</Tip>

✓  Your **agent** is now **live**. 

The agent is now active on this route. It greets every caller, handles requests based on the superpowers you enabled, and draws on your knowledge base to give accurate, consistent answers. 

<Note>
  **Note**: To connect the agent to a route later, select **Return to Settings** on the confirmation screen. From there, go to **Zuper Connect** → **Call Settings** → **Call Routings** to assign the agent — the same agent can cover multiple routes if you want it to answer more than one number.
</Note>

## **Managing your agents**

The CSR Agent listing page shows all agents on your account, with each card displaying the **agent name**, **type**, and **enabled superpowers**.

To edit an agent, right-click the agent card and **select Edit —** the setup flow reopens with your saved settings so you can update the profile, adjust superpowers, or refresh the knowledge base at any time.

## **Key points to consider**

CSR Agent is designed to get you live quickly. The Zuper team currently manages some configuration options. With more self-serve controls coming in future releases. Here is what to know before you go live.

* **Job categories** cannot be added or changed directly from the UI. To add or change job categories, contact your account manager.
* **Conversation flows** are currently fixed. The agent runs two fixed conversation flows — one for new customers, one for existing customers.
* **Required fields** cannot be made optional from the UI. For example, if you want to make the last name field optional, your account manager can arrange this for you.
* **Conditional branching (Adaptive Questioning)** is not supported. The agent asks the same questions on every call and cannot change its path based on a caller's answers.
* **Knowledge base updates** might not appear immediately in ongoing conversations. You might need to refresh or restart the agent for changes to take effect.

To request changes to conversation flows, required fields, or logic, contact your account manager. Zuper reviews and handles these requests individually.

## FAQs

<AccordionGroup>
  <Accordion title="How many agents can I create?">
    You can create CSR Agents based on your Zuper Connect plan. If you need more agents, contact [Zuper Support](mailto:support@zuper.co).
  </Accordion>

  <Accordion title="Can I use both a website URL and a file upload for the same agent?">
    No. You can use one source at a time — either a website URL or a file upload. Choose the source that contains the most complete and up-to-date information about your business.
  </Accordion>

  <Accordion title="Can I upload multiple documents to a CSR agent?">
    No. Each CSR agent supports **one knowledge base document**.

    The uploaded document must meet the following requirements:

    * Supported file formats: **.docx**, **.doc**, and **.txt**
    * Maximum file size: **2 MB**
    * PDF files are not currently supported

    If your information is stored across multiple files, combine it into a single document before uploading. For example, you can organize the document into sections for services offered, business rules, call and booking guidelines, and FAQs.
  </Accordion>

  <Accordion title="What happens when I upload a new document?">
    Uploading a new document replaces the existing knowledge base document for the agent. To preserve your content, keep a master copy of your knowledge base and upload the latest version whenever updates are needed.

    You can review, edit, or remove the uploaded content at any time from the agent configuration.
  </Accordion>

  <Accordion title="What happens if a caller asks something the agent does not know?">
    If the agent cannot find an answer in its knowledge base, it follows its configured behavior. Enable the **Forward call to human** superpower so the agent transfers the call to a human agent in these situations. Contact [Zuper Support](mailto:support@zuper.co) for more information.
  </Accordion>

  <Accordion title="My agent is not answering calls. What should I check?">
    Confirm that CSR Agent is enabled for your Zuper Connect account. Then check the following:

    * The agent is assigned to the correct call route.
    * The **CSR Agent** toggle is turned on in the **Edit Call Route** panel.
    * The call route is active and set to the correct hours.

    If the issue continues, contact [Zuper Support](mailto:support@zuper.co).
  </Accordion>
</AccordionGroup>

## Related articles

* [Zuper Connect overview](https://docs.zuper.co/Zuper_Connect/Overview)
* [Setting up call routings](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/Call_Routings)
* [Setting up call groups](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/Call_groups)
* [Managing phone numbers and user permissions](https://docs.zuper.co/Zuper_Connect/Setup-Zuper-Connect/User_permissions)


## Related topics

- [Marketplace agents](/Zuper_Sense/Agent_Studio/Marketplace.md)
- [AI Field Agent](/Zuper_Mobile_Apps/complete-checklist-with-field-agent.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.