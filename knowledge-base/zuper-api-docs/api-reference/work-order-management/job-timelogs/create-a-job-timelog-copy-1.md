---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create a Job Timelog

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
    "/jobs/{job_uid}/timelog": {
      "post": {
        "summary": "Create a Job Timelog",
        "description": "",
        "operationId": "create-a-job-timelog-copy-1",
        "parameters": [
          {
            "name": "job_uid",
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
                  "timelog": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string",
                        "enum": [
                          "CLOCK_IN",
                          "CLOCK_OUT"
                        ]
                      },
                      "checked_time": {
                        "type": "string",
                        "format": "date"
                      },
                      "job_uid": {
                        "type": "string"
                      },
                      "latitude": {
                        "type": "number",
                        "format": "double"
                      },
                      "longitude": {
                        "type": "number",
                        "format": "double"
                      },
                      "remarks": {
                        "type": "string"
                      },
                      "project_uid": {
                        "type": "string"
                      },
                      "override_check": {
                        "type": "boolean"
                      }
                    }
                  },
                  "logged_user": {
                    "type": "string",
                    "description": "{user_uid}"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"success\",\n    \"title\": \"Created Successfully\",\n    \"data\": {\n        \"timelog_uid\": \"dc6e8a5e-8153-4055-b672-0b6c73be7905\"\n    }\n}"
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
                      "example": "success"
                    },
                    "title": {
                      "type": "string",
                      "example": "Created Successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "timelog_uid": {
                          "type": "string",
                          "example": "dc6e8a5e-8153-4055-b672-0b6c73be7905"
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
                    "value": "{\n    \"message\": \"Active Job Found, Punch In Not Allowed\",\n    \"title\": \"Active Job Found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Timelog is Mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Type, Checked Time Are Mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "job_uid / project_uid is Mandatory"
                        },
                        "title": {
                          "type": "string",
                          "example": "Missing Mandatory Fields"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Job Timelog must be enabled in organizational settings"
                        },
                        "title": {
                          "type": "string",
                          "example": "Job Timelog must be enabled"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Project Timelog must be enabled in organizational settings"
                        },
                        "title": {
                          "type": "string",
                          "example": "Project Timelog must be enabled"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Invalid Checked Time"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Checked Time"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Invalid Project / Job Association"
                        },
                        "title": {
                          "type": "string",
                          "example": "Invalid Project / Job Association"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "message": {
                          "type": "string",
                          "example": "Active Job Found, Punch In Not Allowed"
                        },
                        "title": {
                          "type": "string",
                          "example": "Active Job Found"
                        },
                        "type": {
                          "type": "string",
                          "example": "error"
                        }
                      }
                    }
                  ]
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