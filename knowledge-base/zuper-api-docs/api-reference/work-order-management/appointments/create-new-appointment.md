---
updatedAt: 2026-07-21T06:01:46.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create New Appointment

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
    "/appointments": {
      "post": {
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "examples": {
                  "OK": {
                    "summary": "OK",
                    "value": {
                      "type": "success",
                      "title": "Appointment Created Successfully",
                      "message": "Appointment Created Successfully",
                      "data": {
                        "appointment_uid": "a3c13d13-e215-4286-ab39-46884be77488"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [],
        "summary": "Create New Appointment",
        "operationId": "post_appointments",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "appointment": {
                    "type": "object",
                    "properties": {
                      "job_uid": {
                        "type": "string"
                      },
                      "appointment_title": {
                        "type": "string"
                      },
                      "description": {
                        "type": "string"
                      },
                      "scheduled_start_time": {
                        "type": "string"
                      },
                      "scheduled_end_time": {
                        "type": "string"
                      },
                      "bu_uid": {
                        "type": "string"
                      },
                      "users": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            },
                            "team_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        },
                        "description": "assigned to"
                      },
                      "service_tasks": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "service_task_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "purchase_orders": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "purchase_order_uid": {
                              "type": "string"
                            }
                          },
                          "type": "object"
                        }
                      }
                    },
                    "required": [
                      "job_uid",
                      "appointment_title"
                    ]
                  }
                },
                "required": [
                  "appointment"
                ]
              }
            }
          }
        }
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