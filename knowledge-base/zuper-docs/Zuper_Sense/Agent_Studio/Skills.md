---
title: "Skills"
source: https://docs.zuper.co/Zuper_Sense/Agent_Studio/Skills.md
fetched_at: 2026-10-06T13:29:36.520Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Skills

Skills are reusable, invokable instructions that tell Sense or an agent exactly how to do a task: things like preparing a daily brief, summarizing a proposal for a homeowner, or checking which customers are overdue on payments. Instead of typing out the same detailed request every time, you just run the Skill, and Sense or an agent follows those instructions to do the task.

Skills are configured in Agent Studio, and can be run directly in Sense chat using a `/command`, or attached to an agent. Zuper provides a set of ready-to-use Skills out of the box, and you can also create your own.

## Skills available out of the box

Zuper provides these Skills by default:

* **Daily Brief**: A personalized daily overview of jobs, finance, proposals, and tasks, with key watchouts highlighted.
* **1:1 Meeting Prep**: A concise manager brief for a 1:1 with a specific rep, covering job performance, commissions, and call coaching.
* **Proposal Summary**: A plain-language homeowner summary of a proposal, ready to send by email or text.
* **Collections Risk Check**: A review of overdue invoice patterns for one customer or company-wide, flagging accounts that may need follow-up.
* **Profitability Recap Report**: A short explanation of how profitability moved for a period and what likely drove the change.
* **Quote Pipeline Health Report**: A weekly view of which open quotes are aging normally and which look stalled or at risk.

<img src="https://mintcdn.com/zuperinc/kXhBYRRw1epT4be-/images/image-12.png?fit=max&auto=format&n=kXhBYRRw1epT4be-&q=85&s=012f3cf5c18d04852fe272e8762f5ecf" alt="Image" width="3840" height="1926" data-path="images/image-12.png" />

## Create a custom Skill

You can create your own Skills to match how your team works.

1. Go to **Agent Studio > Skills**.
2. Select **New Skill**.
3. Give it a name. This becomes its slash command (for example, "Job Readiness Check").
4. Add a short description, and write the instructions for what the Skill should do.
5. **Save**. The Skill is now available to run.

<img src="https://mintcdn.com/zuperinc/kXhBYRRw1epT4be-/images/image-13.png?fit=max&auto=format&n=kXhBYRRw1epT4be-&q=85&s=aa315e02186ddc8bd4503423b49e0777" alt="Image" width="3840" height="1926" data-path="images/image-13.png" />

<Info>
  Skills you create are specific to your account. They won't appear for other Zuper customers, and other customers' Skills won't appear for you.
</Info>

## Attach a Skill to an agent

Skills can also be attached to a custom agents, so that agent knows how to do that specific task whenever it's relevant.

1. Open the custom agent in **Agent Studio**.
2. Go to its **Skills** section.
3. Select the Skill you want to attach from your available Skills.
4. Save the agent.

Once attached, the agent follows that Skill's instructions as part of how it responds, so you don't need to invoke the slash command separately for that agent to use it.

<Note>
  **Note**: Skills can't be attached to Zuper-provided agents (like Weather Agent or Reputation Agent). If you want to customize how one of these agents behaves, add instructions directly to that agent instead.
</Note>

## Run a Skill with a slash command

* Type `/` in the Sense chat input, on the home screen or inside a thread.
* A list of available Skills appears, each with its name and a short description.
* Keep typing to filter the list, or use the arrow keys to move through it.
* Select a Skill to insert it, then press enter to run it.

<Info>
  If more information is needed to complete the Skill (for example, which customer, which time period, or which proposal), you'll be asked before the result is generated.
</Info>

<Frame>
  <img src="https://mintcdn.com/zuperinc/kXhBYRRw1epT4be-/images/image-14.png?fit=max&auto=format&n=kXhBYRRw1epT4be-&q=85&s=d818b23f776ee0275b5220005f7540fa" alt="Image" width="3840" height="1926" data-path="images/image-14.png" />
</Frame>

<Frame>
  <img src="https://mintcdn.com/zuperinc/kXhBYRRw1epT4be-/images/image-15.png?fit=max&auto=format&n=kXhBYRRw1epT4be-&q=85&s=63780cded54b485a8a2aff7330b077c2" alt="Image" width="3840" height="3085" data-path="images/image-15.png" />
</Frame>

<Note>
  **Note**: If more information is needed to complete the Skill (for example, which customer, which time period, or which proposal), you'll be asked before the result is generated.
</Note>


## Related topics

- [Configuring Skillsets ](/Settings/Modules/Jobs/Configuring-skillsets.md)
- [Managing your users](/Settings/Users_Teams/Users_Creation.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.