---
title: "Managing Job Details"
source: https://docs.zuper.co/Work_Order_Management/Job-detail-page.md
fetched_at: 2026-10-06T13:29:38.123Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Managing Job Details

The details page allows you to view and manage the selected job details. Its three-column layout provides quick access to information and actions within each panel. 

## Left panel

The left panel contains job-related details such as the job title, work order number, and scheduled time zone. Below this, the Quick Actions bar provides contextual action buttons that allow you to update the job status, create a new quote, proposal, invoice, or child job, and add notes. From this panel, you can also navigate to view job details, associated notes, activities, and chats.

## Update job status

Job statuses are stages/checkpoints within a job that field technicians and other back-office users, such as dispatchers and supervisors, can update.

<Note>
  **Note:** Administrators can set up the master statuses, dependencies, and associated checklists from the Settings page.
</Note>

1. Click the “**Update Status**” button on the quick action bar.

<img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Updatestatus0.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=84a15ec097468daca14edea59b914201" alt="" width="1906" height="864" data-path="Updatestatus0.png" />

2. Choose the status you want to update from the “**Update Status**” dropdown.

<img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Updatestatus.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=8a67373960b45c16bb5c9cf7198775f1" alt="" width="1903" height="872" data-path="Updatestatus.png" />

3. Click the “**Update Status**” button after choosing the status. If the checklist is configured under settings, you may be prompted to fill it out.

<img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Updatestatus1.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=0e1ede0e9550379d3077246fb148cd8d" alt="" width="1898" height="859" data-path="Updatestatus1.png" />

4. Click the “**Update**” button to confirm the status update change.

<img src="https://mintcdn.com/zuperinc/6cbFCQfQfzHSjJuY/Updatestatus2.png?fit=max&auto=format&n=6cbFCQfQfzHSjJuY&q=85&s=78f44b8de90584c27ee09870541e1ae0" alt="" width="1906" height="873" data-path="Updatestatus2.png" />

5. The status is updated successfully.

<Accordion title="Status History actions">
  After updating the status, you can **edit** or **delete** it using the <Icon icon="ellipsis-vertical" />kebab icon next to the status from the “**Status History**” tab. If a checklist is associated with the status, you can see it by clicking **View Checklist**.

  <img src="https://mintcdn.com/zuperinc/1rmk76XRWAyXLx-q/editstatus.png?fit=max&auto=format&n=1rmk76XRWAyXLx-q&q=85&s=781fb325fa368b70e0bff50ec2187398" alt="" width="1904" height="868" data-path="editstatus.png" />

  You can also roll back the most recent status update by clicking the **Rollback** icon next to the status name.

  <img src="https://mintcdn.com/zuperinc/oK11ni6ybXrWMAjU/Work_Order_Management/Jobs/Rollback.png?fit=max&auto=format&n=oK11ni6ybXrWMAjU&q=85&s=b7aefaf6c35f12776415001a03d6a901" alt="" width="1917" height="882" data-path="Work_Order_Management/Jobs/Rollback.png" />

  <Note>
    If your job has service tasks, you must resolve all tasks before you can move the job to **Closed**. Each task must have a status of **Completed**, **Canceled**, or **Incomplete**. If any task is still open, Zuper blocks the status update and displays an error. Go to the **Service Tasks** tab on the job details page to check progress and resolve any remaining tasks.
  </Note>

  <Warning>
    If your administrator has turned on Allow managing tasks in completed jobs under Settings > Modules > Jobs > General Settings, you can mark a job as Closed or Completed even if tasks are still open. You can also continue to create, edit, assign, clone, and delete tasks after the job is complete.
  </Warning>
</Accordion>

<AccordionGroup>
  <Accordion title="Managing Jobs Across Multiple Visits">
    When work requires more than one visit to complete — such as phased installations, repair jobs awaiting parts, or multi-day service calls — keep a single job open throughout all visits rather than creating a new job for each return visit.

    <Warning>
      **Do not mark a job as Completed until all work across all visits is fully finished.** Completing a job triggers a final status sync to integrated systems such as HubSpot. This cannot be reversed by reopening the job.
    </Warning>

    <Steps>
      <Step title="Create one job for the full scope of work">
        Create a single job covering the entire engagement. Set the initial Scheduled Start and End Dates for the first visit.
      </Step>

      <Step title="Place the job On Hold between visits">
        When the technician finishes for the day but more visits are needed, update the job status to **On Hold**. This keeps the job open and visible without marking it complete.
      </Step>

      <Step title="Update the schedule for the next visit">
        Before the return visit, update the **Scheduled Start Date** and **Scheduled End Date** on the job to reflect the new visit time. The job will reappear on the Job Calendar and Dispatch Board for the updated date.

        * **From the Calendar**: Drag the job to the new time slot, or right-click and select **Reschedule**.
        * **From this page**: Edit the job and update the schedule fields, then click **Update**.
      </Step>

      <Step title="Resume the job on the return visit">
        When the technician arrives, update the job status from On Hold to resume work. Time logging continues from this point.
      </Step>

      <Step title="Mark Complete only when all work is done">
        Once all visits are complete, update the job status to **Completed**. This finalizes the job record and triggers downstream syncs to integrated systems.
      </Step>
    </Steps>

    <Note>
      Creating a separate job per visit causes fragmented job history, inaccurate reporting, and premature status syncs to integrated systems. The single-job approach keeps all time logs, notes, parts consumption, and history in one record from start to finish.
    </Note>
  </Accordion>
</AccordionGroup>

## Schedule

You can schedule jobs using **Manual Scheduling** or **Assisted Scheduling**.

<img src="https://mintcdn.com/zuperinc/exOxi80sGsFRgRPy/Work_Order_Management/Jobs/manualscheduling.png?fit=max&auto=format&n=exOxi80sGsFRgRPy&q=85&s=8338b74b6d0fdae46891ea6835a7f18b" alt="Manualscheduling" width="1920" height="869" data-path="Work_Order_Management/Jobs/manualscheduling.png" />

* **Manual Scheduling** allows you to pick the technician and time slot yourself, ideal for customer-preferred appointments.
* <Badge color="green">New</Badge>**Assisted Scheduling** recommends the best technician and available slot based on skills, availability, and service territory. Learn more about how recommendations work in the [**Assisted Scheduling**](/Work_Order_Management/Jobs/Assisted_Scheduling#assisted-scheduling) article.

### Associating tasks with a Job

You can create and manage tasks directly within a job to track actions or milestones.<br />Each task helps divide complex job activities into smaller, trackable steps.<br />Tasks can be updated, reordered, or linked to inspection forms for progress tracking.<br />To learn how to create and manage them, see the [Associating Tasks with Jobs and Projects](Zuper_Dashboard/Tasks#associating-tasks-with-jobs-and-projects) section.

<img src="https://mintcdn.com/zuperinc/FS3wvIzFdIIWiXVs/Zuper_Dashboard/tasks-4.png?fit=max&auto=format&n=FS3wvIzFdIIWiXVs&q=85&s=70067f1c92c8b0e1cf1cfa72aad6ab07" alt="Taskjobs" width="1920" height="869" data-path="Zuper_Dashboard/tasks-4.png" />

### Line Items

The Line Items section on the details page displays a consolidated view of the Parts & Services and Expenses sections. This section allows you to add, edit, and track all parts & services and expenses used during job execution.

<img src="https://mintcdn.com/zuperinc/9v682BF8430etEBz/Work_Order_Management/Jobs/line9.png?fit=max&auto=format&n=9v682BF8430etEBz&q=85&s=cd10dd3612414d245926704d03e5519d" alt="Line9 Pn" width="1898" height="911" data-path="Work_Order_Management/Jobs/line9.png" />

### Measurements

The **Measurements** tab lets you order, sync, and review property measurement data directly from a job — without switching between platforms. When you connect a measurement provider such as Hover, aerial roof data and 3D models flow straight into the job record, giving your team accurate figures before work begins.

To set up measurement providers and configure which data points appear here, see [Measurements and estimations](https://docs.zuper.co/Integrations/Measurements_and_estimations/Zuper_Hover).

### Add Notes

Job notes are comments or information added to a job over its course. These job notes add more context to the job. Your notes can be anything ranging from a simple text reminder to an image of the item, service, and video, or document.

<Frame>
  <img src="https://mintcdn.com/zuperinc/kOr1Z83r9mcs3Ddg/images/Notesnew1.png?fit=max&auto=format&n=kOr1Z83r9mcs3Ddg&q=85&s=a5128811a3dfa23f57489f2a3e521bc9" alt="Notesnew1" width="1902" height="868" data-path="images/Notesnew1.png" />
</Frame>

<Info>
  Info: To know more about how to add notes, see [Notes and Chats](https://docs.zuper.co/Work_Order_Management/Jobs/notes_and_chats)
</Info>

### Documents

<iframe width="650" height="350" src="https://drive.google.com/file/d/19j-r0AbiCwXhgLGrvZ4NotXbYFWyIcaU/preview" allow="autoplay" />

<Accordion title="Job document engine">
  Job documents is the built-in document engine inside Zuper. Use it to create contracts, waivers, completion certificates, and brochures, then attach them directly to a job record. Because every document lives inside its job, your team always knows where the paperwork is — and your customers always receive a signed copy.

  You build reusable templates once in **Settings**, apply them to any job, customize for that customer, and send for e-signature without leaving Zuper.

  ### Before you begin

  * Confirm you have admin access to your Zuper workspace.
  * Prepare any existing PDF files you plan to upload, for example, waiver forms or legal contracts.
  * Familiarize yourself with the Jobs module — documents are tied to individual job records.

  ### Set up document templates

  Before you can create documents inside jobs, you need at least one active template. Templates live in **Settings** and act as master copies — any edits you make at the job level never affect the original template.

  <Frame>
    **Navigation**: Settings → Modules → Jobs → Document Templates
  </Frame>

  The **Document Templates** list shows every template in your workspace, with columns for **Document Name**, **Status**, **Created By**, and **Created On**. When you are starting out, the list is empty.

  ### Create a new template

  1. Go to **Settings**.
  2. Select **Modules**, then **Jobs**, then **Document Templates**.
  3. Select **+ New Template**.
  4. Enter a name for your template in the **Template Name** field.
  5. Select **Create**.

  The template builder opens on a blank page. A welcome panel explains the three tool areas — **Block Tools**, **Inline Tools**, and **Block Tunes** — and closes when you select **Get Started**. From here, you build your document by adding pages and placing content.

  <Tip>
    Double-select any page name in the left panel to rename it. Drag pages up or down to reorder them.
  </Tip>

  <Note>
    You can create up to 100 templates in the Document Templates list.
  </Note>

  ***

  ## Add and configure pages

  Select **+ Add Page** at any time to insert a new page. A dialog offers three page types. You can mix and match all three within a single template.

  | Page type | When to use it |
  | - | - |
  | **Text Page** | Build custom content using the block editor — headers, paragraphs, tables, and formatted text. Add input fields and signature blocks directly onto the page. |
  | **Upload PDF** | Import an existing PDF — a waiver form, legal contract, or safety checklist. Zuper converts each page into an editable canvas so you can overlay fields and signature blocks. |
  | **Job Gallery** | Pull photos from the job's image gallery into your document. Choose a layout style and set whether at least one image is required before the document can be sent. |

  ### Text pages

  Text pages use the same block editor as the Proposal Layout builder. Enter `/` on the page to open the **Block Tools** menu — add headers, paragraphs, numbered lists, bullet lists, checkboxes, and tables.

  Select text to access **Inline Tools** for bold, italic, links, and other formatting. To move, convert, or delete a block, select the six-dot handle to its left and choose an option from **Block Tunes**.

  ### PDF pages

  After you upload a PDF, Zuper converts each page into an individual canvas. A 10-page PDF becomes 10 separate, editable pages in the left panel. After Zuper creates the pages, you can:

  * Upload and display pre-designed PDF documents from local storage or select an existing PDF from the [PDF Library](https://docs.zuper.co/Settings/Miscellaneous/pdf-library).
  * Reorder pages by dragging them in the left panel.
  * Show or hide individual pages.
  * Lock a page to prevent editing at the job level — select the **More** icon on the page to access **Page Settings**. Locked pages cannot be renamed, hidden, or edited by any user.
  * Drag and drop signature blocks, input fields, and dynamic variables onto any PDF page.

  <Note>
    Zuper maps each element to exact coordinates on the PDF page, preserving the layout exactly when it generates the document. Position signature blocks and input fields carefully before sending.
  </Note>

  ### Job gallery pages

  Job gallery pages pull photos directly from the job's image gallery — a natural fit for completion reports or damage assessments where photographic evidence matters. In the right panel you can:

  * Turn on the **Mandatory Images** toggle to require at least one image before the document can be sent.
  * Select a **Layout Style**: **Standard Grid** (three-column), **Wide Format** (two-column), **Side-by-Side** (before and after), or **Full Width** (single column).
  * Lock the page to prevent layout changes at the job level. The master template controls the photo selection toggle — users cannot enable or disable it.

  ***

  ## Add input fields and signature blocks

  Job documents lets you place fillable fields and e-signature blocks anywhere on a text page or a PDF page — for both your customer and your internal company authorization signer. Select the **Fields** icon on the right edge of the builder to open the **Fields** panel.

  ### Switch signer role

  The **Fields** panel defaults to **Customer**. Select the signer dropdown to switch to **Company authorization**. Fields you place while a signer is active are assigned to that signer and color-coded — orange for **Customer**, blue for **Company authorization**.

  ### Available fields

  | Field | Section | Configuration options |
  | - | - | - |
  | Signature | For Signing | Required toggle, Duplicate, Remove |
  | Text field | For Filling | Pre-filled text, Read Only toggle, Required toggle, Font size |
  | Checkbox | For Filling | Required toggle, Duplicate, Remove |
  | Date | For Filling | Required toggle, Font size, Duplicate, Remove |
  | Dropdown | For Filling | Add options, set a default value, Read Only toggle, Required toggle, Font size |

  <Note>
    In the text editor, each field occupies its own block. You cannot place two fields side by side on the same line — the editor is block-based. On PDF pages, drag to position fields precisely.
  </Note>

  ***

  ## Add dynamic variables

  Select the **Variables** icon (curly braces) on the right edge of the builder to open the **Variables** panel. Variables pull live job data into your document at generation time — work order numbers, customer names, organization details, and property information. The panel groups variables into five categories:

  * **Custom Variables** — Insert values from custom fields configured for the job. For a full reference on how Zuper structures and displays custom field data, see [Custom fields](https://docs.zuper.co/Settings/Modules/Jobs/Configuring-job-card-template#patterns).
  * **Job Variables**
  * **Customer Variables**
  * **Organization Variables**
  * **Property Variables**

  On text pages, search for a variable and select it to insert it inline inside a paragraph or header block. On PDF pages, drag a variable onto the page and position it where you want the value to appear. When Zuper generates the document for a specific job, it replaces each variable with the real value from that job record.

  ***

  ## Manage templates

  From the **Document Templates** list, select the three-dot actions menu on any template row to access the following options:

  | Action | What it does |
  | - | - |
  | **Edit Document** | Open the template builder and make changes. |
  | **Clone Document** | Create a copy of the template with a new name. |
  | **Deactivate Document** | Hide the template from the job-level template picker without deleting it. Deactivated templates remain in the list with an **Inactive** status. |

  ***

  ## Create a document from a job

  Once your templates are ready, apply one to a specific job and customize it for that customer. Every change you make at the job level stays with that document only — your master template in **Settings** remains untouched.

  1. Open the job you are working on.
  2. Select **Documents** from the left-hand navigation panel inside the job.
  3. Select **+ New Document**.
  4. The **Choose Document Template** picker opens. Select any template from the left panel to see a live preview on the right.
  5. Select **Use this template**.

  You are now in the document editor for this job. The document is named *template name — job name* in the top navigation bar. Edit the document as needed — add content, adjust fields, or remove pages — then select **Send for Signing** in the top-right corner when you are ready.

  <Info>
    Each job supports a maximum of 50 documents.
  </Info>

  ***

  ## Send a document for signing

  Select **Send for Signing** from the top-right corner of the document editor, or from the document's action menu in the **Documents** list. The **Send for Signing** dialog opens.

  <Info>
    If your document requires a company-authorized signer or internal user to sign the document before it is sent to the customer, and the logged-in user is the designated company signer, a **Sign Now** option appears on the document list, edit, and preview pages. This allows the internal signer to sign first and then send the document to the customer for signing.
  </Info>

  1. Review the customer name and email in the **Recipients** section. These are pre-filled from the job record. Update them here if you need to route this document to a different contact — this does not change the customer details on the job record itself.
  2. If the template includes a **Company Authorization** signer, their details appear below the customer row. Confirm or update the internal signer.
  3. Add an optional **Remark** (up to 280 characters). This note appears in the body of the signing email your recipients receive.
  4. Select **Send Document**.

  Each signer receives a unique email with their signing link.

  <Note>
    The **Resend** and **Copy Link** options appear when the document is in **Awaiting Signature** or **Partially Signed** status and you are the document creator.
  </Note>

  ***

  ## Track document status

  Every document moves through a defined lifecycle. Check the current status in the **Documents** list inside the job. A **Pending** indicator appears in the left navigation panel when action is required.

  ### Status definitions

  | Status | What it means |
  | - | - |
  | **Draft** | The document exists but has not been sent yet. |
  | **Sent** | The document was sent and contains no signature or input fields — no signing action is required from the recipient. |
  | **Awaiting Signature** | The document was sent and contains at least one signature or input field that has not yet been completed. |
  | **Partially Signed** | The document has multiple signers and at least one has signed, but not all. |
  | **Signed** | All required parties have signed and the document is complete. |
  | **Void** | The document has been manually voided and is no longer active. |
  | **Expired** | The document was sent for signing but was not completed within 30 days. It expired automatically. |

  ### Available actions by status

  Actions available to you change as the document moves through its lifecycle. Once a document reaches **Partially Signed** or **Signed** status, it cannot be voided or deleted.

  | Status | List view actions | Document preview actions |
  | - | - | - |
  | **Draft** | Send for Signing, Edit Document, Rename, Clone, Download PDF, Delete | Download, Print, Edit Document, Send for Signing |
  | **Sent** | Send Document, Edit Document, Rename, Clone, Download PDF, Delete | Download, Print, Edit Document |
  | **Awaiting Signature** | Void Document, Edit Document, Rename, Clone, Download PDF | Download, Print, Edit Document, Sign Now\* |
  | **Partially Signed** | Void Document, Rename, Clone, Download PDF | Download, Print, Sign Now\* |
  | **Signed** | Rename, Clone, Download PDF | Download, Print |
  | **Void** | Rename, Clone, Download PDF | Download, Print |
  | **Expired** | Rename, Clone, Download PDF, Delete | Download, Print |

  \*Sign Now is available when the logged-in user is the document creator and the internal signer has not yet signed.

  <Warning>
    If you edit a document in **Sent** or **Awaiting Signature** status, it moves back to **Draft**. Any signing links already sent to your customer and internal signer stop working immediately. You need to send the document to all signers again from the beginning.
  </Warning>

  ***

  ## Activity timeline and audit trail

  Every document has a built-in activity timeline. Expand any document row in the **Documents** list to see a time-ordered log of when the document was created, sent, viewed, and signed — and by whom.

  Upon signature, Zuper captures and stores the signer's IP address and browser information. This audit trail supports legal compliance and gives you a clear record if a signature is ever disputed.

  ***

  ## Resend and copy signing links

  For documents in **Awaiting Signature** or **Partially Signed** status, two quick actions are available from the expanded document row:

  | Action | What it does |
  | - | - |
  | **Resend** | Sends a new email with the signing link to the pending signer. |
  | **Copy Link** | Copies the signer's public link to your clipboard so you can share it manually. |

  ***

  ## Automated reminders

  Zuper automatically sends a follow-up email to signers who have not yet completed their step — three days after the document is sent.

  ***

  ## FAQs

  <AccordionGroup>
    <Accordion title="What happens if a document is not signed within 30 days?">
      The document automatically moves to **Expired** status. The signing link in the customer's email stops working. You can clone the expired document, which creates a new draft, and send it again.
    </Accordion>

    <Accordion title="Can I edit a document after sending it?">
      Yes, but with an important consequence. Editing a sent document moves it back to **Draft** status and the signing links stop working immediately. You need to send the document to all signers again from the beginning.
    </Accordion>

    <Accordion title="What is the difference between Sent and Awaiting Signature?">
      **Sent** means the document contains no signature or input fields — it is informational only, and no action is required from the recipient. **Awaiting Signature** means the document contains at least one field that must be completed before it is considered done.
    </Accordion>

    <Accordion title="Will editing this document change my master template in Settings?">
      No. Edits you make inside a job apply only to that specific document. Your master template in **Settings** stays exactly as you built it.
    </Accordion>

    <Accordion title="How many documents can I add to a single job?">
      Each job supports up to 50 documents. If you reach this limit, download or delete documents you no longer need to free up space.
    </Accordion>

    <Accordion title="What if the customer did not receive their signing email?">
      Expand the document row in the **Documents** list and select **Resend** to send a new email with the same link. You can also use **Copy Link** to share the link directly via another channel.

      If the issue continues, contact [Support](mailto:support@zuper.co).
    </Accordion>
  </AccordionGroup>

  ***

  ## Related articles

  * [Proposal layouts](/proposals/proposal-layouts)
  * [Job gallery](/jobs/job-gallery)
  * [Creating and managing jobs](/jobs/creating-managing-jobs)
  * [E-signature compliance and audit trails](/jobs/esignature-compliance)
</Accordion>

### Activity

The activity section on the details page displays a log or timeline of all actions and updates related to this job, helping you stay informed about recent changes and track the job's progress.

<img src="https://mintcdn.com/zuperinc/BXKbe3fjaF7UUliW/Work_Order_Management/Jobs/line11.png?fit=max&auto=format&n=BXKbe3fjaF7UUliW&q=85&s=2eff07221c83235cddfdb164740ceb92" alt="Line11 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/line11.png" />

### Zuper Connect

Zuper Connect is seamlessly integrated with the Jobs Module, enabling you to initiate conversations and connect with customers directly from the Job Details page. Every call and message is automatically linked to the specific job, providing complete communication context without the need to search through separate chat apps or call logs.

**Key Benefits:**

* **Seamless workflow** – Stay within the job record while communicating. No context switching means faster response times and fewer missed details.
* **Organized communication** – All calls and messages are tracked in one place, ensuring better visibility and more efficient collaboration.

### Using Zuper Connect from a Job

* Navigate to the **Job Details** page.
* In the left pane, click **Zuper Connect**.

<img src="https://mintcdn.com/zuperinc/0pIdsFsiew2rmoHm/images/Callcontext.png?fit=max&auto=format&n=0pIdsFsiew2rmoHm&q=85&s=317e63a438f332d90d5bf33633eb7c8b" alt="Callcontext Pn" width="1919" height="874" data-path="images/Callcontext.png" />

From this section, you can:

1. **Start a new conversation** with the customer using your configured Zuper Connect numbers.
2. **View existing conversation history** linked to the customer’s contact numbers (Work, Mobile, and Home), along with a complete timeline of all interactions associated with the job. This includes discussions, call details, and the team members involved, displayed in chronological order.
3. **Mark a conversation as read or unread** by clicking the **ellipsis (⋮) icon** on the right.

<img src="https://mintcdn.com/zuperinc/0pIdsFsiew2rmoHm/images/Callcontext1.png?fit=max&auto=format&n=0pIdsFsiew2rmoHm&q=85&s=d1a9cc18d0f7c03f7759457b44be1b91" alt="Callcontext1 Pn" width="1900" height="878" data-path="images/Callcontext1.png" />

This streamlined communication capability helps you provide timely updates to customers while ensuring that every interaction is logged and accessible for future reference.

For detailed instructions on how to view and manage conversations in Zuper Connect, please refer to the documentation here: [Viewing and Managing Conversation Details](/Zuper_Connect/View_Manage_Web_Conversations#viewing-and-managing-conversation-details)

<Note>
  **Note**: To view and manage conversations within the job details page, your organization must have **Zuper Connect** purchased and enabled.
</Note>

### Gallery

The **Gallery** tab brings every photo and video tied to a job into one organized, visual workspace. Instead of hunting through notes, checklists, or attachments, your team can find, filter, and download all job media from a single location — making documentation and quality reviews faster and easier.

To learn how to upload media, apply tags, create albums, and manage visibility, see [Jobs Gallery](https://docs.zuper.co/Work_Order_Management/Jobs/Jobs_gallery).

### Chats

The **Chats** tab gives your back-office team and field technicians a dedicated space to communicate directly within a job. Every message stays attached to the job record, so nothing gets lost in external apps or email threads, and everyone assigned to the job stays on the same page.

To learn how to send messages, add attachments, and manage job chat channels, see [Chat](https://docs.zuper.co/Chat/Messages).

## Right panel

You can view or associate various modules with the job in the right panel. These include organizations, properties, projects, quotes, invoices, and contracts. To associate a module, click the “**+**” icon next to the desired module and follow the prompts to complete the association.

<img src="https://mintcdn.com/zuperinc/BXKbe3fjaF7UUliW/Work_Order_Management/Jobs/line12.png?fit=max&auto=format&n=BXKbe3fjaF7UUliW&q=85&s=ab20223e39b21eff516d22e4fe45f868" alt="Line11 Pn" width="1920" height="912" data-path="Work_Order_Management/Jobs/line12.png" />

## More Actions

On the details page, in addition to viewing and updating details, you can also perform various actions such as printing, sharing, editing, cloning, or assigning a route to the job as needed.

### Print and Share

To print or share the job via email, click the “**Print/Share**” option from the top right corner of the job details page and choose either “***Print/Save as PDF***” or “***Share via email***” option.

### Clone job

The clone option allows you to quickly create a replica of an existing job, saving you time. The current job details will be duplicated onto a new job creation page, where you can make any necessary edits before saving.

### Add New Child Job

This option allows you to create a new child job while keeping the current job as the parent job. This helps maintain the relationship between the parent job and its associated child job, ensuring clear task management and organization.

<Note>
  **Note**: When a child job is associated with a parent job, parts and service line items from the parent job are automatically copied to the child job. There is currently no option to disable this behavior. If the copied line items are not applicable to the child job, they must be removed manually after the child job is created.
</Note>

### Update Description

This option allows you to update the job description. After updating the description, click the “**Update**” button to save the changes.

### Update Custom Fields

You can update custom fields for the job using the “**Update Custom Fields**” option.

### Assign to Route

The “Assign to Route” option allows you to associate the created job with an existing route, enabling users to complete the job along that route at the assigned date and time.

1. Choose the “**Assign to Route**” option from the dropdown menu under "**More Actions**". A sidebar appears.
2. Select the date and press Enter to fetch the route details. Choose the route and click the “**Assign to Route**” button.
3. The job is successfully added to the route.

## Job feedback

Job Feedback captures a customer’s quick sentiment at the end of a job and optionally a comment and signature. Ratings use a simple three-point scale:

* Happy
* Neutral
* Unhappy

### Collect feedback in the mobile app

1. Open the job and tap "Update status."
2. After the status update is complete or closed, the Feedback and Signature screen opens.
3. Tap a rating:
   * Happy
   * Neutral
   * Unhappy
4. Once the rating is given, tap **Proceed** to save and finish.

<img src="https://mintcdn.com/zuperinc/Cn7Gj1kyrBFOvJPh/images/Feed1.png?fit=max&auto=format&n=Cn7Gj1kyrBFOvJPh&q=85&s=b1bd7aef15c29a7d483500f5c9141f64" style={{ height:"690px",width:"350px" }} className="rounded-lg" width="1419" height="2796" data-path="images/Feed1.png" />

### View feedback in the web app

* Open the job details page.
* In the right panel, expand Job Feedback to see the emoji rating. If a comment was captured, it appears with the job activity/notes.

<img src="https://mintcdn.com/zuperinc/Cn7Gj1kyrBFOvJPh/images/Feed3.png?fit=max&auto=format&n=Cn7Gj1kyrBFOvJPh&q=85&s=c9046aa3a3867414499beec7d8cf2499" alt="Feed3 Pn" width="1817" height="821" data-path="images/Feed3.png" />

### **Changing the Job Category on an Existing Job**

When you edit an existing job and change the **Job Category**, Zuper displays the **Update Description and Tasks** dialog. This dialog lets you control what happens to the job's current description and tasks.

Choose one of the following options and click **Proceed**:

<img src="https://mintcdn.com/zuperinc/t5Ge0uu1AhBFQ2ss/images/appendtasks.png?fit=max&auto=format&n=t5Ge0uu1AhBFQ2ss&q=85&s=aece8aba25fa7fce33d9992c07a29fce" alt="Appendtasks" width="1920" height="869" data-path="images/appendtasks.png" />

* **Update description and tasks to selected category's default** — Replaces the job's current description and tasks with the default description and tasks configured for the newly selected job category. Use this option when you want the job to fully reflect the new category's standard setup.
  <Note>
    **Note**: The deleted tasks can be restored.
  </Note>
* **Retain current description and tasks** — Keeps the job's existing description and tasks exactly as they are. The job category is updated, but no changes are made to the description or task list. Use this option when your current tasks are still relevant and you do not want them overwritten.
* **Append tasks from selected category and update description** — Adds the default tasks from the newly selected category to the job's existing task list, and updates the description to match the new category's default. Existing tasks are preserved. Use this option when the new category introduces additional tasks that you want to track alongside your current ones.
  <Note>
    **Note:** This dialog appears only when you change the Job Category on an existing job.
  </Note>

### Delete

The “**Delete**” option is only available to admins by default. To enable Delete access for users with a Team Leader role, you can create a custom access role and turn on the “**Delete Job”** permission in the Jobs module. Once enabled, use the delete option under **"More Actions**" to delete the job.

<img src="https://mintcdn.com/zuperinc/1bNBR6xMzT6dAr4M/images/delet.png?fit=max&auto=format&n=1bNBR6xMzT6dAr4M&q=85&s=6bac573dfb93cdbd0e2c84e3d3ca36b2" alt="Delet Pn" width="1920" height="878" data-path="images/delet.png" />

## FAQs

<AccordionGroup>
  <Accordion title="Can I complete a job without completing the associated tasks in the job?">
    Yes. If the **Allow managing tasks in completed jobs** setting is turned on (**Settings → Modules → Jobs → General Settings**), you can mark a job as completed even if tasks are still open. You can continue to create, edit, assign, clone, and delete tasks even after Job completion.

    If the above setting is not enabled, then:

    <Note>
      If your job has service tasks, you must resolve all tasks before you can move the job to **Completed** or **Closed**. If any task is still open, Zuper blocks the status update and displays an error. Go to the [**Service Tasks**](https://docs.zuper.co/Work_Order_Management/Jobs/Creating_and_managing_service_tasks#d-update-service-task-status) tab on the job details page to check progress and resolve any remaining tasks.
    </Note>
  </Accordion>

  <Accordion title="Why did a dependent status disappear from the Update Status dropdown?">
    This usually happens when the status it depends on was deleted and then recreated with the same name. Zuper links dependencies to the specific status record, not just its name — so a job still sitting in the old status won't recognize the recreated one as its parent, and the dependent status drops out of the dropdown.

    **To fix it:** Open the affected job and update its current status to the newly recreated status. The dependent status will then reappear as an option.

    **To prevent it:** Edit an existing status's name or settings instead of deleting and recreating it.
  </Accordion>
</AccordionGroup>


## Related topics

- [Managing the Contact Detail](/Client/Contact/Manage_contact.md)
- [Managing the organization detail](/Client/Organization/Managing_Organization.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.