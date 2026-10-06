---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Recurring Job Schedule

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
    "/recurring_job/schedule": {
      "put": {
        "summary": "Update Recurring Job Schedule",
        "description": "",
        "operationId": "update-recurring-jobs",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "recurring_job_uid": {
                    "type": "string"
                  },
                  "job": {
                    "type": "object",
                    "properties": {
                      "recurrence_dates": {
                        "type": "array",
                        "items": {
                          "properties": {
                            "scheduled_start_time": {
                              "type": "string",
                              "format": "date-time"
                            },
                            "scheduled_end_time": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "type": "object"
                        }
                      },
                      "rrule": {
                        "type": "object",
                        "properties": {
                          "rule_string": {
                            "type": "string"
                          },
                          "duration": {
                            "type": "object",
                            "properties": {
                              "value": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
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
                    "value": "{\n  \"type\": \"success\",\n  \"message\": \"Recurring Job Updated successfully\",\n  \"data\": {\n    \"recurring_job_uid\": \"95b85570-d6e3-11ee-839f-418ff021ceed\"\n  }\n}"
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
                      "example": "Recurring Job Updated successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "recurring_job_uid": {
                          "type": "string",
                          "example": "95b85570-d6e3-11ee-839f-418ff021ceed"
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
                    "value": "{\n  message: \"Disassociate from Recurring Route to edit.\",\n  title: \"Cannot edit Recurring Job\",\n\ttype: \"error\"\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "404",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n      message: \"No Recurring Job found for the given UID\",\n      title: \"Invalid Recurring Job UID\",\n      type: \"error\"\n}"
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
                    "value": "{\n\ttype: \"error\",\n  message: \"Error in updating Recurring Job\",\n\tdata: \"\"\n}"
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