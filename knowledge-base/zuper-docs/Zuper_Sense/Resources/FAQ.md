---
title: "Zuper Sense FAQ"
source: https://docs.zuper.co/Zuper_Sense/Resources/FAQ.md
fetched_at: 2026-10-06T13:29:37.002Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Zuper Sense FAQ

> Common questions about Zuper Sense: data privacy, answers, Radars and agents.

Answers to the questions we are asked most about Zuper Sense. If yours isn't here, use the feedback button inside Sense or contact [Support](mailto:support@zuper.co).

## Data and privacy

<AccordionGroup>
  <Accordion title="Does the AI provider train on my data?">
    No. Your data is not retained or used by the underlying AI provider to train any model.
  </Accordion>

  <Accordion title="Could my company's data surface through an employee's personal AI account (like ChatGPT or Gemini)?">
    No. Zuper Sense runs entirely within Zuper's own environment. There is no connection between Sense and any personal AI account, so your data has no path to surface there.
  </Accordion>

  <Accordion title="Is my data isolated to my own Zuper environment?">
    Yes. Your data stays within your Zuper environment and is only used to generate the answer to your specific request. It isn't shared across accounts or used for any other purpose.
  </Accordion>

  <Accordion title="Can Sense show me records I'm not allowed to see?">
    No. Sense answers from the records you already have access to in Zuper.
  </Accordion>
</AccordionGroup>

## Asking and answers

<AccordionGroup>
  <Accordion title="What can I ask about?">
    Every module on the [**Supported Modules**](/Zuper_Sense/Reference/Supported_Modules) page, plus questions about how to use Zuper itself. Ask in plain language; you don't need to phrase anything a particular way.
  </Accordion>

  <Accordion title="Why did Sense ask me a question back instead of answering?">
    When a question could mean more than one thing, Sense asks a [**clarifying question**](/Zuper_Sense/Ask_Sense/How_Answers_Work#clarifying-questions) rather than guessing. Pick one of the options or type your own answer, and it continues.
  </Accordion>

  <Accordion title="Why is a reasoning answer slower than a normal one?">
    A "why" question makes Sense read the connected records one at a time instead of running a single lookup. The thinking time is shown above the answer.
  </Accordion>

  <Accordion title="Sense says something is missing rather than answering. What does that mean?">
    Sense answers from the data in your account. If a job has no purchase order or a delay has no note, it tells you rather than filling the gap with a guess.
  </Accordion>

  <Accordion title="Can I get the same answer again later without re-asking?">
    Yes. [**Pin it to a Radar**](/Zuper_Sense/Ask_Sense/How_Answers_Work#pin-an-answer-to-a-radar). The card reads your live data, so it stays current.
  </Accordion>

  <Accordion title="Do my threads stay private?">
    Yes. Your threads are yours. Sharing happens through a Radar, not through a thread.
  </Accordion>
</AccordionGroup>

## Radar

<AccordionGroup>
  <Accordion title="Who can create and change a Radar?">
    Admins. Everyone else can open the Radars shared with them, read them, and leave one they don't want.
  </Accordion>

  <Accordion title="How many Radars and cards can I have?">
    You can own up to 20 Radars, and each Radar holds up to 50 cards. Deleting a Radar frees a slot.
  </Accordion>

  <Accordion title="What are Sales Radar and Finance Radar?">
    Ready-made Radars from Zuper, marked **Provided by Zuper**, that appear under **SHARED WITH ME** with no setup. Every admin can edit them; everyone else with access can read them. Nobody can delete or re-share them.
  </Accordion>

  <Accordion title="What happens to people I remove from a Radar?">
    That grant ends immediately, and they are not notified. They keep access if the Radar is still set to **Everyone** or if they are in another team you granted, so switch to **Only me** to withdraw it from everybody. Only the Radar's owner can change who it is shared with.
  </Accordion>
</AccordionGroup>

## Agents and knowledge

<AccordionGroup>
  <Accordion title="Do I have to write instructions for a Marketplace agent?">
    No. Instructions are optional. A Marketplace agent works once its required configuration is filled in. Add custom instructions only when you want to change the output.
  </Accordion>

  <Accordion title="Why isn't my Knowledge Base entry changing Sense's answers?">
    An entry only takes effect once it is **Published** and [**linked to an agent**](/Zuper_Sense/Agent_Studio/Knowledge_Base#link-an-entry-to-an-agent). A draft entry is ignored.
  </Accordion>

  <Accordion title="How big can a Knowledge Base file be?">
    Uploads are limited to 7 MB per file. You can also write an entry directly or store a link as a reference.
  </Accordion>

  <Accordion title="Where do agent updates arrive?">
    In the Zuper Chat channel or at the email address you configured under **Tools**, or both. Agent updates in Zuper Chat are available on the web app only.
  </Accordion>

  <Accordion title="Can I stop an agent without losing its setup?">
    Yes. Select **Pause agent**. It stops responding to its triggers until you select **Resume agent**.
  </Accordion>
</AccordionGroup>


## Related topics

- [Knowledge Base](/Zuper_Sense/Agent_Studio/Knowledge_Base.md)
- [Zuper Help](/Zuper_Sense/Ask_Sense/Zuper_Help.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.