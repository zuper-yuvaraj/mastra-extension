---
title: "Agent anatomy"
source: https://docs.zuper.co/Zuper_Sense/Agent_Studio/Agent_Anatomy.md
fetched_at: 2026-10-06T13:29:35.668Z
---
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.zuper.co/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent anatomy

> The parts every Zuper Sense agent has, what each one does, and how they work together.

Every agent in Zuper Sense is constructed using a standard set of structural components. Understanding how these components function helps you quickly identify where to adjust settings and customize agent behavior.

<Frame>**Navigation**: *Sense -> Agent Studio -> My agents*</Frame>

<img src="https://mintcdn.com/zuperinc/KXanG3elEX9FeuQq/images/agent_anatomy.png?fit=max&auto=format&n=KXanG3elEX9FeuQq&q=85&s=c6525f22f14a585c6e1c743943132026" alt="Agent Anatomy" width="2720" height="1600" data-path="images/agent_anatomy.png" />

## Name and description

The name and description say what the agent is for. They are what you and your colleagues see on the **My agents** card and at the top of the agent's page.  Write descriptions clearly so team members can easily identify which agent suits their operational needs.

## Configuration and instructions

**Configuration** holds the settings specific to that agent, the cities a Weather Agent forecasts and the Google listing a Reputation Agent monitors. Required fields are marked with an asterisk (\*) and must be completed before deployment.

**Custom Instructions** sits in the same section and holds two things:

* The instructions Zuper sets, which describe the agent's job step by step and reference the tools it uses.
* Whatever you add, which tailors the output, tone, what to emphasise, and thresholds that matter to your business.

<Note>**Note**: Custom instructions are optional. Marketplace agents function out of the box once all required configuration fields are completed.</Note>

## Triggers

A trigger is what starts the agent. Most Marketplace agents ship with a **Scheduled** trigger: pick **Every hour**, **Every day**, **Every week**, **Every month**, **Weekdays** or **Custom**, set the time, and the agent runs on that cadence in the timezone shown. **Run now** runs the agent once, on demand, without touching the schedule; it is available once the agent is **Active**.

## Knowledge and Skills

**Knowledge** is the set of [**Knowledge Base**](/Zuper_Sense/Agent_Studio/Knowledge_Base) entries the agent reads before it answers; your terminology, policies and calculation rules. Add entries with **Add knowledge** and remove them with **Remove**.

[**Skills**](/Zuper_Sense/Agent_Studio/Skills) are reusable instructions for a repeatable task that you hand to an agent instead of retyping them.

## Tools

Tools are what the agent can act with. **Get Weather** fetches a forecast, **Fetch Google Reviews** pulls new reviews, **Send Email** sends the digest, and **Send Message (Chat)** posts to a Zuper Chat channel. A tool that still needs setting up is flagged **(needs setup)** in the instructions, and **Configure** on the tool row is where you finish it.

<Warning>Removing a tool takes away the ability it depends on. An agent whose **Send Message (Chat)** tool is removed stops posting to chat, even though its instructions still describe it.</Warning>

## Marketplace agents versus custom agents *(Coming soon)*

| Component | Marketplace agent | Custom agent *(Coming soon)* |
| - | - | - |
| Name and description | Defined by Zuper | Fully customizable |
| Configuration | Fill in predefined Zuper fields | Custom schema |
| Instructions | Zuper's instructions + user additions | Built from scratch |
| Triggers | Managed or configurable schedule | Fully custom triggers |
| Knowledge | Link/unlink custom KB entries | Fully customizable |
| Skills | Preset agent skills | Fully customizable |
| Tools | Pre-bundled integration tools | Fully customizable |


## Related topics

- [Agent Studio overview](/Zuper_Sense/Agent_Studio/Overview.md)
- [Marketplace agents](/Zuper_Sense/Agent_Studio/Marketplace.md)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.