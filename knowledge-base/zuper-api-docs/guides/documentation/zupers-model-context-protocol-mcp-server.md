---
updatedAt: 2026-08-03T11:38:00.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Zuper's Model Context Protocol (MCP) Server

Zuper offers a Model Context Protocol (MCP) server enabling AI assistants and other applications to access the Zuper platform from beyond the Zuper interface. This server provides a way to interact with your Zuper workspace through various AI platforms and tools that support MCP.

<br />

##

## Available Tools

Zuper MCP server offers 290 tools across 28 modules including:

### Job Tools

* list\_jobs - List and filter jobs in Zuper with advanced filtering capabilities
* get\_job - Get details of a specific job by UID
* create\_job - Create a single one-off job
* update\_job - Update an existing job
* update\_job\_status - Transition a job forward to a new status
* rollback\_job\_status - Revert a job to a previous status
* assign\_job - Assign or reassign technicians/teams to a job
* reschedule\_job - Change when a job is scheduled
* create\_revisit\_job - Create a follow-up (revisit) job linked to a parent job
* create\_child\_job - Create a new sub-job under an existing parent job
* set\_parent\_job - Link an existing job to a parent job
* create\_recurring\_job\_rule - Create a recurring job series not linked to an asset
* convert\_sr\_to\_job - Convert a service request into a job
* list\_job\_statuses - Get job status definitions for a job category
* list\_job\_categories - List all job categories with UIDs
* get\_job\_category - Get details of a specific job category by category UID
* get\_assisted\_scheduling - Get AI scheduling slots & technician availability
* get\_job\_notes - Get notes for a specific job by job UID with optional sorting
* add\_job\_note - Add a note to a job
* update\_job\_note - Edit the text of an existing job note
* get\_service\_tasks - List service tasks (checklist items) on a job
* create\_service\_task - Add service tasks to a job
* log\_timelog - Record a clock-in/clock-out event on a job
* get\_job\_timelogs - Get full timelog history for a job
* get\_job\_timelog\_summary - Get summarised timelog by user and type
* update\_job\_custom\_fields - Set/update custom field values on a job
* update\_job\_address - Change service or billing address of a job
* get\_job\_line\_items - Get parts/services added to a job
* update\_job\_line\_items - Add or replace parts/services on a job
* send\_job\_card - Share a job card PDF with a customer via email
* list\_job\_templates - List job card PDF report templates
* create\_job\_invoice - Generate an invoice linked to a job
* get\_module\_filters - Get valid filter fields for the jobs module
* log\_job\_expense - Record a field expense against a job
* get\_unscheduled\_jobs - List unscheduled jobs (dispatcher queue)
* check\_schedule\_conflict - Check whether a technician has a scheduling conflict
* list\_recurring\_jobs - List recurring job templates
* list\_tags - List tags for any/all modules
* list\_business\_units - List trade types (business units)

### Customer / Organization / Property Tools

* list\_customers - List or filter customers
* get\_customer - Get full customer profile by UID
* create\_customer - Create a new customer record
* find\_or\_create\_customer - Find a customer by email/name or create one
* update\_customer - Update an existing customer
* activate\_customer - Activate or deactivate a customer
* get\_customer\_summary - Get summary counts for a customer
* update\_customer\_accounts - Update receivables and credits for a customer
* list\_customer\_categories - List all customer categories
* create\_customer\_category - Create a new customer category
* search\_customers - Full-text search across customer name/email/phone/company
* update\_customer\_custom\_fields - Set/update custom field values on a customer
* add\_customer\_attachment - Attach a file to a customer record
* list\_properties - List or filter service properties/locations
* get\_property - Get full details of a single property
* create\_property - Create a new property (service location)
* update\_property - Update a property record
* activate\_property - Activate or deactivate a property
* get\_property\_summary - Get summary counts for a property
* list\_organizations - List or filter organizations
* get\_organization - Get full details of a single organization
* create\_organization - Create a new organization
* update\_organization - Update an existing organization
* activate\_organization - Activate or deactivate an organization
* get\_organization\_summary - Get summary counts for an organization
* find\_or\_create\_organization - Find an org by name or create one
* link\_customer\_to\_org - Add/remove a customer contact from an organization
* assign\_organization - Assign/unassign users to an organization
* list\_organization\_contacts - List customer contacts for an organization

### Invoice Tools

* list\_invoices - List and filter invoices in Zuper using advanced filter rules
* get\_invoice - Get details of a specific invoice by ID
* create\_invoice - Create a standalone invoice
* update\_invoice - Update an existing invoice
* update\_invoice\_status - Transition an invoice to a new status
* send\_invoice - Send an invoice to a customer via email
* add\_invoice\_note - Add a text note to an invoice
* convert\_estimate\_to\_invoice - Convert an estimate into an invoice
* get\_invoice\_statement - Get invoice statement for a customer/organization
* get\_account\_receivables - Get accounts receivable aging summary
* list\_payment\_transactions - List or filter payment transactions
* get\_payment\_transaction - Get full details of a single payment transaction
* list\_payment\_modes - List all payment modes
* list\_payment\_terms - List all payment terms
* list\_tax\_rates - List all tax rates
* list\_tax\_groups - List all tax groups
* create\_tax - Create a new tax rate
* update\_tax - Update an existing tax rate
* create\_tax\_group - Create a new tax group
* update\_tax\_group - Replace a tax group's rates
* list\_discount\_fees - List discount and fee templates
* list\_document\_templates - List document/PDF templates for sending
* list\_email\_templates - List pre-built email body templates
* list\_packages - List or filter invoice/estimate packages

### Estimate Tools

* list\_estimates - List and filter estimates in Zuper using advanced filter rules
* get\_estimate - Get details of a specific estimate by ID
* create\_estimate - Create a new quote/estimate
* update\_estimate - Update an existing estimate
* update\_estimate\_status - Transition an estimate to a new status
* send\_estimate - Send an estimate to a customer via email
* list\_proposal\_templates - List proposal templates
* record\_estimate\_deposit - Record a deposit collection against an estimate
* recompute\_estimate\_cpq - Recompute CPQ formulas on an estimate

### Service Contract Tools

* list\_service\_contracts - List or filter service contracts
* get\_service\_contract - Get full details of a single service contract
* create\_service\_contract - Create a new service contract
* update\_service\_contract - Update an existing service contract
* renew\_service\_contract - Renew (extend) a service contract
* send\_contract\_to\_customer - Email a service contract to the customer
* approve\_service\_contract - Approve or reset approval status of a contract
* list\_contract\_templates - List service contract document templates

### Service Request Tools

* list\_service\_requests - List or filter service requests
* get\_service\_request - Get full details of a single service request
* create\_service\_request - Create a new service request
* update\_service\_request - Update a service request
* update\_service\_request\_status - Transition a service request to a new status
* list\_request\_statuses - List configured service request statuses
* list\_request\_sources - List configured request sources

### Service Task Tools

* create\_service\_tasks - Create one or more service tasks
* list\_service\_tasks - List or filter service tasks
* get\_service\_task - Get full details of a single service task
* get\_service\_task\_count - Get task counts grouped by status
* update\_service\_task - Update a service task
* update\_service\_task\_status - Update the status of a service task
* assign\_service\_task - Assign/unassign users from a service task
* create\_service\_task\_master - Create a reusable service task master template
* list\_service\_task\_masters - List all service task masters
* get\_service\_task\_master - Get full details of a single service task master
* update\_service\_task\_master - Update a service task master template
* get\_job\_category\_service\_tasks - Get service task config for a job category
* set\_job\_category\_service\_tasks - Create/replace service task config for a category

### Asset / PPM / Inspection Tools

* list\_assets - List or filter assets
* get\_asset - Get full details of a single asset
* create\_asset - Create a new asset
* update\_asset - Update an existing asset
* update\_asset\_status - Update an asset's status
* get\_asset\_history - Get history records for an asset
* get\_asset\_summary - Get 360° summary of transactions linked to an asset
* create\_asset\_action - Record a lifecycle event on an asset
* assign\_asset\_users - Assign/unassign users from an asset
* link\_asset\_to\_customer - Assign/reassign an asset to a customer
* list\_asset\_categories - List all asset categories
* create\_asset\_category - Create a new asset category
* update\_asset\_category - Update an asset category
* list\_asset\_templates - List all asset templates
* get\_asset\_template - Get full details for a single asset template
* list\_inspection\_form\_definitions - List/filter asset inspection form definitions
* get\_inspection\_form\_definition - Get a single inspection form definition
* update\_inspection\_form - Update an inspection form
* add\_inspection\_form\_field - Add a question/field to an inspection form
* update\_inspection\_form\_field - Update an individual inspection form field
* reorder\_inspection\_form\_fields - Reorder fields in an inspection form
* submit\_inspection\_form - Submit a filled inspection form against an asset
* get\_inspection\_form\_submissions - Get history of inspection form submissions
* list\_ppm - List/filter Planned Preventive Maintenance schedules
* get\_ppm - Get full details for a single PPM plan
* create\_ppm - Create a PPM plan for an asset
* update\_ppm - Update a PPM plan

### Project Tools

* list\_projects - List or filter projects
* get\_project - Get full details of a single project
* create\_project - Create a new project
* update\_project - Update an existing project
* add\_job\_to\_project - Link an existing job to a project
* remove\_job\_from\_project - Unlink a job from a project
* list\_project\_categories - List all project categories
* create\_project\_category - Create a new project category

### Product / Inventory / Pricelist Tools

* list\_products - List or filter products
* get\_product - Get full detail of a single product
* search\_products - Find products by name fragment or SKU (ranked)
* create\_product - Create a new product/service/bundle
* update\_product - Update an existing product
* list\_product\_categories - Get all product categories
* create\_product\_category - Create a new product category
* update\_product\_category - Update a product category
* list\_product\_groups - Get all product groups
* get\_product\_group - Get full details of a single product group
* create\_product\_group - Create a new product group
* update\_product\_group - Update a product group
* get\_product\_transactions - Get inventory movement history for a product
* list\_product\_locations - List/filter inventory locations (warehouses)
* create\_product\_location - Create a new inventory location
* update\_product\_location - Update an existing inventory location
* adjust\_inventory - Create an inventory stock transaction
* list\_pricelists - List or filter pricelists
* get\_pricelist - Get full details of a pricelist with line items
* create\_pricelist - Create a new pricelist
* update\_pricelist - Update an existing pricelist

### Purchase Order Tools

* list\_purchase\_orders - List or filter purchase orders
* filter\_purchase\_orders - Advanced filter of POs via filter rules
* get\_purchase\_order - Get full details of a purchase order
* create\_purchase\_order - Create an external PO sent to a vendor
* update\_purchase\_order - Update a purchase order (DRAFT only)
* update\_purchase\_order\_status - Transition a PO to a new status

### Material Request Tools

* create\_material\_request - Create an internal material/parts request for a job
* list\_material\_requests - List material requests
* get\_material\_request - Get full details of a single material request
* update\_material\_request - Update a material request
* update\_material\_request\_status - Transition a material request to a new status
* get\_material\_request\_line\_items - Get line items for a material request

### Transfer Order Tools

* list\_transfer\_orders - List or filter transfer orders
* get\_transfer\_order - Get full details of a single transfer order
* create\_transfer\_order - Create a stock transfer between locations
* update\_transfer\_order - Update a transfer order
* update\_transfer\_order\_status - Transition a transfer order's status
* get\_transfer\_order\_card - Get the printable card/summary view

### Vendor Tools

* list\_vendors - List all vendors (suppliers)
* get\_vendor - Get full details of a single vendor
* create\_vendor - Create a new vendor/supplier record
* update\_vendor - Update vendor details
* activate\_vendor - Activate or deactivate a vendor
* list\_vendor\_catalogs - List vendor catalog entries (product↔vendor pricing)
* create\_vendor\_catalog\_entries - Add products to a vendor's catalog
* update\_vendor\_catalog\_entry - Update a vendor catalog entry

### Route Tools

* list\_routes - List or filter dispatch routes
* get\_route - Get full details of a single route
* create\_route - Create a new dispatch route
* update\_route - Update route metadata
* lock\_route - Lock or unlock a route
* optimize\_route - Optimize job stop order for minimum travel
* add\_job\_to\_route - Add a job to a route at a sequence position
* remove\_jobs\_from\_route - Remove jobs from a route
* reorder\_route\_jobs - Reorder the job sequence in a route

### User / Team / Skillset Tools

* list\_users - List or filter company users (also maps user → team)
* get\_user - Get full user profile including work hours
* update\_user - Update a user's details
* find\_available\_technician - Find technicians with skills available in a window
* find\_technicians\_by\_skill - List technicians who hold a specific skill
* assign\_skillset\_to\_user - Assign a skillset/certification to a user
* list\_teams - List or filter teams with member rosters
* get\_team - Get team detail including full member list
* add\_users\_to\_team - Add users to a team
* list\_skillsets - Get all skillset definitions
* create\_skillset - Create a new skillset
* update\_skillset - Update an existing skillset
* list\_access\_roles - Get all RBAC access roles

### Commission Tools

* list\_commission\_structures - List commission structure templates (rules)
* get\_commission\_structure - Get a single commission structure template
* list\_commissions - List commission instances (earned amounts)
* get\_commission - Get full details of a single commission record
* create\_commission - Create a commission record on a job
* update\_commission - Update a commission record
* list\_commission\_payouts - List commission payout summaries

### Credit Note Tools

* list\_credit\_notes - List or filter customer credit notes
* get\_credit\_note - Get full details of a single credit note
* create\_credit\_note - Create a new credit note for a customer
* delete\_credit\_note - Soft-delete an unapplied credit note
* list\_credit\_history - List credit balance change events (audit trail)

### Timesheet / Attendance / Time-off Tools

* list\_timesheets - List company-wide attendance records (punch in/out)
* clock\_in - Record punch-in (start of workday)
* clock\_out - Record punch-out (end of workday)
* take\_break - Record a break start for a user
* resume\_work - Resume work after a break
* list\_timeoff\_requests - List time-off requests
* create\_timeoff\_request - Create a time-off request for a user
* approve\_timeoff - Approve a pending leave/time-off request
* reject\_timeoff - Reject a pending leave/time-off request
* list\_timeoff\_types - List all configured time-off types
* list\_user\_locations - List GPS location check-ins for a user
* list\_shifts - List shift schedules for users
* create\_shift - Create a shift schedule entry
* list\_timesheet\_approvals - List or filter timesheet approval records
* list\_overtime\_rules - List configured overtime rules
* approve\_timesheet - Approve or reject a timesheet approval request

### Non-Job Event Tools

* create\_non\_job\_event - Create a non-job calendar event
* list\_non\_job\_event\_categories - List non-job event categories
* list\_non\_job\_events - List non-job calendar events within a date range
* get\_non\_job\_event - Get full details of a single non-job event
* update\_non\_job\_event - Update a non-job event
* delete\_non\_job\_event - Delete a non-job event

### Business Unit Tools

* list\_business\_units - List all business units (trade types)
* get\_business\_unit - Get a specific business unit by UID
* create\_business\_unit - Create a new business unit/trade type
* update\_business\_unit - Update a business unit

### Checklist Tools

* list\_checklists - List checklist items for a job category + status
* list\_status\_checklists - Master view: all statuses + checklist counts for a category
* get\_checklist - Get a specific checklist item by UID
* create\_checklist\_item - Add a single new field/question to a checklist
* update\_checklist\_item - Update an existing checklist field
* delete\_checklist\_item - Delete a single checklist field
* set\_checklist - Full-replace all checklist fields for a category + status
* reorder\_checklist - Reorder checklist fields for a category + status

### Custom Field Tools

* list\_custom\_field\_definitions - List custom field definitions (master schema) for a module
* list\_custom\_field\_groups - List custom field groups for a module

### Email Template Tools

* get\_email\_template - Get a single email/SMS template by UID

### Approval Tools

* list\_approvals - List approval requests across all modules (read-only)
* get\_approval - Get full details of a single approval record

### Settings Tools

* get\_company\_info - Get the company's info
* get\_company\_config - Get the company's config
* list\_company\_modules - List enabled Zuper modules for the company
* list\_timezones - List supported IANA timezones
* list\_currencies - List supported currencies

***

<br />

## Connecting to Zuper MCP Server

You can connect to our MCP server natively via Claude Integration, or by using the mcp-remote module in Cursor, Windsurf, and other MCP compatible clients. Zuper MCP server is available at: <https://mcp.zuperpro.com/sse>

Our MCP Server requires authentication with your Zuper account to use. When connecting, you will be prompted to authorize the application to access your Zuper data. You can also connect by sending authorization headers under  `x-api-key` to the MCP server.

> **Note:** OAuth-based authentication is not available yet. For now, please authenticate using your API key and account region as shown below. OAuth support is coming soon.

<br />

## Setup Instructions

### Cursor

1. Open Cursor Settings - `CTRL/CMD + Shift + J`
2. Select MCP
3. Click on Add new global MCP server
4. Add the following

```Text json
{
  "mcpServers": {
    "zuper": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.zuperpro.com/sse", "--header", "x-api-key: ${ZUPER_API_KEY}", "--header", "x-account-region: ${ZUPER_API_REGION}"],
      "env": {
        "ZUPER_API_KEY": "...",
        "ZUPER_API_REGION": "..."
      }
    }
  }
}
```

> Note: If MCP is not working for you, please check the Cursor version you are using.
> Some Cursor versions have known issues with MCP server connectivity and tool discovery.
> We recommend using **Cursor v2.2**, which works reliably. Until Cursor resolves this issue, you may need to downgrade.

<br />

### VS Code

Create or open the .vscode/mcp.json file in your workspace. (CTRL/CMD + p, type mcp.json)

Add the following

```json MCP
{
  "mcpServers": {
    "zuper": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.zuperpro.com/sse", "--header", "x-api-key: ${ZUPER_API_KEY}", "--header", "x-account-region: ${ZUPER_API_REGION}"],
      "env": {
        "ZUPER_API_KEY": "...",
        "ZUPER_API_REGION": "..."
      }
    }
  }
}
```

<br />

### Windsurf

1. Open Windsurf Settings - `CTRL/CMD + Shift + J`
2. Go to Cascade -> MCP servers
3. Click on Add Server -> Add custom server
4. Add the following,

```Text json
{
  "mcpServers": {
    "zuper": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.zuperpro.com/sse", "--header", "x-api-key: ${ZUPER_API_KEY}", "--header", "x-account-region: ${ZUPER_API_REGION}"]
    },
    "env": {
      "ZUPER_API_KEY": "...",
      "ZUPER_API_REGION": "..."
    }
  }
}
```

<br />

### ChatGPT Agent

1. **Step 1: Create a Workflow**

   Visit <Anchor target="_blank" href="https://platform.openai.com/agent-builder">OpenAI Agent Builder</Anchor> and create a new workflow.
2. **Configure the “My Agent” Node**

   Select the "My agent" node and configure it to connect with the Zuper MCP Server.
   (Refer to pictures below)

<Image src="https://files.readme.io/f7b78d9ffd7c38346290da74991690b40922397de4084a4be42395e329d735c2-Screenshot_2025-11-11_at_3.42.47PM.png" alt="Configure Agent Node" align="left" width="400px" border={true} wrap={true} />

<br />

<Image src="https://files.readme.io/6b4a57a4b778ce28c11aa42bbc49d9e10d39512fe4ec5e62c244a5725d8e1055-Screenshot_2025-11-11_at_3.45.07PM.png" alt="Add Zuper MCP server details" align="right" width="320px" border={true} wrap={true} />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

3. **Step 3: Enter Connection Details**

   You’ll be prompted to provide the following information (Refer below picture):

<Image src="https://files.readme.io/3cb3a86b81bd0228f52cc347b62a4f2ae483c7e0ca7b7ce230663a3ba685c62e-Screenshot_2025-11-11_at_3.55.31PM.png" align="center" width="300px" border={true} />

<br />

```yaml
URL: https://mcp.zuperpro.com/sse
Label: Zuper_MCP
Description: Zuper MCP Server
Authentication: Custom Headers
```

Under Custom Headers, add the following key-value pairs:

| Header Name        | Value Description       |
| ------------------ | ----------------------- |
| `x-api-key`        | `<YOUR API KEY>`        |
| `x-account-region` | `<Your account region>` |

**Available Regions:**
us-west-1c, us-east-1, ap-south-1, ap-southeast-2, eu-central-1

> To determine which region applies to your account, please refer to the documentation below: <Anchor target="_blank" href="https://developers.zuper.co/docs/getting-started#what-is-my-base-api-url"><https://developers.zuper.co/docs/getting-started#what-is-my-base-api-url></Anchor>
>
> The API response includes a field named **dc\_name**, which represents your data center region (for example, us-west-1c).<br />Use this value when setting up MCP.

<br />

4. **Step 4: Complete Connection**

   Once configured, your agent will successfully connect to Zuper MCP.&#x20;

<br />

## Troubleshooting

* If authentication fails, ensure you are using the correct header names — **x-api-key** and **x-account-region**
* If authentication fails, ensure your API key is valid & API region is set right
* Ensure your MCP client supports SSE-based servers (not Streamable HTTP)
* Check that your client can handle header based authentication flows
* As of now Zuper MCP is not supported in Claude.ai