---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Service Tasks

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
    "/service_tasks": {
      "post": {
        "summary": "Create Service Tasks",
        "description": "",
        "operationId": "create-service-tasks",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "service_tasks": {
                    "type": "array",
                    "items": {
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
                      },
                      "type": "object"
                    }
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "service_tasks": [
                      {
                        "module": "JOB",
                        "module_uid": "e2b9bea5-81bc-47fc-aba9-f050c5290d07",
                        "service_task_title": "violation info",
                        "service_task_description": "Info",
                        "sequence_no": 1,
                        "estimated_duration": {
                          "days": 1,
                          "hours": 1,
                          "minutes": 1
                        },
                        "inspection_form": "580a1c0d-212c-44a3-aa46-cfbf69cb39d4",
                        "asset": "580a1c0d-212c-44a3-aa46-cfbf69cb39d4",
                        "assigned_to": [
                          {
                            "user_uid": "2b32a9b6-5bb2-4212-b0cc-36faedcf46ef",
                            "team_uid": "2b32a9b6-5bb2-4212-b0cc-36faedcf46ef"
                          }
                        ],
                        "service_task_master": "2b32a9b6-5bb2-4212-b0cc-36faedcf46ef"
                      }
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Service Task created successfully\",\n    \"data\": {\n        \"service_task_uids\": [\n            \"08b6bb50-222d-11ee-97be-4f30d4c89c9d\",\n            \"08b6bb51-222d-11ee-97be-4f30d4c89c9d\",\n            \"08b6bb52-222d-11ee-97be-4f30d4c89c9d\"\n        ]\n    }\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": "success"
                    },
                    "message": {
                      "type": "string",
                      "example": "Service Task created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "service_task_uids": {
                          "type": "array",
                          "items": {
                            "type": "string",
                            "example": "08b6bb50-222d-11ee-97be-4f30d4c89c9d"
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