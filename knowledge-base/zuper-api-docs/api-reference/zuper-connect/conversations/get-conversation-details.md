---
updatedAt: 2026-07-21T10:06:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Conversation Details

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
    "/telephony/message/conversation/{conversation_uid}": {
      "get": {
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
                      "type": "object",
                      "properties": {
                        "conversation_uid": {
                          "type": "string",
                          "example": "c8242bdc-c1e4-473f-830b-e6f04c94b678"
                        },
                        "is_done": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "has_unread": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "unread_count": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "is_unresponded": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "recent_conversation_at": {
                          "type": "string",
                          "example": "2025-02-18T04:02:30.000Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-02-18T04:02:30.000Z"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-01-30T07:02:25.000Z"
                        },
                        "recent_message": {},
                        "recent_call": {
                          "type": "object",
                          "properties": {
                            "call_uid": {
                              "type": "string",
                              "example": "3cf6a008-8808-45ac-94c6-fbb7e92ec9c9"
                            },
                            "direction": {
                              "type": "string",
                              "example": "INCOMING"
                            },
                            "status": {
                              "type": "string",
                              "example": "COMPLETED"
                            },
                            "duration": {
                              "type": "integer",
                              "example": 12,
                              "default": 0
                            },
                            "call_recordings": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "recording_url": {
                                    "type": "string",
                                    "example": "https://s3.ap-south-1.amazonaws.com/test.zuper.bucket/telephony/recordings.mp3"
                                  },
                                  "recording_duration": {
                                    "type": "integer",
                                    "example": 3740,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "unread_message": {
                          "type": "object",
                          "properties": {
                            "message_uid": {
                              "type": "string",
                              "example": "78e383f3-d6f4-41ec-897f-5b8e54cc043c"
                            },
                            "message_type": {
                              "type": "string",
                              "example": "ACTIVITY"
                            },
                            "message": {},
                            "media": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {}
                              }
                            },
                            "direction": {
                              "type": "string",
                              "example": ""
                            }
                          }
                        },
                        "customer_number": {
                          "type": "object",
                          "properties": {
                            "customer_number_uid": {
                              "type": "string",
                              "example": "dfb85e14-9480-4c5d-aea5-d82e6433bd1e"
                            },
                            "customer_uid": {
                              "type": "string",
                              "example": "e2216b10-3842-11eb-accd-bf3a3b7a5772"
                            },
                            "customer_full_name": {
                              "type": "string",
                              "example": "Raghav Gurumani"
                            },
                            "customer_email": {
                              "type": "string",
                              "example": "raghav@zuper.co"
                            },
                            "number": {
                              "type": "string",
                              "example": "14632323489"
                            },
                            "number_type": {
                              "type": "string",
                              "example": "HOME"
                            },
                            "is_blocked": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2025-01-06T06:57:57.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2025-02-06T09:47:18.000Z"
                            }
                          }
                        },
                        "number": {
                          "type": "object",
                          "properties": {
                            "number": {
                              "type": "string",
                              "example": "14092880684"
                            },
                            "display_name": {
                              "type": "string",
                              "example": "Don't Edit/Delete this number"
                            },
                            "number_uid": {
                              "type": "string",
                              "example": "ba38c67d-17be-44a2-97cd-a234b87b4287"
                            }
                          }
                        },
                        "recent_conversation_user": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "8366adeb-fea4-4c97-853b-88462021071d"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Sriram"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Palakula"
                            },
                            "email": {
                              "type": "string",
                              "example": "sriram@zuper.co"
                            },
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments.png"
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
        "parameters": [
          {
            "in": "path",
            "name": "conversation_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "in": "header",
            "name": "x-api-key",
            "schema": {
              "type": "string"
            }
          }
        ],
        "operationId": "get_telephony-message-conversation-conversation-uid",
        "summary": "Get Conversation Details"
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