---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Route

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
    "/routes": {
      "post": {
        "summary": "Create Route",
        "description": "",
        "operationId": "create-route",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "route_name",
                  "departure",
                  "route_type",
                  "transport_mode",
                  "color",
                  "duration"
                ],
                "properties": {
                  "route_name": {
                    "type": "string"
                  },
                  "route_description": {
                    "type": "string"
                  },
                  "departure": {
                    "type": "string",
                    "format": "date"
                  },
                  "route_type": {
                    "type": "string",
                    "enum": [
                      "FASTEST",
                      "SHORTEST"
                    ]
                  },
                  "is_locked": {
                    "type": "boolean",
                    "default": false
                  },
                  "transport_mode": {
                    "type": "string",
                    "enum": [
                      "CAR",
                      "TRUCK",
                      "PEDESTRIAN"
                    ]
                  },
                  "start_location": {
                    "type": "object",
                    "properties": {
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "street": {
                        "type": "string"
                      },
                      "country": {
                        "type": "string"
                      },
                      "landmark": {
                        "type": "string"
                      },
                      "zip_code": {
                        "type": "string"
                      },
                      "geo_cordinates": {
                        "type": "array",
                        "items": {
                          "type": "number",
                          "format": "double"
                        }
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "phone_number": {
                        "type": "string",
                        "description": "Customer phone number"
                      },
                      "email": {
                        "type": "string",
                        "description": "Customer email"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label"
                      }
                    }
                  },
                  "end_location": {
                    "type": "object",
                    "properties": {
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "street": {
                        "type": "string"
                      },
                      "country": {
                        "type": "string"
                      },
                      "landmark": {
                        "type": "string"
                      },
                      "zip_code": {
                        "type": "string"
                      },
                      "geo_cordinates": {
                        "type": "array",
                        "items": {
                          "type": "number",
                          "format": "double"
                        }
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "phone_number": {
                        "type": "string",
                        "description": "Customer phone number"
                      },
                      "email": {
                        "type": "string",
                        "description": "Customer email"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label"
                      }
                    }
                  },
                  "color": {
                    "type": "string"
                  },
                  "duration": {
                    "type": "integer",
                    "format": "int32"
                  },
                  "enable_traffic": {
                    "type": "boolean",
                    "default": false
                  },
                  "jobs": {
                    "type": "array",
                    "items": {
                      "properties": {
                        "job_uid": {
                          "type": "string"
                        },
                        "geo_cords": {
                          "type": "array",
                          "default": [],
                          "items": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      },
                      "type": "object"
                    }
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
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "route_name": "test route",
                    "route_description": "test route_description",
                    "departure": "2024-09-19 04:48:00",
                    "route_type": "FASTEST",
                    "is_locked": false,
                    "transport_mode": "CAR",
                    "start_location": {
                      "street": "Anna University Kotturpuram ",
                      "name": "Chennai ",
                      "geo_cords": [
                        13.0132459,
                        80.2388657
                      ]
                    },
                    "end_location": {
                      "street": "",
                      "name": "Perumanna ",
                      "geo_cords": [
                        11.2451434,
                        75.8849448
                      ]
                    },
                    "color": "#3498DB",
                    "duration": 1,
                    "enable_traffic": false,
                    "jobs": [
                      {
                        "job_uid": "0a4e8600-7882-11e8-a6c8-65cb4c16f39b",
                        "geo_cords": [
                          13.0419673,
                          80.1741460000001
                        ]
                      },
                      {
                        "job_uid": "4ea148f0-785b-11e8-a7b1-352ea2f1c486",
                        "geo_cords": [
                          13.0419673,
                          80.1741460000001
                        ]
                      }
                    ],
                    "users": [
                      {
                        "user_uid": "68a51340-406a-11e8-9b20-f325a0565527",
                        "team_uid": "18cada40-021b-11e8-8127-43a5add1a9e2"
                      }
                    ]
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job route created successfully\",\n    \"title\": \"Job route created successfully\",\n    \"job_route_uid\": \"933f0174-49a1-4749-bca3-add77f863b0b\"\n}"
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
                      "example": "Job route created successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job route created successfully"
                    },
                    "job_route_uid": {
                      "type": "string",
                      "example": "933f0174-49a1-4749-bca3-add77f863b0b"
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
                    "value": "{\n    \"message\": \"Invalid route type\",\n    \"title\": \"Invalid route type\",\n    \"type\": \"error\"\n}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Invalid route type"
                    },
                    "title": {
                      "type": "string",
                      "example": "Invalid route type"
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