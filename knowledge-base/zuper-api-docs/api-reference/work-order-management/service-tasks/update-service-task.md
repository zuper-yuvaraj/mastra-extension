---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Service Task

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
    "/service_tasks/{service_task_uid}": {
      "put": {
        "summary": "Update Service Task",
        "description": "",
        "operationId": "update-service-task",
        "parameters": [
          {
            "name": "service_task_uid",
            "in": "path",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "service_task": {
                    "type": "object",
                    "properties": {
                      "module": {
                        "type": "string",
                        "description": "Module Name",
                        "enum": [
                          "JOB"
                        ]
                      },
                      "module_uid": {
                        "type": "string",
                        "description": "Module UID"
                      },
                      "sequence_no": {
                        "type": "integer",
                        "description": "Service Task Sequence",
                        "format": "int32"
                      },
                      "service_task_title": {
                        "type": "string",
                        "description": "Service Task Title"
                      },
                      "service_task_description": {
                        "type": "string",
                        "description": "Service Task Description"
                      },
                      "estimated_duration": {
                        "type": "object",
                        "description": "Estimated Duration",
                        "properties": {
                          "days": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "hours": {
                            "type": "integer",
                            "format": "int32"
                          },
                          "minutes": {
                            "type": "string"
                          }
                        }
                      },
                      "inspection_form": {
                        "type": "string",
                        "description": "Inspection Form UID"
                      },
                      "assigned_to": {
                        "type": "array",
                        "description": "Team / User Assignment UID's",
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
                        }
                      },
                      "asset": {
                        "type": "string",
                        "description": "Asset UID"
                      },
                      "bu_uid": {
                        "type": "string",
                        "description": "Trade Type UID"
                      }
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "service_task": {
                      "estimated_duration": {
                        "days": 4,
                        "hours": 2,
                        "minutes": 10
                      },
                      "service_task_title": "Clean.",
                      "service_task_description": "Cleaning service",
                      "module": "JOB",
                      "module_uid": "e2b9bea5-81bc-47fc-aba9-f050c5290d07",
                      "sequence_no": 3,
                      "inspection_form": "0b1334a0-0e73-11ee-9f8e-0f93d9851045"
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
                    "value": "{\n    \"type\": \"success\",\n    \"title\": \"Service Task Updated\",\n    \"message\": \"Service Task has been updated successfully\",\n    \"data\": {\n        \"service_task_uid\": \"79f249a0-ea48-11ed-976e-c9bbc7d0f069\"\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Service Task Updated"
                    },
                    "message": {
                      "type": "string",
                      "example": "Service Task has been updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "service_task_uid": {
                          "type": "string",
                          "example": "79f249a0-ea48-11ed-976e-c9bbc7d0f069"
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
                    "value": "{\n    \"type\": \"\",\n    \"title\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"\",\n    \"message\": \"\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false
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