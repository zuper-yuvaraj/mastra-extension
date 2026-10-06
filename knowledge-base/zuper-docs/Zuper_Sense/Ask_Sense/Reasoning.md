---
title: "Reasoning"
source: https://docs.zuper.co/Zuper_Sense/Ask_Sense/Reasoning.md
fetched_at: 2026-10-06T13:29:33.889Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Reasoning

> Ask Zuper Sense why something happened, and it traces connected records to explain what it found.

Sense helps you move beyond identifying **what happened** and investigate **why it happened**. Ask about a specific job, invoice, customer, or quote, and Sense traces the related records and explains the factors behind the outcome.

## What you can ask

* *Why was job #1234 delayed?*
* *Give me a financial summary of job #1234.*
* *Is customer ABC Roofing a payment risk?*
* *Does the purchase order for job #1234 match what was invoiced?*

You can ask these questions in the same thread as your broader business questions. Sense keeps the context, so you can move from a list of delayed jobs to asking why one of them was delayed.

## What a reasoning answer looks like

A reasoning answer starts with an explanation, then shows the records behind it. Depending on the question, this may include a status timeline, other contributing signals, and a note about how strongly the records support the explanation.

<Frame>
  <img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/Zuper_Sense/Ask_Sense/Reasoning/Reasoning.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=fb53f435262ed68a328b2f5710f71f5c" alt="Sense explaining why a job was delayed: a summary naming a 63-hour QC hold, a detail table, a status timeline and a table of other contributing signals" width="1400" height="1505" data-path="images/Zuper_Sense/Ask_Sense/Reasoning/Reasoning.png" />
</Frame>

The usual [**answer actions**](/Zuper_Sense/Ask_Sense/How_Answers_Work#actions-on-an-answer) apply to the reasoning answer, too.

## What Sense does and doesn't claim

Sense uses the data already in your account. If a relevant record or explanation is missing, such as a purchase order or a note about a delay, Sense identifies the gap instead of guessing.

<Note>
  **Note**: A reasoning answer may take longer than a straightforward data question because Sense reviews connected records. You can see its thinking <Icon icon="clock-four-thirty" color="#3B82F6" /> time above the answer.
</Note>

Include a job number, invoice number, or customer name in your question to help Sense find the right record.

<Tip>
  **Tip:** You can also use a <Icon icon="slash-forward" color="#010101" /> command to invoke a Skill. See [Skills ](/Zuper_Sense/Agent_Studio/Skills)to learn more.
</Tip>


## Related topics

- [Zuper Sense FAQ](/Zuper_Sense/Resources/FAQ.md)
- [Changelog](/Zuper_Sense/Changelog.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.