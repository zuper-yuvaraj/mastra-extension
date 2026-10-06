---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Update Route Details

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
      "put": {
        "summary": "Update Route Details",
        "description": "",
        "operationId": "update-route-details",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "route_name": {
                    "type": "string"
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
                  "departure": {
                    "type": "string",
                    "format": "date"
                  },
                  "duration": {
                    "type": "integer",
                    "format": "int32"
                  },
                  "enable_traffic": {
                    "type": "boolean"
                  },
                  "route_type": {
                    "type": "string",
                    "enum": [
                      "FASTEST",
                      "SHORTEST"
                    ]
                  },
                  "route_description": {
                    "type": "string"
                  },
                  "transport_mode": {
                    "type": "string",
                    "description": "CAR, TRUCK, PEDESTRIAN",
                    "enum": [
                      ""
                    ]
                  },
                  "can_reschedule_job": {
                    "type": "boolean"
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "route_name": "every-weekday-route-53",
                    "color": "#e67e22",
                    "route_type": "FASTEST",
                    "transport_mode": "CAR",
                    "start_location": {
                      "street": "Besant Nagar",
                      "name": "Chennai",
                      "geo_cords": [
                        13.0002927,
                        80.2666982
                      ]
                    },
                    "end_location": {
                      "street": "Old Mahabalipuram Road",
                      "name": "Egattur",
                      "geo_cords": [
                        12.8337782,
                        80.2286669
                      ]
                    },
                    "duration": 8,
                    "departure": "2024-09-19 14:00:00",
                    "can_reschedule_job": true
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job route updated successfully\",\n    \"title\": \"Job route updated successfully\",\n    \"job_route_uid\": \"1dcde262-1de0-4d8d-bb93-27e93ff53d54\"\n}"
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
                      "example": "Job route updated successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job route updated successfully"
                    },
                    "job_route_uid": {
                      "type": "string",
                      "example": "1dcde262-1de0-4d8d-bb93-27e93ff53d54"
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
        "deprecated": false,
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ]
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