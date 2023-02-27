export async function GET(request: Request) {
  const responseData = {
    data: [
      {
        "id": "strategy",
        "en": "strategy",
        "phrase": "",
        "description": "",
        "sentences": [
          "Must have a {{strategy}} for it."
        ],
        "questions": [
          {
            "sentence": "Must have a {{strategy}} for it.",
            "suggestion": ["strategy", "plan", "work"]
          }
        ],
        "status": 0,
        "field": ["work"],
        "type": "noun",
        "synonyms": [],
        "feedbacks": [
          {
            "id": "f1",
            "title": "",
            "content": ""
          }
        ],
        "image": "",
        "url": ""
      }
    ]
    
  }
  return new Response(JSON.stringify(responseData))
}

export async function HEAD(request: Request) {
}

export async function POST(request: Request) {
}

export async function PUT(request: Request) {
}

export async function DELETE(request: Request) {
}

export async function PATCH(request: Request) {
}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {
}
