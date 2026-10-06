---
updatedAt: 2026-10-02T14:13:45.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get all workflow modules

Returns the modules available as workflow triggers, filtered to only modules enabled for this company. Use this to discover valid trigger_module/event values before calling Get Workflow Conditions or Get Workflow Actions.

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuper-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}.zuperpro.com/api",
      "variables": {
        "dc-region": {
          "default": "dc-region"
        }
      }
    }
  ],
  "components": {
    "securitySchemes": {
      "sec0": {
        "type": "apiKey",
        "in": "header",
        "name": "x-api-key"
      }
    }
  },
  "security": [
    {
      "sec0": []
    }
  ],
  "paths": {
    "/workflow/modules": {
      "get": {
        "summary": "Get all workflow modules",
        "description": "Returns the modules available as workflow triggers, filtered to only modules enabled for this company. Use this to discover valid trigger_module/event values before calling Get Workflow Conditions or Get Workflow Actions.",
        "operationId": "get-all-workflow-modules",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"module\": \"JOB\", \"module_name\": \"Jobs\", \"events\": [{\"event\": \"job.new\", \"event_name\": \"New Job\"}, {\"event\": \"job.update\", \"event_name\": \"Update Job\"}, {\"event\": \"job.schedule\", \"event_name\": \"Schedule Job\"}, {\"event\": \"job.update_schedule\", \"event_name\": \"Reschedule Job\"}, {\"event\": \"job.assign_users\", \"event_name\": \"Assign Users\"}, {\"event\": \"job.unassign_users\", \"event_name\": \"Unassign Users\"}, {\"event\": \"job.update_acceptance\", \"event_name\": \"Job Accept / Reject\"}, {\"event\": \"job.status_update\", \"event_name\": \"Status Update\"}, {\"event\": \"job.update_checklist\", \"event_name\": \"Update Checklist\"}, {\"event\": \"job.status_rollback\", \"event_name\": \"Status Rollback\"}, {\"event\": \"job.status_delete\", \"event_name\": \"Status Delete\"}, {\"event\": \"job.feedback\", \"event_name\": \"Job Feedback\"}, {\"event\": \"job.new_note\", \"event_name\": \"New Note\"}, {\"event\": \"job.delete_note\", \"event_name\": \"Delete Note\"}, {\"event\": \"job.delete\", \"event_name\": \"Delete Job\"}]}, {\"module\": \"CUSTOMER\", \"module_name\": \"Customers\", \"events\": [{\"event\": \"customer.create\", \"event_name\": \"New Customer\"}, {\"event\": \"customer.update\", \"event_name\": \"Customer Update\"}, {\"event\": \"customer.deactivate\", \"event_name\": \"Customer Deactivate\"}, {\"event\": \"customer.activate\", \"event_name\": \"Customer Activate\"}, {\"event\": \"customer.accounts_update\", \"event_name\": \"Customer Accounts Update\"}, {\"event\": \"customer.update_technician\", \"event_name\": \"Favourite Technician Update\"}, {\"event\": \"customer.new_note\", \"event_name\": \"New Note\"}, {\"event\": \"customer.add_card\", \"event_name\": \"New Customer Card\"}, {\"event\": \"customer.delete_card\", \"event_name\": \"Remove Customer Card\"}]}, {\"module\": \"PRODUCT\", \"module_name\": \"Products / Parts\", \"events\": [{\"event\": \"product.new\", \"event_name\": \"New Product\"}, {\"event\": \"product.update\", \"event_name\": \"Product Update\"}, {\"event\": \"product.delete\", \"event_name\": \"Product Delete\"}, {\"event\": \"product.location_new\", \"event_name\": \"New Product Location\"}, {\"event\": \"product.location_update\", \"event_name\": \"Product Location Update\"}, {\"event\": \"product.location_delete\", \"event_name\": \"Product Location Delete\"}, {\"event\": \"product.transcation_inward\", \"event_name\": \"Product Transaction Inward\"}, {\"event\": \"product.transcation_outward\", \"event_name\": \"Product Transaction Outward\"}, {\"event\": \"product.transcation_transfer\", \"event_name\": \"Product Transaction Transfer\"}]}, {\"module\": \"ESTIMATE\", \"module_name\": \"Quotes\", \"events\": [{\"event\": \"estimate.new\", \"event_name\": \"New Quote\"}, {\"event\": \"estimate.update\", \"event_name\": \"Quote Update\"}, {\"event\": \"estimate.status_update\", \"event_name\": \"Quote Status Update\"}, {\"event\": \"estimate.deposit\", \"event_name\": \"Quote Deposit Payment\"}, {\"event\": \"estimate.print\", \"event_name\": \"Print Quote\"}, {\"event\": \"estimate.send\", \"event_name\": \"Send Quote\"}, {\"event\": \"estimate.new_note\", \"event_name\": \"Quote New Note\"}, {\"event\": \"estimate.new_attachment\", \"event_name\": \"Quote New Attachment\"}, {\"event\": \"estimate.delete_attachment\", \"event_name\": \"Quote Delete Attachment\"}, {\"event\": \"estimate.delete_note\", \"event_name\": \"Quote Delete Note\"}, {\"event\": \"estimate.delete\", \"event_name\": \"Quote Delete\"}]}, {\"module\": \"INVOICE\", \"module_name\": \"Invoices\", \"events\": [{\"event\": \"invoice.new\", \"event_name\": \"New Invoice\"}, {\"event\": \"invoice.update\", \"event_name\": \"Invoice Update\"}, {\"event\": \"invoice.status_update\", \"event_name\": \"Invoice Status Update\"}, {\"event\": \"invoice.payment\", \"event_name\": \"Invoice Payment\"}, {\"event\": \"invoice.print\", \"event_name\": \"Print Invoice\"}, {\"event\": \"invoice.send\", \"event_name\": \"Send Invoice\"}, {\"event\": \"invoice.new_note\", \"event_name\": \"Invoice New Note\"}, {\"event\": \"invoice.new_attachment\", \"event_name\": \"Invoice Attachment\"}, {\"event\": \"invoice.delete_attachment\", \"event_name\": \"Invoice Delete Attachment\"}, {\"event\": \"invoice.delete_note\", \"event_name\": \"Invoice Delete Note\"}, {\"event\": \"invoice.delete\", \"event_name\": \"Invoice Delete\"}]}, {\"module\": \"ASSET\", \"module_name\": \"Assets\", \"events\": [{\"event\": \"asset.new\", \"event_name\": \"New Asset\"}, {\"event\": \"asset.update\", \"event_name\": \"Asset Update\"}, {\"event\": \"asset.status_update\", \"event_name\": \"Asset Status Update\"}, {\"event\": \"asset.delete\", \"event_name\": \"Asset Delete\"}, {\"event\": \"asset.activate\", \"event_name\": \"Asset activate\"}, {\"event\": \"asset.deactivate\", \"event_name\": \"Asset Deactivate\"}]}, {\"module\": \"SERVICE_CONTRACT\", \"module_name\": \"Contracts\", \"events\": [{\"event\": \"service_contract.new\", \"event_name\": \"New Service Contract\"}, {\"event\": \"service_contract.update\", \"event_name\": \"Service Contract Update\"}, {\"event\": \"service_contract.delete\", \"event_name\": \"Service Contract Delete\"}, {\"event\": \"service_contract.status_update\", \"event_name\": \"Service Contract Status Update\"}, {\"event\": \"service_contract.renew\", \"event_name\": \"Service Contract Renewal\"}]}, {\"module\": \"TEAM\", \"module_name\": \"Teams\", \"events\": [{\"event\": \"team.create\", \"event_name\": \"New Team\"}, {\"event\": \"team.update\", \"event_name\": \"Team Update\"}, {\"event\": \"team.delete\", \"event_name\": \"Team Delete\"}]}, {\"module\": \"USER\", \"module_name\": \"Users\", \"events\": [{\"event\": \"user.resource_create\", \"event_name\": \"New User Resource\"}, {\"event\": \"user.resource_delete\", \"event_name\": \"User Resource Delete\"}, {\"event\": \"user.resource_edit\", \"event_name\": \"User Resource Update\"}, {\"event\": \"user.trigger_sos\", \"event_name\": \"User Sos Trigger\"}, {\"event\": \"user.activate\", \"event_name\": \"User Activate\"}, {\"event\": \"user.deactivate\", \"event_name\": \"User Deactivate\"}, {\"event\": \"user.delete\", \"event_name\": \"User Delete\"}, {\"event\": \"user.new\", \"event_name\": \"New User\"}, {\"event\": \"user.update\", \"event_name\": \"User Update\"}, {\"event\": \"user.work_hours_update\", \"event_name\": \"User Work Hours Update\"}]}, {\"module\": \"REQUEST\", \"module_name\": \"Request\", \"events\": [{\"event\": \"request.new\", \"event_name\": \"New Request\"}, {\"event\": \"request.update\", \"event_name\": \"Request Update\"}, {\"event\": \"request.status_update\", \"event_name\": \"Request Status Update\"}, {\"event\": \"request.status_rollback\", \"event_name\": \"Request Status Rollback\"}, {\"event\": \"request.assign_users\", \"event_name\": \"Request Assign Users\"}, {\"event\": \"request.unassign_users\", \"event_name\": \"Request Unassign Users\"}, {\"event\": \"request.new_note\", \"event_name\": \"Request New Note\"}, {\"event\": \"request.delete\", \"event_name\": \"Request Delete\"}]}]}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "module": {
                            "type": "string",
                            "example": "JOB"
                          },
                          "module_name": {
                            "type": "string",
                            "example": "Jobs"
                          },
                          "events": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "event": {
                                  "type": "string",
                                  "example": "job.new"
                                },
                                "event_name": {
                                  "type": "string",
                                  "example": "New Job"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "400",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {}
                }
              }
            }
          }
        },
        "deprecated": false,
        "x-internal": false
      }
    }
  },
  "x-readme": {
    "headers": [],
    "explorer-enabled": true,
    "proxy-enabled": false
  },
  "x-readme-fauxas": true
}
```