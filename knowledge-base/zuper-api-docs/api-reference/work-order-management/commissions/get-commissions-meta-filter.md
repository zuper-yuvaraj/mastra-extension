---
updatedAt: 2026-10-02T16:05:06.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Commissions Meta Filter

Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.

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
    "/commissions/meta/filter": {
      "get": {
        "summary": "Get Commissions Meta Filter",
        "operationId": "get-commissions-meta-filter",
        "description": "Returns the set of fields available to filter this module on, along with each field's supported operators. `fieldDataKey` values are exactly the `key` values accepted by this module's generic-filter endpoint.",
        "responses": {
          "200": {
            "description": "200",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "success"
                      ]
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "default_field",
                              "nested_field",
                              "custom_field"
                            ]
                          },
                          "displayKey": {
                            "type": "string"
                          },
                          "displayName": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "fieldType": {
                            "type": "string",
                            "enum": [
                              "TEXT",
                              "NUMBER",
                              "DATE",
                              "DECIMAL",
                              "DROPDOWN",
                              "LOOKUP"
                            ]
                          },
                          "multiSelect": {
                            "type": "boolean"
                          },
                          "fieldOptions": {
                            "type": "array",
                            "items": {
                              "type": "object"
                            }
                          },
                          "operators": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "displayKey": {
                                  "type": "string"
                                },
                                "displayValue": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "data": {
                            "type": "object",
                            "description": "Present on LOOKUP/nested fields — tells the client which API to call for typeahead options.",
                            "properties": {
                              "url": {
                                "type": "string"
                              },
                              "lazyLoad": {
                                "type": "boolean"
                              },
                              "searchParam": {
                                "type": "string"
                              },
                              "dataKey": {
                                "type": "string"
                              },
                              "bindLabel": {
                                "type": "string"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Result": {
                    "value": "{\"type\": \"success\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"commission_date\", \"displayName\": \"Commission Date\", \"fieldDataKey\": \"commission_date\", \"fieldType\": \"DATE\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"commission_amount\", \"displayName\": \"Commission Amount\", \"fieldDataKey\": \"commission_amount\", \"fieldType\": \"DECIMAL\", \"multiSelect\": false}, {\"type\": \"default_field\", \"displayKey\": \"payout_status\", \"displayName\": \"Payout Status\", \"fieldDataKey\": \"payout_status\", \"fieldType\": \"DROPDOWN\", \"multiSelect\": true}, {\"type\": \"nested_field\", \"displayKey\": \"commission_assigned_to.user_uid\", \"displayName\": \"Assigned To\", \"fieldDataKey\": \"commission_assigned_to.user_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/users\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"user_uid\", \"bindLabel\": \"name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"job_uid\", \"displayName\": \"Job\", \"fieldDataKey\": \"job_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/jobs\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"job_uid\", \"bindLabel\": \"job_title\"}}, {\"type\": \"nested_field\", \"displayKey\": \"project_uid\", \"displayName\": \"Project\", \"fieldDataKey\": \"project_uid\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/projects\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"project_uid\", \"bindLabel\": \"project_name\"}}]}"
                  }
                }
              }
            }
          }
        }
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