---
updatedAt: 2026-10-02T14:13:42.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Workflow

Lists workflow automation rules.

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
      "get": {
        "summary": "Get Workflow",
        "description": "Lists workflow automation rules.",
        "operationId": "get-workflow",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "count",
            "in": "query",
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "sort",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "\"ASC\"",
                "\"DESC\""
              ],
              "default": "\"DESC\""
            }
          },
          {
            "name": "sort_by",
            "in": "query",
            "schema": {
              "type": "string",
              "enum": [
                "\"workflow_name\"",
                "\"created_at\""
              ],
              "default": "\"created_at\""
            }
          },
          {
            "name": "filter.keyword",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.trigger_module",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.trigger_event",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.workflow_access",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.created_by",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.is_active",
            "in": "query",
            "schema": {
              "type": "boolean"
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
                    "value": "{\"type\": \"success\", \"data\": [{\"workflow_name\": \"Rquest note\", \"workflow_description\": \"Rquest note\", \"workflow_uid\": \"f7abcbba-113f-4344-9b2e-952c02149e75\", \"trigger_module\": \"REQUEST\", \"workflow_access\": \"COMPANY_WIDE\", \"trigger_event\": \"request.new_note\", \"trigger_event_name\": \"Request New Note\", \"created_by\": {\"user_uid\": \"b9c91ee7-850f-47b7-b2cd-a6b78f4254d3\", \"first_name\": \"Tom\", \"last_name\": \"R\", \"email\": \"tom.r@zuper.co\", \"external_login_id\": null, \"home_phone_number\": \"9898989898\", \"designation\": \"Admin\", \"emp_code\": \"001\", \"prefix\": null, \"work_phone_number\": \"9898989898\", \"mobile_phone_number\": null, \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-9ed-4b56-81cc-70d0bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG\", \"hourly_labor_charge\": null, \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2024-06-14T07:34:28.000Z\", \"updated_at\": \"2024-09-18T04:03:31.000Z\"}, \"allow_workflow_to_trigger\": true, \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2024-07-17T06:08:43.957Z\", \"id\": \"undefined\"}, {\"workflow_name\": \"workflow test\", \"workflow_description\": \"workflow test\", \"workflow_uid\": \"a864c1f1-88e7-4cf6-b0ae-b987bfe0f03b\", \"trigger_module\": \"REQUEST\", \"workflow_access\": \"COMPANY_WIDE\", \"trigger_event\": \"request.update\", \"trigger_event_name\": \"Request Update\", \"created_by\": {\"user_uid\": \"b9c91ee7-850f-47b7-b2cd-a6b78f4254d3\", \"first_name\": \"Tom\", \"last_name\": \"R\", \"email\": \"tom.r@abc.co\", \"external_login_id\": null, \"home_phone_number\": \"9898989898\", \"designation\": \"Admin\", \"emp_code\": \"001\", \"prefix\": null, \"work_phone_number\": \"9898989898\", \"mobile_phone_number\": null, \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323-19ed-4b56-81cc-70d0bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG\", \"hourly_labor_charge\": null, \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2024-06-14T07:34:28.000Z\", \"updated_at\": \"2024-09-18T04:03:31.000Z\"}, \"allow_workflow_to_trigger\": true, \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2024-07-16T09:46:09.992Z\", \"id\": \"undefined\"}], \"total_records\": 2, \"current_page\": 1, \"total_pages\": 1}"
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
                          "trigger_event": {
                            "type": "string",
                            "example": "request.new_note"
                          },
                          "trigger_event_name": {
                            "type": "string",
                            "example": "Request New Note"
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
                                "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/4ddf323f-9ed-4b56-81cc-70d0bdf628c5/ea2602d9-0379-4ffb-a2c0-916dc2558c56.JPG"
                              },
                              "hourly_labor_charge": {},
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
                          "id": {
                            "type": "string",
                            "example": "undefined"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 2,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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
                    "value": "{\"message\": \"Sort must be either workflow_name / created_at\", \"title\": \"Invalid Sort By Value\", \"type\": \"error\"}"
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