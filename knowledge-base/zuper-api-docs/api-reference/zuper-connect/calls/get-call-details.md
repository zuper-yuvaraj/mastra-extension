---
updatedAt: 2026-07-21T10:06:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Call Details

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
    "/telephony/calls/{call_uid}/details": {
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
                        "call_uid": "3cf6a008-8808-45ac-94c6-fbb7e92ec9c9",
                        "call_type": "EXTERNAL",
                        "direction": "INCOMING",
                        "status": "COMPLETED",
                        "from_number": "14632323489",
                        "to_number": "14092880684",
                        "from": {
                          "type": "customer",
                          "customer": {
                            "number": "14632323489",
                            "number_type": "HOME",
                            "customer_uid": "e2216b10-3842-11eb-accd-bf3a3b7a5772",
                            "customer_name": "Raghav Gurumani"
                          },
                          "user": null
                        },
                        "to": {
                          "type": "user",
                          "user": {
                            "user_uid": "8366adeb-fea4-4c97-853b-88462021071d",
                            "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                            "user_name": "Sriram Palakula",
                            "profile_picture": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments.png"
                          },
                          "customer": null
                        },
                        "is_recorded": true,
                        "duration": 12,
                        "created_at": "2025-02-18T04:02:30.000Z",
                        "updated_at": "2025-02-18T04:02:47.000Z",
                        "number": {
                          "number_uid": "ba38c67d-17be-44a2-97cd-a234b87b4287",
                          "number": "14092880684",
                          "display_name": "Don't Edit/Delete this number"
                        },
                        "attribution": {
                          "attribution_uid": "f3b9c847-2a1d-4e5f-9c3a-8d7e6f5a4b3c",
                          "attribution_name": "Google Ads Campaign Q4 2025",
                          "attribution_source": "google",
                          "notes": "This campaign focuses on seasonal promotions for Q2. Budget allocated is $50k.",
                          "is_always_active": true,
                          "start_date": null,
                          "end_date": null,
                          "is_deleted": false,
                          "created_at": "2025-12-01T14:32:18.000Z",
                          "updated_at": "2025-12-05T09:15:42.000Z"
                        },
                        "call_recordings": [
                          {
                            "call_recording_uid": "e00663ad-88af-4937-a5f4-f19425c4d158",
                            "recording_url": "https://s3.ap-south-1.amazonaws.com/test.zuper.bucket/telephony/recordings.mp3",
                            "recording_duration": 3740,
                            "recording_start_time": "2025-02-18T04:02:35.000Z",
                            "recording_end_time": "2025-02-18T04:02:39.000Z",
                            "created_at": "2025-02-18T04:02:42.000Z",
                            "updated_at": "2025-02-18T04:02:42.000Z",
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
                        ],
                        "call_notes": [],
                        "call_modules": [],
                        "tags": []
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
                        "call_uid": {
                          "type": "string",
                          "example": "3cf6a008-8808-45ac-94c6-fbb7e92ec9c9"
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
                          "example": "COMPLETED"
                        },
                        "from_number": {
                          "type": "string",
                          "example": "14632323489"
                        },
                        "to_number": {
                          "type": "string",
                          "example": "14092880684"
                        },
                        "from": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "customer"
                            },
                            "customer": {
                              "type": "object",
                              "properties": {
                                "number": {
                                  "type": "string",
                                  "example": "14632323489"
                                },
                                "number_type": {
                                  "type": "string",
                                  "example": "HOME"
                                },
                                "customer_uid": {
                                  "type": "string",
                                  "example": "e2216b10-3842-11eb-accd-bf3a3b7a5772"
                                },
                                "customer_name": {
                                  "type": "string",
                                  "example": "Raghav Gurumani"
                                }
                              }
                            },
                            "user": {}
                          }
                        },
                        "to": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string",
                              "example": "user"
                            },
                            "user": {
                              "type": "object",
                              "properties": {
                                "user_uid": {
                                  "type": "string",
                                  "example": "8366adeb-fea4-4c97-853b-88462021071d"
                                },
                                "agent_uid": {
                                  "type": "string",
                                  "example": "2f6f24b0-6586-4d5a-be79-30a12e170033"
                                },
                                "user_name": {
                                  "type": "string",
                                  "example": "Sriram Palakula"
                                },
                                "profile_picture": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments.png"
                                }
                              }
                            },
                            "customer": {}
                          }
                        },
                        "is_recorded": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "duration": {
                          "type": "integer",
                          "example": 12,
                          "default": 0
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2025-02-18T04:02:30.000Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2025-02-18T04:02:47.000Z"
                        },
                        "number": {
                          "type": "object",
                          "properties": {
                            "number_uid": {
                              "type": "string",
                              "example": "ba38c67d-17be-44a2-97cd-a234b87b4287"
                            },
                            "number": {
                              "type": "string",
                              "example": "14092880684"
                            },
                            "display_name": {
                              "type": "string",
                              "example": "Don't Edit/Delete this number"
                            }
                          }
                        },
                        "attribution": {
                          "type": "object",
                          "properties": {
                            "attribution_uid": {
                              "type": "string",
                              "example": "f3b9c847-2a1d-4e5f-9c3a-8d7e6f5a4b3c"
                            },
                            "attribution_name": {
                              "type": "string",
                              "example": "Google Ads Campaign Q4 2025"
                            },
                            "attribution_source": {
                              "type": "string",
                              "example": "google"
                            },
                            "notes": {
                              "type": "string",
                              "example": "This campaign focuses on seasonal promotions for Q2. Budget allocated is $50k."
                            },
                            "is_always_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "start_date": {},
                            "end_date": {},
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2025-12-01T14:32:18.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2025-12-05T09:15:42.000Z"
                            }
                          }
                        },
                        "call_recordings": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "call_recording_uid": {
                                "type": "string",
                                "example": "e00663ad-88af-4937-a5f4-f19425c4d158"
                              },
                              "recording_url": {
                                "type": "string",
                                "example": "https://s3.ap-south-1.amazonaws.com/test.zuper.bucket/telephony/recordings.mp3"
                              },
                              "recording_duration": {
                                "type": "integer",
                                "example": 3740,
                                "default": 0
                              },
                              "recording_start_time": {
                                "type": "string",
                                "example": "2025-02-18T04:02:35.000Z"
                              },
                              "recording_end_time": {
                                "type": "string",
                                "example": "2025-02-18T04:02:39.000Z"
                              },
                              "created_at": {
                                "type": "string",
                                "example": "2025-02-18T04:02:42.000Z"
                              },
                              "updated_at": {
                                "type": "string",
                                "example": "2025-02-18T04:02:42.000Z"
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
                        },
                        "call_notes": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
                          }
                        },
                        "call_modules": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
                          }
                        },
                        "tags": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {}
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
            "name": "call_uid",
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
            },
            "required": true
          }
        ],
        "operationId": "get_telephony-calls-call-uid-details",
        "summary": "Get Call Details"
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