---
updatedAt: 2026-06-09T06:22:19.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Clone Job Route

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
    "/routes/{route_uid}/clone": {
      "post": {
        "summary": "Clone Job Route",
        "description": "",
        "operationId": "clone-job-route",
        "parameters": [
          {
            "name": "route_uid",
            "in": "path",
            "description": "uid of route",
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
                "required": [
                  "departure"
                ],
                "properties": {
                  "departure": {
                    "type": "string",
                    "format": "date"
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
                  "route_name": {
                    "type": "string"
                  },
                  "color": {
                    "type": "string"
                  },
                  "duration": {
                    "type": "string"
                  },
                  "route_type": {
                    "type": "string",
                    "enum": [
                      "FASTEST",
                      "SHORTEST"
                    ]
                  },
                  "transport_mode": {
                    "type": "string",
                    "enum": [
                      "CAR",
                      "TRUCK",
                      "PEDESTRIAN"
                    ]
                  }
                }
              },
              "examples": {
                "Request Example": {
                  "value": {
                    "route_type": "FASTEST",
                    "transport_mode": "CAR",
                    "route_name": "every-tuesday-friday-route-21",
                    "color": "#e67e22",
                    "start_location": {
                      "street": "Besant Nagar Beach, Elliot's Promenade, Odaimanagar, Besant Nagar",
                      "name": "Chennai",
                      "geo_cords": [
                        12.9992201,
                        80.2728694
                      ]
                    },
                    "end_location": {
                      "street": "Pondicherry",
                      "name": "Puducherry",
                      "geo_cords": [
                        11.9415915,
                        79.8083133
                      ]
                    },
                    "duration": 8,
                    "departure": "2024-09-17 18:00:00"
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"Job route cloned successfully\",\n    \"title\": \"Job route cloned successfully\",\n    \"job_route_uid\": \"89b52b2a-75c8-490e-a440-439884eb6f79\"\n}"
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
                      "example": "Job route cloned successfully"
                    },
                    "title": {
                      "type": "string",
                      "example": "Job route cloned successfully"
                    },
                    "job_route_uid": {
                      "type": "string",
                      "example": "89b52b2a-75c8-490e-a440-439884eb6f79"
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