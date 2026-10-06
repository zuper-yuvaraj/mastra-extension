---
updatedAt: 2026-07-21T10:06:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Conversations

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
    "/telephony/message/conversations": {
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
                      "data": [
                        {
                          "conversation_uid": "6312e5f7-bc93-4091-b013-ab707930aea2",
                          "is_done": false,
                          "has_unread": true,
                          "unread_count": 6,
                          "needs_attention": true,
                          "is_unresponded": true,
                          "meta_data": null,
                          "recent_conversation_at": "2025-01-30T06:40:38.000Z",
                          "updated_at": "2025-01-30T06:40:41.000Z",
                          "created_at": "2025-01-30T06:33:20.000Z",
                          "recent_message": null,
                          "recent_call": {
                            "call_uid": "837f1374-9d0e-4012-8f47-3d022c7b5c9c",
                            "direction": "INCOMING",
                            "status": "COMPLETED",
                            "call_recordings": [
                              {
                                "recording_url": "https://s3.ap-south-1.amazonaws.com/recordings.mp3",
                                "recording_duration": 1800,
                                "call_summary": {
                                  "status": "COMPLETED",
                                  "summary": "The call discusses an API issue where the caller is sending a UID parameter but believes the API is expecting an ID parameter instead. Sushil explains that in the backend, they have configured the object ID as object UID, mapping the UID directly from the database object ID. The issue might be because they haven't used a specific library like UUID4. The caller acknowledges this explanation and says they will check again and get back to Sushil.",
                                  "sentiment": "NEUTRAL",
                                  "next_action": [
                                    "Caller will check the API issue again",
                                    "Caller will get back to Sushil with findings"
                                  ],
                                  "confidence": 98.6084
                                }
                              }
                            ]
                          },
                          "unread_message": {
                            "message_uid": "495c90e3-21a3-4e5a-a536-8269b8438ccf",
                            "message_type": "CALL",
                            "message": null,
                            "media": [],
                            "direction": "INCOMING"
                          },
                          "customer_number": {
                            "customer_number_uid": "e8a16887-c39c-4fb4-bcf9-d4a7bf427be3",
                            "customer_uid": "d286467f-0d13-4de8-ab87-3b24faaaa4d1",
                            "customer_full_name": "Raghav Gurumani",
                            "customer_email": "customer@zuper.co",
                            "number": "14632323489",
                            "number_type": "HOME",
                            "is_blocked": false,
                            "created_at": "2025-01-12T11:56:38.000Z",
                            "updated_at": "2025-01-12T11:57:39.000Z"
                          },
                          "number": {
                            "number": "19284652818",
                            "display_name": "number",
                            "number_uid": "8a943a06-122f-495e-9f9f-e5a60b0340b2"
                          },
                          "recent_conversation_user": {
                            "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                            "first_name": "Sriram",
                            "last_name": "Palakula",
                            "email": "sriram@zuper.co",
                            "profile_picture": "https://engineering.zuperpro.com/profile"
                          },
                          "assigned_user": {
                            "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                            "first_name": "Sriram",
                            "last_name": "Palakula",
                            "email": "sriram@zuper.co",
                            "profile_picture": "https://engineering.zuperpro.com/profile"
                          }
                        },
                        {
                          "conversation_uid": "6312e5f7-bc93-4091-b013-ab707930aea2",
                          "is_done": false,
                          "has_unread": true,
                          "unread_count": 5,
                          "needs_attention": false,
                          "ai_responder_status": "INACTIVE",
                          "is_unresponded": true,
                          "recent_conversation_at": "2025-01-30T06:39:50.000Z",
                          "updated_at": "2025-01-30T06:39:54.000Z",
                          "created_at": "2025-01-30T06:33:20.000Z",
                          "recent_message": {
                            "message_uid": "076a0675-18bb-4aad-a2ac-f9f4abea6a01",
                            "message_type": "SMS",
                            "message": "This is a test message",
                            "media": [],
                            "direction": "OUTGOING",
                            "status": "FAILED",
                            "error_reason": "Forbidden"
                          },
                          "recent_call": null,
                          "unread_message": {
                            "message_uid": "076a0675-18bb-4aad-a2ac-f9f4abea6a01",
                            "message_type": "SMS",
                            "message": "This is a test message",
                            "media": [],
                            "direction": "OUTGOING",
                            "status": "FAILED",
                            "error_reason": "Forbidden"
                          },
                          "customer_number": {
                            "customer_number_uid": "e8a16887-c39c-4fb4-bcf9-d4a7bf427be3",
                            "customer_uid": "d286467f-0d13-4de8-ab87-3b24faaaa4d1",
                            "customer_full_name": "Raghav Gurumani",
                            "customer_email": "customer@zuper.co",
                            "number": "14632323489",
                            "number_type": "HOME",
                            "is_blocked": false,
                            "created_at": "2025-01-12T11:56:38.000Z",
                            "updated_at": "2025-01-12T11:57:39.000Z"
                          },
                          "number": {
                            "number": "19284652818",
                            "display_name": "number",
                            "number_uid": "8a943a06-122f-495e-9f9f-e5a60b0340b2"
                          },
                          "recent_conversation_user": null
                        },
                        {
                          "conversation_uid": "ed2c509e-3aa0-4bd8-b68c-27eedcb44b56",
                          "is_done": false,
                          "has_unread": true,
                          "unread_count": 1,
                          "is_unresponded": true,
                          "recent_conversation_at": "2025-01-30T06:39:09.000Z",
                          "updated_at": "2025-01-30T06:39:09.000Z",
                          "created_at": "2025-01-30T06:36:19.000Z",
                          "recent_message": {
                            "message_uid": "9dc8bb4e-0e30-4821-b22d-81fafc6c6119",
                            "message_type": "MMS",
                            "message": "The sender ID you want to use, which may be a phone number",
                            "media": [
                              {
                                "size": 155515,
                                "file_name": "649f81a5-8707-4bb3-8a1b-cb7a60be5ce4.png",
                                "media_url": "https://s3.ap-south-1.amazonaws.png",
                                "content_type": "image/png"
                              },
                              {
                                "size": 188482,
                                "file_name": "f038f915-cfb3-4ddd-8a4e-ca8183712d29.png",
                                "media_url": "https://s3.ap-south-1.amazonaws.png",
                                "content_type": "image/png"
                              }
                            ],
                            "direction": "INCOMING"
                          },
                          "recent_call": null,
                          "unread_message": {
                            "message_uid": "9dc8bb4e-0e30-4821-b22d-81fafc6c6119",
                            "message_type": "MMS",
                            "message": "The sender ID you want to use, which may be a phone number",
                            "media": [
                              {
                                "media_url": "https://s3.ap-south-1.amazonaws.png",
                                "content_type": "image/png"
                              },
                              {
                                "media_url": "https://s3.ap-south-1.amazonaws.png",
                                "content_type": "image/png"
                              }
                            ],
                            "direction": "INCOMING"
                          },
                          "customer_number": {
                            "customer_number_uid": "b301d27d-d835-46e2-8edf-5c2ac977441e",
                            "customer_uid": "d286467f-0d13-4de8-ab87-3b24faaaa4d1",
                            "customer_full_name": "Raghav Gurumani",
                            "customer_email": "customer@zuper.co",
                            "number": "14092880684",
                            "number_type": "WORK",
                            "is_blocked": false,
                            "created_at": "2025-01-13T05:31:00.000Z",
                            "updated_at": "2025-01-13T05:31:00.000Z"
                          },
                          "number": {
                            "number": "17473179643",
                            "display_name": "test",
                            "number_uid": "d99d2420-360c-4dae-96d4-622891416998"
                          },
                          "recent_conversation_user": null
                        },
                        {
                          "conversation_uid": "260c38dc-f757-4638-b084-61fd867a6731",
                          "is_done": true,
                          "has_unread": false,
                          "unread_count": 0,
                          "is_unresponded": false,
                          "recent_conversation_at": "2025-01-30T06:35:40.000Z",
                          "updated_at": "2025-01-30T06:35:40.000Z",
                          "created_at": "2025-01-30T06:35:40.000Z",
                          "recent_message": null,
                          "recent_call": {
                            "call_uid": "e5560844-5e49-406f-b282-d92387cb4465",
                            "direction": "OUTGOING",
                            "status": "COMPLETED",
                            "call_recordings": [
                              {
                                "recording_url": "https://s3.ap-south-1.amazonaws.mp3",
                                "recording_duration": 1560,
                                "call_summary": {
                                  "status": "COMPLETED",
                                  "summary": "The call discusses an API issue where the caller is sending a UID parameter but believes the API is expecting an ID parameter instead. Sushil explains that in the backend, they have configured the object ID as object UID, mapping the UID directly from the database object ID. The issue might be because they haven't used a specific library like UUID4. The caller acknowledges this explanation and says they will check again and get back to Sushil.",
                                  "sentiment": "NEUTRAL",
                                  "next_action": [
                                    "Caller will check the API issue again",
                                    "Caller will get back to Sushil with findings"
                                  ],
                                  "confidence": 98.6084
                                }
                              }
                            ]
                          },
                          "unread_message": null,
                          "customer_number": {
                            "customer_number_uid": "48bcf6b3-0efd-4111-a472-9689473464a9",
                            "customer_uid": "d2023bb0-e28a-11ee-b824-af9aa9bbfc9a",
                            "customer_full_name": "Sriram Chandrasekhar",
                            "customer_email": "networkwithsriram@gmail.com",
                            "number": "919790791037",
                            "number_type": "HOME",
                            "is_blocked": false,
                            "created_at": "2025-01-23T07:37:45.000Z",
                            "updated_at": "2025-01-26T10:23:04.000Z"
                          },
                          "number": {
                            "number": "17473179643",
                            "display_name": "test",
                            "number_uid": "d99d2420-360c-4dae-96d4-622891416998"
                          },
                          "recent_conversation_user": {
                            "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                            "first_name": "Sriram",
                            "last_name": "Palakula",
                            "email": "sriram@zuper.co",
                            "profile_picture": "https://engineering.zuperpro.com/profile"
                          }
                        }
                      ],
                      "total_records": 3,
                      "total_pages": 1,
                      "current_page": 1
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
                        "type": "object",
                        "properties": {
                          "conversation_uid": {
                            "type": "string",
                            "example": "6312e5f7-bc93-4091-b013-ab707930aea2"
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
                            "example": 6,
                            "default": 0
                          },
                          "needs_attention": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "is_unresponded": {
                            "type": "boolean",
                            "example": true,
                            "default": true
                          },
                          "meta_data": {},
                          "recent_conversation_at": {
                            "type": "string",
                            "example": "2025-01-30T06:40:38.000Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2025-01-30T06:40:41.000Z"
                          },
                          "created_at": {
                            "type": "string",
                            "example": "2025-01-30T06:33:20.000Z"
                          },
                          "recent_message": {},
                          "recent_call": {
                            "type": "object",
                            "properties": {
                              "call_uid": {
                                "type": "string",
                                "example": "837f1374-9d0e-4012-8f47-3d022c7b5c9c"
                              },
                              "direction": {
                                "type": "string",
                                "example": "INCOMING"
                              },
                              "status": {
                                "type": "string",
                                "example": "COMPLETED"
                              },
                              "call_recordings": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "recording_url": {
                                      "type": "string",
                                      "example": "https://s3.ap-south-1.amazonaws.com/recordings.mp3"
                                    },
                                    "recording_duration": {
                                      "type": "integer",
                                      "example": 1800,
                                      "default": 0
                                    },
                                    "call_summary": {
                                      "type": "object",
                                      "properties": {
                                        "status": {
                                          "type": "string",
                                          "example": "COMPLETED"
                                        },
                                        "summary": {
                                          "type": "string",
                                          "example": "The call discusses an API issue where the caller is sending a UID parameter but believes the API is expecting an ID parameter instead. Sushil explains that in the backend, they have configured the object ID as object UID, mapping the UID directly from the database object ID. The issue might be because they haven't used a specific library like UUID4. The caller acknowledges this explanation and says they will check again and get back to Sushil."
                                        },
                                        "sentiment": {
                                          "type": "string",
                                          "example": "NEUTRAL"
                                        },
                                        "next_action": {
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "example": "Caller will check the API issue again"
                                          }
                                        },
                                        "confidence": {
                                          "type": "number",
                                          "example": 98.6084,
                                          "default": 0
                                        }
                                      }
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
                                "example": "495c90e3-21a3-4e5a-a536-8269b8438ccf"
                              },
                              "message_type": {
                                "type": "string",
                                "example": "CALL"
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
                                "example": "INCOMING"
                              }
                            }
                          },
                          "customer_number": {
                            "type": "object",
                            "properties": {
                              "customer_number_uid": {
                                "type": "string",
                                "example": "e8a16887-c39c-4fb4-bcf9-d4a7bf427be3"
                              },
                              "customer_uid": {
                                "type": "string",
                                "example": "d286467f-0d13-4de8-ab87-3b24faaaa4d1"
                              },
                              "customer_full_name": {
                                "type": "string",
                                "example": "Raghav Gurumani"
                              },
                              "customer_email": {
                                "type": "string",
                                "example": "customer@zuper.co"
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
                                "example": "2025-01-12T11:56:38.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-01-12T11:57:39.000Z"
                              }
                            }
                          },
                          "number": {
                            "type": "object",
                            "properties": {
                              "number": {
                                "type": "string",
                                "example": "19284652818"
                              },
                              "display_name": {
                                "type": "string",
                                "example": "number"
                              },
                              "number_uid": {
                                "type": "string",
                                "example": "8a943a06-122f-495e-9f9f-e5a60b0340b2"
                              }
                            }
                          },
                          "recent_conversation_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "7c562eb0-f26c-4f07-8cba-11b67c8981dc"
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
                                "example": "https://engineering.zuperpro.com/profile"
                              }
                            }
                          },
                          "assigned_user": {
                            "type": "object",
                            "properties": {
                              "user_uid": {
                                "type": "string",
                                "example": "7c562eb0-f26c-4f07-8cba-11b67c8981dc"
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
                                "example": "https://engineering.zuperpro.com/profile"
                              }
                            }
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 3,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
                    },
                    "current_page": {
                      "type": "integer",
                      "example": 1,
                      "default": 0
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
            },
            "required": true
          }
        ],
        "operationId": "post_telephony-message-conversations",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filters": {
                    "type": "object",
                    "properties": {
                      "keyword": {
                        "type": "string"
                      },
                      "customer_number_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "phone_number_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "status": {
                        "type": "string",
                        "enum": [
                          "OPEN",
                          "CLOSED"
                        ]
                      },
                      "needs_attention": {
                        "type": "boolean"
                      },
                      "read_status": {
                        "type": "string",
                        "enum": [
                          "READ",
                          "UNREAD"
                        ]
                      },
                      "response_status": {
                        "type": "string",
                        "enum": [
                          "UNRESPONDED",
                          "RESPONDED"
                        ]
                      }
                    },
                    "required": [
                      "status",
                      "customer_number_uid",
                      "phone_number_uid"
                    ]
                  },
                  "page": {
                    "type": "number"
                  },
                  "limit": {
                    "type": "number"
                  }
                },
                "required": [
                  "page",
                  "limit",
                  "filters"
                ]
              }
            }
          }
        },
        "summary": "Get Conversations"
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