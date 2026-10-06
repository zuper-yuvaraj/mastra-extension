---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Generate / Share Job Card PDF

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
    "/jobs/{job_uid}/card": {
      "post": {
        "summary": "Generate / Share Job Card PDF",
        "description": "",
        "operationId": "update-a-job-assignment-copy",
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
                  "template_uid": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  },
                  "email_subject": {
                    "type": "string"
                  },
                  "email_body": {
                    "type": "string"
                  },
                  "email_config_uid": {
                    "type": "string"
                  },
                  "email_cc": {
                    "type": "array",
                    "description": "array of email",
                    "items": {
                      "type": "string"
                    }
                  },
                  "email_bcc": {
                    "type": "array",
                    "description": "array of email",
                    "items": {
                      "type": "string"
                    }
                  },
                  "attachments": {
                    "type": "array"
                  }
                }
              },
              "examples": {
                "To Print / Save Job card": {
                  "value": {
                    "template_uid": "23966640-5465-11e9-8589-a513e00ad553"
                  }
                },
                "To email Job card": {
                  "value": {
                    "template_uid": "23966640-5465-11e9-8589-a513e00ad553",
                    "email": "example@Zuper.co",
                    "email_subject": "Reg: iOS Job template test",
                    "email_body": "<p></p><p><span style=\"font-family: &quot;Comic Sans MS&quot;;\">Job with</span> <span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}} {{job_title}} </span><span style=\"font-family: &quot;Comic Sans MS&quot;;\">priority</span><span style=\"font-family: &quot;Comic Sans MS&quot;;\"> {{job_priority}}</span> <span style=\"font-family: &quot;Comic Sans MS&quot;;\">has been started.</span><span style=\"font-family: &quot;Comic Sans MS&quot;;\">﻿</span></p><a href=\"https://staging.zuperpro.com/api/misc/email_link/redirect/6e12fa20-9581-11ec-ad27-8dd08be2c487?customer_uid={{customer_uid}}&amp;company_uid=6c287db0-ff7c-11e7-b3a8-29b417a4f3fa\">test</a><p></p><table class=\"table table-bordered\"><tbody><tr><td>{{work_order_number}}<br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td></tr><tr><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td></tr><tr><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td><td><span style=\"font-family: &quot;Comic Sans MS&quot;;\">{{work_order_number}}</span><br></td></tr></tbody></table><ol><br></ol><br>",
                    "email_config_uid": "",
                    "email_cc": [],
                    "email_bcc": []
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
                    "value": "{\n    \"message\": \"Job card has been sent to jerin@Zuper.co\",\n    \"title\": \"Job card has been sent\",\n    \"type\": \"success\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Job card has been sent to jerin@Zuper.co"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job card has been sent"
                    },
                    "type": {
                      "type": "string",
                      "example": "success"
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
                    "value": "{\n  type: \"error\",\n  message: \"Template is Empty\", \n  title: \"Template is Empty\",\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Insufficient Request data"
                    },
                    "title": {
                      "type": "string",
                      "example": "Insufficient Request Data"
                    },
                    "type": {
                      "type": "string",
                      "example": "success"
                    }
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
                    "value": "{\n  type: \"error\",\n  message: \"Template Not found for given UID\", \n  title: \"Template Not found\",\n}"
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