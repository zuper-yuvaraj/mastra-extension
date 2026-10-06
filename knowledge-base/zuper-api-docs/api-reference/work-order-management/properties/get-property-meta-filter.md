---
updatedAt: 2026-10-03T07:51:47.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Property Meta Filter

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
    "/property/meta/filter": {
      "get": {
        "summary": "Get Property Meta Filter",
        "operationId": "get-property-meta-filter",
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
                        "SUCCESS"
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
                          "displayKeyB2B": {
                            "type": "string"
                          },
                          "displayNameB2B": {
                            "type": "string"
                          },
                          "fieldDataKey": {
                            "type": "string",
                            "description": "The exact value to use as `key` in this module's generic-filter endpoint's filter_rules."
                          },
                          "filterOptionKey": {
                            "type": "string"
                          },
                          "fieldLabelKey": {
                            "type": "string"
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
                    "value": "{\"type\": \"SUCCESS\", \"data\": [{\"type\": \"default_field\", \"displayKey\": \"property_name\", \"displayName\": \"Property Name\", \"fieldDataKey\": \"property_name\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"property_tags\", \"displayName\": \"Tags\", \"fieldDataKey\": \"property_tags\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/company_tags?filter.module_key=PROPERTY\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"tag_uid\", \"bindLabel\": \"tag_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"property_customers\", \"displayName\": \"Customers\", \"fieldDataKey\": \"property_customers\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/customers\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"customer_uid\", \"bindLabel\": \"customer_first_name\"}}, {\"type\": \"default_field\", \"displayKey\": \"no_of_jobs\", \"displayName\": \"No. of Jobs\", \"fieldDataKey\": \"no_of_jobs\", \"fieldType\": \"NUMBER\", \"multiSelect\": false, \"operators\": [{\"displayKey\": \"GREATER_THAN\", \"displayValue\": \"Greater Than\"}, {\"displayKey\": \"LESS_THAN\", \"displayValue\": \"Less Than\"}, {\"displayKey\": \"BETWEEN\", \"displayValue\": \"Between\"}]}, {\"type\": \"nested_field\", \"displayKey\": \"property_organization\", \"displayName\": \"Organization\", \"fieldDataKey\": \"property_organization\", \"fieldType\": \"LOOKUP\", \"multiSelect\": true, \"data\": {\"url\": \"/organization\", \"lazyLoad\": true, \"searchParam\": \"filter.keyword\", \"dataKey\": \"organization_uid\", \"bindLabel\": \"organization_name\"}}, {\"type\": \"nested_field\", \"displayKey\": \"property_address.city\", \"displayName\": \"City\", \"fieldDataKey\": \"property_address.city\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"property_address.street\", \"displayName\": \"Street\", \"fieldDataKey\": \"property_address.street\", \"fieldType\": \"TEXT\", \"multiSelect\": false}, {\"type\": \"nested_field\", \"displayKey\": \"property_address.state\", \"displayName\": \"State\", \"fieldDataKey\": \"property_address.state\", \"fieldType\": \"TEXT\", \"multiSelect\": false}]}"
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