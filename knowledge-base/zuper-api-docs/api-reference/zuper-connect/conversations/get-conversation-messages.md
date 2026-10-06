---
updatedAt: 2026-06-18T16:53:24.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Conversation Messages

# OpenAPI definition

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "zuperconnect-pro-api",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "https://{dc-region}-connect.zuperpro.com/api",
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
    "/telephony/messages": {
      "post": {
        "description": "",
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
                      "data": {
                        "conversation_uid": "c8242bdc-c1e4-473f-830b-e6f04c94b678",
                        "is_done": false,
                        "has_unread": true,
                        "unread_count": 0,
                        "is_unresponded": true,
                        "recent_conversation_at": "2025-02-18T04:02:30.000Z",
                        "updated_at": "2025-02-18T04:02:30.000Z",
                        "created_at": "2025-01-30T07:02:25.000Z",
                        "recent_message": null,
                        "recent_call": {
                          "call_uid": "3cf6a008-8808-45ac-94c6-fbb7e92ec9c9",
                          "direction": "INCOMING",
                          "status": "COMPLETED",
                          "duration": 12,
                          "call_recordings": [
                            {
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/test.zuper.bucket/telephony/recordings.mp3",
                              "recording_duration": 3740
                            }
                          ]
                        },
                        "unread_message": {
                          "message_uid": "78e383f3-d6f4-41ec-897f-5b8e54cc043c",
                          "message_type": "ACTIVITY",
                          "message": null,
                          "media": [],
                          "direction": ""
                        },
                        "customer_number": {
                          "customer_number_uid": "dfb85e14-9480-4c5d-aea5-d82e6433bd1e",
                          "customer_uid": "e2216b10-3842-11eb-accd-bf3a3b7a5772",
                          "customer_full_name": "Raghav Gurumani",
                          "customer_email": "raghav@zuper.co",
                          "number": "14632323489",
                          "number_type": "HOME",
                          "is_blocked": false,
                          "created_at": "2025-01-06T06:57:57.000Z",
                          "updated_at": "2025-02-06T09:47:18.000Z"
                        },
                        "number": {
                          "number": "14092880684",
                          "display_name": "Don't Edit/Delete this number",
                          "number_uid": "ba38c67d-17be-44a2-97cd-a234b87b4287"
                        },
                        "recent_conversation_user": {
                          "user_uid": "8366adeb-fea4-4c97-853b-88462021071d",
                          "first_name": "Sriram",
                          "last_name": "Palakula",
                          "email": "sriram@zuper.co",
                          "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments.png"
                        }
                      }
                    }
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
                        "type": "string",
                        "format": "json"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "in": "header",
            "name": "x-api-key",
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Get Conversation Messages",
        "operationId": "post_telephony-messages",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filters": {
                    "type": "object",
                    "properties": {
                      "conversation_uid": {
                        "type": "string"
                      },
                      "message_type": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Supported values - [\"SMS\",\"MMS\",\"CALL\",\"SYSTEM\"]"
                      },
                      "limit": {
                        "type": "number",
                        "default": "20"
                      },
                      "page": {
                        "type": "number",
                        "default": "1"
                      }
                    },
                    "required": [
                      "conversation_uid",
                      "limit",
                      "page"
                    ]
                  }
                },
                "required": [
                  "filters"
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