---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Job Assignment

Only check_assignment_conflict is listed below, but the endpoint also accepts notify_users (boolean) and update_all_jobs (boolean), both undocumented but functional. notify_users=false suppresses the assignment notification — useful for automated/bulk assignment flows where notifying a whole team on every call is undesirable.

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
    "/jobs/assign": {
      "post": {
        "summary": "Update Job Assignment",
        "description": "Only check_assignment_conflict is listed below, but the endpoint also accepts notify_users (boolean) and update_all_jobs (boolean), both undocumented but functional. notify_users=false suppresses the assignment notification — useful for automated/bulk assignment flows where notifying a whole team on every call is undesirable.",
        "operationId": "update-job-assignment",
        "parameters": [
          {
            "name": "check_assignment_conflict",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "job_uid": {
                    "type": "string"
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "ASSIGN",
                      "UNASSIGN"
                    ]
                  },
                  "update_all_jobs": {
                    "type": "boolean",
                    "description": "Applies when assigning a recurring job occurrence — if true, propagates the assignment change to all occurrences rather than just this one."
                  },
                  "notify_users": {
                    "type": "boolean",
                    "description": "If false, suppresses the notification normally sent to assigned users/teams. Defaults to true."
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
                    }
                  },
                  "teams": {
                    "type": "array"
                  }
                }
              },
              "examples": {
                "Assign Users": {
                  "value": {
                    "job_uid": "0defb660-a796-11ed-ba8f-f1ee7595122c",
                    "users": [
                      {
                        "user_uid": "a0382c94-721b-4689-8145-b07063333084",
                        "team_uid": "75c131e5-9fdf-433b-8032-e5282750330b"
                      }
                    ],
                    "type": "ASSIGN",
                    "update_all_jobs": true,
                    "notify_users": true
                  }
                },
                "Unassign Users": {
                  "value": {
                    "job_uid": "0defb660-a796-11ed-ba8f-f1ee7595122c",
                    "users": [
                      {
                        "user_uid": "a0382c94-721b-4689-8145-b07063333084",
                        "team_uid": "75c131e5-9fdf-433b-8032-e5282750330b"
                      }
                    ],
                    "type": "UNASSIGN",
                    "update_all_jobs": true,
                    "notify_users": true
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
                    "value": "{\n\ttype: \"success\",\n  message: \"The Job Assignment has been updated successfully\",\n  title: \"Job Assignment updated\"\n}"
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
                    "value": "{\n\ttype: \"error\",\n\tmessage: \"The Team UIDs sent is/are not valid\",\n\ttitle: \"The Team UIDs sent is/are not valid\",\n  data: \"Invalid Team UIDs Sent\"\n}"
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
                    "value": "{\n      type: \"error\",\n      message: \"Job Not found for given UID\",\n      title: \"Job not found\"\n}"
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