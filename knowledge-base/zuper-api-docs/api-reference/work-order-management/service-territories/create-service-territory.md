---
updatedAt: 2026-10-02T14:13:17.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Create Service Territory

Creates a service territory used for scheduling/dispatch and the GET /jobs filter.service_territory filter. Exactly one of territory_radius, territory_coordinates, or territory_zipcodes is expected, matching territory_type.

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
    "/territory": {
      "post": {
        "summary": "Create Service Territory",
        "description": "Creates a service territory used for scheduling/dispatch and the GET /jobs filter.service_territory filter. Exactly one of territory_radius, territory_coordinates, or territory_zipcodes is expected, matching territory_type.",
        "operationId": "create-service-territory",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "territory": {
                    "type": "object",
                    "required": [
                      "territory_name",
                      "territory_type"
                    ],
                    "properties": {
                      "territory_name": {
                        "type": "string",
                        "description": "Required. Must be unique per company (case-insensitive) — 409 \"Territory Name Already Exists\" otherwise."
                      },
                      "territory_type": {
                        "type": "string",
                        "enum": [
                          "RADIUS",
                          "GEOFENCE",
                          "ZIPCODE"
                        ],
                        "description": "Required. Determines which of territory_radius / territory_coordinates / territory_zipcodes is required."
                      },
                      "territory_description": {
                        "type": "string"
                      },
                      "territory_color": {
                        "type": "string"
                      },
                      "territory_radius": {
                        "type": "object",
                        "description": "Required when territory_type is RADIUS.",
                        "properties": {
                          "geo_cordinates": {
                            "type": "array",
                            "items": {
                              "type": "number"
                            },
                            "description": "[latitude, longitude]"
                          },
                          "radius": {
                            "type": "number"
                          }
                        }
                      },
                      "territory_coordinates": {
                        "type": "array",
                        "description": "Required when territory_type is GEOFENCE. Array of [latitude, longitude] polygon points.",
                        "items": {
                          "type": "array",
                          "items": {
                            "type": "number"
                          }
                        }
                      },
                      "territory_zipcodes": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        },
                        "description": "Required when territory_type is ZIPCODE."
                      },
                      "teams": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "team_uid": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "owners": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "user_uid": {
                              "type": "string"
                            }
                          }
                        },
                        "description": "A user with the Field Executive role cannot be an owner — 400 otherwise. The creator is auto-added as an owner unless the creator is a Field Executive."
                      }
                    }
                  }
                }
              },
              "examples": {
                "Type - Radius": {
                  "value": {
                    "territory": {
                      "territory_name": "Check 1",
                      "territory_description": "check",
                      "territory_type": "RADIUS",
                      "territory_radius": {
                        "geo_cordinates": [
                          12.9211392348233,
                          79.6710848048674
                        ],
                        "radius": 34722
                      },
                      "territory_zipcodes": [],
                      "territory_coordinates": [],
                      "teams": [
                        {
                          "team_uid": "18cada40-021b-11e8-8127-43a5add1a9e2"
                        }
                      ],
                      "owners": [
                        {
                          "user_uid": "48625036-fef6-4637-99e7-f09377a4f9ba"
                        }
                      ],
                      "territory_color": "#4960a0"
                    }
                  }
                },
                "Type - Zip code": {
                  "value": {
                    "territory": {
                      "territory_name": "Check 1",
                      "territory_description": "check",
                      "territory_type": "RADIUS",
                      "territory_radius": null,
                      "territory_zipcodes": [
                        "600028",
                        "600026"
                      ],
                      "territory_coordinates": [],
                      "teams": [
                        {
                          "team_uid": "18cada40-021b-11e8-8127-43a5add1a9e2"
                        }
                      ],
                      "owners": [
                        {
                          "user_uid": "48625036-fef6-4637-99e7-f09377a4f9ba"
                        }
                      ],
                      "territory_color": "#4960a0"
                    }
                  }
                },
                "Type - GeoFence": {
                  "value": {
                    "territory": {
                      "territory_name": "Check 1",
                      "territory_description": "check",
                      "territory_type": "RADIUS",
                      "territory_radius": null,
                      "territory_zipcodes": [],
                      "territory_coordinates": [
                        [
                          12.7983648827955,
                          79.6783395407185
                        ],
                        [
                          13.028596793892,
                          80.0450082418903
                        ]
                      ],
                      "teams": [
                        {
                          "team_uid": "18cada40-021b-11e8-8127-43a5add1a9e2"
                        }
                      ],
                      "owners": [
                        {
                          "user_uid": "48625036-fef6-4637-99e7-f09377a4f9ba"
                        }
                      ],
                      "territory_color": "#4960a0"
                    }
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
                    "value": "{\n    \"type\": \"success\",\n    \"message\": \"New Territory Created successfully\",\n    \"data\": {\n        \"territory_uid\": \"0f4ee337-85c6-472b-a0c9-f471b67f8ea5\"\n    }\n}"
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
                      "example": "New Territory Created successfully"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "territory_uid": {
                          "type": "string",
                          "example": "0f4ee337-85c6-472b-a0c9-f471b67f8ea5"
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
                    "value": "{\"type\": \"error\", \"title\": \"Mandatory data is missing\", \"message\": \"Mandatory data is missing\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "title": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "401",
            "content": {
              "application/json": {
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"error\", \"message\": \"Unauthorized Request\"}"
                  }
                },
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "example": ""
                    },
                    "message": {
                      "type": "string",
                      "example": ""
                    }
                  }
                }
              }
            }
          }
        },
        "deprecated": false,
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