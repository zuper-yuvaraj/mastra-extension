---
updatedAt: 2026-07-21T09:17:59.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Call Activity 

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
    "/telephony/calls/{call_uid}/activities?page=1&limit=50": {
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
                        "call": {
                          "call_uid": "4cdfc429-4470-47e3-8759-90ae8e9a4825",
                          "call_type": "EXTERNAL",
                          "direction": "INCOMING",
                          "status": "MISSED",
                          "from_number": "12526268002",
                          "to_number": "19104212863",
                          "from": "1970effc-5982-4613-9d61-9e87e9a6c47f",
                          "to": null,
                          "from_name": "L Kirkman",
                          "to_name": null,
                          "is_recorded": true,
                          "duration": 5,
                          "created_at": "2026-07-18T15:55:59.000Z",
                          "number": {
                            "number_uid": "b39df1fe-72d2-4576-8bca-2c80773c8887",
                            "number": "19104212863",
                            "display_name": "Boz Alfaro"
                          },
                          "customer_number": {
                            "customer_number_uid": "1970effc-5982-4613-9d61-9e87e9a6c47f",
                            "customer_uid": "59f0be02-9586-47fb-92de-a28a7e862530",
                            "customer_full_name": "L Kirkman",
                            "customer_email": "jdillslove@gmail.com",
                            "number": "12526268002",
                            "number_type": "MOBILE",
                            "is_blocked": false,
                            "created_at": "2026-07-15T12:56:52.000Z",
                            "updated_at": "2026-07-15T13:01:59.000Z"
                          }
                        },
                        "activities": [
                          {
                            "call_activity_uid": "ac1e08e5-4b11-4b99-a9bd-fc0794d91957",
                            "activity": "INBOUND_CALL",
                            "meta_data": {
                              "from": {
                                "name": "L Kirkman",
                                "type": "customer",
                                "number": "12526268002",
                                "customer_uid": "59f0be02-9586-47fb-92de-a28a7e862530"
                              },
                              "reason": "inbound",
                              "message": "Incoming call received"
                            },
                            "performed_at": "2026-07-18T15:55:59.000Z",
                            "created_at": "2026-07-18T15:55:59.000Z",
                            "agent": null
                          },
                          {
                            "call_activity_uid": "24051f98-3d37-4d0e-a2e7-7d67fda7252e",
                            "activity": "AGENTS_NOTIFIED",
                            "meta_data": {
                              "reason": "notified",
                              "message": "Agents were notified of the incoming call",
                              "agents_notified": [
                                {
                                  "user_uid": "1ca4baf5-96f0-4d18-bcc6-0d749c5de21b",
                                  "agent_uid": "2628f014-e79a-4bb8-8528-c08b81e80a87",
                                  "last_name": "Bosselei Alfaro",
                                  "first_name": "Jingger",
                                  "profile_picture": "https://s3.us-west-1.amazonaws.com/prod.us-west-1c.app.zuperpro/attachments/a016b489-08b1-4e6b-b954-1ec11cfc3fe3/30a80810-abe1-440f-991a-b70594482f22.webp"
                                }
                              ]
                            },
                            "performed_at": "2026-07-18T15:55:59.000Z",
                            "created_at": "2026-07-18T15:55:59.000Z",
                            "agent": null
                          },
                          {
                            "call_activity_uid": "60828180-0d3a-471a-ae1c-3eddbc082fb9",
                            "activity": "CALL_MISSED",
                            "meta_data": {
                              "reason": "abandoned",
                              "message": "The caller hung up before anyone could answer"
                            },
                            "performed_at": "2026-07-18T15:56:04.000Z",
                            "created_at": "2026-07-18T15:56:04.000Z",
                            "agent": null
                          },
                          {
                            "call_activity_uid": "7b537076-05ab-4110-9294-bc6e0029eea5",
                            "activity": "CALL_ENDED",
                            "meta_data": {
                              "hangup": {
                                "cause": "NORMAL_CLEARING",
                                "source": "Caller",
                                "cause_code": "4000"
                              },
                              "reason": "ended_by_customer",
                              "message": "The customer ended the call",
                              "customer": {
                                "name": "L Kirkman",
                                "number": "12526268002"
                              },
                              "hangup_source": "customer"
                            },
                            "performed_at": "2026-07-18T15:56:04.000Z",
                            "created_at": "2026-07-18T15:56:07.000Z",
                            "agent": null
                          }
                        ]
                      },
                      "total_records": 4,
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
                      "type": "object",
                      "properties": {
                        "call": {
                          "type": "object",
                          "properties": {
                            "call_uid": {
                              "type": "string",
                              "example": "4cdfc429-4470-47e3-8759-90ae8e9a4825"
                            },
                            "call_type": {
                              "type": "string",
                              "example": "EXTERNAL"
                            },
                            "direction": {
                              "type": "string",
                              "example": "INCOMING"
                            },
                            "status": {
                              "type": "string",
                              "example": "MISSED"
                            },
                            "from_number": {
                              "type": "string",
                              "example": "12526268002"
                            },
                            "to_number": {
                              "type": "string",
                              "example": "19104212863"
                            },
                            "from": {
                              "type": "string",
                              "example": "1970effc-5982-4613-9d61-9e87e9a6c47f"
                            },
                            "to": {},
                            "from_name": {
                              "type": "string",
                              "example": "L Kirkman"
                            },
                            "to_name": {},
                            "is_recorded": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "duration": {
                              "type": "integer",
                              "example": 5,
                              "default": 0
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2026-07-18T15:55:59.000Z"
                            },
                            "number": {
                              "type": "object",
                              "properties": {
                                "number_uid": {
                                  "type": "string",
                                  "example": "b39df1fe-72d2-4576-8bca-2c80773c8887"
                                },
                                "number": {
                                  "type": "string",
                                  "example": "19104212863"
                                },
                                "display_name": {
                                  "type": "string",
                                  "example": "Boz Alfaro"
                                }
                              }
                            },
                            "customer_number": {
                              "type": "object",
                              "properties": {
                                "customer_number_uid": {
                                  "type": "string",
                                  "example": "1970effc-5982-4613-9d61-9e87e9a6c47f"
                                },
                                "customer_uid": {
                                  "type": "string",
                                  "example": "59f0be02-9586-47fb-92de-a28a7e862530"
                                },
                                "customer_full_name": {
                                  "type": "string",
                                  "example": "L Kirkman"
                                },
                                "customer_email": {
                                  "type": "string",
                                  "example": "jdillslove@gmail.com"
                                },
                                "number": {
                                  "type": "string",
                                  "example": "12526268002"
                                },
                                "number_type": {
                                  "type": "string",
                                  "example": "MOBILE"
                                },
                                "is_blocked": {
                                  "type": "boolean",
                                  "example": false,
                                  "default": true
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2026-07-15T12:56:52.000Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2026-07-15T13:01:59.000Z"
                                }
                              }
                            }
                          }
                        },
                        "activities": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "call_activity_uid": {
                                "type": "string",
                                "example": "ac1e08e5-4b11-4b99-a9bd-fc0794d91957"
                              },
                              "activity": {
                                "type": "string",
                                "example": "INBOUND_CALL"
                              },
                              "meta_data": {
                                "type": "object",
                                "properties": {
                                  "from": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "example": "L Kirkman"
                                      },
                                      "type": {
                                        "type": "string",
                                        "example": "customer"
                                      },
                                      "number": {
                                        "type": "string",
                                        "example": "12526268002"
                                      },
                                      "customer_uid": {
                                        "type": "string",
                                        "example": "59f0be02-9586-47fb-92de-a28a7e862530"
                                      }
                                    }
                                  },
                                  "reason": {
                                    "type": "string",
                                    "example": "inbound"
                                  },
                                  "message": {
                                    "type": "string",
                                    "example": "Incoming call received"
                                  }
                                }
                              },
                              "performed_at": {
                                "type": "string",
                                "example": "2026-07-18T15:55:59.000Z"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2026-07-18T15:55:59.000Z"
                              },
                              "agent": {}
                            }
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 4,
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
          },
          {
            "in": "path",
            "name": "call_uid",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "summary": "Get Call Activity ",
        "operationId": "post_telephony-calls-analytics-comprehensive-1",
        "x-internal": false
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