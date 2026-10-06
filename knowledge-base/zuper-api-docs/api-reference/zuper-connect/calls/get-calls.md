---
updatedAt: 2026-07-21T10:06:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Calls

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
    "/telephony/calls": {
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
                          "call_uid": "9eeee33d-e883-43fc-b248-e43cf29b2127",
                          "call_type": "INTERNAL",
                          "direction": "INCOMING",
                          "status": "COMPLETED",
                          "from_number": "17473179643",
                          "to_number": null,
                          "from": {
                            "type": "user",
                            "user": {
                              "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                              "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                              "user_name": "Sriram",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "to": {
                            "type": "user",
                            "user": {
                              "user_uid": "b26e2292-014a-40af-b009-ffdb0d5efd03",
                              "agent_uid": "b09d8163-03ce-42e5-b923-97dd577a0cb5",
                              "user_name": "John",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "is_recorded": 0,
                          "duration": 27,
                          "call_recordings": [
                            {
                              "call_recording_uid": "9ec77f5c-656c-4b40-8733-407196ed4889",
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/d09d88b-2cb0-4902.mp3",
                              "recording_duration": 7340,
                              "recording_start_time": "2024-11-28T08:15:09.000Z",
                              "recording_end_time": "2024-11-28T08:15:16.000Z",
                              "created_at": "2024-11-28T08:15:26.000Z",
                              "updated_at": "2024-11-28T08:15:26.000Z",
                              "call_summary": {
                                "status": "COMPLETED",
                                "sentiment": "POSITIVE"
                              }
                            }
                          ],
                          "call_notes": [
                            {
                              "call_note_uid": "c56a91b3-4bd4-4d28-a431-d42026a472b3",
                              "call_note": "This is a test call note",
                              "created_at": "2024-12-19T10:18:39.000Z",
                              "updated_at": "2024-12-19T10:18:39.000Z"
                            },
                            {
                              "call_note_uid": "6586d1ff-270d-4756-961a-8604234ae6de",
                              "call_note": "This is a test call note",
                              "created_at": "2024-12-19T10:18:39.000Z",
                              "updated_at": "2024-12-19T10:18:39.000Z"
                            }
                          ],
                          "call_modules": [
                            {
                              "call_module_uid": "ad7ee591-27dc-4bdf-982d-8bb76e7a2950",
                              "module": "JOB",
                              "module_uid": "e0ac1590-7824-11e8-8aa6-497f7c509174",
                              "created_at": "2024-11-25T07:40:18.000Z",
                              "updated_at": "2024-11-25T07:40:18.000Z",
                              "name": "Commercial service 3"
                            }
                          ],
                          "number": null,
                          "created_at": "2024-11-15T03:37:09.000Z",
                          "updated_at": "2024-11-15T03:37:20.000Z"
                        },
                        {
                          "call_uid": "0e024c69-9f02-4a61-a5d9-337ebecb8a83",
                          "call_type": "EXTERNAL",
                          "direction": "INCOMING",
                          "status": "COMPLETED",
                          "from_number": "14632323489",
                          "to_number": "17473179643",
                          "from": {
                            "type": "customer",
                            "customer": {
                              "number": "14632323489",
                              "number_type": "HOME",
                              "customer_uid": "d286467f-0d13-4de8-ab87-3b24faaaa4d1",
                              "customer_name": "Raghav Gurumani"
                            },
                            "user": null
                          },
                          "to": {
                            "type": "user",
                            "user": {
                              "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                              "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                              "user_name": "Sriram",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "call_recordings": [
                            {
                              "call_recording_uid": "9ec77f5c-656c-4b40-8733-407196ed4889",
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/d09d88b-2cb0-4902.mp3",
                              "recording_duration": 7340,
                              "recording_start_time": "2024-11-28T08:15:09.000Z",
                              "recording_end_time": "2024-11-28T08:15:16.000Z",
                              "created_at": "2024-11-28T08:15:26.000Z",
                              "updated_at": "2024-11-28T08:15:26.000Z",
                              "call_summary": {
                                "status": "COMPLETED",
                                "sentiment": "POSITIVE"
                              }
                            }
                          ],
                          "call_notes": [],
                          "number": {
                            "number_uid": "d99d2420-360c-4dae-96d4-622891416998",
                            "number": "17473179643",
                            "display_name": "test"
                          },
                          "attribution": {
                            "attribution_uid": "a6d37ab5-5b79-4e7f-89ea-5ebf7cc0705e",
                            "attribution_name": "linkedin Campaign 1",
                            "attribution_source": "direct",
                            "notes": null,
                            "is_always_active": false,
                            "start_date": "2025-12-10T00:00:00.000Z",
                            "end_date": "2025-12-15T00:00:00.000Z",
                            "is_deleted": false,
                            "created_at": "2025-12-05T17:31:30.000Z",
                            "updated_at": "2025-12-12T16:20:05.000Z"
                          },
                          "is_recorded": 0,
                          "duration": 27,
                          "call_modules": [
                            {
                              "call_module_uid": "ad7ee591-27dc-4bdf-982d-8bb76e7a2950",
                              "module": "JOB",
                              "module_uid": "e0ac1590-7824-11e8-8aa6-497f7c509174",
                              "created_at": "2024-11-25T07:40:18.000Z",
                              "updated_at": "2024-11-25T07:40:18.000Z",
                              "name": "Commercial service 3"
                            }
                          ],
                          "created_at": "2024-11-14T18:09:13.000Z",
                          "updated_at": "2024-11-14T18:09:31.000Z"
                        },
                        {
                          "call_uid": "fa2f72e0-0bb2-4ee3-bad1-447369de7d20",
                          "call_type": "INTERNAL",
                          "direction": "INCOMING",
                          "status": "MISSED",
                          "from_number": "17473179643",
                          "to_number": null,
                          "from": {
                            "type": "user",
                            "user": {
                              "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                              "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                              "user_name": "Sriram",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "to": {
                            "type": "user",
                            "user": {
                              "user_uid": "b26e2292-014a-40af-b009-ffdb0d5efd03",
                              "agent_uid": "b09d8163-03ce-42e5-b923-97dd577a0cb5",
                              "user_name": "John",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "call_recordings": [
                            {
                              "call_recording_uid": "9ec77f5c-656c-4b40-8733-407196ed4889",
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/d09d88b-2cb0-4902.mp3",
                              "recording_duration": 7340,
                              "recording_start_time": "2024-11-28T08:15:09.000Z",
                              "recording_end_time": "2024-11-28T08:15:16.000Z",
                              "created_at": "2024-11-28T08:15:26.000Z",
                              "updated_at": "2024-11-28T08:15:26.000Z",
                              "call_summary": {
                                "status": "COMPLETED",
                                "sentiment": "POSITIVE"
                              }
                            }
                          ],
                          "call_notes": [],
                          "is_recorded": 0,
                          "duration": 27,
                          "call_modules": [],
                          "number": null,
                          "created_at": "2024-11-14T18:04:14.000Z",
                          "updated_at": "2024-11-14T18:04:23.000Z"
                        },
                        {
                          "call_uid": "5b4a9be8-e9ac-4a98-9805-015e80d0d923",
                          "call_type": "EXTERNAL",
                          "direction": "OUTGOING",
                          "status": "COMPLETED",
                          "from_number": "17473179643",
                          "to_number": "918301907278",
                          "from": {
                            "number": "17473179643",
                            "display_name": "test",
                            "type": "user",
                            "user": {
                              "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                              "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                              "user_name": "Sriram Palakula",
                              "profile_picture": "https://engineering.zuperpro.com/file/data/profile"
                            },
                            "customer": null
                          },
                          "to": {
                            "type": "customer",
                            "customer": {
                              "number": "918301907278",
                              "number_type": null
                            },
                            "user": null
                          },
                          "is_recorded": true,
                          "duration": 13,
                          "created_at": "2025-01-08T09:28:16.000Z",
                          "updated_at": "2025-01-08T09:28:47.000Z",
                          "call_recordings": [
                            {
                              "call_recording_uid": "750c0173-7ca4-4a9f-85a8-137827134b6a",
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/ea4d.mp3",
                              "recording_duration": 11480,
                              "recording_start_time": "2025-01-08T09:28:30.000Z",
                              "recording_end_time": "2025-01-08T09:28:42.000Z",
                              "created_at": "2025-01-08T09:28:45.000Z",
                              "updated_at": "2025-01-08T09:28:45.000Z",
                              "call_summary": {
                                "status": "COMPLETED",
                                "sentiment": "POSITIVE"
                              }
                            }
                          ],
                          "number": {
                            "number_uid": "d99d2420-360c-4dae-96d4-622891416998",
                            "number": "17473179643",
                            "display_name": "test"
                          },
                          "call_notes": [],
                          "call_modules": [
                            {
                              "call_module_uid": "69288a5e-1c93-40ab-a8fb-e442238fd764",
                              "module": "PROJECT",
                              "module_uid": "5ed8c0c0-8b63-11ed-a63c-7d46adaa7b2c",
                              "created_at": "2025-01-23T06:49:23.000Z",
                              "updated_at": "2025-01-23T06:49:23.000Z",
                              "name": "panel"
                            },
                            {
                              "call_module_uid": "98e942f0-1787-4f05-bc28-d17f05ebd4c1",
                              "module": "PROJECT",
                              "module_uid": "c31c8db0-964d-11ed-a3d1-295b79eb7eaa",
                              "created_at": "2025-01-23T06:49:23.000Z",
                              "updated_at": "2025-01-23T06:49:23.000Z",
                              "name": "panel"
                            },
                            {
                              "call_module_uid": "69be9a69-9a58-43a4-a1ba-ceec322e1041",
                              "module": "JOB",
                              "module_uid": "ee69a810-e28a-11ee-b824-af9aa9bbfc9a",
                              "created_at": "2025-01-23T06:49:23.000Z",
                              "updated_at": "2025-01-23T06:49:23.000Z",
                              "name": "J Test"
                            }
                          ],
                          "tags": []
                        },
                        {
                          "call_uid": "7a5a8e8c-7009-4551-8989-3717936fd2be",
                          "call_type": "INTERNAL",
                          "direction": "INCOMING",
                          "status": "MISSED",
                          "from_number": "17473179643",
                          "to_number": null,
                          "from": {
                            "type": "user",
                            "user": {
                              "user_uid": "7c562eb0-f26c-4f07-8cba-11b67c8981dc",
                              "agent_uid": "2f6f24b0-6586-4d5a-be79-30a12e170033",
                              "user_name": "Sriram",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "to": {
                            "type": "user",
                            "user": {
                              "user_uid": "b26e2292-014a-40af-b009-ffdb0d5efd03",
                              "agent_uid": "b09d8163-03ce-42e5-b923-97dd577a0cb5",
                              "user_name": "John",
                              "profile_picture": "https://s3.ap-south/profile_picture.jpg"
                            },
                            "customer": null
                          },
                          "is_recorded": 0,
                          "duration": 27,
                          "call_recordings": [
                            {
                              "call_recording_uid": "9ec77f5c-656c-4b40-8733-407196ed4889",
                              "recording_url": "https://s3.ap-south-1.amazonaws.com/d09d88b-2cb0-4902.mp3",
                              "recording_duration": 7340,
                              "recording_start_time": "2024-11-28T08:15:09.000Z",
                              "recording_end_time": "2024-11-28T08:15:16.000Z",
                              "created_at": "2024-11-28T08:15:26.000Z",
                              "updated_at": "2024-11-28T08:15:26.000Z",
                              "call_summary": {
                                "status": "COMPLETED",
                                "sentiment": "POSITIVE"
                              }
                            }
                          ],
                          "call_notes": [],
                          "call_modules": [],
                          "number": null,
                          "created_at": "2024-11-14T18:03:21.000Z",
                          "updated_at": "2024-11-14T18:03:31.000Z"
                        }
                      ],
                      "total_records": 67,
                      "total_pages": 14,
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
                          "call_uid": {
                            "type": "string",
                            "example": "9eeee33d-e883-43fc-b248-e43cf29b2127"
                          },
                          "call_type": {
                            "type": "string",
                            "example": "INTERNAL"
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
                            "example": "17473179643"
                          },
                          "to_number": {},
                          "from": {
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
                                    "example": "7c562eb0-f26c-4f07-8cba-11b67c8981dc"
                                  },
                                  "agent_uid": {
                                    "type": "string",
                                    "example": "2f6f24b0-6586-4d5a-be79-30a12e170033"
                                  },
                                  "user_name": {
                                    "type": "string",
                                    "example": "Sriram"
                                  },
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south/profile_picture.jpg"
                                  }
                                }
                              },
                              "customer": {}
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
                                    "example": "b26e2292-014a-40af-b009-ffdb0d5efd03"
                                  },
                                  "agent_uid": {
                                    "type": "string",
                                    "example": "b09d8163-03ce-42e5-b923-97dd577a0cb5"
                                  },
                                  "user_name": {
                                    "type": "string",
                                    "example": "John"
                                  },
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://s3.ap-south/profile_picture.jpg"
                                  }
                                }
                              },
                              "customer": {}
                            }
                          },
                          "is_recorded": {
                            "type": "integer",
                            "example": 0,
                            "default": 0
                          },
                          "duration": {
                            "type": "integer",
                            "example": 27,
                            "default": 0
                          },
                          "call_recordings": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "call_recording_uid": {
                                  "type": "string",
                                  "example": "9ec77f5c-656c-4b40-8733-407196ed4889"
                                },
                                "recording_url": {
                                  "type": "string",
                                  "example": "https://s3.ap-south-1.amazonaws.com/d09d88b-2cb0-4902.mp3"
                                },
                                "recording_duration": {
                                  "type": "integer",
                                  "example": 7340,
                                  "default": 0
                                },
                                "recording_start_time": {
                                  "type": "string",
                                  "example": "2024-11-28T08:15:09.000Z"
                                },
                                "recording_end_time": {
                                  "type": "string",
                                  "example": "2024-11-28T08:15:16.000Z"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2024-11-28T08:15:26.000Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2024-11-28T08:15:26.000Z"
                                },
                                "call_summary": {
                                  "type": "object",
                                  "properties": {
                                    "status": {
                                      "type": "string",
                                      "example": "COMPLETED"
                                    },
                                    "sentiment": {
                                      "type": "string",
                                      "example": "POSITIVE"
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
                              "properties": {
                                "call_note_uid": {
                                  "type": "string",
                                  "example": "c56a91b3-4bd4-4d28-a431-d42026a472b3"
                                },
                                "call_note": {
                                  "type": "string",
                                  "example": "This is a test call note"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2024-12-19T10:18:39.000Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2024-12-19T10:18:39.000Z"
                                }
                              }
                            }
                          },
                          "call_modules": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "call_module_uid": {
                                  "type": "string",
                                  "example": "ad7ee591-27dc-4bdf-982d-8bb76e7a2950"
                                },
                                "module": {
                                  "type": "string",
                                  "example": "JOB"
                                },
                                "module_uid": {
                                  "type": "string",
                                  "example": "e0ac1590-7824-11e8-8aa6-497f7c509174"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2024-11-25T07:40:18.000Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2024-11-25T07:40:18.000Z"
                                },
                                "name": {
                                  "type": "string",
                                  "example": "Commercial service 3"
                                }
                              }
                            }
                          },
                          "number": {},
                          "created_at": {
                            "type": "string",
                            "example": "2024-11-15T03:37:09.000Z"
                          },
                          "updated_at": {
                            "type": "string",
                            "example": "2024-11-15T03:37:20.000Z"
                          }
                        }
                      }
                    },
                    "total_records": {
                      "type": "integer",
                      "example": 67,
                      "default": 0
                    },
                    "total_pages": {
                      "type": "integer",
                      "example": 14,
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
                      "user_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "customer_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "customer_number_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "call_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "module": {
                        "type": "string"
                      },
                      "module_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "attribution_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "number": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "tag": {
                        "type": "string"
                      },
                      "call_type": {
                        "type": "string",
                        "default": "EXTERNAL"
                      },
                      "direction": {
                        "type": "string",
                        "enum": [
                          "INCOMING",
                          "OUTGOING"
                        ]
                      },
                      "status": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "created_at_from": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "created_at_to": {
                        "type": "string",
                        "format": "date-time"
                      }
                    }
                  },
                  "sort": {
                    "type": "string",
                    "enum": [
                      "ASC",
                      "DESC"
                    ]
                  },
                  "sort_by": {
                    "type": "string",
                    "enum": [
                      "created_at",
                      "updated_at"
                    ]
                  },
                  "limit": {
                    "type": "number"
                  },
                  "page": {
                    "type": "number"
                  }
                },
                "required": [
                  "filters"
                ]
              }
            }
          }
        },
        "operationId": "post_telephony-calls",
        "summary": "Get Calls"
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