---
updatedAt: 2026-10-02T14:13:39.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Workflow

Creates a workflow automation rule (trigger + conditions + actions). Workflow activation uses a different payload shape than other modules' activate endpoints (e.g. Territory) — see Activate Workflow below for the type: ACTIVATE|DEACTIVATE body, not is_active. allowed_teams is required (non-empty) when workflow_access is TEAMS; allowed_users is required when workflow_access is USERS.

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
    "/workflow": {
      "post": {
        "summary": "Create Workflow",
        "description": "Creates a workflow automation rule (trigger + conditions + actions). Workflow activation uses a different payload shape than other modules' activate endpoints (e.g. Territory) — see Activate Workflow below for the type: ACTIVATE|DEACTIVATE body, not is_active. allowed_teams is required (non-empty) when workflow_access is TEAMS; allowed_users is required when workflow_access is USERS.",
        "operationId": "create-workflow",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "workflow": {
                    "type": "object",
                    "required": [
                      "workflow_name",
                      "workflow_description",
                      "trigger_event",
                      "trigger_event_name"
                    ],
                    "properties": {
                      "workflow_name": {
                        "type": "string",
                        "description": "Required."
                      },
                      "workflow_description": {
                        "type": "string",
                        "description": "Required."
                      },
                      "trigger_module": {
                        "type": "string",
                        "enum": [
                          "JOB",
                          "CUSTOMER",
                          "PRODUCT",
                          "EMPLOYEE",
                          "TIMESHEET",
                          "ESTIMATE",
                          "INVOICE",
                          "ASSET",
                          "USER",
                          "TEAM",
                          "SERVICE_CONTRACT",
                          "PAYMENTS",
                          "REQUEST",
                          "PROJECT"
                        ],
                        "description": "Get valid values from Get all workflow modules."
                      },
                      "workflow_access": {
                        "type": "string",
                        "enum": [
                          "COMPANY_WIDE",
                          "USERS",
                          "TEAMS"
                        ],
                        "description": "USERS requires a non-empty allowed_users; TEAMS requires a non-empty allowed_teams (400 otherwise)."
                      },
                      "allowed_users": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "User UIDs. Required (non-empty) when workflow_access is USERS."
                      },
                      "allowed_teams": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Team UIDs. Required (non-empty) when workflow_access is TEAMS."
                      },
                      "trigger_event": {
                        "type": "string",
                        "description": "Required, e.g. \"job.new\". Get valid values from Get all workflow modules."
                      },
                      "trigger_event_name": {
                        "type": "string",
                        "description": "Required, e.g. \"New Job\" — the display name paired with trigger_event."
                      },
                      "bu_uids": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Business unit UIDs to scope this workflow to. Validated against the company's business units, and further restricted to the requesting user's own business units if the company's employee.restrict_bu_data policy is on."
                      },
                      "conditions": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "required": [
                            "field_value",
                            "display_name",
                            "match_value"
                          ],
                          "properties": {
                            "field_type": {
                              "type": "string",
                              "enum": [
                                "DEFAULT",
                                "CUSTOM",
                                "CHECKLIST"
                              ]
                            },
                            "field_value": {
                              "type": "string"
                            },
                            "display_name": {
                              "type": "string"
                            },
                            "match": {
                              "type": "string",
                              "enum": [
                                "EQUAL_TO",
                                "NOT_EQUAL_TO",
                                "CONTAINS",
                                "NOT_CONTAINS",
                                "EMPTY",
                                "NOT_EMPTY",
                                "GREATER_THAN",
                                "LESS_THAN",
                                "GREATER_THAN_EQUAL_TO",
                                "LESS_THAN_EQUAL_TO",
                                "DATE_GREATER_THAN",
                                "DATE_LESS_THAN",
                                "DATE_GREATER_THAN_EQUAL_TO",
                                "DATE_LESS_THAN_EQUAL_TO",
                                "DATE_EMPTY",
                                "DATE_NOT_EMPTY",
                                "DATE_TIME_GREATER_THAN",
                                "DATE_TIME_LESS_THAN",
                                "DATE_TIME_GREATER_THAN_EQUAL_TO",
                                "DATE_TIME_LESS_THAN_EQUAL_TO",
                                "DATE_TIME_EMPTY",
                                "DATE_TIME_NOT_EMPTY",
                                "TIME_GREATER_THAN",
                                "TIME_LESS_THAN",
                                "TIME_GREATER_THAN_EQUAL_TO",
                                "TIME_LESS_THAN_EQUAL_TO",
                                "TIME_EMPTY",
                                "TIME_NOT_EMPTY"
                              ],
                              "description": "For the *_EMPTY / *_NOT_EMPTY values, match_value is not meaningful — the server auto-sets match_value to the same value as match for these."
                            },
                            "condition_type": {
                              "type": "string",
                              "enum": [
                                "AND",
                                "OR"
                              ],
                              "description": "How this condition combines with the next one."
                            },
                            "match_value": {
                              "type": "string"
                            },
                            "custom_values": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string"
                                  },
                                  "value": {
                                    "type": "string"
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "actions": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "action_type": {
                              "type": "string",
                              "enum": [
                                "CREATE",
                                "DELETE",
                                "UPDATE"
                              ]
                            },
                            "action_module": {
                              "type": "string",
                              "enum": [
                                "JOB",
                                "CUSTOMER",
                                "PRODUCT",
                                "EMPLOYEE",
                                "TIMESHEET",
                                "ESTIMATE",
                                "INVOICE",
                                "ASSET",
                                "REQUEST",
                                "PROJECT",
                                "OTHERS"
                              ]
                            },
                            "field_type": {
                              "type": "string",
                              "enum": [
                                "DEFAULT",
                                "CUSTOM"
                              ]
                            },
                            "field_value": {
                              "type": "string"
                            },
                            "display_name": {
                              "type": "string"
                            },
                            "custom_values": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string"
                                  },
                                  "value": {
                                    "type": "string"
                                  }
                                }
                              }
                            },
                            "change_value": {
                              "type": "string"
                            },
                            "type_of_operation": {
                              "type": "object",
                              "properties": {
                                "label": {
                                  "type": "string",
                                  "description": "Required."
                                },
                                "value": {
                                  "type": "string",
                                  "enum": [
                                    "UPDATE_FIELDS",
                                    "UPDATE_JOB_ASSIGNMENT",
                                    "UPDATE_JOB_CATEGORY",
                                    "OTHERS",
                                    "UPDATE_JOB_STATUS",
                                    "CREATE_INVOICE",
                                    "UPDATE_JOB_ASSIGNMENT_UNASSIGN",
                                    "UPDATE_JOB_DUE_DATE",
                                    "UPDATE_JOB_SCHEDULE_DATE",
                                    "DELETE_JOB",
                                    "CREATE_JOB",
                                    "EXECUTE_CUSTOM_FUNCTION",
                                    "EXECUTE_WEBHOOK",
                                    "UPDATE_REQUEST_STATUS",
                                    "UPDATE_REQUEST_ASSIGNMENT",
                                    "UPDATE_REQUEST_ASSIGNMENT_UNASSIGN",
                                    "DELETE_REQUEST",
                                    "CREATE_REQUEST",
                                    "UPDATE_PROJECT_STATUS",
                                    "UPDATE_PROJECT_ASSIGNMENT",
                                    "UPDATE_PROJECT_ASSIGNMENT_UNASSIGN",
                                    "DELETE_PROJECT",
                                    "CREATE_PROJECT",
                                    "COPY_JOB_CARD_TO_NOTES",
                                    "COPY_CHECKLIST_TO_CUSTOM_FIELD"
                                  ],
                                  "description": "EXECUTE_CUSTOM_FUNCTION is only available if the company's custom_functions_enabled policy is on."
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
          }
        },
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"message\": \"WorkFlow created successfully\", \"workflow_uid\": \"f7abcbba-113f-4344-9b2e-952c02149e75\"}"
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
                    "value": "{\"type\": \"error\", \"title\": \"Invalid Data\", \"message\": \"Missing WorkFlow data\"}"
                  }
                }
              }
            }
          },
          "500": {
            "description": "500",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"message\": \"Error in creating WorkFlow\", \"data\": \"\"}"
                  }
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