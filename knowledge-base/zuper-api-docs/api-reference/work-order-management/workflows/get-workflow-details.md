---
updatedAt: 2026-10-02T14:14:11.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Workflow Activities

Returns the audit log of actions a workflow has actually executed (e.g. a job created/updated as a result of a rule firing) — distinct from the workflow's own configuration.

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
    "/workflow/activities": {
      "get": {
        "summary": "Get Workflow Activities",
        "description": "Returns the audit log of actions a workflow has actually executed (e.g. a job created/updated as a result of a rule firing) — distinct from the workflow's own configuration.",
        "operationId": "get-workflow-details",
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
                "\"type\"",
                "\"created_at\""
              ],
              "default": "\"created_at\""
            }
          },
          {
            "name": "filter.action_module",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.workflow",
            "in": "query",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter.type",
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
                    "value": "{\"type\": \"success\", \"data\": [{\"activity_uid\": \"11ca7040-8988-11ec-801b-03e0ad8587cd\", \"workflow\": {\"workflow_name\": \"SKYC - Gujarat Store\", \"workflow_description\": \"Gujarat Store\", \"workflow_uid\": \"681c03f0-88d9-11ec-be25-67cf7f623b46\", \"trigger_module\": \"JOB\", \"workflow_access\": \"COMPANY_WIDE\", \"trigger_event\": \"job.new\", \"trigger_event_name\": \"New Job\", \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2022-02-08T12:19:47.774Z\"}, \"created_at\": \"2022-02-09T09:10:04.868Z\", \"updated_at\": \"2022-02-09T09:10:04.871Z\", \"id\": \"undefined\"}, {\"activity_uid\": \"76123de0-8987-11ec-801b-03e0ad8587cd\", \"workflow\": {\"workflow_name\": \"SKYC - Gujarat Store\", \"workflow_description\": \"Gujarat Store\", \"workflow_uid\": \"681c03f0-88d9-11ec-be25-67cf7f623b46\", \"trigger_module\": \"JOB\", \"workflow_access\": \"COMPANY_WIDE\", \"trigger_event\": \"job.new\", \"trigger_event_name\": \"New Job\", \"is_active\": true, \"is_deleted\": false, \"created_at\": \"2022-02-08T12:19:47.774Z\"}, \"created_at\": \"2022-02-09T09:05:43.615Z\", \"updated_at\": \"2022-02-09T09:05:43.616Z\", \"id\": \"undefined\"}], \"total_records\": 2, \"current_page\": 1, \"total_pages\": 1}"
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
                          "activity_uid": {
                            "type": "string",
                            "example": "11ca7040-8988-11ec-801b-03e0ad8587cd"
                          },
                          "workflow": {
                            "type": "object",
                            "properties": {
                              "workflow_name": {
                                "type": "string",
                                "example": "SKYC - Gujarat Store"
                              },
                              "workflow_description": {
                                "type": "string",
                                "example": "Gujarat Store"
                              },
                              "workflow_uid": {
                                "type": "string",
                                "example": "681c03f0-88d9-11ec-be25-67cf7f623b46"
                              },
                              "trigger_module": {
                                "type": "string",
                                "example": "JOB"
                              },
                              "workflow_access": {
                                "type": "string",
                                "example": "COMPANY_WIDE"
                              },
                              "trigger_event": {
                                "type": "string",
                                "example": "job.new"
                              },
                              "trigger_event_name": {
                                "type": "string",
                                "example": "New Job"
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
                                "example": "2022-02-08T12:19:47.774Z"
                              }
                            }
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2022-02-09T09:10:04.868Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2022-02-09T09:10:04.871Z"
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
                    "value": "{\"message\": \"Sort must be either type / created_at\", \"title\": \"Invalid Sort By Value\", \"type\": \"error\"}"
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
                    "value": "{\"type\": \"error\", \"message\": \"Error in getting Workflow Activities\", \"data\": \"\"}"
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