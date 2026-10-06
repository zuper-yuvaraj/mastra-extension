---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Route Details

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
    "/routes/{route_uid}": {
      "get": {
        "summary": "Get Route Details",
        "description": "",
        "operationId": "get-route-details",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid of route",
            "schema": {
              "type": "string"
            },
            "required": true
          },
          {
            "name": "send_polyline",
            "in": "query",
            "schema": {
              "type": "boolean",
              "default": false
            }
          }
        ],
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\n    \"type\": \"success\",\n    \"data\": {\n        \"created_by\": {\n            \"user_uid\": \"1eb1d499-e8b1-4979-a04b-4b0599599529\",\n            \"first_name\": \"Ashin\",\n            \"last_name\": \"Thankachan\",\n            \"email\": \"ashin.t@zuper.co\",\n            \"external_login_id\": null,\n            \"home_phone_number\": null,\n            \"designation\": \"Admin\",\n            \"emp_code\": \"Z103\",\n            \"prefix\": null,\n            \"work_phone_number\": \"8301907278\",\n            \"mobile_phone_number\": null,\n            \"profile_picture\": \"https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg\",\n            \"hourly_labor_charge\": 120,\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"created_at\": \"2022-07-04T06:25:56.000Z\",\n            \"updated_at\": \"2024-09-02T09:26:10.000Z\",\n            \"role\": {\n                \"role_id\": 1,\n                \"role_uid\": \"504e4eac-ff7d-11e7-8be5-0ed5f89f718b\",\n                \"role_name\": \"Admin\",\n                \"role_key\": \"ADMIN\",\n                \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n            }\n        },\n        \"route_uid\": \"1dcde262-1de0-4d8d-bb93-27e93ff53d54\",\n        \"route_name\": \"every-weekday-route-53\",\n        \"total_jobs\": 0,\n        \"duration\": 8,\n        \"departure\": \"2024-09-19T14:00:00.000Z\",\n        \"route_end_time\": \"2024-09-19T22:00:00.000Z\",\n        \"route_type\": \"FASTEST\",\n        \"transport_mode\": \"CAR\",\n        \"enable_traffic\": false,\n        \"is_optimized\": false,\n        \"color\": \"#e67e22\",\n        \"start_location\": {\n            \"name\": \"Chennai\",\n            \"street\": \"Besant Nagar\",\n            \"geo_cords\": [\n                13.0002927,\n                80.2666982\n            ]\n        },\n        \"end_location\": {\n            \"name\": \"Egattur\",\n            \"street\": \"Old Mahabalipuram Road\",\n            \"geo_cords\": [\n                12.8337782,\n                80.2286669\n            ],\n            \"distance\": 21378,\n            \"time\": 3025\n        },\n        \"assigned_to\": [\n            {\n                \"user\": {\n                    \"user_uid\": \"f2f5bb37-cd1b-4864-92d7-1e59c493f0bd\",\n                    \"first_name\": \"Katrina\",\n                    \"last_name\": \"Whale\",\n                    \"email\": \"kat@gmail.com\",\n                    \"external_login_id\": null,\n                    \"home_phone_number\": \"0988753484\",\n                    \"designation\": \"Field Executive\",\n                    \"emp_code\": \"1029\",\n                    \"prefix\": null,\n                    \"work_phone_number\": \"0988753484\",\n                    \"mobile_phone_number\": null,\n                    \"profile_picture\": \"https://i.imgur.com/phnZHKE.png\",\n                    \"hourly_labor_charge\": 20,\n                    \"is_active\": true,\n                    \"is_deleted\": false,\n                    \"created_at\": \"2018-06-11T17:07:23.000Z\",\n                    \"updated_at\": \"2024-09-04T04:15:47.000Z\",\n                    \"role\": {\n                        \"role_id\": 3,\n                        \"role_uid\": \"504e52bc-ff7d-11e7-8be5-0ed5f89f718b\",\n                        \"role_name\": \"Field Executive\",\n                        \"role_key\": \"FIELD_EXECUTIVE\",\n                        \"created_at\": \"2018-01-22T00:00:00.000Z\",\n                        \"updated_at\": \"2018-01-22T00:00:00.000Z\"\n                    }\n                },\n                \"team\": {\n                    \"team_uid\": \"9f620406-0a8c-430b-858d-ced59cef93a7\",\n                    \"team_name\": \"Sales Team\",\n                    \"team_color\": \"#4960a0\",\n                    \"is_active\": true,\n                    \"is_deleted\": false\n                }\n            }\n        ],\n        \"recurring_route\": {\n            \"recurring_route_uid\": \"7d70d884-90f9-40da-b763-8e118aa4e1a9\",\n            \"recurring_route_name\": \"every-weekday-route\",\n            \"duration\": {\n                \"value\": 1,\n                \"type\": \"WEEKS\"\n            },\n            \"repeat_frequency\": \"WEEKLY\",\n            \"repeat_every\": 1,\n            \"repeat_on\": {\n                \"byweekday\": [\n                    {\n                        \"weekday\": 0,\n                        \"n\": null\n                    },\n                    {\n                        \"weekday\": 1,\n                        \"n\": null\n                    },\n                    {\n                        \"weekday\": 2,\n                        \"n\": null\n                    },\n                    {\n                        \"weekday\": 3,\n                        \"n\": null\n                    },\n                    {\n                        \"weekday\": 4,\n                        \"n\": null\n                    }\n                ],\n                \"bymonth\": [],\n                \"bymonthday\": []\n            },\n            \"rrule\": \"DTSTART=20240709T043000Z;FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR;UNTIL=20240930T182900Z\",\n            \"total_routes\": 60,\n            \"route_duration\": 8,\n            \"route_start\": \"2024-07-09T14:00:00.000Z\",\n            \"route_end\": \"2024-09-30T22:00:00.000Z\",\n            \"route_type\": \"FASTEST\",\n            \"transport_mode\": \"CAR\",\n            \"enable_traffic\": false,\n            \"color\": \"#e67e22\",\n            \"start_location\": {\n                \"name\": \"Chennai\",\n                \"street\": \"Besant Nagar\",\n                \"geo_cords\": [\n                    13.0002927,\n                    80.2666982\n                ]\n            },\n            \"end_location\": {\n                \"name\": \"Egattur\",\n                \"street\": \"Old Mahabalipuram Road\",\n                \"geo_cords\": [\n                    12.8337782,\n                    80.2286669\n                ],\n                \"distance\": 0,\n                \"time\": 0\n            },\n            \"is_active\": true,\n            \"is_deleted\": false,\n            \"recurring_jobs\": [],\n            \"total_distance\": 21378,\n            \"total_time\": 3025\n        },\n        \"is_recurrence\": true,\n        \"is_locked\": false,\n        \"is_deleted\": false,\n        \"jobs\": [],\n        \"created_at\": \"2024-07-08T06:59:00.193Z\",\n        \"updated_at\": \"2024-07-08T06:59:03.533Z\",\n        \"__v\": 1,\n        \"total_distance\": 21378,\n        \"total_time\": 3025,\n        \"total_scheduled_duration\": 0,\n        \"overall_duration\": 3025\n    }\n}"
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
                        "created_by": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string",
                              "example": "1eb1d499-e8b1-4979-a04b-4b0599599529"
                            },
                            "first_name": {
                              "type": "string",
                              "example": "Ashin"
                            },
                            "last_name": {
                              "type": "string",
                              "example": "Thankachan"
                            },
                            "email": {
                              "type": "string",
                              "example": "ashin.t@zuper.co"
                            },
                            "external_login_id": {},
                            "home_phone_number": {},
                            "designation": {
                              "type": "string",
                              "example": "Admin"
                            },
                            "emp_code": {
                              "type": "string",
                              "example": "Z103"
                            },
                            "prefix": {},
                            "work_phone_number": {
                              "type": "string",
                              "example": "8301907278"
                            },
                            "mobile_phone_number": {},
                            "profile_picture": {
                              "type": "string",
                              "example": "https://s3.ap-south-1.amazonaws.com/staging.in.pro.zuper/attachments/6c287db0-ff7c-11e7-b3a8-29b417a4f3fa/d26d3dd0-0c47-11ee-b705-491517420371.jpg"
                            },
                            "hourly_labor_charge": {
                              "type": "integer",
                              "example": 120,
                              "default": 0
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "created_at": {
                              "type": "string",
                              "example": "2022-07-04T06:25:56.000Z"
                            },
                            "updated_at": {
                              "type": "string",
                              "example": "2024-09-02T09:26:10.000Z"
                            },
                            "role": {
                              "type": "object",
                              "properties": {
                                "role_id": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "role_uid": {
                                  "type": "string",
                                  "example": "504e4eac-ff7d-11e7-8be5-0ed5f89f718b"
                                },
                                "role_name": {
                                  "type": "string",
                                  "example": "Admin"
                                },
                                "role_key": {
                                  "type": "string",
                                  "example": "ADMIN"
                                },
                                "created_at": {
                                  "type": "string",
                                  "example": "2018-01-22T00:00:00.000Z"
                                },
                                "updated_at": {
                                  "type": "string",
                                  "example": "2018-01-22T00:00:00.000Z"
                                }
                              }
                            }
                          }
                        },
                        "route_uid": {
                          "type": "string",
                          "example": "1dcde262-1de0-4d8d-bb93-27e93ff53d54"
                        },
                        "route_name": {
                          "type": "string",
                          "example": "every-weekday-route-53"
                        },
                        "total_jobs": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "duration": {
                          "type": "integer",
                          "example": 8,
                          "default": 0
                        },
                        "departure": {
                          "type": "string",
                          "example": "2024-09-19T14:00:00.000Z"
                        },
                        "route_end_time": {
                          "type": "string",
                          "example": "2024-09-19T22:00:00.000Z"
                        },
                        "route_type": {
                          "type": "string",
                          "example": "FASTEST"
                        },
                        "transport_mode": {
                          "type": "string",
                          "example": "CAR"
                        },
                        "enable_traffic": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_optimized": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "color": {
                          "type": "string",
                          "example": "#e67e22"
                        },
                        "start_location": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string",
                              "example": "Chennai"
                            },
                            "street": {
                              "type": "string",
                              "example": "Besant Nagar"
                            },
                            "geo_cords": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 13.0002927,
                                "default": 0
                              }
                            }
                          }
                        },
                        "end_location": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string",
                              "example": "Egattur"
                            },
                            "street": {
                              "type": "string",
                              "example": "Old Mahabalipuram Road"
                            },
                            "geo_cords": {
                              "type": "array",
                              "items": {
                                "type": "number",
                                "example": 12.8337782,
                                "default": 0
                              }
                            },
                            "distance": {
                              "type": "integer",
                              "example": 21378,
                              "default": 0
                            },
                            "time": {
                              "type": "integer",
                              "example": 3025,
                              "default": 0
                            }
                          }
                        },
                        "assigned_to": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "user": {
                                "type": "object",
                                "properties": {
                                  "user_uid": {
                                    "type": "string",
                                    "example": "f2f5bb37-cd1b-4864-92d7-1e59c493f0bd"
                                  },
                                  "first_name": {
                                    "type": "string",
                                    "example": "Katrina"
                                  },
                                  "last_name": {
                                    "type": "string",
                                    "example": "Whale"
                                  },
                                  "email": {
                                    "type": "string",
                                    "example": "kat@gmail.com"
                                  },
                                  "external_login_id": {},
                                  "home_phone_number": {
                                    "type": "string",
                                    "example": "0988753484"
                                  },
                                  "designation": {
                                    "type": "string",
                                    "example": "Field Executive"
                                  },
                                  "emp_code": {
                                    "type": "string",
                                    "example": "1029"
                                  },
                                  "prefix": {},
                                  "work_phone_number": {
                                    "type": "string",
                                    "example": "0988753484"
                                  },
                                  "mobile_phone_number": {},
                                  "profile_picture": {
                                    "type": "string",
                                    "example": "https://i.imgur.com/phnZHKE.png"
                                  },
                                  "hourly_labor_charge": {
                                    "type": "integer",
                                    "example": 20,
                                    "default": 0
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  },
                                  "created_at": {
                                    "type": "string",
                                    "example": "2018-06-11T17:07:23.000Z"
                                  },
                                  "updated_at": {
                                    "type": "string",
                                    "example": "2024-09-04T04:15:47.000Z"
                                  },
                                  "role": {
                                    "type": "object",
                                    "properties": {
                                      "role_id": {
                                        "type": "integer",
                                        "example": 3,
                                        "default": 0
                                      },
                                      "role_uid": {
                                        "type": "string",
                                        "example": "504e52bc-ff7d-11e7-8be5-0ed5f89f718b"
                                      },
                                      "role_name": {
                                        "type": "string",
                                        "example": "Field Executive"
                                      },
                                      "role_key": {
                                        "type": "string",
                                        "example": "FIELD_EXECUTIVE"
                                      },
                                      "created_at": {
                                        "type": "string",
                                        "example": "2018-01-22T00:00:00.000Z"
                                      },
                                      "updated_at": {
                                        "type": "string",
                                        "example": "2018-01-22T00:00:00.000Z"
                                      }
                                    }
                                  }
                                }
                              },
                              "team": {
                                "type": "object",
                                "properties": {
                                  "team_uid": {
                                    "type": "string",
                                    "example": "9f620406-0a8c-430b-858d-ced59cef93a7"
                                  },
                                  "team_name": {
                                    "type": "string",
                                    "example": "Sales Team"
                                  },
                                  "team_color": {
                                    "type": "string",
                                    "example": "#4960a0"
                                  },
                                  "is_active": {
                                    "type": "boolean",
                                    "example": true,
                                    "default": true
                                  },
                                  "is_deleted": {
                                    "type": "boolean",
                                    "example": false,
                                    "default": true
                                  }
                                }
                              }
                            }
                          }
                        },
                        "recurring_route": {
                          "type": "object",
                          "properties": {
                            "recurring_route_uid": {
                              "type": "string",
                              "example": "7d70d884-90f9-40da-b763-8e118aa4e1a9"
                            },
                            "recurring_route_name": {
                              "type": "string",
                              "example": "every-weekday-route"
                            },
                            "duration": {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "type": "integer",
                                  "example": 1,
                                  "default": 0
                                },
                                "type": {
                                  "type": "string",
                                  "example": "WEEKS"
                                }
                              }
                            },
                            "repeat_frequency": {
                              "type": "string",
                              "example": "WEEKLY"
                            },
                            "repeat_every": {
                              "type": "integer",
                              "example": 1,
                              "default": 0
                            },
                            "repeat_on": {
                              "type": "object",
                              "properties": {
                                "byweekday": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "weekday": {
                                        "type": "integer",
                                        "example": 0,
                                        "default": 0
                                      },
                                      "n": {}
                                    }
                                  }
                                },
                                "bymonth": {
                                  "type": "array"
                                },
                                "bymonthday": {
                                  "type": "array"
                                }
                              }
                            },
                            "rrule": {
                              "type": "string",
                              "example": "DTSTART=20240709T043000Z;FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR;UNTIL=20240930T182900Z"
                            },
                            "total_routes": {
                              "type": "integer",
                              "example": 60,
                              "default": 0
                            },
                            "route_duration": {
                              "type": "integer",
                              "example": 8,
                              "default": 0
                            },
                            "route_start": {
                              "type": "string",
                              "example": "2024-07-09T14:00:00.000Z"
                            },
                            "route_end": {
                              "type": "string",
                              "example": "2024-09-30T22:00:00.000Z"
                            },
                            "route_type": {
                              "type": "string",
                              "example": "FASTEST"
                            },
                            "transport_mode": {
                              "type": "string",
                              "example": "CAR"
                            },
                            "enable_traffic": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "color": {
                              "type": "string",
                              "example": "#e67e22"
                            },
                            "start_location": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string",
                                  "example": "Chennai"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Besant Nagar"
                                },
                                "geo_cords": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 13.0002927,
                                    "default": 0
                                  }
                                }
                              }
                            },
                            "end_location": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string",
                                  "example": "Egattur"
                                },
                                "street": {
                                  "type": "string",
                                  "example": "Old Mahabalipuram Road"
                                },
                                "geo_cords": {
                                  "type": "array",
                                  "items": {
                                    "type": "number",
                                    "example": 12.8337782,
                                    "default": 0
                                  }
                                },
                                "distance": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "time": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                }
                              }
                            },
                            "is_active": {
                              "type": "boolean",
                              "example": true,
                              "default": true
                            },
                            "is_deleted": {
                              "type": "boolean",
                              "example": false,
                              "default": true
                            },
                            "recurring_jobs": {
                              "type": "array"
                            },
                            "total_distance": {
                              "type": "integer",
                              "example": 21378,
                              "default": 0
                            },
                            "total_time": {
                              "type": "integer",
                              "example": 3025,
                              "default": 0
                            }
                          }
                        },
                        "is_recurrence": {
                          "type": "boolean",
                          "example": true,
                          "default": true
                        },
                        "is_locked": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "is_deleted": {
                          "type": "boolean",
                          "example": false,
                          "default": true
                        },
                        "jobs": {
                          "type": "array"
                        },
                        "created_at": {
                          "type": "string",
                          "example": "2024-07-08T06:59:00.193Z"
                        },
                        "updated_at": {
                          "type": "string",
                          "example": "2024-07-08T06:59:03.533Z"
                        },
                        "__v": {
                          "type": "integer",
                          "example": 1,
                          "default": 0
                        },
                        "total_distance": {
                          "type": "integer",
                          "example": 21378,
                          "default": 0
                        },
                        "total_time": {
                          "type": "integer",
                          "example": 3025,
                          "default": 0
                        },
                        "total_scheduled_duration": {
                          "type": "integer",
                          "example": 0,
                          "default": 0
                        },
                        "overall_duration": {
                          "type": "integer",
                          "example": 3025,
                          "default": 0
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
                    "value": "{\n    \"message\": \"No job route found for the given job route UID\",\n    \"title\": \"No job route found\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "No job route found for the given job route UID"
                    },
                    "title": {
                      "type": "string",
                      "example": "No job route found"
                    },
                    "type": {
                      "type": "string",
                      "example": "error"
                    }
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