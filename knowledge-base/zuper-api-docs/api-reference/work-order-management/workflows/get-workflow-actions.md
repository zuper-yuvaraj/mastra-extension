---
updatedAt: 2026-10-02T14:13:54.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Workflow Actions

Returns the available actions for a given action_type and action_module (both required; 400 if missing or action_module is unrecognized). The EXECUTE_CUSTOM_FUNCTION action is only included if the company's custom_functions_enabled policy is on.

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
    "/workflow/actions": {
      "get": {
        "summary": "Get Workflow Actions",
        "description": "Returns the available actions for a given action_type and action_module (both required; 400 if missing or action_module is unrecognized). The EXECUTE_CUSTOM_FUNCTION action is only included if the company's custom_functions_enabled policy is on.",
        "operationId": "get-workflow-actions",
        "parameters": [
          {
            "name": "action_type",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "action_module",
            "in": "query",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"type_of_operation\": {\"label\": \"Update Fields\", \"value\": \"UPDATE_FIELDS\"}, \"fields\": [{\"field_name\": \"Job Title\", \"field_key\": \"job_title\", \"field_type\": \"TEXT\", \"field_options\": [], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job Category\", \"field_key\": \"job_category\", \"field_type\": \"LOOKUP\", \"field_options\": [], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job Description\", \"field_key\": \"job_description\", \"field_type\": \"MULTI_LINE\", \"field_options\": [], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job Priority\", \"field_key\": \"job_priority\", \"field_type\": \"DROPDOWN\", \"field_options\": [\"HIGH\", \"LOW\", \"MEDIUM\", \"URGENT\"], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job Type\", \"field_key\": \"job_type\", \"field_type\": \"DROPDOWN\", \"field_options\": [\"NEW\"], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job Tags\", \"field_key\": \"job_tags\", \"field_type\": \"TEXT\", \"field_options\": [], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}, {\"field_name\": \"Job - Hide To FE\", \"field_key\": \"hide_to_fe\", \"field_type\": \"BOOLEAN\", \"field_options\": [], \"field_placeholder\": \"\", \"field_description\": \"\", \"is_required\": \"\"}], \"custom_fields\": [{\"field_name\": \"test_JS\", \"field_type\": \"SINGLE_LINE\", \"field_placeholder\": \"JSSS\", \"field_options\": [], \"lookup_module\": \"PRODUCT\", \"field_validation\": \"/.*/\", \"is_required\": true, \"group\": {\"module_name\": \"JOB\", \"group_name\": \"js\", \"group_uid\": \"6f6e5598-dc1c-40bd-b2bb-7435f6af4030\", \"category\": {\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}, \"associated_to\": [{\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}], \"order_no\": 1, \"is_deleted\": false}, \"hide_to_fe\": false, \"field_key\": \"test_JS\"}, {\"field_name\": \"test_JS\", \"field_type\": \"DATETIME\", \"field_description\": null, \"field_placeholder\": \"JSSS\", \"field_options\": [], \"lookup_module\": \"PRODUCT\", \"field_validation\": \"[/.*/][/.*/]\", \"is_required\": true, \"group\": {\"module_name\": \"JOB\", \"group_name\": \"js\", \"group_uid\": \"6f6e5598-dc1c-40bd-b2bb-7435f6af4030\", \"category\": {\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}, \"associated_to\": [{\"category_uid\": \"d1da5619-2917-4508-8adc-d37b0c699a93\", \"category_name\": \"test\", \"category_color\": \"#3498db\"}], \"order_no\": 1, \"is_deleted\": false}, \"hide_to_fe\": false, \"max_value\": \"12\", \"min_value\": \"0\", \"field_key\": \"test_JS\"}]}, {\"type_of_operation\": {\"label\": \"Update Job Assignment - Assign\", \"value\": \"UPDATE_JOB_ASSIGNMENT\"}, \"fields\": [{\"field_name\": \"Assign Employee from Team\", \"field_key\": \"team_id\", \"field_type\": \"LOOKUP\", \"child_fields\": [{\"field_name\": \"Choose Employee\", \"field_key\": \"user_id\", \"field_type\": \"LOOKUP\"}]}, {\"field_name\": \"Assign All from Team\", \"field_key\": \"assign_all\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Assign All Team Leader from Team\", \"field_key\": \"assign_tl\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Assign All FE from Team\", \"field_key\": \"assign_fe\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Assign Team\", \"field_key\": \"assign_team\", \"field_type\": \"LOOKUP\"}]}, {\"type_of_operation\": {\"label\": \"Update Job Assignment - UnAssign\", \"value\": \"UPDATE_JOB_ASSIGNMENT_UNASSIGN\"}, \"fields\": [{\"field_name\": \"Unassign an Employee\", \"field_key\": \"team_id\", \"field_type\": \"LOOKUP\", \"child_fields\": [{\"field_name\": \"Choose Employee\", \"field_key\": \"user_id\", \"field_type\": \"LOOKUP\"}]}, {\"field_name\": \"UnAssign All\", \"field_key\": \"unassign_all\", \"field_type\": \"\"}, {\"field_name\": \"UnAssign All from a Team in Job\", \"field_key\": \"unassign_all_team\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"UnAssign All Team Leader from Team in Job\", \"field_key\": \"unassign_tl\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"UnAssign All FE from Team in Job\", \"field_key\": \"unassign_fe\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"UnAssign Team\", \"field_key\": \"unassign_team\", \"field_type\": \"LOOKUP\"}]}, {\"type_of_operation\": {\"label\": \"Update Job Status\", \"value\": \"UPDATE_JOB_STATUS\"}, \"fields\": [{\"field_name\": \"Job Status\", \"field_key\": \"job_status\", \"field_type\": \"LOOKUP\"}]}, {\"type_of_operation\": {\"label\": \"Update Job Schedule Date\", \"value\": \"UPDATE_JOB_SCHEDULE_DATE\"}, \"fields\": [{\"field_name\": \"Choose Date Type\", \"field_key\": \"date_type\", \"field_options\": [\"From Existing Job Date\", \"From Current Date\"], \"field_type\": \"DROPDOWN\"}]}, {\"type_of_operation\": {\"label\": \"Update Job Due Date\", \"value\": \"UPDATE_JOB_DUE_DATE\"}, \"fields\": [{\"field_name\": \"Choose Date Type\", \"field_key\": \"date_type\", \"field_options\": [\"From Existing Job Due Date\", \"From Current Date\"], \"field_type\": \"DROPDOWN\"}]}, {\"type_of_operation\": {\"label\": \"Send Notifications\", \"value\": \"OTHERS\"}, \"fields\": [{\"field_name\": \"Send Email to Customer\", \"field_key\": \"template_uid\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Send SMS to Customer\", \"field_key\": \"customer_sms\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Send Internal Email\", \"field_key\": \"internal_email\", \"field_type\": \"DROPDOWN\", \"field_options\": [\"CREATED_USER\", \"ONLY_ASSIGNED_TL\", \"ONLY_TEAM_LEADERS\", \"ONLY_ASSIGNED_EMPLOYEES\", \"SELECTED_USERS\", \"SELECTED_TEAMS\", \"ASSIGNED_TEAMS_TL\", \"ALL\"]}, {\"field_name\": \"Send Internal SMS\", \"field_key\": \"internal_sms\", \"field_type\": \"LOOKUP\"}, {\"field_name\": \"Send Internal Push Notification\", \"field_key\": \"internal_push\", \"field_type\": \"DROPDOWN\", \"field_options\": [\"CREATED_USER\", \"ONLY_ASSIGNED_TL\", \"ONLY_TEAM_LEADERS\", \"ONLY_ASSIGNED_EMPLOYEES\", \"SELECTED_USERS\", \"SELECTED_TEAMS\", \"ASSIGNED_TEAMS_TL\", \"ALL\"]}]}, {\"type_of_operation\": {\"label\": \"Delete Job\", \"value\": \"DELETE_JOB\"}, \"fields\": []}]}"
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
                          "type_of_operation": {
                            "type": "object",
                            "properties": {
                              "label": {
                                "type": "string",
                                "example": "Update Fields"
                              },
                              "value": {
                                "type": "string",
                                "example": "UPDATE_FIELDS"
                              }
                            }
                          },
                          "fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "field_name": {
                                  "type": "string",
                                  "example": "Job Title"
                                },
                                "field_key": {
                                  "type": "string",
                                  "example": "job_title"
                                },
                                "field_type": {
                                  "type": "string",
                                  "example": "TEXT"
                                },
                                "field_options": {
                                  "type": "array"
                                },
                                "field_placeholder": {
                                  "type": "string",
                                  "example": ""
                                },
                                "field_description": {
                                  "type": "string",
                                  "example": ""
                                },
                                "is_required": {
                                  "type": "string",
                                  "example": ""
                                }
                              }
                            }
                          },
                          "custom_fields": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "field_name": {
                                  "type": "string",
                                  "example": "test_JS"
                                },
                                "field_type": {
                                  "type": "string",
                                  "example": "SINGLE_LINE"
                                },
                                "field_placeholder": {
                                  "type": "string",
                                  "example": "JSSS"
                                },
                                "field_options": {
                                  "type": "array"
                                },
                                "lookup_module": {
                                  "type": "string",
                                  "example": "PRODUCT"
                                },
                                "field_validation": {
                                  "type": "string",
                                  "example": "/.*/"
                                },
                                "is_required": {
                                  "type": "boolean",
                                  "example": true,
                                  "default": true
                                },
                                "group": {
                                  "type": "object",
                                  "properties": {
                                    "module_name": {
                                      "type": "string",
                                      "example": "JOB"
                                    },
                                    "group_name": {
                                      "type": "string",
                                      "example": "js"
                                    },
                                    "group_uid": {
                                      "type": "string",
                                      "example": "6f6e5598-dc1c-40bd-b2bb-7435f6af4030"
                                    },
                                    "category": {
                                      "type": "object",
                                      "properties": {
                                        "category_uid": {
                                          "type": "string",
                                          "example": "d1da5619-2917-4508-8adc-d37b0c699a93"
                                        },
                                        "category_name": {
                                          "type": "string",
                                          "example": "test"
                                        },
                                        "category_color": {
                                          "type": "string",
                                          "example": "#3498db"
                                        }
                                      }
                                    },
                                    "associated_to": {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "category_uid": {
                                            "type": "string",
                                            "example": "d1da5619-2917-4508-8adc-d37b0c699a93"
                                          },
                                          "category_name": {
                                            "type": "string",
                                            "example": "test"
                                          },
                                          "category_color": {
                                            "type": "string",
                                            "example": "#3498db"
                                          }
                                        }
                                      }
                                    },
                                    "order_no": {
                                      "type": "integer",
                                      "example": 1,
                                      "default": 0
                                    },
                                    "is_deleted": {
                                      "type": "boolean",
                                      "example": false,
                                      "default": true
                                    }
                                  }
                                },
                                "hide_to_fe": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "field_key": {
                                  "type": "string",
                                  "example": "test_JS"
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
                    "value": "{\"message\": \"No data found for given Module\", \"title\": \"Invalid Module\", \"type\": \"error\"}"
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