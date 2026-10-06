---
title: "AI Field Agent"
source: https://docs.zuper.co/Zuper_Mobile_Apps/complete-checklist-with-field-agent.md
fetched_at: 2026-10-06T13:30:20.358Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# AI Field Agent

Field Agent is Zuper's built-in voice AI for job checklists.

When you update a job status and a checklist appears, you can launch Field Agent instead of filling out each field manually. Speak naturally, the way you'd explain the job to a colleague. Field Agent listens, understands your response, and maps every answer to the right field automatically. Your entries are saved as a draft throughout the session, so nothing's lost if you get interrupted.

<Note>
  **Note**: Field Agent is currently in Beta. We recommend reviewing your captured answers before submitting.
</Note>

<iframe width="350" height="660" src="https://drive.google.com/file/d/19UK4oa4h6dqOjSInZlisq2eskpYfa2i5/preview" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Before you begin

* Ensure the Field Agent feature is enabled for your account. If it isn't, contact [support@zuper.co](mailto:support@zuper.co) to have it enabled.
* Grant the Zuper mobile app permission to access your microphone and camera. Field Agent requires both permissions to work.
* Field Agent works with single-page checklists only. If your checklist has multiple pages, you must complete it manually.

## Launching Field Agent

Field Agent is available when a checklist appears during a job status update.

1. When the checklist screen appears, locate the **Field Agent** icon in the bottom-right corner of the screen.

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-01-icon.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=6e3bb4d04227deecb55120246b44cee7" alt="Field Agent icon in the bottom-right corner of the checklist screen" data-path="images/field-agent-01-icon.png" />

2. Tap the icon. The Voice Mode panel slides up.
3. Field Agent begins guiding you through the checklist questions one by one.

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-02-voice-mode.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=54af8fb0cf29d519fc32d150731fa978" alt="Voice Mode panel open and initialising" data-path="images/field-agent-02-voice-mode.png" />

## Answering checklist questions

Once Field Agent is initialised, it reads each question and waits for your spoken response. You don't need to tap any field. Field Agent captures your answer and fills it in automatically.

1. Listen to the question. Field Agent may group related questions together and ask you to answer them at the same time.
2. Speak your answer clearly. The status bar at the bottom shows **Listening** when Field Agent is ready to capture your voice.
3. Your spoken answer appears in a speech bubble on screen. Field Agent processes it and populates the relevant checklist field.
4. The progress counter at the top - for example, **3/4 answered** - updates after each answer is accepted.
5. Field Agent moves on to the next question automatically.

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-03-answering.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=687e25fb739e3d95ad0e0a7d3e867bb3" data-path="images/field-agent-03-answering.png" />

You can answer one question at a time or cover several in a single response. Field Agent is smart enough to map each answer to the right field.

## What can Field Agent handle?

Field Agent supports most checklist field types, making it easy to capture information using voice.

**Supported field types:**

* Yes / No questions
* Short text answers
* Multiple choice options
* Numbers (such as quantities or measurements)
* Photos
* Product Lookup

<Note>
  **Note**: Field Agent doesn't support file uploads, signatures, tables, barcodes, video, walkthrough video, or custom field dependencies. Complete these fields manually on the checklist form after your session.
</Note>

## How Product Lookup works

When the checklist includes a Product Lookup field, speak the name of the part or product. Field Agent searches your inventory, reads back the matches it found along with pricing, and waits for you to confirm which item you want and how many units. Once you confirm, Field Agent fills in the product name, SKU, quantity, and price automatically.

<Note>
  **Note**: Product Lookup is the only lookup type Field Agent supports. User, Asset, and Quote lookups aren't supported and must be filled in manually.
</Note>

## How photo fields work

Photo questions are grouped toward the end of your session. Field Agent opens the camera when it's time to capture each photo. Take the shot and Field Agent confirms it's saved before moving on.

If your checklist has multiple photo fields, Field Agent works through them one by one. You don't have to complete all of them in one go. At any point, you can tell Field Agent to go back to the checklist questions and return to the remaining photos later.

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-04-photo.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=8cf08db98999a9f94b999eda56f5b325" data-path="images/field-agent-04-photo.png" />

## Controls during your session

You have quick controls on the Voice Mode panel at all times.

| Control | Icon | What it does |
| - | - | - |
| **Checklist icon** | <Icon icon="list-timeline" /> | Switches to a structured view showing all answered and unanswered fields |
| **Camera icon** | <Icon icon="camera" /> | Opens your device's camera to capture a photo |
| **Microphone icon** | <Icon icon="microphone" /> | Mutes or unmutes your microphone |

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-05-controls-1.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=58016433c11bf93f595554586651f94f" className="dark:hidden" data-path="images/field-agent-05-controls-1.png" />

<img width="350" height="690" src="https://mintcdn.com/zuperinc/ekOpYeTtMMM4cN2s/images/field-agent-05-controls.png?fit=max&auto=format&n=ekOpYeTtMMM4cN2s&q=85&s=c6bf039d50090f4b73eba16ff3050984" className="hidden dark:block" data-path="images/field-agent-05-controls.png" />

<Tip>
  **Tip**: You can tap the **X** in the top-left corner at any time to close Field Agent. Your progress is automatically saved as a draft, so no answers are lost. You can reopen Field Agent anytime to continue from where you left off.
</Tip>

## Prefer to answer by looking at the questions?

Tap the **Checklist icon** at any time during your session. This switches you to a structured view of all the checklist fields, answered and unanswered. With your captured answers already filled in. You can read through the questions at your own pace and fill in any remaining fields directly, without waiting for the Field Agent to read them out.

This is useful when you'd rather review the full checklist visually or complete a few fields manually without interrupting the voice session.

<img width="350" height="690" src="https://mintcdn.com/zuperinc/_oiHiw-LKD1pZ-Iv/images/Agentchecklist.png?fit=max&auto=format&n=_oiHiw-LKD1pZ-Iv&q=85&s=9e578b80d4809a37d8df3171add89864" data-path="images/Agentchecklist.png" />

## Reviewing and submitting

When you've finished answering all the questions:

1. Tap the **Checklist icon** to review all captured answers.
2. Complete any unsupported fields manually.
3. Tap **Submit** when you're ready.

Your job status updates automatically once the checklist is submitted.

<Note>
  Always review your answers before submitting. Field Agent is AI-powered and may occasionally make mistakes.
</Note>

## FAQs

<AccordionGroup>
  <Accordion title="Does Field Agent work for all checklists?">
    No. Field Agent works with single-page checklists only. If your checklist has multiple pages, you must complete it manually.
  </Accordion>

  <Accordion title="Do I have to wait for each question to finish before I answer?">
    No. You can speak freely and cover multiple questions at once. Field Agent understands natural language and maps each answer to the correct field automatically.
  </Accordion>

  <Accordion title="What lookup types does Field Agent support?">
    Product Lookup only. User, Asset, and Quote lookups aren't supported and must be filled in manually on the checklist form.
  </Accordion>

  <Accordion title="What if Field Agent captures an answer incorrectly?">
    Tap the Checklist icon to review your answers, correct any field manually, and submit when you're ready.
  </Accordion>

  <Accordion title="What happens if I close Field Agent before submitting?">
    Your answers are saved as a draft. Your job status won't update until you submit the completed checklist.
  </Accordion>
</AccordionGroup>


## Related topics

- [AI CSR Agent](/Zuper_Connect/CSR-Agent.md)
- [Marketplace agents](/Zuper_Sense/Agent_Studio/Marketplace.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.