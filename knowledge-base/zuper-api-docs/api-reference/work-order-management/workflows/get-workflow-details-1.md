---
updatedAt: 2026-10-02T14:13:57.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Workflow Details

Returns full workflow details. Pass should_populate=true to resolve condition/action reference values (e.g. category, status, team, user) to populated objects instead of raw uids.

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
    "/workflow/{workflow_uid}": {
      "get": {
        "summary": "Get Workflow Details",
        "description": "Returns full workflow details. Pass should_populate=true to resolve condition/action reference values (e.g. category, status, team, user) to populated objects instead of raw uids.",
        "operationId": "get-workflow-details-1",
        "parameters": [
          {
            "name": "workflow_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "should_populate",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
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
                    "value": "{\"type\": \"success\", \"data\": {\"workflow_name\": \"Rquest note\", \"workflow_description\": \"Rquest note\", \"workflow_uid\": \"f7abcbba-113f-4344-9b2e-952c02149e75\", \"trigger_module\": \"REQUEST\", \"workflow_access\": \"COMPANY_WIDE\", \"allowed_users\": [], \"allowed_teams\": [], \"trigger_event\": \"request.new_note\", \"trigger_event_name\": \"Request New Note\", \"conditions\": [], \"actions\": [{\"action_type\": \"UPDATE\", \"action_module\": \"REQUEST\", \"field_type\": \"DEFAULT\", \"field_value\": \"customer_email\", \"display_name\": \"Send Email to Customer\", \"custom_values\": [{\"label\": \"email_subject\", \"value\": \"New comment added for {{request_title}}\", \"_id\": \"66975feb98926b644acca7d3\"}, {\"label\": \"email_body\", \"value\": \"<p>New comment is being added for your request&nbsp;&nbsp;{{request_title}}</p>\", \"_id\": \"66975feb98926b644acca7d4\"}, {\"label\": \"email_config_uid\", \"value\": \"\", \"_id\": \"66975feb98926b644acca7d5\"}, {\"label\": \"cc\", \"value\": \"tom.r@gmail.com\", \"_id\": \"66975feb98926b644acca7d6\"}, {\"label\": \"bcc\", \"value\": \"\", \"_id\": \"66975feb98926b644acca7d7\"}], \"change_value\": \"New comment added for {{request_title}}\", \"type_of_operation\": {\"label\": \"Send Notifications\", \"value\": \"OTHERS\"}, \"_id\": \"66975feb98926b644acca7d2\"}], \"created_by\": {\"user_uid\": \"b9c91ee7-850f-47b7-b2cd-a6b78f4254d3\", \"first_name\": \"Tom\", \"last_name\": \"R\", \"email\": \"tom.r@zuper.co\", \"external_login_id\": null, \"home_phone_number\": \"9898989898\", \"designation\": \"Admin\", \"emp_code\": \"001\", \"prefix\": null, \"work_phone_number\": \"9898989898\", \"mobile_phone_number\": null, \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-19ed-4b56-81cc-70bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG\", \"hourly_labor_charge\": null, \"is_active\": 1, \"is_deleted\": 0, \"created_at\": \"2024-06-14T07:34:28.000Z\", \"updated_at\": \"2024-09-18T04:03:31.000Z\"}, \"allow_workflow_to_trigger\": true, \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2024-07-17T06:08:43.957Z\", \"updated_at\": \"2024-07-17T06:08:43.974Z\", \"__v\": 0}}"
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
                      "type": "object",
                      "properties": {
                        "workflow_name": {
                          "type": "string",
                          "example": "Rquest note"
                        },
                        "workflow_description": {
                          "type": "string",
                          "example": "Rquest note"
                        },
                        "workflow_uid": {
                          "type": "string",
                          "example": "f7abcbba-113f-4344-9b2e-952c02149e75"
                        },
                        "trigger_module": {
                          "type": "string",
                          "example": "REQUEST"
                        },
                        "workflow_access": {
                          "type": "string",
                          "example": "COMPANY_WIDE"
                        },
                        "allowed_users": {
                          "type": "array"
                        },
                        "allowed_teams": {
                          "type": "array"
                        },
                        "trigger_event": {
                          "type": "string",
                          "example": "request.new_note"
                        },
                        "trigger_event_name": {
                          "type": "string",
                          "example": "Request New Note"
                        },
                        "conditions": {
                          "type": "array"
                        },
                        "actions": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "action_type": {
                                "type": "string",
                                "example": "UPDATE"
                              },
                              "action_module": {
                                "type": "string",
                                "example": "REQUEST"
                              },
                              "field_type": {
                                "type": "string",
                                "example": "DEFAULT"
                              },
                              "field_value": {
                                "type": "string",
                                "example": "customer_email"
                              },
                              "display_name": {
                                "type": "string",
                                "example": "Send Email to Customer"
                              },
                              "custom_values": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "label": {
                                      "type": "string",
                                      "example": "email_subject"
                                    },
                                    "value": {
                                      "type": "string",
                                      "example": "New comment added for {{request_title}}"
                                    },
                                    "_id": {
                                      "type": "string",
                                      "example": "66975feb98926b644acca7d3"
                                    }
                                  }
                                }
                              },
                              "change_value": {
                                "type": "string",
                                "example": "New comment added for {{request_title}}"
                              },
                              "type_of_operation": {
                                "type": "object",
                                "properties": {
                                  "label": {
                                    "type": "string",
                                    "example": "Send Notifications"
                                  },
                                  "value": {
                                    "type": "string",
                                    "example": "OTHERS"
                                  }
                                }
                              },
                              "_id": {
                                "type": "string",
                                "example": "66975feb98926b644acca7d2"
                              }
                            }
                          }
                        },
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "b9c91ee7-850f-47b7-b2cd-a6b78f4254d3"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Tom"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "R"
                            },
                            "email": {
                              "type": "string",
                              "example": "tom.r@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {
                              "type": "string",
                              "example": "9898989898"
                            },
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "001"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "9898989898"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-19ed-4b56-81cc-70bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG"
                            },
                            "hourly_labor_charge": {},
                            "is_active": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "is_deleted": {
                              "type": "integer",
                              "example": 0,
                              "default": 0
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2024-06-14T07:34:28.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-09-18T04:03:31.000Z"
                            }
                          }
                        },
                        "allow_workflow_to_trigger": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_active": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-07-17T06:08:43.957Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-07-17T06:08:43.974Z"
                        },
                        "__v": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
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
                    "value": "{\"message\": \"No details found for the given UID\", \"title\": \"invalid Workflow UID\", \"type\": \"error\"}"
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
                    "value": "{\"type\": \"error\", \"message\": \"Error in getting Workflow\", \"data\": \"\"}"
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