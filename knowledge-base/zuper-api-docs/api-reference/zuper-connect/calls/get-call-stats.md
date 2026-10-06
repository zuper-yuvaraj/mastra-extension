---
updatedAt: 2026-07-21T10:06:52.000Z
agentTools:
  projectIndex: https://developers.zuper.co/llms.txt
---

# Get Call Analytics

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
    "/telephony/calls/analytics/comprehensive": {
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
                      "data": {
                        "stats": {
                          "total_calls": {
                            "count": 1011,
                            "prev_percent": -6.73
                          },
                          "total_inbound": {
                            "count": 846,
                            "prev_percent": 14.95
                          },
                          "total_outbound": {
                            "count": 165,
                            "prev_percent": -52.59
                          },
                          "missed": {
                            "count": 281,
                            "prev_percent": 32.55
                          },
                          "negative_calls": {
                            "count": 0,
                            "prev_percent": 0
                          },
                          "ai_responder_calls": {
                            "count": 0,
                            "prev_percent": 0
                          },
                          "avg_talk_time": {
                            "count": 51.4516,
                            "prev_percent": -17.04
                          }
                        },
                        "calls_by_date": [
                          {
                            "date": "2025-11-30",
                            "total": 8,
                            "missed": 2,
                            "inbound": 6,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-01",
                            "total": 47,
                            "missed": 2,
                            "inbound": 44,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-02",
                            "total": 47,
                            "missed": 1,
                            "inbound": 31,
                            "outbound": 15
                          },
                          {
                            "date": "2025-12-03",
                            "total": 5,
                            "missed": 0,
                            "inbound": 5,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-04",
                            "total": 37,
                            "missed": 17,
                            "inbound": 14,
                            "outbound": 6
                          },
                          {
                            "date": "2025-12-05",
                            "total": 39,
                            "missed": 16,
                            "inbound": 22,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-06",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-07",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-08",
                            "total": 113,
                            "missed": 41,
                            "inbound": 63,
                            "outbound": 9
                          },
                          {
                            "date": "2025-12-09",
                            "total": 24,
                            "missed": 10,
                            "inbound": 11,
                            "outbound": 3
                          },
                          {
                            "date": "2025-12-10",
                            "total": 42,
                            "missed": 38,
                            "inbound": 4,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-11",
                            "total": 93,
                            "missed": 15,
                            "inbound": 40,
                            "outbound": 38
                          },
                          {
                            "date": "2025-12-12",
                            "total": 44,
                            "missed": 27,
                            "inbound": 8,
                            "outbound": 9
                          },
                          {
                            "date": "2025-12-13",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-14",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-15",
                            "total": 27,
                            "missed": 7,
                            "inbound": 20,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-16",
                            "total": 28,
                            "missed": 2,
                            "inbound": 23,
                            "outbound": 3
                          },
                          {
                            "date": "2025-12-17",
                            "total": 17,
                            "missed": 4,
                            "inbound": 12,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-18",
                            "total": 58,
                            "missed": 16,
                            "inbound": 41,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-19",
                            "total": 8,
                            "missed": 1,
                            "inbound": 4,
                            "outbound": 3
                          },
                          {
                            "date": "2025-12-20",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-21",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-22",
                            "total": 57,
                            "missed": 10,
                            "inbound": 42,
                            "outbound": 5
                          },
                          {
                            "date": "2025-12-23",
                            "total": 38,
                            "missed": 11,
                            "inbound": 20,
                            "outbound": 7
                          },
                          {
                            "date": "2025-12-24",
                            "total": 75,
                            "missed": 10,
                            "inbound": 50,
                            "outbound": 15
                          },
                          {
                            "date": "2025-12-25",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-26",
                            "total": 32,
                            "missed": 5,
                            "inbound": 26,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-27",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2025-12-28",
                            "total": 8,
                            "missed": 0,
                            "inbound": 7,
                            "outbound": 1
                          },
                          {
                            "date": "2025-12-29",
                            "total": 54,
                            "missed": 2,
                            "inbound": 25,
                            "outbound": 27
                          },
                          {
                            "date": "2025-12-30",
                            "total": 33,
                            "missed": 7,
                            "inbound": 17,
                            "outbound": 9
                          },
                          {
                            "date": "2025-12-31",
                            "total": 51,
                            "missed": 26,
                            "inbound": 23,
                            "outbound": 2
                          },
                          {
                            "date": "2026-01-01",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2026-01-02",
                            "total": 1,
                            "missed": 0,
                            "inbound": 1,
                            "outbound": 0
                          },
                          {
                            "date": "2026-01-03",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2026-01-04",
                            "total": 0,
                            "missed": 0,
                            "inbound": 0,
                            "outbound": 0
                          },
                          {
                            "date": "2026-01-05",
                            "total": 25,
                            "missed": 11,
                            "inbound": 6,
                            "outbound": 8
                          }
                        ],
                        "call_tags_distribution": {
                          "total_calls": 1011,
                          "total_tagged_calls": 31,
                          "untagged_count": 980,
                          "untagged_percent": 97,
                          "tags": [
                            {
                              "tag_uid": "6dfa9831-aa8f-4bce-b4d4-7730fce43990",
                              "tag_name": "PM1",
                              "count": 8,
                              "percentage": 1
                            },
                            {
                              "tag_uid": "5b5991cd-0344-4912-8ddb-2c20722cee76",
                              "tag_name": "Team lead",
                              "count": 6,
                              "percentage": 1
                            },
                            {
                              "tag_uid": "963690ba-21b7-43f5-92e9-4564ba35550c",
                              "tag_name": "Admin",
                              "count": 2,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "3b08ae5f-8c16-488b-83ec-3dec86e23e7a",
                              "tag_name": "PM",
                              "count": 7,
                              "percentage": 1
                            },
                            {
                              "tag_uid": "83cea64b-e21f-4ebc-bb98-e971b7fccfdd",
                              "tag_name": "super admin",
                              "count": 2,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "e8fcca97-fd14-4d06-9f08-0ff926791590",
                              "tag_name": "ft",
                              "count": 1,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "ba75c54a-2d32-4f2a-a029-87e44e85541b",
                              "tag_name": "Success",
                              "count": 1,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "19263bd2-5dcf-4338-8b1d-288e47aff04f",
                              "tag_name": "Marketing-123",
                              "count": 1,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "0e38bf94-71ca-41d6-bb71-76dc37b642fc",
                              "tag_name": "ZuperNewUPdated12",
                              "count": 1,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "a47d9346-d2c2-4886-a543-74168de99791",
                              "tag_name": "Test",
                              "count": 1,
                              "percentage": 0
                            },
                            {
                              "tag_uid": "114b474d-c97b-4778-9c85-45d267f0e10f",
                              "tag_name": "Testing",
                              "count": 1,
                              "percentage": 0
                            }
                          ]
                        },
                        "call_attributions_distribution": {
                          "total_attributed_calls": 52,
                          "attributions": [
                            {
                              "attribution_source": "OTHER",
                              "attribution_name": "Other",
                              "count": 50
                            },
                            {
                              "attribution_source": "INSTAGRAM",
                              "attribution_name": "Instagram",
                              "count": 2
                            }
                          ]
                        },
                        "calls_by_number": [
                          {
                            "number": "18023088109",
                            "number_uid": "80efa19d-a304-4150-880f-2d879b6b2282",
                            "display_name": "Mary",
                            "total_count": 873,
                            "duration_mins": 667,
                            "duration_formatted": "11h 7m",
                            "missed": 256
                          },
                          {
                            "number": "13193156488",
                            "number_uid": "0afbd6eb-be15-4a01-b059-87ed51042364",
                            "display_name": "Call Agent 1",
                            "total_count": 65,
                            "duration_mins": 27,
                            "duration_formatted": "0h 27m",
                            "missed": 2
                          },
                          {
                            "number": "16062273574",
                            "number_uid": "79b6ccf1-c9f0-4387-8fe1-5698a09d72ae",
                            "display_name": "",
                            "total_count": 30,
                            "duration_mins": 40,
                            "duration_formatted": "0h 40m",
                            "missed": 17
                          },
                          {
                            "number": "12142304782",
                            "number_uid": "e7b9c901-07f7-497b-a2cf-2203bd721b11",
                            "display_name": "Adam",
                            "total_count": 20,
                            "duration_mins": 6,
                            "duration_formatted": "0h 6m",
                            "missed": 0
                          },
                          {
                            "number": "16783471794",
                            "number_uid": "ab89203b-0ff5-47db-b0b4-ddffaff7dd29",
                            "display_name": "Call Agent Testing",
                            "total_count": 10,
                            "duration_mins": 2,
                            "duration_formatted": "0h 2m",
                            "missed": 3
                          },
                          {
                            "number": "17276063334",
                            "number_uid": "e5f62fa2-1016-42fe-a740-6d4a1793e5af",
                            "display_name": "Sinclair",
                            "total_count": 6,
                            "duration_mins": 1,
                            "duration_formatted": "0h 1m",
                            "missed": 0
                          },
                          {
                            "number": "17026033492",
                            "number_uid": "93ff4688-53e9-45b8-b1ba-f094a1476626",
                            "display_name": "Ash",
                            "total_count": 3,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 1
                          },
                          {
                            "number": "13059146369",
                            "number_uid": "8b35f7ef-a424-4c73-b7bf-d004d15cd39a",
                            "display_name": "Alita",
                            "total_count": 2,
                            "duration_mins": 1,
                            "duration_formatted": "0h 1m",
                            "missed": 0
                          },
                          {
                            "number": "12142163329",
                            "number_uid": "26ac050f-9b7f-4e13-9cb6-657ed1faec89",
                            "display_name": "Support",
                            "total_count": 2,
                            "duration_mins": 1,
                            "duration_formatted": "0h 1m",
                            "missed": 2
                          },
                          {
                            "number": "19174517569",
                            "number_uid": "a1982bed-7707-4628-80c2-600226dc2bc1",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "13303007842",
                            "number_uid": "7ae81545-2133-4959-961f-06a3a78127b4",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "14132882665",
                            "number_uid": "3c4933d4-4ec7-430e-b601-40ad9fb537f5",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17022763404",
                            "number_uid": "dac6be9b-1f05-468b-a690-f158ff8e9150",
                            "display_name": "Zuper connect",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12602124866",
                            "number_uid": "07e92de8-7833-4cc1-aef1-2a5b97e4c96c",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12812150346",
                            "number_uid": "8cccd233-b402-4a8c-9bc9-66b53a19ef2e",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17133574758",
                            "number_uid": "722c6f8a-286e-4c83-b767-1526ba666b9b",
                            "display_name": "Testing Number",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "18142973905",
                            "number_uid": "fb6d6a56-1654-41d6-9379-c2bb3c255a4c",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "18883999869",
                            "number_uid": "ec900a40-5a8e-4d9a-9759-1f2a97f835eb",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12535417355",
                            "number_uid": "9eff9319-b2ec-4429-8e28-e58eab6ba376",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17276063343",
                            "number_uid": "b60cae9b-38c5-4db2-a375-424dec1c2b2e",
                            "display_name": "Backend Testing",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "18438878973",
                            "number_uid": "b56ce49f-3b33-4ac1-9664-831cbe720d3c",
                            "display_name": "Testing Demo",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "18023088143",
                            "number_uid": "8be77831-1aab-4f76-84eb-1e7969b02d62",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "14065067455",
                            "number_uid": "5faf3ed6-4268-47be-a689-b8ce28934fc5",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "18453477942",
                            "number_uid": "352a28e7-fdf2-4f0b-8537-0d5046f51e15",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "16503708235",
                            "number_uid": "4271949b-55fb-4ba7-9241-a7788207f628",
                            "display_name": "Testing",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "14053467919",
                            "number_uid": "854da040-090b-4231-890c-69f0ed9a8f6d",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "13104945098",
                            "number_uid": "d50048e4-5ccf-447c-913f-771d684a7b65",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "13104945191",
                            "number_uid": "11c0b25c-3635-4ea9-84ad-31508098e4bb",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "13104945090",
                            "number_uid": "c32c1d19-43f7-4772-896d-3af9495f940b",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12083798670",
                            "number_uid": "9e9380ac-8a4e-4769-813c-30f9d7880f85",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "19704255785",
                            "number_uid": "7b982fff-54e0-4e96-af10-67752337f3de",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17813186915",
                            "number_uid": "45a3d96b-ccf0-4d06-8a0f-09b4004e4a3f",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17813186911",
                            "number_uid": "02dcd128-f84c-42f7-94a9-1c2296a26dbe",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "19152802565",
                            "number_uid": "b526c762-636e-4f39-a96a-d644012bdf99",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "14143874906",
                            "number_uid": "939602ba-a088-4f77-8d3c-a55390780e44",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "17373161402",
                            "number_uid": "00e275fb-d8f2-48e2-b9ef-3b9d6b9f19d1",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12394677630",
                            "number_uid": "866f49d3-3707-4d82-8dd6-cdcd19376eb7",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12394677614",
                            "number_uid": "9cc24274-d361-420a-8adc-467137118979",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12394677534",
                            "number_uid": "b6ee7b3b-3b2d-4c2a-a2ca-c3ec85b57b75",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12394677510",
                            "number_uid": "3592698e-6094-4b13-bcc9-eedd62bf870b",
                            "display_name": "",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12142163348",
                            "number_uid": "8340b4e0-2b02-4bb9-8269-a0c07cd1d9b9",
                            "display_name": "Sales",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12142168734",
                            "number_uid": "1f717a36-50ae-4a37-864b-32c1d83d4e25",
                            "display_name": "Primary",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12142168297",
                            "number_uid": "26d4b4d8-fd84-4b6b-ab15-17a9378768b5",
                            "display_name": "Zuper Test@06",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          },
                          {
                            "number": "12035800472",
                            "number_uid": "c5573067-283c-4f44-8d97-64c7967630eb",
                            "display_name": "Customer support",
                            "total_count": 0,
                            "duration_mins": 0,
                            "duration_formatted": "0h 0m",
                            "missed": 0
                          }
                        ],
                        "call_sentiment_analysis": {
                          "total_analyzed_calls": 31,
                          "positive": {
                            "count": 3,
                            "percentage": 10
                          },
                          "neutral": {
                            "count": 28,
                            "percentage": 90
                          },
                          "negative": {
                            "count": 0,
                            "percentage": 0
                          }
                        },
                        "inbound_call_analytics": {
                          "stats": {
                            "total_inbound": {
                              "count": 846,
                              "prev_percent": 14.95
                            },
                            "missed": {
                              "count": 281,
                              "prev_percent": 32.55
                            },
                            "avg_waiting_duration": {
                              "count": 9,
                              "prev_percent": 12.5
                            },
                            "avg_inbound_talk_time": {
                              "count": 60,
                              "prev_percent": -27.26
                            }
                          },
                          "calls_by_date": [
                            {
                              "date": "2025-11-30",
                              "answered": 6,
                              "missed": 2,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-01",
                              "answered": 44,
                              "missed": 2,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-02",
                              "answered": 30,
                              "missed": 1,
                              "voicemail": 1,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-03",
                              "answered": 2,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 3
                            },
                            {
                              "date": "2025-12-04",
                              "answered": 12,
                              "missed": 17,
                              "voicemail": 1,
                              "forwarded": 1
                            },
                            {
                              "date": "2025-12-05",
                              "answered": 20,
                              "missed": 16,
                              "voicemail": 2,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-06",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-07",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-08",
                              "answered": 61,
                              "missed": 41,
                              "voicemail": 2,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-09",
                              "answered": 9,
                              "missed": 10,
                              "voicemail": 2,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-10",
                              "answered": 1,
                              "missed": 38,
                              "voicemail": 3,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-11",
                              "answered": 25,
                              "missed": 15,
                              "voicemail": 15,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-12",
                              "answered": 7,
                              "missed": 27,
                              "voicemail": 1,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-13",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-14",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-15",
                              "answered": 20,
                              "missed": 7,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-16",
                              "answered": 23,
                              "missed": 2,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-17",
                              "answered": 12,
                              "missed": 4,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-18",
                              "answered": 40,
                              "missed": 16,
                              "voicemail": 1,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-19",
                              "answered": 4,
                              "missed": 1,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-20",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-21",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-22",
                              "answered": 35,
                              "missed": 10,
                              "voicemail": 7,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-23",
                              "answered": 12,
                              "missed": 11,
                              "voicemail": 8,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-24",
                              "answered": 47,
                              "missed": 10,
                              "voicemail": 3,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-25",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-26",
                              "answered": 12,
                              "missed": 5,
                              "voicemail": 14,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-27",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-28",
                              "answered": 7,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-29",
                              "answered": 24,
                              "missed": 2,
                              "voicemail": 1,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-30",
                              "answered": 16,
                              "missed": 7,
                              "voicemail": 1,
                              "forwarded": 0
                            },
                            {
                              "date": "2025-12-31",
                              "answered": 9,
                              "missed": 26,
                              "voicemail": 13,
                              "forwarded": 1
                            },
                            {
                              "date": "2026-01-01",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2026-01-02",
                              "answered": 1,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2026-01-03",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2026-01-04",
                              "answered": 0,
                              "missed": 0,
                              "voicemail": 0,
                              "forwarded": 0
                            },
                            {
                              "date": "2026-01-05",
                              "answered": 0,
                              "missed": 11,
                              "voicemail": 6,
                              "forwarded": 0
                            }
                          ],
                          "missed_call_breakdown": [
                            {
                              "reason": "NO_ANSWER",
                              "reason_label": "Not Answered",
                              "count": 2,
                              "percentage": 0.7
                            },
                            {
                              "reason": "ABANDONED",
                              "reason_label": "Abandoned",
                              "count": 256,
                              "percentage": 91.1
                            },
                            {
                              "reason": "SHORT_ABANDONED",
                              "reason_label": "Short Abandoned",
                              "count": 23,
                              "percentage": 8.2
                            }
                          ]
                        },
                        "outbound_call_analytics": {
                          "stats": {
                            "total_outbound": {
                              "count": 165,
                              "prev_percent": -52.59
                            },
                            "pickup_rate": {
                              "count": 86.7,
                              "prev_percent": -5.45
                            },
                            "avg_outbound_talk_time": {
                              "count": 23,
                              "prev_percent": -26.38
                            }
                          },
                          "calls_by_date": [
                            {
                              "date": "2025-11-30",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-01",
                              "connected": 0,
                              "busy": 1
                            },
                            {
                              "date": "2025-12-02",
                              "connected": 15,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-03",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-04",
                              "connected": 6,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-05",
                              "connected": 1,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-06",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-07",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-08",
                              "connected": 8,
                              "busy": 1
                            },
                            {
                              "date": "2025-12-09",
                              "connected": 0,
                              "busy": 3
                            },
                            {
                              "date": "2025-12-10",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-11",
                              "connected": 36,
                              "busy": 2
                            },
                            {
                              "date": "2025-12-12",
                              "connected": 9,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-13",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-14",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-15",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-16",
                              "connected": 3,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-17",
                              "connected": 1,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-18",
                              "connected": 1,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-19",
                              "connected": 2,
                              "busy": 1
                            },
                            {
                              "date": "2025-12-20",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-21",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-22",
                              "connected": 5,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-23",
                              "connected": 6,
                              "busy": 1
                            },
                            {
                              "date": "2025-12-24",
                              "connected": 15,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-25",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-26",
                              "connected": 1,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-27",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-28",
                              "connected": 1,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-29",
                              "connected": 14,
                              "busy": 13
                            },
                            {
                              "date": "2025-12-30",
                              "connected": 9,
                              "busy": 0
                            },
                            {
                              "date": "2025-12-31",
                              "connected": 2,
                              "busy": 0
                            },
                            {
                              "date": "2026-01-01",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2026-01-02",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2026-01-03",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2026-01-04",
                              "connected": 0,
                              "busy": 0
                            },
                            {
                              "date": "2026-01-05",
                              "connected": 8,
                              "busy": 0
                            }
                          ]
                        }
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
                        "stats": {
                          "type": "object",
                          "properties": {
                            "total_calls": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 1011,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "number",
                                  "example": -6.73,
                                  "default": 0
                                }
                              }
                            },
                            "total_inbound": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 846,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "number",
                                  "example": 14.95,
                                  "default": 0
                                }
                              }
                            },
                            "total_outbound": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 165,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "number",
                                  "example": -52.59,
                                  "default": 0
                                }
                              }
                            },
                            "missed": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 281,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "number",
                                  "example": 32.55,
                                  "default": 0
                                }
                              }
                            },
                            "negative_calls": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                }
                              }
                            },
                            "ai_responder_calls": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                }
                              }
                            },
                            "avg_talk_time": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "number",
                                  "example": 51.4516,
                                  "default": 0
                                },
                                "prev_percent": {
                                  "type": "number",
                                  "example": -17.04,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "calls_by_date": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "date": {
                                "type": "string",
                                "example": "2025-11-30"
                              },
                              "total": {
                                "type": "integer",
                                "example": 8,
                                "default": 0
                              },
                              "missed": {
                                "type": "integer",
                                "example": 2,
                                "default": 0
                              },
                              "inbound": {
                                "type": "integer",
                                "example": 6,
                                "default": 0
                              },
                              "outbound": {
                                "type": "integer",
                                "example": 0,
                                "default": 0
                              }
                            }
                          }
                        },
                        "call_tags_distribution": {
                          "type": "object",
                          "properties": {
                            "total_calls": {
                              "type": "integer",
                              "example": 1011,
                              "default": 0
                            },
                            "total_tagged_calls": {
                              "type": "integer",
                              "example": 31,
                              "default": 0
                            },
                            "untagged_count": {
                              "type": "integer",
                              "example": 980,
                              "default": 0
                            },
                            "untagged_percent": {
                              "type": "integer",
                              "example": 97,
                              "default": 0
                            },
                            "tags": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "tag_uid": {
                                    "type": "string",
                                    "example": "6dfa9831-aa8f-4bce-b4d4-7730fce43990"
                                  },
                                  "tag_name": {
                                    "type": "string",
                                    "example": "PM1"
                                  },
                                  "count": {
                                    "type": "integer",
                                    "example": 8,
                                    "default": 0
                                  },
                                  "percentage": {
                                    "type": "integer",
                                    "example": 1,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "call_attributions_distribution": {
                          "type": "object",
                          "properties": {
                            "total_attributed_calls": {
                              "type": "integer",
                              "example": 52,
                              "default": 0
                            },
                            "attributions": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "attribution_source": {
                                    "type": "string",
                                    "example": "OTHER"
                                  },
                                  "attribution_name": {
                                    "type": "string",
                                    "example": "Other"
                                  },
                                  "count": {
                                    "type": "integer",
                                    "example": 50,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "calls_by_number": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "number": {
                                "type": "string",
                                "example": "18023088109"
                              },
                              "number_uid": {
                                "type": "string",
                                "example": "80efa19d-a304-4150-880f-2d879b6b2282"
                              },
                              "display_name": {
                                "type": "string",
                                "example": "Mary"
                              },
                              "total_count": {
                                "type": "integer",
                                "example": 873,
                                "default": 0
                              },
                              "duration_mins": {
                                "type": "integer",
                                "example": 667,
                                "default": 0
                              },
                              "duration_formatted": {
                                "type": "string",
                                "example": "11h 7m"
                              },
                              "missed": {
                                "type": "integer",
                                "example": 256,
                                "default": 0
                              }
                            }
                          }
                        },
                        "call_sentiment_analysis": {
                          "type": "object",
                          "properties": {
                            "total_analyzed_calls": {
                              "type": "integer",
                              "example": 31,
                              "default": 0
                            },
                            "positive": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 3,
                                  "default": 0
                                },
                                "percentage": {
                                  "type": "integer",
                                  "example": 10,
                                  "default": 0
                                }
                              }
                            },
                            "neutral": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 28,
                                  "default": 0
                                },
                                "percentage": {
                                  "type": "integer",
                                  "example": 90,
                                  "default": 0
                                }
                              }
                            },
                            "negative": {
                              "type": "object",
                              "properties": {
                                "count": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                },
                                "percentage": {
                                  "type": "integer",
                                  "example": 0,
                                  "default": 0
                                }
                              }
                            }
                          }
                        },
                        "inbound_call_analytics": {
                          "type": "object",
                          "properties": {
                            "stats": {
                              "type": "object",
                              "properties": {
                                "total_inbound": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 846,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": 14.95,
                                      "default": 0
                                    }
                                  }
                                },
                                "missed": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 281,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": 32.55,
                                      "default": 0
                                    }
                                  }
                                },
                                "avg_waiting_duration": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 9,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": 12.5,
                                      "default": 0
                                    }
                                  }
                                },
                                "avg_inbound_talk_time": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 60,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": -27.26,
                                      "default": 0
                                    }
                                  }
                                }
                              }
                            },
                            "calls_by_date": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "date": {
                                    "type": "string",
                                    "example": "2025-11-30"
                                  },
                                  "answered": {
                                    "type": "integer",
                                    "example": 6,
                                    "default": 0
                                  },
                                  "missed": {
                                    "type": "integer",
                                    "example": 2,
                                    "default": 0
                                  },
                                  "voicemail": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "forwarded": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  }
                                }
                              }
                            },
                            "missed_call_breakdown": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "reason": {
                                    "type": "string",
                                    "example": "NO_ANSWER"
                                  },
                                  "reason_label": {
                                    "type": "string",
                                    "example": "Not Answered"
                                  },
                                  "count": {
                                    "type": "integer",
                                    "example": 2,
                                    "default": 0
                                  },
                                  "percentage": {
                                    "type": "number",
                                    "example": 0.7,
                                    "default": 0
                                  }
                                }
                              }
                            }
                          }
                        },
                        "outbound_call_analytics": {
                          "type": "object",
                          "properties": {
                            "stats": {
                              "type": "object",
                              "properties": {
                                "total_outbound": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 165,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": -52.59,
                                      "default": 0
                                    }
                                  }
                                },
                                "pickup_rate": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "number",
                                      "example": 86.7,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": -5.45,
                                      "default": 0
                                    }
                                  }
                                },
                                "avg_outbound_talk_time": {
                                  "type": "object",
                                  "properties": {
                                    "count": {
                                      "type": "integer",
                                      "example": 23,
                                      "default": 0
                                    },
                                    "prev_percent": {
                                      "type": "number",
                                      "example": -26.38,
                                      "default": 0
                                    }
                                  }
                                }
                              }
                            },
                            "calls_by_date": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "date": {
                                    "type": "string",
                                    "example": "2025-11-30"
                                  },
                                  "connected": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  },
                                  "busy": {
                                    "type": "integer",
                                    "example": 0,
                                    "default": 0
                                  }
                                }
                              }
                            }
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
            "in": "header",
            "name": "x-api-key",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "operationId": "post_telephony-calls-analytics-comprehensive",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "filters": {
                    "type": "object",
                    "properties": {
                      "created_at_from": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "created_at_to": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "number_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "user_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "group_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "call_route_uid": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    },
                    "required": [
                      "created_at_from",
                      "created_at_to"
                    ]
                  }
                },
                "required": [
                  "filters"
                ]
              }
            }
          }
        },
        "summary": "Get Call Analytics"
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